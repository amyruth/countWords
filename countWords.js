var remPunctuation = function(string){
  string = string.toLowerCase();
    string = string.split("");
  
  for(var h = 0; h < string.length; h+=1){
      if(string[h] === "," || string[h] === "."){
        string.splice(h,1, "");
      }else if(string[h] === "!" || string[h] === "?"){
        string.splice(h,1, "");
      }else if(string[h] === ";" || string[h] === ":"){
        string.splice(h,1, "");
      }else if(string[h] === "(" || string[h] === ")"){
        string.splice(h,1,"");
      }
    }
  string = string.join("");
  return string;
};

var objectToArray = function(obj){
  var sortedObj = [];
  for(each in obj){
    sortedObj.push([each, obj[each]]);
  }
  sortedObj = sortedObj.sort(function(a,b) {return a[1] - b[1]});
  sortedObj.reverse();
  return sortedObj;
};

var countWords = function(string){
  var scores = {};
  var sortWords = [];
  var word;
  var count = 0;
  var finalCount;
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

 finalCount = objectToArray(scores);
 
 for( var k = 0; k < finalCount.length; k +=1){
  console.log(finalCount[k][0] + " : " + finalCount[k][1]);
 }
};
