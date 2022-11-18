class AddDayToRentals < ActiveRecord::Migration[6.1]
  def change
    add_column :rentals, :day, :integer
  end
end
