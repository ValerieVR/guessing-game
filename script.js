(function() {

   // generate random integer
   let generateRandomInt = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

   // generate secret number between 1 and 22
   let generateSecretNum = () => {
       let secretNum = generateRandomInt(1, 22);
       return secretNum;
   }

   // Messages to display
   let getMessage = (guess, secret, i) => {
       let win = "Awesome! Your number, " + guess + ", is correct.";
       let close = "So close, but you missed it. The secret number is " + secret + ".";
       let lose = "Bummer ... You guessed " + guess + " and the secret number is" + secret + ".";
       let message = [win, close, lose];
       return message[i];
   }

   // compare user's input with secret number
   let compareNumbers = (event) => {

       event.preventDefault();

       let secretNum = generateSecretNum();
       let userNum = document.getElementById("guess").value;

       if (userNum == secretNum) {
           alert(getMessage(userNum, secretNum, 0));
       } else if (userNum == secretNum + 1 || userNum == secretNum - 1) {
           alert(getMessage(userNum, secretNum, 1));
       } else {
           alert(getMessage(userNum, secretNum, 2));
       };

     }

     // compare numbers when form gets submitted
     let form = document.getElementById("userInput");
     form.addEventListener("submit", compareNumbers);

    

}());

