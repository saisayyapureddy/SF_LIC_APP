import { LightningElement } from 'lwc';

export default class SlotsChildDemo extends LightningElement {
    change()
    {
        const footerElement = this.template.querySelector('.slds-card__footer');
        if(footerElement)
        {
            footerElement.classList.remove('slds-hide');
        }
    }
}