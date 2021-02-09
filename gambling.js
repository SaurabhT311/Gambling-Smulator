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
    }

}

module.exports=new Utility();