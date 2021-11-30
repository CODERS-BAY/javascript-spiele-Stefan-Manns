let symbolPC ;
let symbolUser ;
let pcCounter ;
let userCounter ;
let wincondition = 3;

$('.cr').hide();
$('.playerWins').hide();
$('.computerWins').hide();

function newGame() {
    userCounter=0;
    pcCounter=0;
    $('#friendpoints').text(userCounter);
    $('#foepoints').text(pcCounter);
    $('#re').hide();
    $('.cr').show();

    $('.playerWins').hide();
    $('.computerWins').hide();
    $('.normal').show();
}

function play(symbolUser) {
    // 0 = Schere / 1 = Stein / 2 = Papier
symbolPC = Math.floor(Math.random()*3); //math.random liefert keine ganzen Zahlen, rundem mit Math.Floor. 
    if(symbolPC==symbolUser) {
        $('#message').text('Patt');

    } else if(symbolPC == 0 && symbolUser == 1 || symbolPC == 1 && symbolUser == 2
     || symbolPC == 2 && symbolUser == 0){  //Player Wins
        userCounter++;
        $('#friendpoints').text(userCounter);
        $('#message').text('Spieler gewinnt den Satz');
    
        if(userCounter == wincondition) {
            $('#message').text('Spieler gewinnt Partie');
            $('.cr').hide();
            $('#re').show();
            $('.normal').hide();
            $('.playerWins').show();

            
        }
        
    }

    else if(symbolUser == 0 && symbolPC == 1 || symbolUser == 1 && symbolPC == 2
        || symbolUser == 2 && symbolPC == 0){  //Player Wins
           pcCounter++;
           $('#foepoints').text(pcCounter);
           $('#message').text('Spieler verliert den Satz');
       
           if(pcCounter == wincondition) {
               $('#message').text('Spieler verliert Partie');
               $('.cr').hide();
               $('#re').show();
               $('.normal').hide();
               $('.computerWins').show();
   
               
           }
           
       }



}

