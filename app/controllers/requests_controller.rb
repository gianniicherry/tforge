class RequestsController < ApplicationController
    before_action :authorize
    skip_before_action :authorize, only: [:index]
    

    def create
            request = Request.create!(request_params)
            render json: request, status: :created
    end

    def index 
        current_user
        requests = Request.all
        if requests.any?
            render json: requests
        else 
            render json: {error: "No requests for #{current_user} found." }, status: :not_found
        end
    end

    private
    def current_user
        User.find_by(id: params[:user_id])
    end

    def request_params
        params.permit(:address1,:address2,:city,:state,:zip,:user_id)
    end
end
