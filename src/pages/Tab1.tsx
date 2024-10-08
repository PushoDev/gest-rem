import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCol,
  IonGrid,
  IonRow,
  IonButtons,
  IonMenuButton,
} from "@ionic/react";
import "./Tab1.css";

import { personAddSharp } from "ionicons/icons";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="end">
            <IonMenuButton autoHide={false}></IonMenuButton>
          </IonButtons>
          <IonTitle>Operaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent color="medium" fullscreen>
        <IonHeader className="ion-padding">
          <IonTitle color="danger">
            <p>Agregar Nuevo Cliente</p>
          </IonTitle>
        </IonHeader>
        <IonGrid fixed={true}>
          <IonRow>
            <IonCol>1</IonCol>
            <IonCol>2</IonCol>
            <IonCol>3</IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
