import { InputChangeEventDetail, IonButton, IonInput } from "@ionic/react";
import { ChangeEvent, useState, useEffect } from "react";
import consumer from "../helpers/cable"

export const WebSocketService = () => {
    const [message, setMessage] = useState<string>('');

    // Implement useEffect to subscribe and unsubscribe from consumer
    useEffect(() => {
        const subscription = consumer.subscriptions.create({
            channel: 'ChatChannel',
        }, 
        {
            connected: () => console.log('connected'),
            disconnected: () => console.log('disconnected'),
            received: data => console.log(data),
        })
        
        // Unsubscribe on component unmount
        return () => { 
            subscription.unsubscribe()
        };
    }, []);

    const handleSubmit = () => {
        const action = {action: 'respond', data: message}

        consumer.send(
            {
                "identifier": "{\"channel\":\"ChatChannel\"}",
                "command": "message",
                "data": JSON.stringify(action)
            }
        );        
    };

    const handleInputChange = (event: InputChangeEventDetail) => {
        setMessage(event.value || '');
    };

    return (
        <div>
            <IonInput
                value={message}
                placeholder="Enter your message"
                onIonChange={(event: CustomEvent<InputChangeEventDetail>) => handleInputChange(event.detail)}
            />
            <IonButton expand="full" onClick={handleSubmit}>
            Send
            </IonButton>
      </div>
    );
};
