var stake=100;
var betMoney=1;

class Utility
{

    playGame()
    {
        console.log("We are good to start the Game");
        var win=Math.floor(Math.random()*10 % 2);
        if(win == 1)
        {
            stake=stake+betMoney;
            console.log(`You won and you stake is ${stake}`);
        }
        else{
            stake=stake-betMoney;
             console.log(`Sorry!! you lost the gamble ${stake}`);   
        }
    }

}

module.exports=new Utility();