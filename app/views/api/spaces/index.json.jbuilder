@spaces.each do |space|
  json.set! space.id do
    json.partial! 'space', space: space
  end
  json.photoUrls space.photos.map { |file| url_for(file) }
end
