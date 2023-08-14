# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)
categories = [
  { name: 'Laptop', brand: "Apple", weight: 3, price: 1000 },
  { name: 'Laptop', brand: "Dell", weight: 3.6, price: 899},
  { name: 'Laptop', brand: "HP", weight: 3.31, price: 549 },
  { name: 'Laptop', brand: "Lenovo", weight: 3.31, price: 749 },
  { name: 'Laptop', brand: "Microsoft", weight: 2.47, price: 449 },
  { name: 'Laptop', brand: "Asus", weight: 4.47, price: 450 },
  { name: 'Laptop', brand: "Acer", weight: 3.69, price: 500 },
  { name: 'Laptop', brand: "Razer", weight: 5.5, price: 1000 },
  { name: 'Smartphone', brand: "Apple", weight: 0.5, price: 799 }, 
  { name: 'Smartphone', brand: "Samsung", weight: 0.4, price: 649 },
  { name: 'Smartphone', brand: "LG", weight: 0.3, price: 599 },
  { name: 'Smartphone', brand: "Google", weight: 0.4, price: 449 },
  { name: 'Tablet' , brand: "Apple", weight: 1.5, price: 449},
  { name: 'Other', brand: "Other", weight: 3, price: 20 },

  


]
categories.each { |c| Category.create(c) }
