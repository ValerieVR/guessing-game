(function() {

   // generate random integer
   let generateRandomInt = (min, max) => Math.floor(Math.random() * min - max + 1) + min;

   // generate secret number between 1 and 22
   let generateSecretNum = () => {
       let secretNum = generateRandomInt(1, 22);
       return secretNum;
   }

   // declare messages to display
   let getMessage = (guess, secret, i) => {
       let win = "Awesome! Your number, " + guess + ", was correct.";
       let close = "So close, but you misse it. The secret number is " + secret + ".";
       let lose = "Bummer ... You guessed " + guess + " and the secret number was " + secret + ".";
       let message = [win, close, lose];
       return message[i];
   }

   


    

}());

