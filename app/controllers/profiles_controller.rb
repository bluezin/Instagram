class ProfilesController < ApplicationController
  def index
    @user = Current.user
    @post = @user.posts.find_by(id: params[:post])
    render json: @user
  end
end
