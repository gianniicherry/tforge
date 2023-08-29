class EwastesController < ApplicationController
    before_action :authorize

    def create
        ewaste = Ewaste.create!(ewaste_params)
        render json: ewaste, status: :created
    end

    def update
        ewaste = Ewaste.find_by(id: params[:id])
        ewaste.update!(ewaste_params)
        render json: ewaste
    end

    def destroy
        ewaste = Ewaste.find_by(id: params[:id])
        current_user = User.find_by(id: session[:user_id])
        if current_user && ewaste && current_user.id == ewaste.user_id
        ewaste.destroy
        head :no_content
        else
        render json: {error: "Not Authorized"}, status: :unauthorized
        end 
    end

    private
    
    def ewaste_params
        params.permit(:id,:name,:condition,:user_id, :request_id, :category_id,:image)
    end

    def current_user
        User.find_by(id: params[:user_id])
    end
end
