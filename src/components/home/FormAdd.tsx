import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardTitle,
  IonInput,
  IonIcon,
  IonButton,
  IonAccordion,
  IonAccordionGroup,
  IonItem,
  IonLabel,
  IonSelect,
  IonSelectOption,
  IonText,
} from "@ionic/react";
import {
  cardSharp,
  person,
  phonePortrait,
  caretDownCircle,
  sendSharp,
  warning,
} from "ionicons/icons";
import { useStorage } from "../../hooks/useStorage";
import "./FormAdd.css";

function FormAdd() {
  const { clientes, addCliente } = useStorage();
  // Datos del Formulario a llenar...
  const [nombre_y_apellidos, setNombre_y_apellidos] = useState("");
  const [numero_de_telefono, setNumero_de_telefono] = useState("");
  const [monto_que_envia, setMonto_que_envia] = useState(0.0);
  // Familiar que recive
  const [telefono_familiar, setTelefonoFamiliar] = useState("");
  const [nombre_familiar, setNombreFamiliar] = useState("");
  const [tipo_transaccion, setTipoTransaccion] = useState("");
  const [tipo_moneda, setTipoMoneda] = useState("");
  const [numero_tarjeta, setNumeroTarjeta] = useState("");
  const [monto_recibido, setMontoRecibido] = useState("");
  // Mensajero que entrega
  const [nombre_mensajero, setNombre_mensajero] = useState("");
  const [telefono_mensajero, setTelefono_mensajero] = useState("");

  // Agregar Cliente
  const createCliente = async () => {
    const newCliente = {
      id: clientes.length + 1,
      nombre_y_apellidos,
      numero_de_telefono,
      monto_que_envia,

      telefono_familiar,
      nombre_familiar,
      tipo_transaccion,
      tipo_moneda,
      numero_tarjeta,
      monto_recibido,

      nombre_mensajero,
      telefono_mensajero,
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
          <IonCardSubtitle color="primary">
            Datos del Cliente que Envía
          </IonCardSubtitle>
        </IonCardHeader>
        {/* Formulario para el Cliente */}
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
      </IonCard>

      <hr />

      <IonAccordionGroup>
        {/* Formulario para el Familiar */}
        <IonAccordion
          value="first"
          toggleIcon={caretDownCircle}
          toggleIconSlot="start"
        >
          <IonItem slot="header" color="light">
            <IonLabel color="success">Persona que Recive</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            {/* Telefono del familiar */}
            <IonInput
              label="No. de Teléfono"
              color="success"
              labelPlacement="floating"
              fill="outline"
              placeholder="Contacto de quien Recibe"
              value={telefono_familiar}
              onIonChange={(e) => setTelefonoFamiliar(e.detail.value!)}
            ></IonInput>
            <br />

            {/* Nombre y Apellidos del familiar */}
            <IonInput
              label="No. de Teléfono"
              color="success"
              labelPlacement="floating"
              fill="outline"
              placeholder="Contacto de quien Recibe"
              value={nombre_familiar}
              onIonChange={(e) => setNombreFamiliar(e.detail.value!)}
            ></IonInput>
            <br />

            {/* Acciones para el familiar */}
            <IonItem>
              <IonSelect
                placeholder="Seleccione"
                value={tipo_transaccion}
                onIonChange={(e) => setTipoTransaccion(e.detail.value!)}
              >
                <div slot="label">
                  <IonText color="success">Tipo de Transacción</IonText>
                </div>
                <IonSelectOption value="efectivo">Efectivo</IonSelectOption>
                <IonSelectOption value="transferencia">
                  Transferencia
                </IonSelectOption>
              </IonSelect>
            </IonItem>
            <br />
            {/* Encaso de Escoger, condiciones */}
            {/* opción Efectivo */}
            <IonItem>
              <IonSelect
                placeholder="Seleccione"
                value={tipo_moneda}
                onIonChange={(e) => setTipoMoneda(e.detail.value!)}
              >
                <div slot="label">
                  <IonText color="danger">Tipo de Moneda</IonText>
                </div>
                <IonSelectOption value="usd">USD</IonSelectOption>
                <IonSelectOption value="cup">CUP - MN</IonSelectOption>
              </IonSelect>
            </IonItem>
            <br />

            {/* Opción Transferencia */}
            <IonItem>
              <IonSelect
                placeholder="Seleccione"
                value={tipo_moneda}
                onIonChange={(e) => setTipoMoneda(e.detail.value!)}
              >
                <div slot="label">
                  <IonText color="danger">Tipo de Moneda</IonText>
                </div>
                <IonSelectOption value="mlc">MLC</IonSelectOption>
                <IonSelectOption value="cup">CUP - MN</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonInput
              label="Número de Tarjeta"
              color="success"
              labelPlacement="floating"
              fill="outline"
              placeholder="ingrese Número de Tarjeta"
              value={numero_tarjeta}
              onIonChange={(e) => setNumeroTarjeta(e.detail.value!)}
            ></IonInput>
            <br />

            {/* monto que Recive */}
            <IonInput
              label="Cantidad de Efectivo"
              color="success"
              labelPlacement="floating"
              fill="outline"
              placeholder="Monto que Recive"
              value={monto_recibido}
              onIonChange={(e) => setMontoRecibido(e.detail.value!)}
            ></IonInput>
            <br />
          </div>
        </IonAccordion>

        {/* Formulario para el Mensajero */}
        <IonAccordion
          value="second"
          toggleIcon={caretDownCircle}
          toggleIconSlot="start"
        >
          <IonItem slot="header" color="light">
            <IonLabel color="warning">Mensajero que Entrega</IonLabel>
          </IonItem>
          <div className="ion-padding" slot="content">
            {/* Nombre del Mensajero */}
            <IonInput
              labelPlacement="stacked"
              label="Mensajero Destinado"
              placeholder="Entregado por..."
              color="warning"
              value={nombre_mensajero}
              onIonChange={(e) => {
                if (e.detail.value !== null && e.detail.value !== undefined) {
                  setNombre_mensajero(e.detail.value);
                }
              }}
            >
              <IonIcon
                slot="start"
                color={warning}
                icon={sendSharp}
                aria-hidden="true"
              ></IonIcon>
            </IonInput>
            {/* Teléfono del Mensajero */}
            <IonInput
              labelPlacement="stacked"
              label="Teléfono del Mensajero"
              placeholder="No. de Contacto del Mensajero"
              color="warning"
              value={telefono_mensajero}
              onIonChange={(e) => {
                if (e.detail.value !== null && e.detail.value !== undefined) {
                  setTelefono_mensajero(e.detail.value);
                }
              }}
            >
              <IonIcon
                slot="start"
                color={warning}
                icon={phonePortrait}
                aria-hidden="true"
              ></IonIcon>
            </IonInput>
          </div>
        </IonAccordion>
      </IonAccordionGroup>

      {/* Botones de acciones */}
      <IonCard>
        <IonButton
          color="primary"
          shape="round"
          onClick={createCliente}
          className="ion-padding"
        >
          Agregar
        </IonButton>
        <IonButton color="danger" shape="round" className="ion-padding">
          Cancelar
        </IonButton>
      </IonCard>
    </>
  );
}
export default FormAdd;
