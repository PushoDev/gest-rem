import React from "react";
import { IonButton, IonIcon } from "@ionic/react";
import { cloudUploadSharp, download, star } from "ionicons/icons";

const ConfiTest = () => {
  return (
    <>
      <div className="ion-padding">
        <IonButton size="small" color="danger">
          <IonIcon slot="start" icon={download}></IonIcon>
          Importar
        </IonButton>
        <IonButton size="small" color="success">
          <IonIcon slot="start" icon={cloudUploadSharp}></IonIcon>
          Exportar
        </IonButton>
      </div>
    </>
  );
};

export default ConfiTest;
