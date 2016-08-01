function Journal(title, post){
  this.title = title;
  this.post = post;
}

Journal.prototype.wordCount = function () {
  var wordArray =this.post.split(' ');
  return wordArray.length;
};

exports.journalModule = Journal;
