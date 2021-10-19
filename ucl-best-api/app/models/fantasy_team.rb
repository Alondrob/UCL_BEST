class FantasyTeam < ApplicationRecord
    has_many :fantasy_team_players
    belongs_to :user
    has_many :players, through: :fantasy_team_players
end
