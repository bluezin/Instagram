class PostsController < ApplicationController
  def create
    @post = Post.new(description: params[:description], image: params[:image], user_id: Current.user.id)

    if @post.save
      flash[:notice] = "New post"
      redirect_to '/'
    end
  end

  def index
    @posts = Post.all
  end
end
