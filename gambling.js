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
              console.log(`Congratulations!! You won and your stake is ${stake}`);
        }
        else{
            stake=stake-betMoney;
              console.log(`Sorry!! you lost the gamble and your stake is ${stake}`);   
        }
    }
}

module.exports=new Utility();
