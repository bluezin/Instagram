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
class User < ApplicationRecord
  has_many :posts
  belongs_to :search

  has_secure_password
  validates :email, presence: true, format: { with: /\A[^@\s]+@[^@\s]+\z/ }

  def self.from_omniauth(auth)
    #Creates a new user only if it doesn't exist
    where(email: auth.info.email).first_or_initialize do |user|
      user.user_name = auth.info.name
      user.email = auth.info.email
      if auth.info.uid
        user.uid = auth.info.uid
      end
      user.password = SecureRandom.hex
    end
  end
end
