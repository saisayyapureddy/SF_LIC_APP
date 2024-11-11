import { LightningElement } from 'lwc';
import pubsub from  'c/pubsub';

export default class PubsubComponentA extends LightningElement {
    message;

    inputHandler(event)
    {
        this.message = event.target.value;
    }
    btnfromA(event)
    {
        //we are publishing event with some data, here message 
        pubsub.publish('componentA',this.message);
    }

}