

function generatePassword() {

    var pLength = parseInt(prompt("Enter your wanted lenghth for your password must be between 8 and 128:"));

    if (pLength < 8 || pLength > 120 || isNaN(pLength) || pLength == null) {

        alert("You have to enter a number between 8 and 120");

    }
    else {
        var wantNumbers = confirm("Do you want numbers in your password?");
        var wantSpecial = confirm("Do you want special characters in your password?");
        var capitalChar = confirm("Do you want capital characters in your password?");
        var normalLetter = confirm("Do you want small characters in your password?");


        if (wantNumbers && wantSpecial && capitalChar && normalLetter) {
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




        else if (wantNumbers && wantSpecial && capitalChar == false && normalLetter) {

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

        else if (wantNumbers && wantSpecial == false && capitalChar && normalLetter) {

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





        else if (wantNumbers == false && wantSpecial && capitalChar && normalLetter) {


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

        else if (wantNumbers == false && wantSpecial == false && capitalChar && normalLetter) {

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

        else if (wantNumbers == false && wantSpecial && capitalChar == false && normalLetter) {

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


        else if (wantNumbers && wantSpecial == false && capitalChar == false && normalLetter) {


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


        else if (wantNumbers && wantSpecial == false && capitalChar == false && normalLetter == false) {

            function makePass(pLength) {
                var result = '';
                var characters = '012345678910';
                var charactersLength = characters.length;
                for (var i = 0; i < pLength; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;

            }

            document.getElementById("password").innerHTML = makePass(pLength);


        }

        else if (wantNumbers ==false&& wantSpecial && capitalChar == false && normalLetter == false) {

            function makePass(pLength) {
                var result = '';
                var characters = '!"#$%&()*+, -./:;<=>?@[\]^_`{|}~';
                var charactersLength = characters.length;
                for (var i = 0; i < pLength; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;

            }

            document.getElementById("password").innerHTML = makePass(pLength);


        }

        else if (wantNumbers ==false&& wantSpecial && capitalChar && normalLetter == false) {

            function makePass(pLength) {
                var result = '';
                var characters = '!"#$%&()*+, -./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var charactersLength = characters.length;
                for (var i = 0; i < pLength; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;

            }

            document.getElementById("password").innerHTML = makePass(pLength);


        }

        else if (wantNumbers&& wantSpecial && capitalChar && normalLetter == false) {

            function makePass(pLength) {
                var result = '';
                var characters = '12345678901!"#$%&()*+, -./:;<=>?@[\]^_`{|}~ABCDEFGHIJKLMNOPQRSTUVWXYZ';
                var charactersLength = characters.length;
                for (var i = 0; i < pLength; i++) {
                    result += characters.charAt(Math.floor(Math.random() * charactersLength));
                }
                return result;

            }

            document.getElementById("password").innerHTML = makePass(pLength);


        }

        else{

            alert("you have to choose at least one criteria !!");
        }


    }






}

function copy() {
    let password = document.getElementById("password");
    password.select();
    document.execCommand("copy");
}