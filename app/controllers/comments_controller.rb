class CommentsController < ApplicationController
  def create
    @comment = Comment.new(content: params[:content], user_id: Current.user.id, post_id: params[:post_id])

    if @comment.save
      redirect_to "/"
    end
  end
end
