import { LightningElement } from 'lwc';

export default class Looping extends LightningElement {
    carsList = ['Audi','benz','Mahindra', 'Maruti', 'Toyota'];

    ceoList = [
        {
            id:1,
            company:'Apple',
            name:'Tim cook',
            title:'CEO'
        },
        {
            id:2,
            company:'Microsoft',
            name:'Bill gates',
            title:'CEO'
        },
        {
            id:3,
            company:'Facebook',
            name:'Mark Zuckerberg',
            title:'CEO'
        },
    ]

   
}