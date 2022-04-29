class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  include UsersHelper
  before_action :current_user

  def authenticate_user!
    if Current.user.nil?
      redirect_to users_new_path
    end
  end

  def current_user
    if session[:user_id]
      Current.user = User.find_by(id: session[:user_id])
    end
  end

  def check_user
    if Current.user.present?
      redirect_to "/"
    end
  end
end
