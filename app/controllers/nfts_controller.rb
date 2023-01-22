class NftsController < ApplicationController
    def index 
        render json: Nft.all, status: 200
    end 
    
    def show 
        nft = find_nft 
        if nft.present?
            render json: nft, status: 200
        else 
            render json: {error: "nft not found"}, status: 404
        end
    end 

    def update 
        nft = find_nft 
        nft.update!(nft_params)
        render json: nft , status: 202
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: 406
    end 

    def create 
        nft = Nft.create!(nft_params)
        render json: nft, status: 201
    rescue ActiveRecord::RecordInvalid => e 
        render json: {errors: e.record.errors.full_messages}, status: 406
    end 

    def destroy 
        nft = find_nft
        if nft.present?
            nft.destroy
            head :no_content
        else 
            render json: {error: "nft not found"}, status: 404
        end
    end 

    private 

    def nft_params 
        params.permit(:name, :image, :description, :price, :for_sale)
    end 

    def find_nft 
        Nft.find_by(id: params[:id])
    end 

end
