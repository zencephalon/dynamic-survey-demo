function Question($survey_ele) {
  this.$survey_ele = $survey_ele;
  this.$ele = $('<li class="question_creator"><input class="question mousetrap"><ol class="choice_list"></ol></li>')
  this.$survey_ele.children('.question_list').append(this.$ele);

  var self = this;

  this.$ele.on('createChoice', function(event) {
    self.$ele.children('.choice_list').append('<li><input class="choice"></li>');
  })
}

Question.prototype.toJSON = function() {
  return {
    name: this.$ele.children('.question').val(),
    choices: this.$ele.find('.choice').toArray().map(function(ele) {
      return $(ele).val();
    })
  }
}