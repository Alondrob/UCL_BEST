class AddDateOfBirthToPlayers < ActiveRecord::Migration[6.1]
  def change
    add_column :players, :dob, :datetime
  end
end
