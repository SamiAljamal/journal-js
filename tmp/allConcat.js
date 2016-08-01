var Journal = require('./../js/journal.js').journalModule;

$(document).ready(function(){
  $("#journal-form").submit(function(event){
    event.preventDefault();
    var title = $("#title").val();
    var body = $("#body").val();
    var newJournal = new Journal(title, body);

    var output = newJournal.wordCount();
    $("#postlength").text(output);
  });


});
