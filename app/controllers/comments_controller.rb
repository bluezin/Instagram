class CommentsController < ApplicationController
  def create
    comment = Comment.new(content: params[:content], user_id: Current.user.id, post_id: params[:post_id])

    if comment.save
      @comments = Post.find(params[:post_id]).comments
    end
  end
end
