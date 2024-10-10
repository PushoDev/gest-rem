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

  return {
    cliente,
  };
}
