json.set! :spaces do
  @spaces.each do |space|
    json.set! space.id do
      json.partial! 'space', space: space
      json.photoUrls space.photos.map { |file| url_for(file) }
      json.activityIds space.activity_ids
      json.reviews space.reviews
    end
  end
end

json.set! :total_pages do
  json.total_pages @spaces.total_pages
end