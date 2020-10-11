
export class View {
    constructor(quiz) {
        this.quiz = quiz;

    }
  rendervraag(){
        let v = this.quiz.getVraag();
        this.quiz.VraagHTML.innerHTML = v.getVraag();
        this.quiz.Antwoord1.innerHTML = v.getoptie1();
        this.quiz.Antwoord2.innerHTML = v.getoptie2();
        this.quiz.Antwoord3.innerHTML = v.getoptie3();
        this.quiz.Antwoord4.innerHTML = v.getoptie4();
        this.quiz.VraagNum.innerHTML = v.getvraagnum();
    }
    startquiz(){
        this.naam = document.getElementById("input1").value;
        this.quiz.login.style.display = "none";
        this.quiz.col3.innerHTML = "Welkom <br>" + this.naam;
        this.quiz.AllRow.style.display = "block";



    }
    maakdiv() {
        this.NewDic = document.getElementById("creat");
        this.div = document.createElement('div');
        this.div.classList.add('test');
        this.NewDic.appendChild(this.div);
        document.getElementsByClassName('test');

        let vr = "Vraag : ";
        let goed = "GoedeAntwoord : ";
        this.div.innerHTML = vr;
        this.div.innerHTML += this.quiz.getvraagnr() - 1;
        this.div.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" + goed + this.quiz.Goedeantwoord();
        this.NewDic.style.display = "none";
        if (this.quiz.tell == 10) {
            this.div.innerHTML += "<br>U cijfer is " + this.quiz.cijfer + "/10";

        }
        this.NewDic.style.color="white";

    }


    endquiz(){
        document.getElementById("R3").style.display="none";
        this.quiz.center.style.display="none";
        this.quiz.Inleveren.style.display="block";





    }
    restart(){
        location.reload();
    }
    inleveren(){
        this.NewDic.style.display="block";
        this.quiz.Inleveren.parentNode.removeChild(this.quiz.Inleveren);
       document.querySelector("#restart").style.display="block";

    }

}
// Deze code is niet geluck met MVC wat i kkrijg een rare Erro
// code voor de timer
    document.querySelector("#countdown").innerHTML =
    4+ ":" + 59;
function startTimer() {
    let presentTime = document.getElementById("countdown").innerHTML;
    let timeArray = presentTime.split(/[:]+/);
    let m = timeArray[0];
    let s = checkSecond((timeArray[1] - 1));
    if(s==59){m=m-1}

    document.querySelector("#countdown").innerHTML =
        m + ":" + s;

    setTimeout(startTimer, 1000);
    if( s==0&& m==0){
        location.reload();
    }



}

function checkSecond(sec) {
    if (sec < 10 && sec >= 0) {sec = "0" + sec}; // add zero in front of numbers < 10
    if (sec < 0) {sec = "59"};
    return sec;
}
document.querySelector("#start").addEventListener("click", startTimer);


