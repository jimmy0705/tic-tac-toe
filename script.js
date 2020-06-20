
const player1 = [];
const player2 = [];

var count =0;

const pattern = [

    [1,2,3],
    [4,5,6],
    [7,8,9],
    [1,4,7],
    [2,5,8],
    [3,6,9],
    [1,5,9],
    [3,5,7]


];

console.log(pattern);

 function reply_click(clicked_id)
  {
     // alert(clicked_id);
      //console.log(document.querySelector('#'+clicked_id));

      var get_id = document.querySelector('#'+clicked_id);
     // console.log(get_id.dataset.number);
      var getNum = get_id.dataset.number;
     console.log(getNum);

     if(count %2 ==0){
     	get_id.innerText = 'x';
     	count++;

     	player2.push(getNum);
     }
     else{
     	get_id.innerText='o';
     	count ++;
     	player1.push(getNum);
     }
  }

  console.log(player1,player2);


/*var xyz = document.querySelector('.box');

xyz.addEventListener("click", function(){

console.log(this.dataset.number);

});
*/






