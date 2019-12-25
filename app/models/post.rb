class Post < ApplicationRecord
  validates :date, :match, :result, presence: true
  belongs_to :user
end
