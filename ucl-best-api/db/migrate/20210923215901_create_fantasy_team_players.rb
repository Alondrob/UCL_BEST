class CreateFantasyTeamPlayers < ActiveRecord::Migration[6.1]
  def change
    create_table :fantasy_team_players do |t|
      t.references :fantasy_team
      t.references :player
      t.timestamps
    end
  end
end
