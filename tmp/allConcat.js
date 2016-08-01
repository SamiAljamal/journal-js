var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function(){
  $("#journal-form").submit(function(event){
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newJournal = new Journal(title, body);

    var output = newJournal.wordCount();
    var letters = newJournal.letterCount();
    var firstWords = newJournal.getTeaser();
    $("#vowelLength").text(letters[0]);
    $("#consonantLength").text(letters[1]);
    $("#postlength").text(output);
    $("#getTeaser").text(firstWords);
  });


});
