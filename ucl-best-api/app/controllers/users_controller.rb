class UsersController < ApplicationController

    def create
        user = User.create(user_params)
        token = encode_token({user_id: user.id})
        render json: {user: user, token: token} 
    end

    private

    def user_params
        params.require(:user).permit(:email, :password, :password_confirmation)
    end
end
