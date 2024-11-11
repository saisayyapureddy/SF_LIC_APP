import { LightningElement, track } from 'lwc';
import getUserDetails from '@salesforce/apex/UserController.getUserDetails';
import deactivateUser from '@salesforce/apex/UserController.deactivateUser';
export default class UserInfoFromMyOrg extends LightningElement {


    @track users;
    @track error;

    columns = [
        { label: 'User Name', fieldName: 'name' },
        { label: 'Last Login', fieldName: 'lastLoginDate', type: 'date' },
        { label: 'Inactive Duration (Days)', fieldName: 'inactiveDuration', type: 'number' },
        {
            type: 'button', 
            typeAttributes: {
                label: 'Deactivate',
                name: 'deactivate',
                variant: 'destructive'
            }
        }
    ];

}