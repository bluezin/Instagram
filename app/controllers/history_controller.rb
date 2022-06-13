class HistoryController < ApplicationController
  def index
    @histories = History.all
  end

  def create
    image_history = params[:history][:url_image]
    video_history = params[:history][:url_video]
    history = History.find_by(user_id: Current.user.id)

    if history.nil?
      History.create(user_id: Current.user.id, image: [image_history], video: [video_history])
      render json: "Congratulations, your story was created, and an email was sent to you, check it out!!"
    else
      history.update(image: history.image << image_history) if image_history.present?
      history.update(video: history.video << video_history) if video_history.present?
      render json: "Congratulations, your story was updated, and an email was sent to you, check it out!!"
    end
  end
end
