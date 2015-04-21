get '/surveys/new' do
  erb :'survey/new'
end

get '/surveys/:id' do |id|
  @survey = Survey.find(id)

  erb :'survey/single'
end

post '/surveys' do

end