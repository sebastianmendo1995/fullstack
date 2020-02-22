@reviews.each do |review|
    json.set! review.id do
        json.partial! 'review', review: review
        json.user review.user
    end
end