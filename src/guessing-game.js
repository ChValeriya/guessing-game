class GuessingGame {
    constructor() {

    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        return Math.round((this.max - this.min) / 2) + this.min
    }

    lower() {
        this.max = Math.round((this.max - this.min) / 2) + this.min
        this.setRange(this.min, this.max)
    }

    greater() {
        this.min = Math.round((this.max - this.min) / 2) + this.min
        this.setRange(this.min, this.max)
    }
}
module.exports = GuessingGame;
