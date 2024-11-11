import { LightningElement } from 'lwc';

export default class C2pParentComponent extends LightningElement {



    showChilCmp = false;
    msg;

    showChild()
    {
        this.showChilCmp = true
    }

    hideChild(event)
    {
        this.msg = event.detail.message;
        this.showChilCmp = false
    }

    divHandlerCalled()
    {
        console.log('div handler Called');
    }
}