# == Schema Information
#
# Table name: searches
#
#  id         :bigint           not null, primary key
#  results    :jsonb            is an Array
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
require 'test_helper'

class SearchTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
