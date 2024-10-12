import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
  IonTabBar,
} from "@ionic/react";
import "./Tab2.css";
import ListClient from "../components/clients/ListClient";
import { searchSharp } from "ionicons/icons";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle>Listado de Clientes</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <ListClient />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
