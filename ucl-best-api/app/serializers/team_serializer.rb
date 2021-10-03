class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :website, :players

  def players
    object.players.map do |player|
      PlayerSerializer.new(player).attributes
    end
  end

  # has_many :players
end
