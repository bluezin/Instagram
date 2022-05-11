json.array! @posts do |post|
  json.user User.find(post.user_id), :id, :name, :image
  json.created_at post.created_at
  json.description post.description
  json.id post.id
  json.image post.image

  json.comments post.comments do |comment|
    json.id comment.id
    json.content comment.content
    json.created_at comment.created_at
    json.user User.find(comment.user_id), :id, :name
  end
  json.likes post.likes
end
