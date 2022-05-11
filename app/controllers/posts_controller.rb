class PostsController < ApplicationController
  def create
    @post = Post.new(description: params[:description], image: params[:image], user_id: Current.user.id)

    if @post.save
      @posts = Current.user.posts.order("created_at DESC")
    end
  end

  def index
    @posts = Post.all.order("created_at DESC")
  end
end
