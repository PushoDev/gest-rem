import { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";

const TODOS_KEY = "mis-contactos";

export function useStorage() {
  const [store, setStore] = useState<Storage>();
  const [clientes, setClientes] = useState([
    {
      nombre_y_apellidos: "",
      numero_de_telefono: "",
      monto_que_envia: 0.0,
    },
  ]);

  useEffect(() => {
    const initStorage = async () => {
      const newStorage = new Storage({
        name: "gestrem",
      });
      const store = await newStorage.create();
      setStore(store);

      const storedClientes = (await store.get(TODOS_KEY)) ?? [
        {
          nombre_y_apellidos: "",
          numero_de_telefono: "",
          monto_que_envia: 0.0,
        },
      ];
      setClientes(storedClientes);
    };
    initStorage();
  }, []);

  // Crear Cliente
  const addCliente = async (cliente) => {
    const newCliente = {
      nombre_y_apellidos: cliente.nombre_y_apellidos,
      numero_de_telefono: cliente.numero_de_telefono,
      monto_que_envia: cliente.monto_que_envia,
    };

    setClientes([...clientes, newCliente]);
    console.log(cliente);
    store?.set(TODOS_KEY, clientes);
  };

  return {
    clientes,
    addCliente,
  };
}
