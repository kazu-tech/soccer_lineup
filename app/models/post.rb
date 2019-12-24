class Post < ApplicationRecord
  validates :date, :match, :result, presence: true
end
