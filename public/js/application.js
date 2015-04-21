$(document).ready(function() {
  var $survey_ele = $('.survey_creator');

  if ($survey_ele.length > 0) {
    console.log("Hello world!");

    Mousetrap.bind('ctrl+enter', function(e) {
      $survey_ele.trigger('createQuestion');
    });

    Mousetrap.bind('enter', function(e) {
      var $target = $(e.target);
      if ($target.hasClass('question')) {
        console.log("emitting createChoice event")
        $target.closest('.question_creator').trigger('createChoice');
      }
    });

    var survey = new Survey($survey_ele);
  }
});
