const userScore = {
    f1Score: 4,
    f1Bonus: 0,
    f2Score: 0,
    f3Score: 0,
    f4Score: 0,
    f5Score: 0,
    f6Score: 0,
    f7Score: 0,
    f8Score: 0,
    overallScore: 0
}
const userProgress = {
    cutProgress: 4,
    stopProgress: 4,
    followProgress: 4,
    drawProgress: 4,
    stunProgress: 4,
}
const resultCell = document.getElementsByClassName("result-cell");
for (i=0;i<resultCell.length;i++) {
    resultCell[i].onclick = cyclePot;
}


//BEEFY FUNCTION
function cyclePot() {
    if (this.classList.contains("good-pot")) {
        userScore.f1Score--;
        userScore.f1Bonus--;
        if (userProgress.cutProgress===7){
            userProgress.cutProgress--;
        }
        else if (1 < userProgress.cutProgress <= 7 ){
            userProgress.cutProgress-=2;
        }
        else if (userProgress.cutProgress <= 1) {
            userProgress.cutProgress = 1;
        }
        this.classList.remove("good-pot");
        this.classList.add("bad-pot");
        document.getElementById("f1-score").innerHTML = userScore.f1Score;
        this.nextElementSibling.innerHTML = userProgress.cutProgress;
    }
    else if (this.classList.contains("bad-pot")) {
        this.classList.remove("bad-pot");
        userProgress.cutProgress++;
        this.nextElementSibling.innerHTML = "";
    }
    else {
        this.classList.add("good-pot");
        if (userProgress.cutProgress===7){
            userProgress.cutProgress=7;
            userScore.f1Bonus++;
            console.log(userScore.f1Bonus);
        }
        else if (userProgress.cutProgress!=7){
            userProgress.cutProgress++;
        }
        userScore.f1Score++;
        userScore.f1Score += userScore.f1Bonus;
        if (userScore.f1Bonus > 0 && userScore.f1Score >= 10) {
            userScore.f1Score = 10;
            document.getElementById("f1-score").innerHTML = "10";
            this.nextElementSibling.innerHTML = userProgress.cutProgress;
        }
        else {
            document.getElementById("f1-score").innerHTML = userScore.f1Score;
            this.nextElementSibling.innerHTML = userProgress.cutProgress;
        }
    }
    updateScore();
    alert(userProgress.cutProgress)
}



function updateScore() {
    output.innerHTML = countScore(userScore.f1Score,userScore.f2Score,userScore.f3Score,userScore.f4Score,userScore.f5Score,userScore.f6Score,userScore.f7Score,userScore.f8Score);
}
function countScore(a,b,c,d,e,f,g,h) {
    return a+b+c+d+e+f+g+h;
}
const output = document.getElementById("overall-score");