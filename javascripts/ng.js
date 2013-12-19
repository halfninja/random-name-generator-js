var ng = {};

ng.alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

ng.postQu = ["a", "e", "i", "o"];

ng.vowels = ["a", "e", "i", "o", "u"];

ng.cons = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],

ng.startingLetters = {

  "a": ["b", "c", "d", "f", "g", "h", "i", "j", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "b": ["a", "e", "i", "l", "o", "r", "u", "y"],
  "c": ["a", "h", "l", "o", "y"],
  "d": ["a", "e", "h", "i", "r", "u", "w"],
  "e": ["b", "c", "d", "f", "g", "j", "l", "m", "n", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"],
  "f": ["a", "e", "i", "l", "o", "r", "u"],
  "g": ["a", "e", "h", "i", "l", "o", "r", "w", "y"],
  "h": ["a", "e", "i", "o", "u", "y"],
  "i": ["a", "b", "c", "d", "f", "g", "l", "m", "n", "o", "p", "q", "r", "s", "t", "x", "z"],
  "j": ["a", "e", "i", "o", "u"],
  "k": ["a", "e", "h", "i", "l", "o", "r", "u", "w", "y"],
  "l": ["a", "e", "i", "o", "u", "y"],
  "m": ["a", "e", "i", "o", "u", "y"],
  "n": ["a", "e", "i", "o", "u"],
  "o": ["b", "c", "d", "f", "g", "h", "i", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "z"],
  "p": ["a", "e", "h", "i", "l", "o", "r", "u", "y"],
  "q": ["u"],
  "r": ["a", "e", "i", "o", "u", "y"],
  "s": ["a", "c", "e", "h", "i", "k", "l", "m", "n", "o", "p", "q", "t", "u", "w", "y"],
  "t": ["a", "e", "h", "i", "o", "r", "u", "y"],
  "u": ["b", "c", "d", "f", "g", "l", "m", "n", "p", "r", "s", "t", "x", "z"],
  "v": ["a", "e", "i", "o", "u"],
  "w": ["a", "e", "h", "i", "o", "r", "u"],
  "x": ["a", "e", "y"],
  "y": ["a", "e", "o", "u", "v"],
  "z": ["a", "e", "i", "o", "u"]

};

ng.midLetters = {

  "a": ["b", "c", "d", "f", "g", "h", "i", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"],
  "b": ["a", "b", "e", "i", "l", "o", "u", "r"],
  "c": ["c", "h", "k", "l", "r"],
  "d": ["a", "d", "e", "g", "o", "r", "u", "w"],
  "e": ["a", "b", "c", "d", "e", "f", "g", "h", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
  "f": ["a", "e", "f", "i", "l", "o", "r", "u"],
  "g": ["a", "e", "g", "h", "i", "l", "n", "o", "r", "u", "w"],
  "h": ["a", "e", "i", "o", "u"],
  "i": ["b", "c", "d", "e", "f", "g", "l", "m", "n", "o", "p", "q", "r", "s", "t", "v", "x", "z"],
  "j": ["a", "e", "i", "o", "u"],
  "k": ["a", "e", "h", "i", "k", "l", "o", "r", "u", "w"],
  "l": ["a", "i", "l", "o", "u"],
  "m": ["a", "e", "i", "m", "o", "u"],
  "n": ["a", "e", "i", "o", "u"],
  "o": ["b", "c", "d", "f", "g", "i", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z"],
  "p": ["a", "e", "f", "h", "i", "l", "o", "p", "r", "s", "t", "u", "y"],
  "q": ["u"],
  "r": ["a", "e", "i", "o", "r", "u"],
  "s": ["a", "c", "e", "h", "i", "k", "l", "m", "n", "o", "p", "q", "s", "t", "u", "w"],
  "t": ["a", "e", "h", "i", "o", "r", "t", "u", "w", "y"],
  "u": ["a", "b", "c", "d", "e", "f", "g", "k", "l", "m", "n", "p", "r", "s", "t", "x", "z"],
  "v": ["a", "e", "i", "l", "o", "r"],
  "w": ["a", "e", "h", "i", "o"],
  "x": ["a", "e"],
  "y": ["a", "e", "o"],
  "z": ["a", "e", "i", "o"]

};

ng.endingLetters = {

 "a": ["b", "d", "g", "m", "n", "p", "r", "s", "t", "x", "y", "z"],
 "b": ["a", "e", "i", "o", "s", "u", "y"],
 "c": ["e", "h", "k"],
 "d": ["a", "e", "o", "s", "y"],
 "e": ["a", "b", "d", "e", "k", "l", "m", "n", "o", "p", "r", "s", "t", "u", "w", "x", "y", "z"],
 "f": ["a", "f", "o", "t", "y"],
 "g": ["a", "e", "o", "s", "y", "z"],
 "h": ["a", "n", "o", "y"],
 "i": ["a", "b", "d", "e", "l", "m", "n", "o", "p", "r", "s", "t", "v", "x", "z"],
 "j": ["a", "i", "o"],
 "k": ["a", "e", "o", "s", "y", "z"],
 "l": ["a", "b", "d", "e", "f", "g", "k", "l", "m", "n", "o", "p", "s", "t", "y"],
 "m": ["a", "b", "e", "f", "n", "o", "p", "s", "y"],
 "n": ["a", "d", "e", "g", "i", "k", "n", "o", "s", "t", "x", "y", "z"],
 "o": ["a", "b", "d", "g", "l", "n", "o", "p", "r", "s", "t", "v", "x", "y", "z"],
 "p": ["a", "e", "f", "h", "i", "o", "s", "t", "y"],
 "q": ["u"],
 "r": ["a", "b", "d", "e", "f", "g", "i", "k", "l", "m", "n", "o", "p", "r", "t", "y", "z"],
 "s": ["a", "e", "h", "k", "m", "o", "p", "s", "t", "y"],
 "t": ["a", "e", "h", "i", "o", "s", "t", "y", "z"],
 "u": ["b", "d", "g", "l", "m", "n", "p", "s", "t", "x", "z"],
 "v": ["a", "e", "o", "y"],
 "w": ["a", "l", "o", "s", "t", "y", "z"],
 "x": ["a", "e", "i", "o", "x", "y"],
 "y": ["a", "s"],
 "z": ["a", "e", "i", "m", "n", "o", "y", "z"]

};

ng.run = function(){

};

ng.inArray = function(what, whichArray){

  var i = 0;

  for(i = 0; i < whichArray.length; i += 1){
    if(whichArray[i] === what){return true;}
  }

  return false;

}

ng.randArray = function(which){

  var rand = Math.floor(Math.random() * which.length);
  return which[rand];

}

ng.countArray = function(what, whichArray){

  var theCount = 0;
  var i = 0;

  for(i = 0; i < whichArray.length; i += 1){
    if(whichArray[i] === what){theCount += 1;}
  }

  return theCount;

}

ng.newName = function(letters){

  var i;
  var theName = [];
 
  var isStupid = function(){

    if(theName.length > 2){
      if(theName[theName.length - 1] === theName[theName.length - 2] && theName[theName.length - 1] === theName[theName.length - 3]){
        return true;
      }
    }

    if(i === (letters - 2) && theName[i] === "q"){return true;}

    if(theName[i] === "y" && ng.countArray("y", theName) > 1){return true;}

    if(theName[i] === "y" && Math.random() < 0.5){return true;}
    if(theName[i] === "j" && Math.random() < 0.5){return true;}
    if(theName[i] === "z" && Math.random() < 0.5){return true;}

    if(theName[i] === "x" && Math.random() < 0.75){return true;}
    if(theName[i] === "q" && Math.random() < 0.75){return true;}

    return false;

  }

  if(!letters){letters = Math.floor(Math.random() * 9) + 3};

  theName[0] = ng.randArray(ng.alphabet);
  if(theName[0] === "u" || theName[0] === "x" || theName[0] === "q" || theName[0] === "y"){theName[0] = ng.randArray(ng.alphabet);}

  for(i = 1; i < letters; i += 1){

    if(i === 1){
      theName[i] = ng.randArray(ng.startingLetters[theName[i - 1]]);
    }else{
      theName[i] = ng.randArray(ng.midLetters[theName[i - 1]]);
    }

    if(i === (letters - 1)){
      theName[i] = ng.randArray(ng.endingLetters[theName[i - 1]])
    }

    if(i >= 2){
      
      if(theName[i - 1] === "u" && theName[i - 2] === "q"){
        theName[i] = ng.randArray(ng.postQu);
      }

      if(ng.inArray(theName[i - 1], ng.cons) && ng.inArray(theName[i - 2], ng.cons)){
        if(!ng.inArray(theName[i], ng.vowels)){theName[i] = ng.randArray(ng.vowels);}
      }
    
    }

    if(isStupid()){i -= 1;}

  }

  return theName;

}

ng.generateName = function(){

  var firstName = ng.newName();
  var lastName = ng.newName();
  var nameStr = "";
  var i;

  nameStr += firstName[0].toUpperCase();

  for(i = 1; i < firstName.length; i += 1){
    nameStr += firstName[i];
  }

  if(lastName){

    nameStr += " ";
    nameStr += lastName[0].toUpperCase();

    for(i = 1; i < lastName.length; i += 1){
      nameStr += lastName[i];
    }


  }

  return nameStr;

}
