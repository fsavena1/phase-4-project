class ReviewsController < ApplicationController

    def index
        render json: Review.all
    end

    def show
        review = Review.find_by(id: params[:id])
        render json: review, status: :ok
    end

    def create
        review = Review.create!(review_params)
        render json: review, status: 201
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: 406
    end 

    def destroy
        review = Review.find_by(id: params[:id])
        review.destroy
        head :no_content
    end

    private 

    def review_params
        params.permit(:user_id, :nft_id, :body)
    end
end
