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
  IonCard,
  IonCardTitle,
  IonCardContent,
} from "@ionic/react";
import { clipboardSharp, eyeSharp, trash } from "ionicons/icons";

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
                  <IonIcon slot="icon-only" icon={eyeSharp}></IonIcon>
                </IonItemOption>
              </IonItemOptions>

              <IonItem
                button
                detail={true}
                detailIcon={clipboardSharp}
                id="present-alert"
              >
                <IonLabel>
                  <p>Nombre del Cliente</p>
                  <h3 key={index}>{cliente.nombre_y_apellidos}</h3>
                  <p>Número de Teléfono | Envió</p>
                  <h3 key={index}>
                    {cliente.numero_de_telefono} | $ {cliente.monto_que_envia}
                    .00
                  </h3>
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
              <IonTitle>Detalles del Cliente</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)} color={"success"}>
                  Aceptar
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            {/* Cliente que Envía */}
            <IonCard>
              <IonCardTitle className="ion-padding">
                Cliente que Envía
              </IonCardTitle>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonLabel>
                      <p>Nombre y Apellidos</p>
                      <h2>{clienteSeleccionado.nombre_y_apellidos}</h2>
                    </IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonLabel>
                      <p>Número de Contacto</p>
                      <h2>{clienteSeleccionado.numero_de_telefono}</h2>
                    </IonLabel>
                  </IonItem>

                  <IonItem>
                    <IonLabel>
                      <p>Monto que Envía</p>
                      <h2>${clienteSeleccionado.monto_que_envia}.00</h2>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
            {/* Cliente que Recive */}
            <IonCard>
              <IonCardTitle className="ion-padding">
                Persona que Recive
              </IonCardTitle>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonLabel>
                      <p>Nombre del Familiar: </p>
                      <h2>{clienteSeleccionado.nombre_familiar}</h2>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      <p>Telefono del Familiar: </p>
                      <h2>{clienteSeleccionado.telefono_familiar}</h2>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      <p>Tipo de Transacción: </p>
                      <h2>{clienteSeleccionado.tipo_transaccion}</h2>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      <p>Monto Recibido:</p>
                      <h2>{clienteSeleccionado.monto_recibido}</h2>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      <p>Tipo de Moneda: </p>
                      <h2>{clienteSeleccionado.tipo_moneda}</h2>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      <p>Numero de Tarjeta:</p>
                      <h2> {clienteSeleccionado.numero_tarjeta}</h2>
                    </IonLabel>
                  </IonItem>
                </IonList>
              </IonCardContent>
            </IonCard>
            {/* Mensajero que Entrega */}
            <IonCard>
              <IonCardTitle className="ion-padding">
                Mensajero que Entrega
              </IonCardTitle>
              <IonCardContent>
                <IonList>
                  <IonItem>
                    <IonLabel>
                      <p>Nombre del Mensajero: </p>
                      <h2>{clienteSeleccionado.nombre_mensajero}</h2>
                    </IonLabel>
                  </IonItem>
                  <IonItem>
                    <IonLabel>
                      <p>Telefono del Mensajero: </p>
                      <h2>{clienteSeleccionado.telefono_mensajero}</h2>
                    </IonLabel>
                  </IonItem>
                </IonList>
                <p></p>
                <p></p>
                <p></p>
              </IonCardContent>
            </IonCard>
          </IonContent>
        </IonModal>
      </div>
    </>
  );
};

export default ListClient;
