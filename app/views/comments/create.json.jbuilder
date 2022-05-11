json.array! @comments do |comment|
  json.content comment.content
  json.created_at comment.created_at
  json.id comment.id
  json.like comment.like
  json.user User.find(comment.user_id), :id, :name, :image
end
