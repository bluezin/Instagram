# == Schema Information
#
# Table name: posts
#
#  id                 :bigint           not null, primary key
#  description        :text
#  user_id            :bigint
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#
class Post < ApplicationRecord
  has_one_attached :image
  has_attached_file :image
  has_many :comments
  has_many :likes

  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
