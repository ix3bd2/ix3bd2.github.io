 export class Vraag{
    constructor(id) {
        this.nr = id;
        this.getal1 = Math.ceil(Math.random() * 100);
        this.getal2 = Math.ceil(Math.random() * 100);
        this.operator = "+";
        this.option1 = Math.ceil(Math.random() * 100)+4;
        this.option2 = Math.ceil(Math.random() * 100)+3;
        this.option3 = Math.ceil(Math.random() * 100)+2;
        this.option4 = Math.ceil(Math.random() * 100)+1;
        this.som = this.getal1 + this.getal2;
        this.min = this.getal1 - this.getal2;
        this.count = this.nr;
        if (this.nr >= 6) {
            this.operator = "-";
            this.option1 = Math.ceil(Math.random() * 10)+1 +this.min;
            this.option2 = Math.ceil(Math.random() * 10)+5+this.min;
            this.option3 = Math.ceil(Math.random() * 10)+10+this.min;
            this.option4 = Math.ceil(Math.random() * 10)+8+this.min;
        }


        this.options=[this.option1,this.option2,this.option3,this.option4];
        this.option= this.options[ Math.floor( Math.random()* this.options.length)];
        if(this.option == this.option1){
            this.correct= "option1";
            if(this.nr <6){
                this.option1=this.som;

            }
            else
            this.option1=this.min;
        }
        if(this.option == this.option2){
            this.correct= "option2";
            if(this.nr <6){
                this.option2=this.som;

            }
            else
                this.option2=this.min;
        }
        if(this.option == this.option3){
            this.correct= "option3";
            if(this.nr <6){
                this.option3=this.som;

            }
            else

                this.option3=this.min;

        }
        if(this.option == this.option4){
            this.correct= "option4";
            if(this.nr <6){
                this.option4=this.som;

            }
            else
                this.option4=this.min;

        }
    }


    getVraag()
    {
        return `${this.getal1} ${this.operator} ${this.getal2} `;
    }
    getoptie1()
    {
        return `${this.option1}`;
    }
     getoptie2()
     {
         return `${this.option2}`;
     }
     getoptie3()
     {
         return `${this.option3}`;
     }
     getoptie4()
     {
         return `${this.option4}`;
     }
     getvraagnum(){
        return `${this.count}`;
     }


}