json.array! @histories do |history|
  json.id history.id
  json.created_at history.created_at
  json.updated_at history.created_at
  json.image history.image
  json.video history.video
  json.user User.find(history.user_id), :image, :id, :name
end
