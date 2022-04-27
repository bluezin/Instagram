class ProfilesController < ApplicationController
  def index
    @user = Current.user
  end
end
