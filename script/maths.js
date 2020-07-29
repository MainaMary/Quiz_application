document.getElementById('result').innerHTML = localStorage.getItem('dropdownValue');
console.log(localStorage.getItem('dropdownValue'));




const techQuestions = [
    {
        question: "Q1. What is 100 divide by 20?",
        answers: {
            A: '10',
            B: '50',
            C: '5'
        },
        correctAnswer: 'C'
    },
    {
        question: "Q2.  'what is a right-angled rhombus called? ",
        answers: {
            A: 'Square',
            B: 'Rectangle',
            C: 'No idea'
        },
        correctAnswer: 'A'
    },
    {
        question: "Q3. circles sharing the same centre are called?",
        answers: {
            A: 'Circumfrence',
            B: 'Concetric',
            C: 'ball'
        },
        correctAnswer: 'B'
    },
    {
        question: "Q4. 'what kind of motion does a pendulum exhibit? ",
        answers: {
            A: 'relative',
            B: 'rotational',
            C: 'Simple harmonic'
        },
        correctAnswer: 'C'
    },
    {
        question: "Q5.  A straight Line touching a circle is called ?",
        answers: {
            A: 'Cone',
            B: 'Tangent',
            C: 'Equidistant',
            D: 'Point'
        },
        correctAnswer: 'B'
    }
];

const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');

generateQuiz(techQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultsContainer, submitButton){

    function showQuestions(questions, quizContainer){
        // we'll need a place to store the output and the answer choices
        const output = [];
        let answers;

        // for each question...
        for(let i=0; i<questions.length; i++){
            
            // first reset the list of answers
            answers = [];

            // for each available answer...
            for(letter in questions[i].answers){

                // ...add an html radio button
                answers.push(
            
              `<label>
              <input type="radio" name="question${i}" value="${letter}">
              ${letter} :
              ${questions[i]. answers[letter]}
            </label>`
                  
                );
            }

            // add this question and its answers to the output
            output.push(
            
             `<div class="question"> ${questions[i].question} </div>
              <div class="answers"> ${answers.join('')} </div>`

                // 
            );
        }

        // finally combine our output list into one string of html and put it on the page
        quizContainer.innerHTML = output.join('');
    }


    function showResults(questions, quizContainer, resultsContainer){
        
        // gather answer containers from our quiz
         const answerContainers = quizContainer.querySelectorAll('.answers');
        
        // keep track of user's answers
        let userAnswer = '';
        let  numberCorrect = 0;
        
        // for each question...
        for(var i=0; i<questions.length; i++){

            // find selected answer
            //userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
            userAnswer = (answerContainers[i].querySelector(`input[name=question${i}]:checked`)||{}).value;
            
           
            
            // if answer is correct
            if(userAnswer===questions[i].correctAnswer){
                // add to the number of correct answers
                numberCorrect++;
                
                // color the answers green
                answerContainers[i].style.color = 'lightgreen';
            }
            // if answer is wrong or blank
            else{
                // color the answers red
                answerContainers[i].style.color = 'red';
            }
        }

        // show number of correct answers out of total
       resultsContainer.innerHTML = `${numberCorrect}  out of  ${questions.length}`;
    }

    // show questions right away
    showQuestions(questions, quizContainer);
    
    // on submit, show results
    
    submitButton.addEventListener('click', ()=>{
        showResults(questions, quizContainer, resultsContainer);
    })

}