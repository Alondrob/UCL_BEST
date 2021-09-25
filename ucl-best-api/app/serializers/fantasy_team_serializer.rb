class FantasyTeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :nickname, :color, :country, :players
end
