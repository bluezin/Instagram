class CreateSearches < ActiveRecord::Migration[6.0]
  def change
    create_table :searches do |t|
      t.jsonb :results, array: true, default: []
      t.timestamps
    end
  end
end
