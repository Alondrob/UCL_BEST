class TeamSerializer < ActiveModel::Serializer
  attributes :id, :name, :country, :website, :players
  # has_many :players
end
