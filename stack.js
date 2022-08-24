var letters = []; //Stack itself

var word = "racecar"; //Palidrome test

var rword = ""; //Empty var to hold reversed word

for(var i = 0; i < word.length; i++){
  letters.push(word[i]); //pushing letters into the stack
}

for(var i = 0; i < word.length; i++){
  rword += letters.pop(); //popping of the letters into rword to receive the reversed order
}

if(rword === word){ //comparing rword w/ word
  console.log(word + " is a palidrome.");  //if equal then
} else{
  console.log(word + " is not a palidrome."); //else not
}

var Stack = function(){ //Creates a stack
  this.count = 0; // count for stack placement/order
  this.storage = {}; //storage object to hold count attribute

  this.push = function(value){
    this.storage[this.count] = value; //pushing value into the stack 
    this.count++; //moving to the next empty count to hold next value
  }

  this.pop = function(){
    if(this.count === 0){
      return undefined; // conditional for pop function once the stack is empty
    }

    this.count--; //move from empty value to to very last value stored on top of the stack
    var result = this.storage[this.count]; // result holds value set to be deleted
    delete this.storage[this.count]; // delete value
    return result; //return what was deleted from the stack
  }

  this.size = function(){
    return this.count; //size of stack
  }

  this.peek = function(){
    return this.storage[this.count-1]; //decrement by 1 to view top of stack instead of empty value
  }
}

var myStack = new Stack();

myStack.push(1);
myStack.push(2);
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());
myStack.push("Software");
console.log(myStack.size());
console.log(myStack.peek());
console.log(myStack.pop());
console.log(myStack.peek());