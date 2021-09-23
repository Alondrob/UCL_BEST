require 'rest-client'

  
        url = 'https://api.football-data.org/v2/competitions/2001/teams'
        response = RestClient.get(url, {'x-auth-token': '79ed90e3adb84566a10136976e3b54ad', accept: :json})
         data= JSON.parse(response.body)
         data['teams'].each do |team|
            Team.create(name: team['name'], country: team['area']['name'],website: team['website'])
         end
  