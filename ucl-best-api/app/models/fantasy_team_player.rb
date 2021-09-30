class FantasyTeamPlayer < ApplicationRecord
    belongs_to :fantasy_team 
    belongs_to :player 

    validate :only_eleven_players


    def only_eleven_players
        errors.add("Team Can't have more than 11 players on the starting line-up") if self.fantasy_team.fantasy_team_players > 10 
    end
end

