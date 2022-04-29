class ProfilesController < ApplicationController
  def index
    @user = Current.user
    @post = @user.posts.find_by(id: params[:post])
  end
end
