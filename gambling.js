var Promise = require('promise');
var stake = 100;
var betMoney = 1;

class Utility {

    playGame() {

        var win = Math.floor(Math.random() * 10 % 2);
        if (win == 1) {
            stake = stake + betMoney;
        }
        else {
            stake = stake - betMoney;
        }
        return win;
    }

    stakesMatching() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (stake == 50) {
                    resolve();
                } else {
                    reject();
                }
            }, 1000);

        });
    }

    match() {
        this.stakesMatching().then(resolve => {
            console.log(`Sorry!! You lost the game and ${stake} stakes \n`);
        }).catch((reject) => {
            console.log(`Congratulations!! You won and your stakes is ${stake} \n`);
        })
    }

    resignDay() {
        var i = 0;
        console.log("\n We are good to start the Gamble ");
        while (stake > 50 && stake < 150) {
            this.playGame();
        }
        this.match();
    }
}

module.exports = new Utility();
