import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";

export default function BiorhthymCard() {
    return (
        <IonCard>
            <IonCardHeader>
                <IonCardTitle>Results</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Physical</p>
                <p>Emotional</p>
                <p>Intellectual</p>
            </IonCardContent>
        </IonCard>
    );
}