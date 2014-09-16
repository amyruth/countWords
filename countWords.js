var countWords = function(string){
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


countWords("This, is the Most; difficult? army to command in my opinion!");
