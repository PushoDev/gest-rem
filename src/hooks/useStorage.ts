import { useState, useEffect } from "react";
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
      telefono_familiar: "",
      nombre_familiar: "",
      tipo_transaccion: "",
      tipo_moneda: "",
      numero_tarjeta: "",
      monto_recibido: "",
    },
  ]);

  const [telefono_familiar, setTelefonoFamiliar] = useState("");
  const [nombre_familiar, setNombreFamiliar] = useState("");
  const [tipo_transaccion, setTipoTransaccion] = useState("");
  const [tipo_moneda, setTipoMoneda] = useState("");
  const [numero_tarjeta, setNumeroTarjeta] = useState("");
  const [monto_recibido, setMontoRecibido] = useState("");

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
          // Mensajero que entrega
          nombre_mensajero: "",
          telefono_mensajero: "",
          // Datos familiar que recive
          telefono_familiar: "",
          nombre_familiar: "",
          tipo_transaccion: "",
          tipo_moneda: "",
          numero_tarjeta: "",
          monto_recibido: "",
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
    telefono_familiar: string;
    nombre_familiar: string;
    tipo_transaccion: string;
    tipo_moneda: string;
    numero_tarjeta: string;
    monto_recibido: string;
  }) => {
    const newCliente = {
      id: clientes.length + 1,
      nombre_y_apellidos: cliente.nombre_y_apellidos,
      numero_de_telefono: cliente.numero_de_telefono,
      monto_que_envia: cliente.monto_que_envia,

      nombre_mensajero: cliente.nombre_mensajero,
      telefono_mensajero: cliente.telefono_mensajero,
      telefono_familiar: cliente.telefono_familiar,
      nombre_familiar: cliente.nombre_familiar,
      tipo_transaccion: cliente.tipo_transaccion,
      tipo_moneda: cliente.tipo_moneda,
      numero_tarjeta: cliente.numero_tarjeta,
      monto_recibido: cliente.monto_recibido,
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
