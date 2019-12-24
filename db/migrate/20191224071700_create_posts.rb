class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.date :date
      t.string :match
      t.string :result
      t.string :formation
      t.string :num11
      t.string :num10
      t.string :num9
      t.string :num8
      t.string :num7
      t.string :num6
      t.string :num5
      t.string :num4
      t.string :num3
      t.string :num2
      t.string :num1
      t.string :team_id
      t.timestamps
    end
  end
end
