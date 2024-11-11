import { LightningElement, track } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import getAccountData from '@salesforce/apex/LicController.getAccountData';


export default class LoginComponent extends NavigationMixin(LightningElement) {
    @track username;
    @track password;
    @track showError = false;

    handleInputChange(event) {
        const field = event.target.dataset.id;
        if (field === 'username') {
            this.username = event.target.value;
        } else if (field === 'password') {
            this.password = event.target.value;
        }
    }

    // Utility function to check if input is not null and not empty
    isNotEmpty(value) {
        return value !== undefined && value !== null && value.trim().length > 0;
    }

    login() {
        // Validate input fields
        if (this.isNotEmpty(this.username) && this.isNotEmpty(this.password)) {
            getAccountData({ user: this.username, password: this.password })
                .then(result => {
                    console.log('result from apex is:', result);
                    if (result) {
                    // Store individual object lists in session storage
                    sessionStorage.setItem('accountData', JSON.stringify(result.Account[0])); // Single account record
                    sessionStorage.setItem('paymentData', JSON.stringify(result.Payments));
                    sessionStorage.setItem('personalInfoData', JSON.stringify(result.PersonalInfos));
                    console.log('Account, Payment, and Personal Info data saved in session');
                    console.log('User data:', result);

                        // Attempt navigation
                        this.navigateToApp();
                    } else {
                        this.showError = true;
                        console.warn("No matching account found.");
                    }
                })
                .catch((err) => {
                    console.error('Error:', err);
                    this.handleError(err);
                })
        } else {
            this.showError = true;
            console.log("Username and password must not be empty.");
        }
    }

    // Separate method for navigation to keep logic modular
    navigateToApp() {
        try {
            this[NavigationMixin.Navigate]({
                type: 'standard__navItemPage',
                attributes: {
                    apiName: 'Main_LIC_APP'
                },
            });
        } catch (error) {
            console.error('Navigation Error:', error);
        }
    }

    // Error handler to improve code readability
    handleError(error) {
        console.error('Error:', error);
        this.showError = true;
    }
}
