import { LightningElement } from 'lwc';

export default class Quiz_in_lwc extends LightningElement {
    // used to store the selected answers 
        IsSelected ={

        }
    
    isSubmitted = false; //dispaly the result 
    correctAnswers1 = 0; //to show the number of correct answers
    

get slectedAllqstns()
{
    return !(Object.keys(this.IsSelected).length===this.quizQuesstions.length)
}

// for applying dynamic styling to our result
get isScoredFull(){
    return `slds-text-heading_large ${this.quizQuesstions.length === this.correctAnswers1?
        'slds-text-color_success':'slds-text-color_error'}`
}
   

    quizQuesstions = [
        {
            id:'Quesstion 1',
            quesstion:'which one of the following is not a template loop?',
            answers : {
                a: 'for:each',
                b: 'iterator',
                c: 'map loop',
                d: 'none'
            },
            correctAnswer: 'c'
        },

        {
            id:'Quesstion 2',
            quesstion:'which one of the following file is invalid in LWC',
            answers : {
                a: '.svg',
                b: '.apex',
                c: '.js',
                d: 'none'
            },
            correctAnswer: 'b'
        },

        {
            id:'Quesstion 3',
            quesstion:'which one of the following is not a directive?',
            answers : {
                a: 'for:each',
                b: 'if:true',
                c: '@track',
                d: 'none'
            },
            correctAnswer: 'c'
        }
    ]
   


    //// changeHandler get's called on every click on the options
    onChangeHandler(event) {
        // Destructuring to extract name and value from event.target
        const { name, value } = event.target;
    
        // Using the spread operator to update the IsSelected object
        //Adding or updating a property with the key as the input's name and value as the input's value.
        this.IsSelected = { ...this.IsSelected, [name]: value };
    }

    submitHandler(event)
    {
      event.preventDefault();
       //filer the quiz questions to get the correct answers
       //loop through the quiz questions and check if the selected answer is correct or not.
      
       const  ans =  this.quizQuesstions.filter( item =>this.IsSelected[item.id] === item.correctAnswer) 
       this.correctAnswers1 = ans.length;
       this.isSubmitted = true;
        
    }

    resultHandler()
    { 
        this.correctAnswers1=0
        this.IsSelected={}
        this.isSubmitted=false

    }

}
