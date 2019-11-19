

function generatePassword() {

    var wantNumbers = confirm("do you need numbers in your password");

    if (wantNumbers) {


        function makePass(length) {
            var charResult = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;

            for (var i = 0; i < length; i++) {
                charResult += characters.charAt(Math.floor(Math.random() * charactersLength));
            }


            return charResult;

        }
        function makePass2(length) {
            var numResult = '';
            var numbers = '0123456789';
            var numbersLength = numbers.length;
            for (var i = 0; i < length; i++) {
                numResult += numbers.charAt(Math.floor(Math.random() * numbersLength));
            }
            return numResult;

        }


       document.getElementById("password").innerHTML =  makePass2(2)+makePass(6);
       // document.getElementById("password").innerHTML = makePass2(2);



    }
    else {

        function makePass(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;

        }

        document.getElementById("password").innerHTML = makePass(6);



    }




}