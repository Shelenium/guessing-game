class GuessingGame {
    constructor(min = 0, max = 0, guessnum = 0) {
    	this.min = min;
    	this.max = max;
    	this.guessnum = guessnum;
    }

    setRange(min, max) {
    	this.min = min;
    	this.max = max;
    	return this;
    }

    guess() {
    	this.guessnum = Math.ceil(this.min + (this.max - this.min)/2);
    	return this.guessnum;

    }

    lower() {
    	this.max = this.guessnum;
    	return this;

    }

    greater() {
    	this.min = this.guessnum;
    	return this;

    }
}

module.exports = GuessingGame;
