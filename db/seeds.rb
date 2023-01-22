puts "seeding users "

10.times {
    User.create(
        user_name: Faker::Internet.username,
        first_name: Faker::Name.first_name,
        last_name: Faker::Name.last_name,
        email: Faker::Internet.free_email,
        avatar: Faker::Avatar.image
        )
}

puts "done seeding users "

puts "seeding NFTs "

10.times{
    Nft.create(
        name: Faker::Superhero.name,
        image: Faker::Avatar.image,
        description: Faker::Quote.most_interesting_man_in_the_world,
        price: rand(500..20000),
        for_sale: Faker::Boolean.boolean
        )
}

puts "done seeding nft "

puts "seeding reviews "

10.times {
    Review.create(
        user_id: rand(1..10), 
        nft_id: rand(1..10), 
        body:Faker::Hipster.sentences(number: 1),
        likes: 0
        )
}

puts "done seeding "

