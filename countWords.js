var remPunctuation = function(string){
  string = string.toLowerCase();
  string = string.split("");
  
  for(var i = 0; i < string.length; i+=1){
      if(string[i] === "," || string[i] === "."){
        string.splice(i,1);
      }else if(string[i] === "!" || string[i] === "?"){
        string.splice(i,1);
      }else if(string[i] === ";" || string[i] === ":"){
        string.splice(i,1);
      }
    }
  string = string.join("");
  return string;
};


var countWords = function(string){
  string = remPunctuation(string);
    return string;
};


countWords("This, is a Most; difficult? ARMY to command in my opinion!");