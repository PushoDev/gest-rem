import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab3.css";
import ConfiTest from "../components/config/ConfiTest";
import TextConfig from "../components/config/TextConfig";

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Configuración</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <ConfiTest />
        <TextConfig />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
