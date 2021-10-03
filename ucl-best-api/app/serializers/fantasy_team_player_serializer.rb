class FantasyTeamPlayerSerializer < ActiveModel::Serializer
  attributes :id, :fantasy_team, :player


  
  def player
      PlayerSerializer.new(object.player).attributes
  end


end
