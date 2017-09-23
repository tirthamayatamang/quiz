
//question constructor
    var Question=function(question, answerOption, correctAns){
        this.q=question;
        this.answerOption=answerOption;
        this.correctAns=correctAns;  
    }
    
   //display question and options of answerss
    Question.prototype.getQuestion=function(){
        console.log(this.q);
        for(var i=0;i<this.answerOption.length;i++){
                console.log(i+":"+this.answerOption[i]);
        } 
    }

    //check correct Answer
    Question.prototype.checkCorrectAnswer=function(answer){
        if(answer===this.correctAns){
            console.log("correct Answer");
        }else{
            console.log("not correct");
        }
    };
    
    //create questions
    var question0=new Question("Is Javascript essential to learn to be a front-end developer?",['yes','no'],0);
    var question1=new Question("What is React?",["reaction","javascript framework","none of above"],1);

    //store questions in array
    var questionArray=[];
    questionArray=[question0,question1];

    //display random question
    var random=Math.floor(Math.random()*questionArray.length);
    questionArray[random].getQuestion();

    //prompt user to enter the answer
    var answer=parseInt(prompt("Please write the correct answer"));
    questionArray[random].checkCorrectAnswer(answer);
