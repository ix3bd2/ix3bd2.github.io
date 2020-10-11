import {Vraag} from "../model/Vraag.js";

export class Quiz {

    constructor() {

        this.VraagHTML = document.querySelector("#vragen");
        this.Antwoord1 = document.querySelector("#antwoordA");
        this.Antwoord2 = document.querySelector("#antwoordB");
        this.Antwoord3 = document.querySelector("#antwoordC");
        this.Antwoord4 = document.querySelector("#antwoordD");
        this.VraagNum = document.querySelector("#R3");
        this.Inleveren = document.querySelector("#Inl");
        this.col3 = document.querySelector("#col3");
        this.login = document.querySelector("#loginforum");
        this.AllRow= document.querySelector("#AllRows");
        this.cijfer = 0;
        this.tell= 0;
        this.center = document.querySelector("#center");

        this.vragen = [];
        for (let id = 1; id <= 11; id++) {
            this.vragen.push(new Vraag(id));

        }
        this.volgendevraag = 0;
    }

    setView(view)
    {
        this.view=view;
    }
    getvraagnr(){
        return this.vragen[this.volgendevraag].nr;
}

    getVraag() {

        return this.vragen[this.volgendevraag];
    }

    SetVolgendeVraag() {

        return (this.volgendevraag++);
    }
    Goedeantwoord() {

        return this.vragen[this.volgendevraag].correct;
    }


    controleerAntwoord(answer){
        if(answer == this.Goedeantwoord()){

            this.SetVolgendeVraag();
            this.view.rendervraag();
            this.cijfer++
            this.tell++;
            this.view.maakdiv();




        }
        else if(answer != this.Goedeantwoord()){

            this.SetVolgendeVraag();
            this.view.rendervraag();
            this.tell++;
            this.view.maakdiv();


        }

        if(this.tell == 10){

                this.view.endquiz();



        }

    }
    checkSecond(sec) {
        if (sec < 10 && sec >= 0) {sec = "0" + sec};
        if (sec < 0) {sec = "59"};
        return sec;
    }
}













