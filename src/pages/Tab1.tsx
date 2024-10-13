import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import "./Tab1.css";

import FormAdd from "../components/home/FormAdd";

const Tab1: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>Operaciones</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <FormAdd />
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
