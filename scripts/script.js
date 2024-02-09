let minuteur = document.querySelector('.minuteur');
let nextButton = document.querySelector('.nextButton');
let tableButton = document.querySelectorAll('.table');
let exercice = document.querySelector('.exercice');
let scoreShow = document.querySelector('.score');
let tableValue = 0;

let score = 0;
let timeRemaining = 0;
let timeInterval;

tableButton.forEach((table) => {
    table.addEventListener('click', function() {
        tableValue = table.getAttribute('value');
        nextButton.innerHTML = 'Commencer';
        exercice.style.fontSize = '8rem';
        exercice.innerHTML = 'Prêt ?';
        score = -1;
        nextButton.removeAttribute('disabled');
        scoreShow.innerHTML = 'Score : 0';
    })
})

nextButton.addEventListener("click", function() {
    if(score == -1){
        runExercice();
        nextButton.innerHTML = 'Suivant->';
    }
    score++;
    scoreShow.innerHTML = 'Score : '+score;
    console.log(tableValue);
    let order = Math.round(Math.random()*2);
    let multiple = Math.ceil(Math.random()*10);
    exercice.innerHTML = order <= 1 ? tableValue+'x'+multiple : multiple+'X'+tableValue;
});

function runExercice(){
    let order = Math.round(Math.random()*2);
    let multiple = Math.ceil(Math.random()*10);
    exercice.innerHTML = order <= 1 ? tableValue+'x'+multiple : multiple+'X'+tableValue;
    nextButton.removeAttribute('disabled');
    launchTimer();
}

function launchTimer(){
    if(timeRemaining > 0){
        clearInterval(timeInterval);
    }
    timeRemaining = 60;
    minuteur.setAttribute('style', 'color: black');
    minuteur.innerHTML = ':60'
    function time(){
    timeRemaining--;
    //console.log(timeRemaining);
    minuteur.innerHTML = ':'+timeRemaining;
    if(timeRemaining <= 10){
        minuteur.setAttribute('style', 'color: red');
    }
    if(timeRemaining <= 0){
        clearInterval(timeInterval);
        nextButton.setAttribute('disabled', '');
        exercice.style.fontSize = '5rem';
        if(score > 0){
            exercice.innerHTML = 'Bravo ! Ton score est de '+score; 
        }
        else{
            exercice.innerHTML = 'Ton score est de 0';
        }

    };
};
timeInterval = setInterval(time, 1000);
};
