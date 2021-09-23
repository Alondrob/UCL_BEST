class CreatePlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :players do |t|
      t.string :name
      t.string :image
      t.string :position
      t.string :nationality
      t.integer :team_id
      t.timestamps
    end
  end
end
