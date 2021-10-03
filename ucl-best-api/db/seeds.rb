require 'rest-client'
Player.destroy_all
Team.destroy_all

  
        url = 'https://api.football-data.org/v2/competitions/2001/teams'
        response = RestClient.get(url, {'x-auth-token': '79ed90e3adb84566a10136976e3b54ad', accept: :json})
         data= JSON.parse(response.body)
         data['teams'].each do |team|
            Team.create(name: team['name'], country: team['area']['name'],website: team['website'], api_id: team['id'])
         end
  

#team
#players
         Team.all.each do |team|
            sleep 20
            puts team.id
         url = "https://api.football-data.org/v2/teams/#{team.api_id}"
            response = RestClient.get(url, {'x-auth-token': '79ed90e3adb84566a10136976e3b54ad', accept: :json})
         data= JSON.parse(response.body)
         data['squad'].each do |player|
            # byebug
          Player.create(name: player['name'], position: player['position'], nationality: player['nationality'], team: team, dob: player['dateOfBirth'] )
         end

         end
