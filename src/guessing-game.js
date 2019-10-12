

class GuessingGame {
    constructor() {}

    setRange(min, max) {
        this.R=max;
        this.L=0;
        this.tempNumber=Math.ceil((max/2));
        

    }

    guess() {
        return (this.tempNumber);


    }

    lower() {
        this.R=this.tempNumber;
        this.tempNumber -= Math.floor((this.tempNumber-this.L)/2);

    }

    greater() {
        this.L=this.tempNumber;
        this.tempNumber += Math.ceil((this.R-this.tempNumber)/2);
    }
}


module.exports = GuessingGame;