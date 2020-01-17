
json.partial! 'space', space: @space
json.photoUrls @space.photos.map { |file| url_for(file) }
json.activityIds @space.activity_ids
json.hostFirstName @space.host.first_name
json.hostLastName @space.host.last_name

