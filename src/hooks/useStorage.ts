import { useEffect, useState } from "react";
import { Storage } from "@ionic/storage";

const TODOS_KEY = "mis-contactos";

export function useStorage() {
  const [store, setStore] = useState<Storage>();
  const [cliente, setCliente] = useState({
    nombre_y_apellidos: "",
    numero_de_telefono: "",
    monto_que_envia: "",
  });

  useEffect(() => {
    const initStorage = async () => {
      const newStorage = new Storage({
        name: "gestrem",
      });
      const store = await newStorage.create();
      setStore(store);

      const storedCliente = (await store.get(TODOS_KEY)) || {
        nombre_y_apellidos: "",
        numero_de_telefono: "",
        monto_que_envia: "",
      };
      setCliente(storedCliente);
    };
    initStorage();
  }, []);

  const agregarCliente = async (cliente: any) => {
    const storedClientes = await store.get(TODOS_KEY);
    if (storedClientes) {
      storedClientes.push(cliente);
    } else {
      storedClientes = [cliente];
    }
    await store.set(TODOS_KEY, storedClientes);
    setCliente(cliente);
  };

  return {
    cliente,
    agregarCliente,
  };
}
