import { LightningElement } from 'lwc';

export default class LifeCyclehookParent extends LightningElement {

    // whenever the component is created constructor method is the first 
    //method to be called

    /*
    flow in lifecycle hook 

    1. constructor(){}
    2.connectedCallback(){}
    3.renderedCallback(){}


    */
   showChild =false;
    constructor()
    {
        super()
       console.log('Parent constructor called');
    }

    // whenver we need to fetch the external data we can do it here
    //whenever we insert dom into component 
    connectedCallback()
    {
        console.log('Parent connectedCallback called');
    }


    // whenever component re-renders all the expressions used in template are re-evaluated

    renderedCallback()
    {
        console.log('Parent renderedCallback called');
    }

    // when ever we need to clean up the data we can do it here
    disconnectedCallback()
    {
        alert('child component is disconnected')
        console.log('Parent disconnectedCallback called');
    }

    errorCallback(error,stack)
    {   console.log(error.message);
        console.log(stack);

    }
    

    handleClick()
    {
        this.showChild = !this.showChild;
    }

    handleClickChild()
    {
        this.showChild = !this.showChild;
        console.log('Parent handleClickChild called');
    }


}