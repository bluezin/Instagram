class SearchController < ApplicationController
  def search_results
    @search = Search.find(params[:search_id])

    if @search.valid?
      @users = User.find_by("name ILIKE ?", "%#{params[:text]}%")

      if !@users.nil?
        @search.update(results: @search.results << @users) if !@search.results.include?(@users.as_json)
      end
    end
  end


  private
  def search_params
    params.permit(:text, :search_id)
  end
end
