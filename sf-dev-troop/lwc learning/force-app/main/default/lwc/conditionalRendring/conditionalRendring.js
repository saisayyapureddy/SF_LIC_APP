import { LightningElement } from 'lwc';

export default class ConditionalRendring extends LightningElement {
    isVisible = false;

    onCliked()
    {
        this.isVisible = true;
    }

}