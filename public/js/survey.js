function Survey($ele) {
  this.$ele = $ele;
  this.questions = [];

  var self = this;

  this.$ele.on('createQuestion', function(event) {
    console.log("inside of survey model", event);
    self.questions.push(new Question(self.$ele))
  })

  this.$ele.children('.survey_submit').on('click', function() {
    // console.log(self.toJSON());
    $.ajax({
      url: '/surveys',
      type: 'POST',
      data: self.toJSON()
    })
  });
}

// {
//   name: "Color survey",
//   questions: [
//     {
//       name: "Favorite color?"
//       choices: ["red", "blue", "green"]
//     }
//   ]
// }

Survey.prototype.toJSON = function() {
  return {
    name: this.$ele.children('.survey_name').val(),
    questions: this.questions.map(function (question) {
      return question.toJSON();
    })
  }
}