import { api, LightningElement } from 'lwc';

export default class P2cSlider extends LightningElement {
    val =10;


    chnageHandler(event)
    {
        this.val = event.target.value;
        
    }

   @api restSlider()
    {
        this.val=50;
    }


}