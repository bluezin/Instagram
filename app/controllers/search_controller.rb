class SearchController < ApplicationController
  def index
    search = Search.find(params[:search_id])
    render json: search.results
  end

  def search_results
    search = Search.find(params[:search_id])

    render json: "Search ID is in valid"  if !search.valid?

    users = User.find_by("name ILIKE ?", "%#{params[:text]}%") if !params[:text].nil?

    if search.results.include?(users.as_json) == false && !users.nil?
      search.update(results: search.results << users)
      render json: search.results
    else
      render json: search.results
    end
  end
end
