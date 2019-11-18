

   function generatePassword() {

            var wantNumbers = confirm("do you need numbers in your password");

            if (wantNumbers) {


                document.getElementById("password").innerHTML = Math.floor(Math.random() * 20);
                
            }
            else{}

        }