const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question(`What's your name? Nicknames are also acceptable :)`, (name) => {
    rl.question(`What's an activity you like doing?`, (activity) => {
      rl.question(`What do you listen to while doing that?`, (listen) => {
        rl.question(`Which meal is your favourite (eg: dinner, brunch, etc.)`, (meal) => {
          rl.question(`What's your favourite thing to eat for that meal?`, (food) => {
            rl.question(`Which sport is your favorite`, (sport) => {
              rl.question(`What is your superpower? In a few words, tell us what you are amazing at!`, (superpower) => {


      console.log(`Your name: ${name}`);
      console.log(`An activity you like: ${activity}`);
      console.log(`You like listening to: ${listen}`);
      console.log(`You're favorite meal of they day: ${meal}`);
      console.log(`You're favorite food is: ${food}`);
      console.log(`You're favorite sport is: ${sport}`);
      console.log(`You're superpower is: ${superpower}`);
      
      rl.close();

            })
          })
        })
      })
    })     
  })
});
