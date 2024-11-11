import { LightningElement, track } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class MainContent extends LightningElement {
    @track accountInfo=[]
    @track error;

    connectedCallback() {
        this.loadDataFromSession();
    }

    loadDataFromSession() {
        // Retrieve each data type from sessionStorage
        try {
            const accountData = sessionStorage.getItem('accountData');
            console.log('account data in main component:', JSON.stringify(accountData));
            // Parse and assign to respective variables
            if (accountData) {
                this.accountInfo = [JSON.parse(accountData)];
                console.log('Parsed Account Info as Array:', JSON.stringify(this.accountInfo));
            } else {
                this.showToast('No account data found in sessionStorage.', 'error');
            }

        } catch (error) {
            console.error('Error parsing session data:', error);
            this.showToast('Error loading session data.', 'error');
        }
    }

    showToast(message, variant) {
        const evt = new ShowToastEvent({
            title: 'Session Data Error',
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }

    navigateTo(action) {
        console.log(action,'in nav')
        const navigateEvent = new CustomEvent('navigate', { detail: action });
        this.dispatchEvent(navigateEvent);
    }

    handleButtonClick(event) {
        const action = event.target.dataset.action;
        console.log('action name in main component ',action);
        this.navigateTo(action);
    }
}
