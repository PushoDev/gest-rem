import React from "react";
import "./ListClient.css";
import { useStorage } from "../../hooks/useStorage";
import { IonList } from "@ionic/react";

const ListClient = () => {
  //   const { cliente } = useStorage();
  return (
    <>
      <div>
        <IonList>
          <p className="ion-padding">Aquí estarán los Clientes</p>
        </IonList>
      </div>
    </>
  );
};

export default ListClient;
