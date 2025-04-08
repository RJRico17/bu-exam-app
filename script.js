const f1Score = 4, f2Score = 4, f3Score = 4, f4Score = 4, f5Score = 4, f6Score = 0, f7Score = 0, f8Score = 0;
const overallScore = 0;
const resultCell = document.getElementsByClassName("result-cell");
for (i=0;i<resultCell.length;i++) {
    resultCell[i].onclick = cyclePot;
}
function cyclePot() {
    updateScore();
    if (this.classList.contains("good-pot")) {
        this.classList.remove("good-pot");
        this.classList.add("bad-pot");
    }
    else if (this.classList.contains("bad-pot")) {
        this.classList.remove("bad-pot");
    }
    else {
        this.classList.add("good-pot");
    }
}
function updateScore() {
    output.innerHTML = countScore(f1Score,f2Score,f3Score,f4Score,f5Score,f6Score,f7Score,f8Score);
}
function countScore(a,b,c,d,e,f,g,h) {
    return a+b+c+d+e+f+g+h;
}
const output = document.getElementById("overall-score");