class PlayerSerializer < ActiveModel::Serializer
  attributes :id, :name, :position, :nationality, :age, :team

  def age
    ((Time.current - object.dob)/3600/24/365).floor
  end

 
end
