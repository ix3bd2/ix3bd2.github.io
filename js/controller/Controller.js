
import {Quiz} from "../model/quiz.js";
import {View} from "../view/View.js";

export class Controller {

    constructor() {
        this.quiz = new Quiz();
        this.view = new View(this.quiz);
        this.quiz.setView(this.view);
        document.querySelector("#start").addEventListener("click", this.startToets);
        document.querySelector("#Inl").addEventListener("click", this.renderVolgendVraag);
        document.querySelector("#antwoordA").addEventListener("click", this.controleerAntwoord);
        document.querySelector("#antwoordB").addEventListener("click", this.controleerAntwoord2);
        document.querySelector("#antwoordC").addEventListener("click", this.controleerAntwoord3);
        document.querySelector("#antwoordD").addEventListener("click", this.controleerAntwoord4);
        this.quiz.Inleveren.addEventListener('click',this.inleveren);
        document.querySelector("#restart").addEventListener('click',this.restart);

    }

    startToets = () => {
        this.view.startquiz();
        this.view.rendervraag()
    }

    renderVolgendVraag = () => {


        this.view.rendervraag();

    }

    controleerAntwoord = () => {
        this.quiz.controleerAntwoord('option1');
    }
    controleerAntwoord2 = () => {
        this.quiz.controleerAntwoord('option2');
    }
    controleerAntwoord3 = () => {
        this.quiz.controleerAntwoord('option3');
    }
    controleerAntwoord4 = () => {
        this.quiz.controleerAntwoord('option4');
    }
    inleveren = ()=> {
        this.view.inleveren();
    }
    restart = ()=> {
        this.view.restart();
    }

}



