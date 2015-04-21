function Survey($ele) {
  this.$ele = $ele;
  this.questions = [];

  var self = this;

  this.$ele.on('createQuestion', function(event) {
    self.questions.push(new Question(self.$ele))
  })

  this.$ele.children('.survey_submit').on('click', function() {
    $.ajax({
      url: '/surveys',
      type: 'POST',
      data: self.toJSON()
    }).done(function(response) {
      window.location = response;
    })
  });
}

Survey.prototype.toJSON = function() {
  return {
    name: this.$ele.children('.survey_name').val(),
    questions: this.questions.map(function (question) {
      return question.toJSON();
    })
  }
}