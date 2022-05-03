# == Schema Information
#
# Table name: users
#
#  id                   :bigint           not null, primary key
#  email                :string           not null
#  name                 :string           not null
#  password_digest      :string           not null
#  uid                  :string
#  google_token         :string
#  google_refresh_token :string
#  image                :string
#  search_id            :bigint
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
