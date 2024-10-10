import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonSearchbar,
} from "@ionic/react";
import "./Tab2.css";
import ListClient from "../components/clients/ListClient";
import { searchSharp } from "ionicons/icons";

const Tab2: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Listado de Clientes</IonTitle>
        </IonToolbar>
        <IonSearchbar
          searchIcon={searchSharp}
          color={"medium"}
          animated={true}
          placeholder="Búsqueda de Clientes"
        ></IonSearchbar>
      </IonHeader>
      <IonContent>
        <ListClient />
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
