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

  private

  def params_user
    params.permit(:email, :name, :password, :password_confirmation)
  end
end
