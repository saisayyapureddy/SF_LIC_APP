import { LightningElement } from 'lwc';

export default class C2cModelComponent extends LightningElement {


    changeShow()
    {
        //custom event creation
        //we can pass the data with event
        const myEvent = new CustomEvent('close',{
            bubbles:true,
            detail: {
                message: 'Event created successfully!! '
            }
        });
        this.dispatchEvent(myEvent);
    }

    footerHandler()
    {
        console.log('footer Handler called')
    }
    
}