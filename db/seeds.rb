require 'faker'
require 'open-uri'

ActiveRecord::Base.transaction do 

    Activity.destroy_all
    User.destroy_all
    Space.destroy_all

    activities = Activity.create!([
        {name: 'Meetings'},
        {name: 'Film Shoots'},
        {name: 'Birthday Parties'},
        {name: 'Photo Shoots'},
        {name: 'Workshops'},
        {name: 'Baby Shower'},
        {name: 'Dinners'},
        {name: 'Weddings'},
        {name: 'Team Offsites'},
        {name: 'Launch Parties'},
        {name: 'Outdoor Events'},
        {name: 'Performances'},
        {name: 'Corporate Event'},
        {name: 'Networking'},
        {name: 'Party'},
        {name: 'Fitness Class'},
        {name: 'Retreat'}
    ])



    10.times do
        user =  {
            first_name: Faker::Name.first_name,
            last_name: Faker::Name.last_name,
            phone_number: Faker::Number.number(digits: 10).to_s,
            company_name: Faker::Company.name,
            job_title: Faker::Job.title,
            email: Faker::Internet.email,
            password: 'orfelinda'
        }
        User.create!(user)
    end

    # Creating the demo user

    user1 = User.create!(
        first_name: 'Sebastian',
        last_name: 'Mendo',
        phone_number: 4156404613,
        company_name: 'App Academy',
        job_title: 'Software Engineer',
        email: 'sebastian.mendo1995@gmail.com',
        password: 'orfelinda'
    )



    all_users = User.all

    all_users.each do |user|
        url ="https://peerspace-seeds.s3-us-west-1.amazonaws.com/profile/user.png"
        file = open(url)
        user.photo.attach(io:file, filename: "user.png") 
    end
    
    users = User.all.map(&:id)

    minN = 37.804616,
    maxN = 37.713392,
    maxW = -122.389641,
    minW = -122.511152,

    spaces = []

    120.times do
        newTitle = "#{activities.sample().name} #{Faker::Book.title}"
        space = Space.new(
            host_id: users.sample(),
            address: Faker::Address.street_name,
            unit: Faker::Address.building_number,
            city: Faker::Address.city,
            state: Faker::Address.state_abbr,
            zip_code: Faker::Address.zip_code,
            title: newTitle,
            description: Faker::Lorem.characters(number: 280),
            square_ft: rand(150..1000),
            rules: 'Our space is a free-spirited space, but if you are looking to throw a late-night party, we do require security booked through us. Outside food and drinks are more than welcome. Please help us recycle though! ',
            wifi: "Name=#{Faker::Internet.username } Password=#{Faker::Internet.password(min_length: 6)}",
            access: Faker::Lorem.characters(number: 100),
            monday: Faker::Boolean.boolean(true_ratio: 0.8),
            tuesday: Faker::Boolean.boolean(true_ratio: 0.8),
            wednesday: Faker::Boolean.boolean(true_ratio: 0.8),
            thursday: Faker::Boolean.boolean(true_ratio: 0.8),
            friday: Faker::Boolean.boolean(true_ratio: 0.8),
            saturday: Faker::Boolean.boolean(true_ratio: 0.8),
            sunday: Faker::Boolean.boolean(true_ratio: 0.8),
            open_time: '08:00',
            close_time: '18:00',
            notice: Faker::Number.between(from: 1, to: 20),
            price: Faker::Number.between(from: 100, to: 500),
            lat: "#{Faker::Number.between(from: 37, to: 37)}.#{Faker::Number.between(from: 713392, to: 797677)}".to_f,
            lng: "-122.#{Faker::Number.between(from: 389641, to: 511152)}".to_f,
            capacity: Faker::Number.between(from: 5, to: 200),
            activity_ids: activities.sample(3).map(&:id)
        )
        spaces << space
    end

    spaces.each_with_index do |space, idx|
        num = idx%7 + 1

        4.times do |i|
            a = i+1
            url = "https://peerspace-seeds.s3-us-west-1.amazonaws.com/spaces/space#{num}/space#{num}_#{a}.jpg"
            file = open(url)
            space.photos.attach(io: file, filename: "space#{num}_#{a}.jpg")
        end
        
        space.save!
    end

    all_spaces = Space.all

    all_spaces.each do |space|
        5.times do |i|
            Review.create!(
                title: 'This is a review Title',
                body: Faker::Restaurant.review,
                rebooking: Faker::Boolean.boolean(true_ratio: 0.8),
                rating: Faker::Number.between(from: 1, to: 5),
                space_id: space.id,
                user_id: users.sample()
            )
        end
    end

end