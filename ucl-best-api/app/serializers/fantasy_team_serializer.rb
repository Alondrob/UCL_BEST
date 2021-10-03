class FantasyTeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :nickname, :color, :country, :players,:fantasy_team_players

  def fantasy_team_players
    object.fantasy_team_players.map do |fantasy_team_player|
      FantasyTeamPlayerSerializer.new(fantasy_team_player).attributes
    end
  end

end
