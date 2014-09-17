var remPunctuation = function(string){
  string = string.toLowerCase();
    string = string.split("");
  
  for(var h = 0; h < string.length; h+=1){
      if(string[h] === "," || string[h] === "."){
        string.splice(h,1);
      }else if(string[h] === "!" || string[h] === "?"){
        string.splice(h,1);
      }else if(string[h] === ";" || string[h] === ":"){
        string.splice(h,1);
      }
    }
  string = string.join("");
  return string;
};


var countWords = function(string){
  var scores = {};
  var word;
  var count = 0;
  string = remPunctuation(string);
  string = string.split(" ");

  for(var i = 0; i < string.length; i+=1){
    word = string[i];
    for(var j = 0; j < string.length; j+=1){
      if(word === string[j]){
        count += 1;
      }
      scores[string[i]] = count;
    }
    count = 0;
  }

  for(each in scores){
    console.log(each + " : " + scores[each]);
  }
      
};


countWords("This, is a Most; difficult? ARMY to command in my opinion!");