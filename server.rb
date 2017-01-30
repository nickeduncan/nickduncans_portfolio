require 'sinatra'

get '/' to do
  send_file File.join(
  settings.public_folder, 'index.html'
  )
end
