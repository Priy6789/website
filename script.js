const question = [{
    'que': "what is stands for html? ",
    'a': "hypertext markup language",
    'b': "cascading style sheet",
    'c': "hypertext perprocessor",
    'd': "hypertext server language",
    'correct': "a"
},
{
    'que': "what is  stands for css? ",
    'a': "hypertext markup language",
    'b': "cascading style sheet",
    'c': "hypertext perprocessor",
    'd': "javascript",
    'correct': "b"
},
{
    'que': "what is develop in java? ",
    'a': "1998",
    'b': "1995",
    'c': "1975",
    'd': "none of all about",
    'correct': "b"

},
{
    'que': "what is  stands for js? ",
    'a': "hypertext markup language",
    'b': "cascading style sheet",
    'c': "hypertext perprocessor",
    'd': "none of all about",
    'correct': "d"
}
]
let index = 0;
let total = question.length;
let wrong = 0, right = 0;

const quesBox = document.getElementById("quesBox");
const optionInputs = document.querySelectorAll('.options');

//load the question in dynammic broswer page
const loadQuestion = () => {

    if (index === total) {
        return endQuiz();
    }
    reset();
    const data = question[index]
    console.log(data)

// show the dynamic contetn answer in browser page

    quesBox.innerText = ` ${index + 1}) ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;

}

const submitQuiz = () => {
    const data = question[index];
    const ans = getAnswer()
    // console.log(ans, data.correct);
    if (ans == data.correct) {
        right++;
    }
    else {
        wrong++;
    }
    index++;
    loadQuestion();
    return input.value;
}
//submit the answer of question in  
const getAnswer = () => {
  let answer;
    optionInputs.forEach(
        (input) => {
            if (input.checked) {

                answer = input.value;
            }
        }
    )
    return answer;
}

// reset the page
const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}
// this is use show the of endquiz and show the result
const endQuiz = () => {
    document.getElementById("box").innerHTML = `<h3 > Thanks for playing  the Quiz </h3>
    <h2>Your Score is : ${right} / ${total} Are Correct</h2> `;
}
//initial call
loadQuestion();