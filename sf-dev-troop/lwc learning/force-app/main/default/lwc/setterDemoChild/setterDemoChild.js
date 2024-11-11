import { api, LightningElement } from 'lwc';

export default class SetterDemoChild extends LightningElement {
     users;

     @api 
     get uDetails()
     {
         return this.users;
     }

     set uDetails(data)
     {
        // if we want to modify or add the data which we recieved from  parent in child 
        // we can't add the data in the same object  we need to explicitly create
        // one reference and after we need to assign to originl 
        // below we are creating new reference using spread operator

        // spread operator have more power
       //we can create ,edit, updated new fielsds in objects easily
        
        this.users = {...data,name:'Manasa','location':'India'};
        
     }
}