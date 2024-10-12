import React, { useState, useRef } from "react";
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
  IonButton,
  IonButtons,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { pencilSharp, personCircle, trash } from "ionicons/icons";

const ListClient = () => {
  const { clientes, eliminarCliente } = useStorage();
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

  const ionList = useRef(null as any);

  const eliminarClienteHandler = async (id: number) => {
    await eliminarCliente(id);
  };

  // Para el Modal
  const [isOpen, setIsOpen] = useState(false);
  const [clienteSeleccionado, setClienteSeleccionado] = useState({});

  return (
    <>
      <div>
        <IonList inset={true} ref={ionList}>
          {clientes.map((cliente, index) => (
            <IonItemSliding key={index}>
              {/* Ver datos del Cliente */}
              <IonItemOptions side="start">
                <IonItemOption
                  color="primary"
                  onClick={() => {
                    setClienteSeleccionado(cliente);
                    setIsOpen(true);
                  }}
                >
                  <IonIcon slot="icon-only" icon={pencilSharp}></IonIcon>
                </IonItemOption>
              </IonItemOptions>

              <IonItem
                button
                detail={true}
                detailIcon={personCircle}
                id="present-alert"
              >
                <IonLabel>
                  <h3 key={index}>{cliente.nombre_y_apellidos}</h3>
                  <p key={index}>
                    {cliente.numero_de_telefono} | {cliente.monto_que_envia}
                  </p>
                </IonLabel>
              </IonItem>
              {/* Eliminar Cliente */}
              <IonItemOptions slot="end">
                <IonItemOption
                  color="danger"
                  expandable={true}
                  onClick={() => eliminarClienteHandler(cliente.id)}
                >
                  <IonIcon slot="icon-only" icon={trash}></IonIcon>
                </IonItemOption>
              </IonItemOptions>
            </IonItemSliding>
          ))}
        </IonList>
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Ver Datos</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <p>Nombre y Apellidos: {clienteSeleccionado.nombre_y_apellidos}</p>
            <p>Numero de Telefono: {clienteSeleccionado.numero_de_telefono}</p>
            <p>Monto que Envía: {clienteSeleccionado.monto_que_envia}</p>
            <p>Nombre del Mensajero: {clienteSeleccionado.nombre_mensajero}</p>
            <p>
              Telefono del Mensajero: {clienteSeleccionado.telefono_mensajero}
            </p>
            <p>
              Telefono del Familiar: {clienteSeleccionado.telefono_familiar}
            </p>
            <p>Nombre del Familiar: {clienteSeleccionado.nombre_familiar}</p>
            <p>Tipo de Transacción: {clienteSeleccionado.tipo_transaccion}</p>
            <p>Tipo de Moneda: {clienteSeleccionado.tipo_moneda}</p>
            <p>Numero de Tarjeta: {clienteSeleccionado.numero_tarjeta}</p>
            <p>Monto Recibido: {clienteSeleccionado.monto_recibido}</p>
          </IonContent>
        </IonModal>
      </div>
    </>
  );
};

export default ListClient;
