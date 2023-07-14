class FallbackController < ApplicationController
    # app/controllers/fallback_controller.rb
    def index
      render file: 'public/index.html'
    end
end
