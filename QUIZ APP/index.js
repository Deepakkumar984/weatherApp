var quizdata = [{
        'question': "which language is used in web browser?",
        'a': "java",
        'b': "c++",
        'c': "python",
        'd': "javascript",
        'correct': "b",
    },
    {
        'question': "which language famous for frontend? ",
        'a': "java",
        'b': "react",
        'c': "python",
        'd': "javascript",
        'correct': "b",
    },
    {
        'question': "what does CSS stand for? ",
        'a': "central style sheet",
        'b': "cascading style sheet",
        'c': "cascading star sheet",
        'd': "central star sheet",
        'correct': "b",
    },
    {
        'question': "what does JS stand for? ",
        'a': "javashoot",
        'b': "jasscript",
        'c': "juniorsheet",
        'd': "javascript",
        'correct': "d",
    },
]

var index = 0;
var total = quizdata.length;
var right = 0;
var wrong = 0;
var qbox = document.getElementById("heading");
var ansbox = document.querySelectorAll(".option");
const loadquestion = () => {
    if (index === total) {
        return endquiz()
    }
    reset();
    var data = quizdata[index];
    qbox.innerText = `${index+1} ) ${data.question}`;
    ansbox[0].nextElementSibling.innerHTML = data.a;
    ansbox[1].nextElementSibling.innerHTML = data.b;
    ansbox[2].nextElementSibling.innerHTML = data.c;
    ansbox[3].nextElementSibling.innerHTML = data.d;
}

const subquiz = () => {
    var data = quizdata[index];
    var ans = getans()
    if (ans === data.correct) {
        right++;
    } else {
        wrong++;
    }
    index++;
    loadquestion();
    return;
}

const getans = () => {
    let answer;
    ansbox.forEach((input) => {
        if (input.checked) {
            answer = input.value;
            return input.Value;
            // console.log(input.value)
        }
    })
    return answer;
}

const reset = () => {
    ansbox.forEach((input) => {
        input.checked = false;
    })
}

const endquiz = () => {
    document.getElementById("container").innerHTML =
        `<h3 style="text-align: center;"> THANK YOU FOR PLAYING QUIZ </h3>
        <h2 style="text-align: center;"> ${right}/${total} are correct </h2>
        `
}
loadquestion();