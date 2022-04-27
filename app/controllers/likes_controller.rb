class LikesController < ApplicationController
  def create
    @like = Like.new(user_id: Current.user.id, post_id: params[:post_id])

    @like.save
    redirect_to '/'
  end

  def destroy
    @post = Post.find_by(id: params[:post_id])

    if @post.present?
      @like_post = @post.likes.find_by(user_id: Current.user.id)

      if @like_post.present?
        @like_post.destroy
        redirect_to '/'
      end
    end
  end
end
