class CreateIngredients < ActiveRecord::Migration[6.1]
  def change
    create_table :ingredients do |t|
      t.string :name
      t.float :weight
      t.float :carb
      t.float :protein
      t.float :fat
      t.references :recipe
      t.timestamps
    end
  end
end

