
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What\'s your name? Nicknames are also acceptable:)', (name) => {
  rl.question('What\'s an activity you like doing?', (activity) => {
    rl.question('What do you listen to while doing that?', (music) => {
      rl.question('Which meal is your favourite (eg: dinner, brunch, etc.)', (meal) => {
        rl.question('What\'s your favourite thing to eat for that meal?', (favoriteThing) => {
          rl.question('Which sport is your absolute favourite?', (sport) => {
            console.log(`${name} loves ${activity} and listning to ${music}. Their favorite meal is ${meal} and he likes to eat ${favoriteThing} at that meal. ${sport} is his absolute favorite `);
             rl.close();
          })
        });
      });
      
    });
  });
  
});