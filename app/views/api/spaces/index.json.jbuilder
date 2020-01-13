@spaces.each do |space|
  json.set! space.id do
    json.partial! 'space', space: space
    json.photoUrls space.photos.map { |file| url_for(file) }
    json.activityIds space.activities
  end
end
