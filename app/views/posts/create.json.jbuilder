json.array! @posts do |post|
  json.user User.find(post.user_id), :id, :name, :image
  json.created_at post.created_at
  json.description post.description
  json.id post.id
  json.image post.image
  json.comments post.comments
  json.likes post.likes
end
