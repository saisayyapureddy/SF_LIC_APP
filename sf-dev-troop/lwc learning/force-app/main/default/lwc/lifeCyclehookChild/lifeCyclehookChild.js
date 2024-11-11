import { LightningElement } from 'lwc';

export default class LifeCyclehookChild extends LightningElement {
    // whenever the component is created constructor method is the first 
    //method to be called

    /*
    flow in lifecycle hook 

    1. constructor(){}
    2.connectedCallback(){}
    3.renderedCallback(){}


    */

    

    constructor()
    {
        super()
       console.log('child constructor called');
    }

    // whenver we need to fetch the external data we can do it here
    //whenever we insert dom into component 
    connectedCallback()
    {
        console.log('child connectedCallback called');
         throw new Error('Loading of child component failed')
    }


    // whenever component re-renders all the expressions used in template are re-evaluated

    renderedCallback()
    {
        console.log('child renderedCallback called');
    }

    // when ever we need to clean up the data we can do it here
    disconnectedCallback()
    {
        alert('child component is disconnected')
        console.log('child disconnectedCallback called');
    }

}