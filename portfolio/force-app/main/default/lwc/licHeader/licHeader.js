import { LightningElement, track, wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class LicHeader extends NavigationMixin(LightningElement) {
    @track showModal = false;
    @track personInfo = {};

    connectedCallback() {
        this.loadDataFromSession();
    }

    loadDataFromSession() {
        const sessionData = sessionStorage.getItem('personalInfoData'); // Retrieve the data from sessionStorage
        console.log('Session Data in Lic Header:', sessionData);

        if (sessionData) {
            try {
                // Parse the session data
                const parsedData = JSON.parse(sessionData);

                // Check if parsedData is an array, and use the first item if so
                if (Array.isArray(parsedData) && parsedData.length > 0) {
                    this.personInfo = { ...parsedData[0] };
                } else if (typeof parsedData === 'object') {
                    this.personInfo = { ...parsedData };
                } else {
                    this.showToast('No valid personal info data found in sessionStorage.', 'warning');
                }

                console.log('Retrieved Personal Info:', this.personInfo);
            } catch (error) {
                console.error('Error parsing session data:', error);
                this.showToast('Error loading personal info data from sessionStorage.', 'error');
            }
        } else {
            this.showToast('No personal info data found in sessionStorage.', 'error');
        }
    }

    profileHandler() {
        this.showModal = true;
        this.loadDataFromSession();
    }

    closeModal() {
        this.showModal = false;
    }

    logoutHandler() {
        sessionStorage.removeItem('isLoggedIn');

        const evt = new ShowToastEvent({
            title: 'Logged Out',
            message: 'You have successfully logged out',
            variant: 'success'
        });
        this.dispatchEvent(evt);

        // Navigate to Home page
        this[NavigationMixin.Navigate]({
            type: 'standard__navItemPage',
            attributes: {
                apiName: 'LIC_App' // Use your app's API name here
            },
        });

        // Attempt to close the current tab by navigating to a blank page
        window.open('', '_self'); // This effectively refreshes the current tab
        window.close(); // Try to close the tab
    }

    showToast(message, variant) {
        const evt = new ShowToastEvent({
            title: 'Session Data Notice',
            message: message,
            variant: variant,
        });
        this.dispatchEvent(evt);
    }
}
