# == Schema Information
#
# Table name: searches
#
#  id         :bigint           not null, primary key
#  results    :jsonb            is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Search < ApplicationRecord
end
