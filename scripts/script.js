let minuteur = document.querySelector('.minuteur');
let nextButton = document.querySelector('.nextButton');
let tableButton = document.querySelectorAll('.table');
let exercice = document.querySelector('.exercice');
let score = 0;
let timeRemaining = 0;
let timeInterval;

tableButton.forEach((table) => {
    let tableValue = table.getAttribute('value');
    table.addEventListener('click', function() {
        let multiple = Math.ceil(Math.random()*10);
        exercice.innerHTML = tableValue+'X'+multiple;
        launchTimer();
    })
})

nextButtonButton.addEventListener("click", function() {
    score++;
});


function launchTimer(){
    if(timeRemaining > 0){
        clearInterval(timeInterval);
    }
    timeRemaining = 60;
    minuteur.innerHTML = ':60'
    function time(){
    timeRemaining--;
    console.log(timeRemaining);
    minuteur.innerHTML = ':'+timeRemaining;
    if(timeRemaining <= 0){
        clearInterval(timeInterval);
    };
};
timeInterval = setInterval(time, 1000);
};
