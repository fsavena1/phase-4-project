class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.belongs_to :user, null: false, foreign_key: true
      t.belongs_to :nft, null: false, foreign_key: true
      t.string :body
      t.integer :likes

      t.timestamps
    end
  end
end
