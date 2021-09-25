class FantasyTeam < ApplicationRecord
    has_many :fantasy_team_players

    has_many :players, through: :fantasy_team_players
end
