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
                    let answer = console.log(`Sorry!! You lost the game and ${stake} stakes \n`);
                    resolve(answer);
                } else {
                    let winner = console.log(`Congratulations!! You won and your stakes is ${stake} \n`);
                    reject(winner);
                }
            }, 1000);
        })
    }

    match() {
        this.stakesMatching().then(resolved => {
            console.log(resolved)
        }).catch(rejected => {
            console.log(rejected)
        })
    }

    resignDay() {
        var i = 0;
        console.log("\n We are good to start the Gamble ");
        while (stake > 50 && stake < 150) {
            this.playGame();
        }
        this.stakesMatching();
    }
}

module.exports = new Utility();
