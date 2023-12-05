/* 
** PAG 2 | Our Team
**    POPUP
**     BY 
** SERGIO OLIVEIRA 
*/

window.addEventListener("load", function ()
{
      setTimeout(function open(event)
      {
            document.querySelector(".popup").style.display = "block";
      }, 1000);
});

document.querySelector("#close").addEventListener
("click", function()
{
      document.querySelector(".popup").style.display = "none";
});

document.querySelector(".check-out").addEventListener
("click", function()
{
      document.querySelector(".popup").style.display = "none";
});
      

/* 
** PAG 2 | Our Team
**  EMPLOYEES
** DESCRIPTIONS
**     BY 
** SERGIO OLIVEIRA 
*/

function bear()
{
      alert("Bruno is the bold exploring bear of Joyful Zoo. " +
            "Dressed in an explorer vest and carrying a backpack and spear, " +
            "he loves taking children on exciting expeditions through the zoo. " +
            "With a map in his paw, Bruno is the embodiment of courage and discovery.")
}
function bunny()
{
      alert("Ricardo is a very busy business bunny! " +
            "Always dressed in a sharp suit, " + 
            "he is the zoo's executive rabbit. " + 
            "With his charm and problem-solving skills, " + 
            "Ricardo ensures that all zoo operations are running smoothly.");
}

function cops()
{
      alert("These fearless ducklings are the cutest police officers in town!" +
            "With their impeccably aligned feathers and shiny badges, " + 
            "Patrol Officers Penelope and Pablo ensure " + 
            "that all zoo animals are safe and happy. " + 
            "With their fun whistles and flashy wings, " + 
            "they are the fearless guardians of the animal kingdom.")
}

function cat()
{
      alert("Dr. Mia is the most loving medical kitten " +
            "you've ever seen! With her first aid kit " + 
            "and a cute stethoscope around her neck, " + 
            "she takes care of all the zoo animals. " + 
            "Whether it's a hurt paw or a sniffly nose, " + 
            "Dr. Mia is always ready to heal with her gentle, " +
            "purring touch.")
}

function dog()
{
      alert("Bolt is the most adventurous puppy in Joyful Zoo! " +
            "Always with his tongue out and a cap in the wind, " + 
            "he's ready for any challenge. Whether climbing trees, " + 
            "digging holes, or just spreading joy, " + 
            "Bolt is the perfect companion for a fun afternoon at the zoo.")
}

function dino()
{
      alert("Say hello to Dizzy Snap-a-Lot, " +
           "the little dinosaur with a big passion for photography!" +
           "Sporting a tiny hat and a camera around his neck," + 
           "Dizzy, at 2 million years old, hails from the prehistoric lands. " +
           "When not capturing the best moments at the zoo, " + 
           "he loves exploring the ancient wonders hidden within " +
           "the exhibits and bringing the past to life through his snapshots.")
}

function suricate()
{
      alert("Sandy Explorer, the adventurous meerkat, " +
            "is your go-to guide for an exciting journey through the zoo! " +
            "Hailing from the vast deserts of Africa, Sandy, at 4 years old, " +
            "has a keen sense of direction and a love for " + 
            "sharing fascinating facts about all the animal inhabitants. " + 
            "With a tiny explorer hat atop his head, " + 
            "Sandy leads young adventurers on educational " + 
            "busafaris filled with wonder.")
}

function mouse()
{
      alert("Last but not least, there's Whisker Tidy-Tail," +
           "the diligent mouse in charge of keeping the zoo spick and span! " +
           "At the tender age of 1, Whisker scurries around " + 
           "the zoo with a miniature broom and dustpan, " +
           "ensuring every nook is tidy. " + 
           "Hailing from the cozy corners of Switzerland, " + 
           "Whisker has a passion for cleanliness that's larger " +
           "than life.")
}



/* 
** PAG 3 | GALLERY
**    FORM
** BUY A TICKET
**     BY 
** SERGIO OLIVEIRA 
*/
 

