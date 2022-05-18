class HomeController < ApplicationController
  before_action :authenticate_user!

  def index
    @user = Current.user
    @posts = Post.all
  end

end
