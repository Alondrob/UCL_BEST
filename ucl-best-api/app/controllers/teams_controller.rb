class TeamsController < ApplicationController
    # require 'rest-client'

    # def get_teams
    #     url = 'https://api.football-data.org/v2/competitions/2001/teams'
    #     response = RestClient.get(url)
    #     render json: response
    # end

    def get_teams
        render 'hello'
    end

    def index
        render 'hello'
    end
end
