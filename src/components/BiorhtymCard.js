import { IonCard, IonCardContent, IonCardHeader, IonCardTitle } from "@ionic/react";
import dayjs from "dayjs";

function formatDate(isoString) {
    const day = dayjs(isoString);
    return day.format('D MMMM YYYY');
}

export default function BiorhthymCard({ targetDate }) {
    return (
        <IonCard className="ion-text-center">
            <IonCardHeader>
                <IonCardTitle>{formatDate(targetDate)}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                <p>Physical</p>
                <p>Emotional</p>
                <p>Intellectual</p>
            </IonCardContent>
        </IonCard>
    );
}
