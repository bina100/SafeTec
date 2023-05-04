let score = 0;
let counter = 0;

function init() {
    creatQwestion();
    updateUi();
}
function creatQwestion() {

    if (counter > trivia_ar.length - 1) {
        let div = document.createElement("div")
        document.querySelector("#id_parent").append(div);
        div.innerHTML = `המשחק הסתיים! <br><br> מספר הנקודות שצברת: ` + score +
            ` <br><button style="color: #3679dc;
                background: white;
                border: none;
                padding:4px 16px;
                border-radius: 25px;" 
                class="restart mt-5">התחל מחדש</button>`

        div.style.color = `white`
        div.style.fontSize = `1.8em`

        document.querySelector(".h5").innerHTML = ""
        document.querySelector(".question").innerHTML = ``
        document.querySelector(".h4").classList.add(`d-none`);

        let btnRestart = div.querySelector(".restart");
        btnRestart.addEventListener("click", function () {
            document.querySelector("#id_parent").innerHTML = "";

            counter = 0;
            score = 0;
            qItem = trivia_ar[counter];
            addSingleQuestion(qItem.question, qItem.answers, qItem.correctAnswer);

            document.querySelector(".h4").classList.remove(`d-none`);
            counter++;
        })
        // יעצור את הפונקציה ולא יתן להמשיך
        return;
    }
    document.querySelector("#id_parent").innerHTML = "";
    qItem = trivia_ar[counter];
    addSingleQuestion(qItem.question, qItem.answers, qItem.correctAnswer);
    counter++;
}

function successAnswer() {
    document.querySelector(".h5").innerHTML = ""
    score += 20;
    updateUi();
    creatQwestion();
}

function failAnswer() {
    document.querySelector(".h5").innerHTML = ""
    updateUi();
    creatQwestion();
}

function updateUi() {
    document.querySelector("#id_score").innerHTML = score;
}

init();