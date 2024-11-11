import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import lic_logo from '@salesforce/resourceUrl/lic_logo';

export default class LicAPP extends NavigationMixin(LightningElement) {

    LOGO =lic_logo;

    // Handle navigation based on the action received
    handleNavigation(event) {
        const action = event.detail; // Assuming detail carries the action type
        console.log(action,'in lic app navigation');

        // Set the parameters for the Aura component based on action
        let selectedAction;
        if (action === 'account') {
            selectedAction = 'account';
        } else if (action === 'payment') {
            selectedAction = 'payment';
        } else if (action === 'documents') {
            selectedAction = 'documents';
        }

        // Navigate to the Aura component with parameters
        if (selectedAction) {
            console.log('selected action to nav to aura',selectedAction)
            this[NavigationMixin.Navigate]({
                type: 'standard__component',
                attributes: {
                    componentName: 'c__QuickActionPage' // Aura component name
                },
                state: {
                    c__selectedAction: selectedAction // Pass the selected action as a parameter
                }
            });
        }
    }
}
