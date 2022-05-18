class ProfilesController < ApplicationController
  def index
    new_res = {}
    @user = Current.user
    @post = @user.posts.find_by(id: params[:post])

    render json: { user: @user, posts: @user.posts }
  end
end
