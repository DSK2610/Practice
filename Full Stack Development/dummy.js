let count = 0;
let interval;

function incrementCount() 
{
  count++;
  console.log('Count:', count);
}

function stopIncrementing() {
  clearInterval(interval);
  console.log('Counting stopped.');
}

function startIncrementing() 
{
  count = 0; 
  console.log('Counting started.');

  incrementCount(); 

  interval = setInterval(function() {
    incrementCount();

    if (count >= 12) {
      stopIncrementing();
    }
  }, 1000); 
}

startIncrementing();
