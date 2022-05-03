class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = Current.user
    @posts = Post.all
  end

  def search_results(search_id, text)
    @search = Search.find(search_id)

    if @search.valid?
      @users = User.find_by("name ILIKE ?", "%#{text}%")

      if !@users.nil?
        @search.update(results: @search.results << @users) if !@search.results.include?(@users.as_json)
      end
    end
  end
end
