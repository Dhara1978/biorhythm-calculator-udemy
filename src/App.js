import { 
  IonApp, 
  IonContent, 
  IonHeader, 
  IonInput, 
  IonItem, 
  IonLabel,
  IonList,
  IonTitle, 
  IonToolbar } from '@ionic/react';
import { useState } from 'react'

function getToday() {
  return new Date().toISOString().slice(0, 'yyyy-mm-dd'.length)
}

function App() {
const [birthDate, setBirthDate] = useState('');
const [targetDate, setTargetDate] = useState(getToday);
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Biorhythms</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonList>
          <IonItem>
            <IonLabel position="floating">Date of Birth:</IonLabel>
            <IonInput type="date" value={birthDate} 
            onIonChange={(event) => setBirthDate(event.detail.value)} 
            />
          </IonItem>
          <IonItem>
            <IonLabel position="floating">Target Date:</IonLabel>
            <IonInput type="date" value={targetDate} 
            onIonChange={(event) => setTargetDate(event.detail.value)} 
            />
          </IonItem>
        </IonList>
        <p>Born on <b>{birthDate}</b>, target date is <b>{targetDate}</b></p>
      </IonContent>
    </IonApp>
  );
}

export default App;
