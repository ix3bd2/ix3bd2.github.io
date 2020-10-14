import {Vraag} from "../model/Vraag.js";

export class Quiz {

    constructor() {
                // haal all de ids die je nodig hebt van html
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
        //haal de vraagNummer uit de arry
    getvraagnr(){
        return this.vragen[this.volgendevraag].nr;
    }
    //haal de vraag uit de array
    getVraag() {
        return this.vragen[this.volgendevraag];
    }
    //volgendde vraag halen uit array
    SetVolgendeVraag() {
        return (this.volgendevraag++);
    }
    //checket welke antwoord is goed
    Goedeantwoord() {
        return this.vragen[this.volgendevraag].correct;
    }
    //checket welke antwoord is goed
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
}













