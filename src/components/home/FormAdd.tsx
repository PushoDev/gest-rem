import React, { useState } from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { cardSharp, person, phonePortrait } from "ionicons/icons";
import { useStorage } from "../../hooks/useStorage";
import "./FormAdd.css";

function FormAdd() {
  const { clientes, addCliente } = useStorage();
  // Datos del Formulario a llenar...
  const [nombre_y_apellidos, setNombre_y_apellidos] = useState("");
  const [numero_de_telefono, setNumero_de_telefono] = useState("");
  const [monto_que_envia, setMonto_que_envia] = useState(0.0);

  // Agregar Cliente
  const createCliente = async () => {
    const newCliente = {
      nombre_y_apellidos,
      numero_de_telefono,
      monto_que_envia,
    };
    addCliente(newCliente);
  };

  return (
    <>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle color="danger">
            Datos Generales del Cliente
          </IonCardTitle>
          <IonCardSubtitle color="success">
            Datos del Cliente que Envía
          </IonCardSubtitle>
        </IonCardHeader>

        <IonCardContent>
          <IonInput
            label="Nombre y Apellidos"
            color="success"
            labelPlacement="floating"
            fill="solid"
            placeholder="Credenciales de quien Envía"
            value={nombre_y_apellidos}
            onIonChange={(e) => setNombre_y_apellidos(e.detail.value!)}
          >
            <IonIcon
              slot="start"
              color="success"
              icon={person}
              aria-hidden="true"
            ></IonIcon>
          </IonInput>
          <br />
          <IonInput
            label="Número de Teléfono"
            color="success"
            labelPlacement="floating"
            fill="solid"
            placeholder="Teléfono del Cliente"
            value={numero_de_telefono}
            onIonChange={(e) => setNumero_de_telefono(e.detail.value!)}
          >
            <IonIcon
              slot="start"
              color="success"
              icon={phonePortrait}
              aria-hidden="true"
            ></IonIcon>
          </IonInput>
          <br />
          <IonInput
            label="Monto que Envía"
            color="success"
            labelPlacement="floating"
            fill="solid"
            placeholder="0.0"
            value={monto_que_envia}
            onIonChange={(e) => {
              const value = e.detail.value;
              if (value !== null && value !== undefined) {
                setMonto_que_envia(parseFloat(value));
              }
            }}
          >
            <IonIcon
              slot="start"
              color="success"
              icon={cardSharp}
              aria-hidden="true"
            ></IonIcon>
          </IonInput>
        </IonCardContent>
      </IonCard>
      {/* Botones de acciones */}
      <IonButton
        color="primary"
        shape="round"
        className="ion-padding"
        onClick={createCliente}
      >
        Agregar
      </IonButton>
    </>
  );
}
export default FormAdd;
