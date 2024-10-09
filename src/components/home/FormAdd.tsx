import React from "react";
import {
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonIcon,
} from "@ionic/react";
import { cardSharp, person, phonePortrait } from "ionicons/icons";

function FormAdd() {
  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle color="danger">Datos Generales del Cliente</IonCardTitle>
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
          placeholder="Cantidad de Activos que envía"
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
  );
}
export default FormAdd;
