const chessboard =function(){

    let tabA = ["a","b","c","d","e","f","g","h"];
       let tabNb = [1,2,3,4,5,6,7,8];
          
     
   const boardrange=function(k){
       let resultTab = [];
   
           for (let j=0; j< tabNb.length;j++){     
           resultTab.push(`${tabA[k]} - ${tabNb[j]}`)
               }
        
        return resultTab;
               }
   
     let resultTab2 = [];
   
   for (let i=0; i<tabA.length; i++){
   
   
   resultTab2.push(boardrange(i));
   
   
   }
   
   return resultTab2;
   
   
   }
   

   module.exports=chessboard