class CreateReceipes < ActiveRecord::Migration[6.1]
  def change
    create_table :receipes do |t|
      t.string :name
      t.timestamps
    end
  end
end
