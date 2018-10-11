// Enter the following line of code:

var global = 'I am a global variable';

// Now let's make a function to create some scope.

function scopeMaker() {
  var local = 'I am a local variable.'
  console.log(global, 'logged from inside scopeMaker().')
  console.log(local, 'logged from inside scopeMaker().')
}
scopeMaker();