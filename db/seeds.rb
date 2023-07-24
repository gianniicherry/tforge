# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
categories = [
  { name: 'Laptop', brand: "Apple", weight: 3 },
  { name: 'Laptop', brand: "Dell", weight: 3.6 },
  { name: 'Laptop', brand: "HP", weight: 3.31 },
  { name: 'Laptop', brand: "Lenovo", weight: 3.31 },
  { name: 'Laptop', brand: "Microsoft", weight: 2.47 },
  { name: 'Laptop', brand: "Asus", weight: 4.47 },
  { name: 'Laptop', brand: "Acer", weight: 3.69 },
  { name: 'Laptop', brand: "Razer", weight: 5.5 },
  { name: 'Smartphone', brand: "Apple", weight: 0.5 }, 
  { name: 'Smartphone', brand: "Samsung", weight: 0.4 },
  { name: 'Smartphone', brand: "LG", weight: 0.3 },
  { name: 'Smartphone', brand: "Google", weight: 0.4 },
  { name: 'Tablet' , brand: "Apple", weight: 1.5},
  { name: 'Smartphone', brand: "Other", weight: 0.5 },
  { name: 'Laptop', brand: "Other", weight: 3.6 },
  { name: 'Tablet', brand: "Other", weight: 3.6 },


]
categories.each { |c| Category.create(c) }


brands = [
    {name: 'Apple'},
    {name: 'Samsung'},
    {name: 'Dell'},
    {name: 'Lenovo'},
    {name: 'HP'},
    {name: 'Google'},
    {name: 'Other'},
]
brands.each {|b| Brand.create(b)}


products = [
    {name: 'Iphone', category_id: 3, brand_id: 1},
    {name: 'Galaxy', category_id: 3, brand_id: 2},
    {name: 'Other', category_id: 3, brand_id: 1},

]