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

$(document).ready(function(){
	$('form#sampletext').submit(function(event){
		var originalText = $('input#rawtext').val();
		var counted = countWords(originalText);
		var newArray = [];
		for(var k = 0; k < counted.length; k+=1){
			newArray.push('<p>' + counted[k][0] + " : " + counted[k][1] + '</p>');
		}
		
		$('#counts').html(newArray.join(""));

		$('#results').show();

		$('.btn-danger').click(function(){
			$('#sampletext')[0].reset();
		});
		
		event.preventDefault();
	});
});