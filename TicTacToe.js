$(document).ready(function(){
  var shuffle,gamestarted=true;
  
  function gameFunction(){
    gamestarted=false;
  var gameState=true;
  var wholeArr=[0,0,0,
               0,0,0,
               0,0,0];
  var kerArr=["#one","#two","#three",
             "#four","#five","#six",
             "#seven","#eight","#nine"]
 
 
  var $1;var $2;var $3;var $4;var $5;var $6;var $7;var $8;
  
  var winCondition=function(){
   $1=[wholeArr[0],wholeArr[1],wholeArr[2]];
   $2=[wholeArr[3],wholeArr[4],wholeArr[5]];
   $3=[wholeArr[6],wholeArr[7],wholeArr[8]];
   $4=[wholeArr[0],wholeArr[3],wholeArr[6]];
   $5=[wholeArr[1],wholeArr[4],wholeArr[7]];
   $6=[wholeArr[2],wholeArr[5],wholeArr[8]];
   $7=[wholeArr[0],wholeArr[4],wholeArr[8]];
   $8=[wholeArr[2],wholeArr[4],wholeArr[6]];
  };
  winCondition();
  var indexofconditions=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
  var arrayOfconditions=[$1,$2,$3,$4,$5,$6,$7,$8];
  var played=function(){wholeArr.every(function(v){return v!==0;})};
  var player=function(v){return v===1};
  var computer=function(v){return v===2};
  var test= function(v){return v===true;}
  var arrayOfArr;
  var arrayOfArr2;
  
  var testArr=function(){
    winCondition();
   arrayOfArr=[$1.every(player),$2.every(player),$3.every(player),$4.every(player),$5.every(player),$6.every(player),$7.every(player),$8.every(player)];
   arrayOfArr2=[$1.every(computer),$2.every(computer),$3.every(computer),$4.every(computer),$5.every(computer),$6.every(computer),$7.every(computer),$8.every(computer)];
  };
  
  var clearview=function(_,ind){
    $(kerArr[ind]).removeClass("btn-success btn-danger");
      $(kerArr[ind]).text("push");
  }
  
  var gameview=function(v,ind){
    if(shuffle===true&&v===1){
      $(kerArr[ind]).addClass("btn-success");
      $(kerArr[ind]).text("X");
    }else if(shuffle===true&&v===2){
      $(kerArr[ind]).addClass("btn-danger");
      $(kerArr[ind]).text("O");
    }else if(shuffle===false&&v===1){
      $(kerArr[ind]).addClass("btn-danger");
      $(kerArr[ind]).text("O");
    }else if(shuffle===false&&v===2){
      $(kerArr[ind]).addClass("btn-success");
      $(kerArr[ind]).text("X");      
             }
  };
var beatHuman=function(){
  winCondition();
   arrayOfconditions=[$1,$2,$3,$4,$5,$6,$7,$8];// reassigning the condition, not the most elegant solution
    var value,innervalue,index,indexToUse;
    for(var i=0;i<arrayOfconditions.length;i++){
      if(index){break;}
      var counter=0,counter2=0;
      indexToUse=indexofconditions[i];
      value=arrayOfconditions[i];
      for(var j=0;j<value.length;j++){
        innervalue=value[j];
        if(innervalue===1){counter+=1;}
       // if(innervalue===2){counter2+=1}
      }
      for(var k=0;k<value.length;k++){
        if(counter===2){
          if(value[k]===0){
            index=indexToUse[k];
           
          }
        }
      }  
    }
    return index;
  };    
  
var smartcomputer=function(){
    winCondition();
    arrayOfconditions=[$1,$2,$3,$4,$5,$6,$7,$8];// reassigning the condition, not the most elegant solution
    var value,innervalue,index,indexToUse;
    for(var i=0;i<arrayOfconditions.length;i++){
      if(index){break;}
      var counter=0,counter2=0;
      indexToUse=indexofconditions[i];
      value=arrayOfconditions[i];
      for(var j=0;j<value.length;j++){
        innervalue=value[j];
        if(innervalue===2){counter+=1;}
       // if(innervalue===2){counter2+=1}
      }
      for(var k=0;k<value.length;k++){
        if(counter===2){
          if(value[k]===0){
            index=indexToUse[k];
           
          }
        }
      }  
    }
    return index;
  };
  
   var computerMove=function(){
     //gameOver();
     var index=smartcomputer(),index2=beatHuman();
     if(index&&wholeArr[index]===0){wholeArr[index]=2}
     else if(index2&&wholeArr[index2]===0){
       wholeArr[index2]=2;
     }else{
     
      var randomnumber=Math.floor(Math.random() * 9);
      if(wholeArr[randomnumber]===0){
        wholeArr[randomnumber]=2;
      }else computerMove();
     }
     //gameOver();
    };
  
  
  
  
  var runComputerMove=function(){
    computerMove();
    wholeArr.forEach(gameview);
  }
  
   var resetGame=function(){
    wholeArr=[0,0,0,0,0,0,0,0,0];
    winCondition();
    setTimeout(function(){wholeArr.forEach(clearview);
     if(gameState===true){runComputerMove();gameState=false}
    else gameState=true;
                          },1500);
  };
  
     
  
  var gameOver=function(){
    
    var variable=played()
    if(!variable){
      
      testArr();
      if(arrayOfArr.some(test)){
        alert("You win!! Pls play again");
        resetGame();
      }else if(arrayOfArr2.some(test)){
        alert("Computer win!! Pls play again");
        resetGame();
      }else if(!wholeArr.includes(0)){
        alert("Draw!! Pls play again");
        resetGame();
      }
     
    }
  };
    
  var wholeGame=function(){
    
      for(let i=0;i<kerArr.length;i++){
    $(kerArr[i]).click(function(){
      
      if(wholeArr[i]===0){
      wholeArr[i]=1;
      computerMove();
       }
      wholeArr.forEach(gameview);
      gameOver();
      
    console.log(wholeArr);
     console.log([smartcomputer(),beatHuman()]); 
    });}
  };
  
  wholeGame();
  
  } 
  $("#o").click(function(){shuffle=false;if(gamestarted)gameFunction();});
  $("#x").click(function(){shuffle=true;if(gamestarted)gameFunction();});
});

