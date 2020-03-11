json.partial! 'api/users/user', user: @user
json.photoUrl url_for(@user.photo)
json.spaces do
    @user.spaces.each do |space|
        json.set! space.id do
            json.extract! space, :id, :host_id, :address, :unit, :city, :state, :zip_code, :title, :description, 
            :square_ft,:rules, :wifi, :access, :monday, :tuesday, :wednesday, :thursday, :friday, :saturday,
            :sunday, :open_time, :close_time, :notice, :price, :lat, :lng, :capacity
            json.photoUrls space.photos.map { |file| url_for(file) }
        end
    end
end