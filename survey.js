const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (nameAnswer) => {
  console.log(`It's nice to meet you, ${nameAnswer}.`);
  rl.question(`What's an activity you like doing, ${nameAnswer}? `, (activity) => {
    console.log(`I see, so you like ${activity}. Very nice!`);
    rl.question(`What do you listen to while doing that, ${nameAnswer}? `, (music) => {
      console.log(`Ah, so you listen to ${music}.`);
      rl.question(`Which meal is your favorite, ${nameAnswer}? I'm inclined towards lunch. `, (meal) => {
        console.log(`I always look forward to ${meal}.`);
        rl.question(`What do you have for ${meal}, ${nameAnswer}? `, (food) => {
          console.log(`Mmmm, ${food}. So tasty!`);
          rl.question(`If you had to pick one, which sport is your favorite, ${nameAnswer}? `, (sport) => {
            console.log(`Oh man, I remember playing ${sport}. I never won once, but I always had fun.`);
            rl.question(`What is your superpower? In a few words, tell me what you're amazing at! `, (superpower) => {
              console.log(`Oh, ${superpower}! That's very impressive! `)
              console.log(`So your name is ${nameAnswer}, you like to listen to ${music} when you are doing ${activity}, you like to have ${food} for ${meal}, you like to play ${sport}, and you're very good at ${superpower}. Thank you for your time, today, ${nameAnswer}!`);
              rl.close();
            })        
          })      
        })    
      })
    })
  })
});
