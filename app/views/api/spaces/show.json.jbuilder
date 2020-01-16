
json.partial! 'space', space: @space
json.photoUrls @space.photos.map { |file| url_for(file) }
json.activityIds @space.activity_ids


