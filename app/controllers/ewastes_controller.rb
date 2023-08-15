class EwastesController < ApplicationController
    before_action :authorize

    def create
        if current_user
        ewaste = Ewaste.create!(ewaste_params)
        render json: ewaste, status: :created
        else 
        end
    end

    def update
        ewaste = Ewaste.find_by(id: params[:id])
        ewaste.update!(ewaste_params)
        render json: ewaste
    end

    private
    
    def ewaste_params
        params.permit(:name,:condition,:user_id, :request_id, :category_id,:image)
    end

    def current_user
        User.find_by(id: params[:user_id])
    end
end
