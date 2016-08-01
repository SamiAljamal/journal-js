function Journal(title, post){
  this.title = title;
  this.post = post;
}

Journal.prototype.wordCount = function () {
  var wordArray =this.post.split(' ');
  return wordArray.length;
};

Journal.prototype.letterCount = function(){
  var firstword =this.post.trim();
  var letterArray = firstword.split('');
  var count = 0;
  var consonant = 0;
  var total = [];
  letterArray.forEach(function(letter){
    if(letter.toLowerCase() === 'a' || letter.toLowerCase() === 'e'||letter.toLowerCase() === 'i'||letter.toLowerCase() === 'o'||letter.toLowerCase() === 'u')
    {
      count+= 1;
    }
    else {
      {
        consonant += 1;
      }
    }
  });
  total.push(count);
  total.push(consonant);
  return total;
};

Journal.prototype.getTeaser = function(){
  var wordArray = this.post.split(' ');
  var teaser = [];
  for (var i=0; i<wordArray.length; i++){
    if (i <= 7){
      teaser.push(wordArray[i]);
    }
  }
  return teaser.join(' ');
}


exports.journalModule = Journal;
