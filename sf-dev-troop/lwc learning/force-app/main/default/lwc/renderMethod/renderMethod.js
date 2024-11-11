import { LightningElement } from 'lwc';
import signIn from './signIn.html';
import signUp from './signUp.html';
import renderMethod from './renderMethod.html'

export default class RenderMethod extends LightningElement {

    tempName = '';

    render()
    {
        return this.tempName === 'SignIn'? signIn :
        this.tempName === 'SignUp'? signUp :
        renderMethod;
    }

    changeHandler(event)
    {
        this.tempName = event.target.label;
        console.log(this.tempName);
    }

    changeTemp(event)
    {
       this.tempName = '';
    }
}