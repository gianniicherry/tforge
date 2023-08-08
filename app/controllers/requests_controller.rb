class RequestsController < ApplicationController
    before_action :authorize

    def create
            request = Request.create!(request_params)
            render json: request, status: :created
    end

    private
    def current_user
        User.find_by(id: params[:user_id])
    end

    def request_params
        params.permit(:address1,:address2,:city,:state,:zip,:user_id)
    end
end
