import React, { useState } from "react";
import "./ListClient.css";
import { useStorage } from "../../hooks/useStorage";
import {
  IonList,
  IonItem,
  IonLabel,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
  IonIcon,
} from "@ionic/react";
import { caretForwardOutline, pencilSharp, trash } from "ionicons/icons";

const ListClient = () => {
  const { clientes } = useStorage();
  // Esto es para editar el cliente seleccionado
  const [nombre_y_apellidos, setNombre_y_apellidos] = useState("");
  const [numero_de_telefono, setNumero_de_telefono] = useState("");
  const [monto_que_envia, setMonto_que_envia] = useState("");

  console.log(clientes);

  return (
    <>
      <div>
        <IonList inset={true}>
          {clientes.map((cliente, index) => (
            <IonItemSliding key={index}>
              <IonItem button detail={true} detailIcon={caretForwardOutline}>
                <IonLabel>
                  <h3 key={index}>{cliente.nombre_y_apellidos}</h3>
                  <p key={index}>
                    {cliente.numero_de_telefono} | {cliente.monto_que_envia}
                  </p>
                </IonLabel>
              </IonItem>
              <IonItemOptions slot="end">
                <IonItemOption color="primary">
                  <IonIcon slot="icon-only" icon={pencilSharp}></IonIcon>
                </IonItemOption>
                <IonItemOption color="danger" expandable={true}>
                  <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
      </div>
    </>
  );
};

export default ListClient;
