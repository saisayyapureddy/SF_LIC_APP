import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class PaymentPage extends LightningElement {


    payments=[];
    connectedCallback(){
        this.loadDataFromsession();
    }
    loadDataFromsession()
    {
        const sessionData = sessionStorage.getItem('paymentData'); // Retrieve the data from sessionStorage
        if(sessionData)
        {
            try {
                this.payments = JSON.parse(sessionData); // Parse and assign to policyList
                console.log('Retrieved Policy List: ', this.payments);
            } catch (error) {
                console.error('Error parsing session data: ', error);
            }
        }
        else{
            this.dispatchEvent(new ShowToastEvent(),
        {
            title: 'Error',
            message: 'No account data found in sessionStorage.',
            variant: 'error'
        })
        }

    }
}