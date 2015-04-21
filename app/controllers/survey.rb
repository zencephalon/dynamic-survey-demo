get '/surveys/new' do
  erb :'survey/new'
end

get '/surveys/:id' do |id|
  @survey = Survey.find(id)

  erb :'survey/single'
end

post '/surveys' do
  survey = Survey.create(name: params[:name])
  params[:questions].values.each do |question|
    q = survey.questions.create(name: question[:name])
    question[:choices].each do |choice|
      q.choices.create(name: choice)
    end
  end

  return "/surveys/#{survey.id}"
end