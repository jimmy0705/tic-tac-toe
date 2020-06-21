
// const player1 = [];
// const player2 = [];

//var count =0;
let sign = "x";

// const pattern = [

//     [1,2,3],
//     [4,5,6],
//     [7,8,9],
//     [1,4,7],
//     [2,5,8],
//     [3,6,9],
//     [1,5,9],
//     [3,5,7]


// ];

const winningMessageElement = document.getElementById('winningMessage');
const restartButton = document.getElementById('restartButton');
const winningMessageTextElement = document.querySelector('.winning-txt');

//console.log(pattern);

 function reply_click(clicked_id)
  {
     // alert(clicked_id);
      //console.log(document.querySelector('#'+clicked_id));

      var get_id = document.querySelector('#'+clicked_id);
     // console.log(get_id.dataset.number);
      var getNum = get_id.dataset.number;
    // console.log(getNum);

     if(get_id.innerText == "" || null){

      get_id.innerText=sign;
      winner();
      checkText();

     } else{

     }

  }

  function checkText(){
    if(sign=="x"){
    	sign ="o";
    }
    else{
    	sign = "x";
    } 
   
}


  function getbox(no){
    return document.getElementById("box-"+no).innerHTML;
}

function checkmove(a,b,c,m){
    if(getbox(a)==m && getbox(b)==m && getbox(c)==m){
       return true;
    }
    else{
    	return false;  
    }  
}


function winner(){
if(checkmove(1,2,3,sign)||checkmove(4,5,6,sign)||checkmove(7,8,9,sign)
    ||checkmove(1,4,7,sign)||checkmove(2,5,8,sign)||checkmove(3,6,9,sign)
    ||checkmove(1,5,9,sign)||checkmove(7,5,3,sign)){
    

    winningMessageTextElement.innerText = "Player- "+sign +" is winner";
    winningMessageTextElement
  
   
}else{
    if(getbox(1)!=""&& getbox(2)!=""&& getbox(3)!=""&&
   getbox(4)!=""&& getbox(5)!=""&& getbox(6)!=""&&
   getbox(7)!=""&& getbox(8)!=""&& getbox(9)!=""){

      winningMessageTextElement.innerText = "it's a tie";       }
}
}



  

function restart(){

	window.location.reload();
}






