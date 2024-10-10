import { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";

// Nombre de la Tabla
const TODOS_KEY = "mis-contactos";

// Estructura de la Tabla
export function useStorage() {
  const [store, setStore] = useState<Storage>();
  const [clientes, setClientes] = useState([
    {
      id: 1,
      nombre_y_apellidos: "",
      numero_de_telefono: "",
      monto_que_envia: 0.0,
      nombre_mensajero: "",
      telefono_mensajero: "",
    },
  ]);

  useEffect(() => {
    const initStorage = async () => {
      const newStorage = new Storage({
        // Nombre de la Base de Datos
        name: "gestrem",
      });
      const store = await newStorage.create();
      setStore(store);

      const storedClientes = (await store.get(TODOS_KEY)) ?? [
        {
          id: 1,
          nombre_y_apellidos: "",
          numero_de_telefono: "",
          monto_que_envia: 0.0,

          nombre_mensajero: "",
          telefono_mensajero: "",
        },
      ];
      setClientes(storedClientes);
    };
    initStorage();
  }, []);

  // Crear Cliente
  const addCliente = async (cliente: {
    id: number;
    nombre_y_apellidos: string;
    numero_de_telefono: string;
    monto_que_envia: number;

    nombre_mensajero: string;
    telefono_mensajero: string;
  }) => {
    const newCliente = {
      id: clientes.length + 1,
      nombre_y_apellidos: cliente.nombre_y_apellidos,
      numero_de_telefono: cliente.numero_de_telefono,
      monto_que_envia: cliente.monto_que_envia,

      nombre_mensajero: cliente.nombre_mensajero,
      telefono_mensajero: cliente.telefono_mensajero,
    };

    setClientes([...clientes, newCliente]);
    console.log(cliente);
    store?.set(TODOS_KEY, clientes);
  };

  // Eliminar Cliente
  const eliminarCliente = async (id: number) => {
    const newClientes = clientes.filter((cliente) => cliente.id !== id);
    store?.set(TODOS_KEY, newClientes);
    setClientes(newClientes);
  };

  // Retornar o Devolver
  return {
    clientes,
    addCliente,
    eliminarCliente,
  };
}
