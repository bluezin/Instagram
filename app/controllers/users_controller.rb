class UsersController < ApplicationController
  before_action :check_user, except: [:logout]

  def new
    @user = User.new
  end

  def register
  end

  def sign_in
    @user = User.find_by(email: params_user[:email])

    if @user.present? && @user.authenticate(params[:password])
      session[:user_id] = @user.id

      redirect_to '/'
    end
  end

  def sign_up
    @user = User.new(params_user)

    if @user.save
      session[:user_id] = @user.id

      redirect_to "/"
    end
  end


  def logout
    session[:user_id] = nil

    redirect_to users_new_path
  end

  def omniauth
    @user = User.find_or_create_by(uid: auth['uid']) do |user|
      user.name = auth['info']['name']
      user.email = auth['info']['email']
      user.image = auth['info']['image']
      access_token = auth
      user.google_token = auth.credentials.token
      refresh_token = auth.credentials.refresh_token
      user.google_refresh_token = refresh_token if refresh_token.present?
      user.password = SecureRandom.urlsafe_base64
    end
    log_in @user
    redirect_to "/"
  end

  def auth
    request.env['omniauth.auth']
  end

  private

  def params_user
    params.permit(:email, :name, :password, :password_confirmation)
  end
end
