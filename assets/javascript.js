

function generatePassword() {
    var pLength = parseInt(prompt("Enter your wanted lenghth for your password must be between 8 and 120:"));
    var wantNumbers = confirm("Do you need numbers");
    var wantSpecial = confirm("Do you need special characters");
    var capitalChar = confirm("Do you want capital characters");

    if (wantNumbers && wantSpecial && capitalChar) {
        function makePass(pLength) {
            var charResult = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz01234567891011121314151617181920!"#$%&()*+, -./:;<=>?@[\]^_`{|}~';
            var charactersLength = characters.length;
            for (var i = 0; i < pLength; i++) {
                charResult += characters.charAt(Math.floor(Math.random() * charactersLength));
            }


            return charResult;

        }


        document.getElementById("password").innerHTML = makePass(pLength);

    }




    else if (wantNumbers && wantSpecial && capitalChar == false) {

        function makePass(pLength) {
            var charResult = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz0123456789101112131415161718192!"#$%&()*+, -./:;<=>?@[\]^_`{|}~';
            var charactersLength = characters.length;
            for (var i = 0; i < pLength; i++) {
                charResult += characters.charAt(Math.floor(Math.random() * charactersLength));
            }


            return charResult;

        }


        document.getElementById("password").innerHTML = makePass(pLength);

    }

    else if (wantNumbers && wantSpecial == false && capitalChar) {

        function makePass(pLength) {
            var charResult = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789111213141516171819';
            var charactersLength = characters.length;
            for (var i = 0; i < pLength; i++) {
                charResult += characters.charAt(Math.floor(Math.random() * charactersLength));
            }


            return charResult;

        }


        document.getElementById("password").innerHTML = makePass(pLength);



    }





    else if (wantNumbers == false && wantSpecial && capitalChar) {


        function makePass(pLength) {
            var charResult = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!"#$%&()*+, -./:;<=>?@[\]^_`{|}~';
            var charactersLength = characters.length;
            for (var i = 0; i < pLength; i++) {
                charResult += characters.charAt(Math.floor(Math.random() * charactersLength));
            }


            return charResult;

        }


        document.getElementById("password").innerHTML = makePass(pLength);


    }

    else if (wantNumbers == false && wantSpecial == false && capitalChar) {

        function makePass(pLength) {
            var charResult = '';
            var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < pLength; i++) {
                charResult += characters.charAt(Math.floor(Math.random() * charactersLength));
            }


            return charResult;

        }


        document.getElementById("password").innerHTML = makePass(pLength);



    }

    else if (wantNumbers == false && wantSpecial && capitalChar == false) {

        function makePass(pLength) {
            var charResult = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz!"#$%&()*+, -./:;<=>?@[\]^_`{|}~';
            var charactersLength = characters.length;
            for (var i = 0; i < pLength; i++) {
                charResult += characters.charAt(Math.floor(Math.random() * charactersLength));
            }


            return charResult;

        }


        document.getElementById("password").innerHTML = makePass(pLength);



    }


    else if (wantNumbers && wantSpecial == false && capitalChar == false) {


        function makePass(pLength) {
            var charResult = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz01234567891011121314151617181920';
            var charactersLength = characters.length;
            for (var i = 0; i < pLength; i++) {
                charResult += characters.charAt(Math.floor(Math.random() * charactersLength));
            }


            return charResult;

        }


        document.getElementById("password").innerHTML = makePass(pLength);

    }


    else {

        function makePass(pLength) {
            var result = '';
            var characters = 'abcdefghijklmnopqrstuvwxyz';
            var charactersLength = characters.length;
            for (var i = 0; i < pLength; i++) {
                result += characters.charAt(Math.floor(Math.random() * charactersLength));
            }
            return result;

        }

        document.getElementById("password").innerHTML = makePass(pLength);


    }








}

function copy() {
  let password = document.getElementById("password");
  password.select();
  document.execCommand("copy");
}