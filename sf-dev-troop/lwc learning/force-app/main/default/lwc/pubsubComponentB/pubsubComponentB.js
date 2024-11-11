import { LightningElement } from 'lwc';
import pubsub from 'c/pubsub';
export default class PubsubComponentB extends LightningElement {
    msg;

    connectedCallback()
    {
        this.subscriberrr();
    }


    subscriberrr()
    {
        pubsub.subscribe('componentA',(msg1)=>{
            this.msg = msg1;
        })
    }



}