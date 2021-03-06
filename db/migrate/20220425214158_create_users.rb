class CreateUsers < ActiveRecord::Migration[6.0]
  def change
    create_table :users do |t|
      t.string :email, :null =>  false
      t.string :name, :null =>  false
      t.string :password_digest, :null => false
      t.string :uid
      t.string :google_token
      t.string :google_refresh_token
      t.string :image
      t.references :search

      t.timestamps
    end
  end
end
