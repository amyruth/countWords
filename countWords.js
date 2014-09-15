var countWords = function(string){
  var arr = string.split(" ");
for(var i = 0; i<arr.length; i++){
  var temp = string.split(arr[i]);
  console.log(arr[i] + " appears " + (temp.length -1)+ " times.");
}
};

countWords("my army is this big");