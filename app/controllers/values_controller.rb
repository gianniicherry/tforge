class ValuesController < ApplicationController
    before_action :authorize
    def estimate
        request = Request.find_by(id: params[:request_id])
        values = request.ewastes.map do |e|
          if e.condition == "Perfect" || e.condition == "Slight wear"
            (e.category.price * 0.5).round(2)
          else
            (e.category.weight * 0.7).round(2)
          end
        end
        total_value = values.sum
    
        render json: { values: values, total_value: total_value }
      end
end
