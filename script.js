(function() {

   // generate random integer
   let generateRandomInt = (min, max) => Math.floor(Math.random() * min - max + 1) + min;

   // generate secret number between 1 and 22
   let generateSecretNum = () => {
       let secretNum = generateRandomInt(1, 22);
       return secretNum;
   }

   


    

}());

