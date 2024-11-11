import { LightningElement,wire } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class PersonalInformation extends LightningElement {

    personInfo = [];

    connectedCallback(){
        this.loadDataFromsession();
    }
    loadDataFromsession()
    {
        const sessionData = sessionStorage.getItem('personalInfoData'); // Retrieve the data from sessionStorage
        if(sessionData)
        {
            try {
                this.personInfo = JSON.parse(sessionData); // Parse and assign to policyList
                console.log('Retrieved Policy List: ', this.personInfo);
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