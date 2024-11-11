import { LightningElement, track } from 'lwc';

export default class HelloWorld extends LightningElement {

    name ='sai'
    title='LWC dev'

    //used to trak the changed element for any object and array lwc engine won't do for
    //objects and array
   @track address = {
        street: '123 Main St',
        city: 'Anytown',
        state: 'CA',
        zip: '12345'
    }

    targetHandler(event)
    {
        this.address.city = event.target.value;
    }



    changeHandler(event)
    {
        this.title = event.target.value;
    }


}