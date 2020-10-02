export const items = [
         {
           sys: { id: 0 },
           fields: {
             title: "Manage My Finances",
             description:
               "This project is being created using React, Java (Hibernate, Springboot, Thymeleaf, & Annotations), and mySQL database.",
             featured: true,
             image: { fields: { file: { url: "img/project1.png" } } }
           }
         },
         {
           sys: { id: 1 },

           fields: {
             title: "My Portfolio",
             description:
               "This project was created using React.",
             featured: true,

             image: { fields: { file: { url: "img/project2.png" }} }
           }
         },
        {
          sys: { id: 2 },

          fields: {
            title: "Reciplia",
            description:
              "This is my Capstone project for LaunchCode's Liftoff program. " +
              "It is entirely coded in React, utilizes Firebase's authentication for social " +
               "logins, utilizes Firebase's Realtime database & incorporates an API.",
            featured: true,

            image: { fields: { file: { url: "img/project4.jpg" } } }
          }
        },
  // {
  //   sys: { id: 2 },

  //   fields: {
  //     title: "Restaurant GUI",
  //     description:
  //       "This school-related project was created using C#/.NET. I had coded this for our group's final project in the .NET/C# class.",
  //     featured: false,

  //     image: { fields: { file: { url: "img/project3.png" } } }
  //   }
  // },
        {
          sys: { id: 3 },

          fields: {
            title: "Will's Grill",
            description:
              "This was a group project for my Web Design class at UMSL. I helped with designing the landing page. Also, I alone created" + 
              "the about page, the community support page, and the contact page.",
            featured: true,

            image: { fields: { file: { url: "img/wills-grill.png" } } }
          }
        },       
        
         {
           sys: { id: 4 },

           fields: {
             title: "food diary",
             description:
               "This Java app writes to a csv file, where a user can create a new one or append to an existing one .",
             featured: true,

             image: { fields: { file: { url: "img/no-image.png" } } }
           }
         },

        {
          sys: { id: 5 },

          fields: {
            title: "calories burned",
            description:
              "This is a system, coded in Java, to track calories burned (both net calorie burn/mile & total calorie burn/mile) based upon activity (running or walking) and number of miles." +
              "The output appears in a csv(Excel) file called 'activityLogDetails'.",
            featured: true,

            image: { fields: { file: { url: "img/no-image.png" } } }
          }
        },
         {
           sys: { id: 6 },

           fields: {
             title: "targeted pairs",
             description:
               "My Java Challenge: To find all of the pairs of numbers that sum to the target number. Two parameters: Array of integers (negatives, positives / sorted or unsorted)" + 
               "and a single integer (target number). I utilized a TreeSet so that I could have the an ordered set. I also used Random, so that the positive and negative integers could" +  
               "be randomly selected, as well as 'no repeats'. The user will be prompted to enter a target number. Once entered, the app will determine which pairs sum up to that target" +
               "number, print out the pairs, and then print out the total number of possible pairs.",
             featured: false,

             image: { fields: { file: { url: "img/no-image.png" } } }
           }
         },

         
         {
           sys: { id: 7 },

           fields: {
             title: "count the twos",
             description:
               "This Java challenge: given one parameter, i.e. 23, from zero to 23, how many twos? (I have modified this considerably.) In my modifications, I wanted to show that I could:" +
                "   generate an ordered, random, and with no repeats array--with both positive and negative integers, " +
                "2. expand the range of numbers that could be possibly chosen, and " +
                "3. convert a treeset to an int array, thus allowing for the method(countTwos) to check for how many twos occur within the array.",
             featured: false,

             image: { fields: { file: { url: "img/no-image.png" } } }
           }
         },
         {
           sys: { id: 8 },

           fields: {
             title: "fizz-buzz-bang",
             description:
               "This was coded in Java. This app allows for numbers 1 thru 100 to be looked at to print out a word if: " +
                "it is divisible by 3 = 'Fizz', it is divisible by 5 = 'Buzz', it is divisible by 7 = " +
                "'Bang', it is divisible by 15 = 'FizzBuzz', it is divisible by 21 = 'FizzBuzzBang'. " +
                "It will also print out the number associated with the word, so that you can see if the calculation is correct. " +
                "This also tallys the counts of each, just to give the statistics.The count variables are static field variables" + 
                "that have each been initialized as '0'.",
             featured: false,

             image: { fields: { file: { url: "img/no-image.png" } } }
           }
         }
       ];