function buyTicket()
{
      alert("Welcome Zoo, you can get your ticket in a few steps." +
            "\nLet's do it together")

      do 
      {
            var name
            name = prompt("Please tell me your name: ");
      }
      while(name == null || name == "");

      var who
      who = prompt("Hello " + name + ", is that for you" +
                  " or for some one else? " +
                  " Please enter YES for you or NO for someone else.");

      if(who == "YES")
      {
            var student = prompt("Are you a student? " +
                              "\nPlease enter YES or NO");
            if(student == "YES")
            {
                  alert("Your Ticket is €14");
                  var email = prompt("What is your email? ");
                  alert("Cool, Welcome to Zoo " + name + 
                  "\nI've already sent an email to you, " + 
                  "and all details are there about your chekout");

                  alert("Tks, and see you soon!");
            }

            else if(student == "NO")
            {                  
                  do
                  { 
                        age = prompt("Okay, " + name + 
                              "\nWhat is your age? ");
                        if(age == "")
                        {
                              alert("Oops, looks like you missed your name.");
                              break;      
                        }

                        else if(age >= 3 && age <= 18)
                        {
                              alert("Your Ticket is €14");

                              var email = prompt("What is your email? ");
                              alert("Cool, Welcome to Zoo" + name + 
                              "\I've already sent an email to you" + 
                              "and all detalls are there about your chekout");
                        }
                        else if(age >= 19 && age <= 100)
                        {
                              alert("Your Ticket is €20");

                              var email = prompt("What is your email? ");
                              alert("Cool, Welcome to Zoo " + name + 
                              "\I've already sent an email to you," + 
                              "and all detalls are there about your chekout.");
                        }
                        else if(age == null)
                        {
                              alert("Oops, looks like there is someting wrong.");
                        }
                  }
                  while(age >= 0 && age <=100);
                  alert("Oops, looks like there is someting wrong with your age."); //need to check
            }
            else
            {
                  alert("Oops, looks like there is someting wrong."); //need to check
            }
      }
      
      else if( who == "NO")
      {
            do
            {
                  var someone = prompt("Please tell me the name of that person");

            }
            while (someone == null || someone == "");

           var student = prompt("Understood, is this person is a student?" +
                  "\nPlease enter YES or NO");

           if(student == "YES")
           {
                  alert("Your Ticket is €14");

                  var email = prompt("What is your email? ");
                  alert("Cool, Welcome to Zoo " + someone + 
                  "\I've already sent an email to you," + 
                  "and all detalls are there about your chekout");
           }
           else if(student == "NO")
           {
                  do
                  {
                        var age = prompt("Okay " + name + " what is the age of " + someone + "? ");
                  
                        if(age <= 3)
                        {
                              alert("The ticket is FREE!!!" +
                              "\nJust present the ID of the " + someone + " and that's it.");
                              alert("See you soon!");
                        }

                        else if(age >= 3 && age <= 18)
                        {     
                              alert("The ticket is €14")

                              var email = prompt("What is your email? ");
                              alert("Cool. Welcome to Zoo " + someone + 
                              "\nI've already sent an email to you," + 
                              "and all detalls are there about your chekout");
                        }

                        else if(age >= 19 && age <= 100)
                        {
                              alert("The ticket is €20!!!");

                              var email = prompt("What is your email? ");
                              alert("Cool. Welcome to Zoo " + someone + 
                              "\nI've already sent an email to you, " + 
                              "and all details are there about your chekout");
                        }
                  }
                  while(age >= 0 && age <= 100);
                  alert("Oops, looks like there is someting wrong with your age.");
           }
      }
      else
      alert("Oops, looks like there is someting wrong."); //need to check
}

/* 
** PAG 3 | GALLERY
**    FORM
**  FEEDBACK
**     BY 
** SERGIO OLIVEIRA 
*/

function feedback()
{      
      
      var name = prompt("Please tell me your name: ");
      if(name == null || name == "")
      {
            alert("Oops, looks like there is someting wrong."); //need to check
      }
      else
      {
            prompt("Hello, " + name + 
                  "! Tell me your experience");

            alert("Thank you for your feedback!");
      }
}
