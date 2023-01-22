class CreateNfts < ActiveRecord::Migration[6.1]
  def change
    create_table :nfts do |t|
      t.string :name
      t.string :image
      t.string :description
      t.integer :price
      t.boolean :for_sale

      t.timestamps
    end
  end
end
