class UsersController < ApplicationController


    def index 
        render json: User.all, status: 200
    end 
    
    def show 
        user = User.find_by(id: session[:user_id])
        if user
            render json: user, status: 200
        else 
            render json: {error: "Not authorized"}, status: 404
        end
    end 

    def update 
        user = find_user
        user.update!(user_params)
        render json: user , status: 202
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: 406
    end 

    def create 
        user = User.create!(user_params)
        render json: user, status: 201
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: 406
    end 

    def destroy 
        user = find_user
        if user.present?
            user.destroy
            head :no_content
        else 
            render json: {error: "nft not found"}, status: 404
        end
    end 

    private 

    def user_params 
        params.permit(:user_name, :first_name, :last_name, :email, :avatar, :password)
    end 

    def find_user
        User.find_by(id: params[:id])
    end 
end
