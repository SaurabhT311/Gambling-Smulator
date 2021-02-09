var stake=100;
var betMoney=1;

class Utility
{
   
    playGame()
    {
       
        var win=Math.floor(Math.random()*10 % 2);
        if(win == 1)
        {
            stake=stake+betMoney;
        }
        else{
            stake=stake-betMoney;
        }
        return win;
    }

    resignDay()
    {
        console.log("\n We are good to start the Gamble ");
        while(stake > 50 && stake < 150)
        {
            this.playGame();                 
        }
        if(stake==50){
        console.log(`Sorry!!You lost the game and ${stake} stakes \n`); 
        }else{
        console.log(`Congratulations!! You won and your stakes  is ${stake} \n`);
        }
    }
}

module.exports=new Utility();