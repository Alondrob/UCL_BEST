class FantasyTeamPlayersController < ApplicationController

   

    def create
        fantasy_team_player = FantasyTeamPlayer.create(fantasy_team_player_params)
        render json: fantasy_team_player
    end

   

    def destroy
        fantasy_team_player = FantasyTeamPlayer.find(params[:id])
        fantasy_team_player.destroy
        render json: {}
    end




    private

    def fantasy_team_player_params
        params.require(:fantasy_team_player).permit(:player_id, :fantasy_team_id)
    end
end
