class FantasyTeamsController < ApplicationController

    def index
        fantasy_teams = FantasyTeam.all
        render json: fantasy_teams
    end

    def create
        fantasy_team = current_user.fantasy_teams.create(fantasy_team_params)
        render json: fantasy_team
    end

    def update
        fantasy_team = FantasyTeam.find(params[:id])
        fantasy_team.update(fantasy_team_params)
        render json: fantasy_team
    end

    def destroy
        fantasy_team = FantasyTeam.find(params[:id])
        fantasy_team.destroy
        render json: {}
    end




    private

    def fantasy_team_params
        params.require(:fantasy_team).permit(:name, :nickname, :color, :country)
    end
end
