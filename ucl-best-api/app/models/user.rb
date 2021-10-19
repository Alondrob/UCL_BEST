class User < ApplicationRecord
    has_many :fantasy_teams
    has_secure_password
end
