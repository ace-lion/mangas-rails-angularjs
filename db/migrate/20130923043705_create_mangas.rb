class CreateMangas < ActiveRecord::Migration
  def change
    create_table :mangas do |t|
      t.string :nombre

      t.timestamps
    end
  end
end
