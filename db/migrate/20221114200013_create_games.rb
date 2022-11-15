class CreateGames < ActiveRecord::Migration[6.1]
  def change
    create_table :games do |t|
      t.string :title
      t.string :platform
      t.boolean :rented
      t.string :image 

      t.timestamps
    end
  end
end
