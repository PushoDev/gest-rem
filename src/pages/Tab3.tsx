import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";
import ConfiTest from "../components/config/ConfiTest";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="danger">
          <IonTitle>Configuración</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ConfiTest />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
