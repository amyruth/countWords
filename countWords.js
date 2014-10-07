'use strict';

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
  for(var each in obj){
    sortedObj.push([each, obj[each]]);
  }
  sortedObj = sortedObj.sort(function(a,b) {return a[1] - b[1];});
  sortedObj.reverse();
  return sortedObj;
};

var countWords = function(string){
  var scores = {};
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
 
 return finalCount;
};

//Changed jQuery code - wasn't sure why you were using a multi-dim array for counted variable.  Did not optimize above code.
$('#sampletext').submit(function(){
		var originalText = $('#rawtext').val(),
		    counted = countWords(originalText),
	            newArray = [];
		for(var k = 0, countLength = counted.length; k < countLength; k++){
			newArray.push('<p>' + counted[k][0] + " : " + counted[k][1] + '</p>');
		}
		
		$('#counts').html(newArray.join(""));

		event.preventDefault();
});
