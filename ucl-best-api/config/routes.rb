Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  resources :fantasy_teams, only: [:index, :create, :update, :destroy]
  resources :fantasy_team_players, only: [:create, :destroy]
  resources :teams
end
