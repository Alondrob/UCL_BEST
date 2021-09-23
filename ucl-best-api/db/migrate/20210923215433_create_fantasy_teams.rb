class CreateFantasyTeams < ActiveRecord::Migration[6.1]
  def change
    create_table :fantasy_teams do |t|
      t.string :name
      t.string :nickname
      t.string :color
      t.string :country
      t.timestamps
    end
  end
end
