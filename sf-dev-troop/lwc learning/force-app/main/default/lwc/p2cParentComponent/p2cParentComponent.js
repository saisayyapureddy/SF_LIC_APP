import { LightningElement } from 'lwc';

export default class P2cParentComponent extends LightningElement {

    percentage = 10;

    carosulDetails = [
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-01.jpg",
            header : "First Card",
            description : "First card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-02.jpg",
            header : "Second Card",
            description : "Second card description."
        },
        {
            src : "https://www.lightningdesignsystem.com/assets/images/carousel/carousel-03.jpg",
            header : "third Card",
            description : "third card description."
        }
    ]


    changePercentage(event)
    {
        this.percentage = event.target.value;
    }

    changeSlider(event)
    {
        this.template.querySelector('c-p2c-slider').restSlider();
    }

}