

function generatePassword() {

    var wantNumbers = confirm("do you need numbers in your password");
    var wantSpecial = confirm("do you need special characters in your password");


    if (wantNumbers && wantSpecial) {


        function makePass(length) {
            var charResult = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;

            for (var i = 0; i < length; i++) {
                charResult += characters.charAt(Math.floor(Math.random() * charactersLength));
            }


            return charResult;

        }

        function makePass3(length) {
            var sResult = '';
            var sCharacters = '@#$%^&*!';
            var sCharactersLength = sCharacters.length;

            for (var i = 0; i < length; i++) {
                sResult += sCharacters.charAt(Math.floor(Math.random() * sCharactersLength));
            }


            return sResult;


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


        document.getElementById("password").innerHTML = makePass2(2) + makePass(6) + makePass3(2);

    }




    else if (wantNumbers == true && wantSpecial == false) {


        function makePass2(length) {
            var numResult = '';
            var numbers = '0123456789';
            var numbersLength = numbers.length;
            for (var i = 0; i < length; i++) {
                numResult += numbers.charAt(Math.floor(Math.random() * numbersLength));
            }
            return numResult;

        }


        function makePass(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;

        }

        document.getElementById("password").innerHTML = makePass(6) + makePass2(4);



    }


    else if (wantNumbers == false && wantSpecial == true) {

        function makePass3(length) {
            var sResult = '';
            var sCharacters = '@#$%^&*!';
            var sCharactersLength = sCharacters.length;

            for (var i = 0; i < length; i++) {
                sResult += sCharacters.charAt(Math.floor(Math.random() * sCharactersLength));
            }


            return sResult;


        }




        function makePass(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;

        }

        document.getElementById("password").innerHTML = makePass(6) + makePass3(4);



    }

    else{

       function makePass(length) {
            var result = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < length; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;

        }

        document.getElementById("password").innerHTML = makePass(10);




    }





}