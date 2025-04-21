const hotelsData = [
  {
    id: 1,
    name: "The Oberoi Udaivilas",
    location: "Udaipur, Rajasthan",
    description: "Luxury hotel on the bank of Lake Pichola offering breathtaking views of the lake, City Palace and Jag Mandir.",
    longDescription: "Experience the splendor of royal Rajasthan at The Oberoi Udaivilas. Spread over 50 acres on the banks of Lake Pichola, this luxury hotel offers a truly unique experience with its grand architecture inspired by the palaces of Mewar. The hotel boasts private courtyards and lakeside dining pavilions that offer spectacular views. The rooms feature traditional decor with modern amenities, private terraces, and some have semi-private pools.",
    type: "Luxury",
    price: "$$$",
    rating: 5,
    amenities: ["Swimming Pool", "Spa", "Fitness Center", "Multiple Restaurants", "Lake View", "Royal Architecture"],
    image: "https://images.unsplash.com/photo-1566073771259-6a8506099945",
    gallery: [
      "https://images.unsplash.com/photo-1594143041021-aad66ef34f93",
      "https://images.unsplash.com/photo-1602002418539-1953e79563e7",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
    ]
  },
  {
    id: 2,
    name: "Taj Lake Palace",
    location: "Udaipur, Rajasthan",
    description: "Floating marble palace in the middle of Lake Pichola with royal heritage and luxury amenities.",
    longDescription: "The Taj Lake Palace in Udaipur, is one of the most romantic hotels in the world. Located on a natural island in the middle of Lake Pichola, this 250-year-old palace offers guests a truly royal experience. The white marble palace seems to float on the lake's calm waters and offers spectacular views of the surrounding city palace, Aravalli Hills, Machla Magra hills, and Jag Mandir. The rooms are luxuriously appointed with fine period furniture, exquisite silk fabrics, and ornate architectural details.",
    type: "Heritage",
    price: "$$$",
    rating: 5,
    amenities: ["Lake Views", "Royal Architecture", "Multiple Restaurants", "Spa", "Boat Transport", "Cultural Programs"],
    image: "https://images.unsplash.com/photo-1463620910506-d0458143143e",
    gallery: [
      "https://images.unsplash.com/photo-1600011689098-8a32efe24628",
      "https://images.unsplash.com/photo-1601701119533-fde20cecbf4e",
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd"
    ]
  },
  {
    id: 3,
    name: "The Leela Palace",
    location: "New Delhi, Delhi",
    description: "Opulent 5-star hotel with spacious rooms, multiple dining options, and a spa.",
    longDescription: "The Leela Palace New Delhi represents the magnificent architecture, grace, and elegance of Lutyens' Delhi. This luxury hotel offers 254 spacious guestrooms and suites, which are among the largest in the city. Located in the diplomatic enclave, the hotel is close to the Presidential Palace, Prime Minister's office, and many international embassies. The Leela Palace New Delhi features multiple dining options including acclaimed restaurants serving Indian, Japanese, Italian, and international cuisines.",
    type: "Luxury",
    price: "$$$",
    rating: 5,
    amenities: ["Rooftop Pool", "Spa", "Fitness Center", "Multiple Restaurants", "Butler Service", "Art Collection"],
    image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa",
    gallery: [
      "https://images.unsplash.com/photo-1615460549969-36fa19521a4f",
      "https://images.unsplash.com/photo-1578681041665-46244e70b8df",
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
    ]
  },
  {
    id: 4,
    name: "Taj Mahal Palace",
    location: "Mumbai, Maharashtra",
    description: "Iconic 5-star luxury hotel with sea views, multiple restaurants, and colonial-era charm.",
    longDescription: "The Taj Mahal Palace is Mumbai's first harbor landmark and has been the residence of choice for maharajas, dignitaries, and high-profile guests from around the world for over a century. With its unique blend of nostalgia and modernity, this historic hotel features 285 luxurious rooms and suites, each offering a mix of old-world elegance and modern facilities. Overlooking the Gateway of India and the Arabian Sea, the hotel boasts 10 restaurants and bars offering everything from authentic Indian cuisine to international fine dining.",
    type: "Heritage",
    price: "$$$",
    rating: 5,
    amenities: ["Sea View", "Heritage Architecture", "Multiple Restaurants", "Spa", "Swimming Pool", "Art Gallery"],
    image: "https://images.unsplash.com/photo-1527511624584-388b58b9620b",
    gallery: [
      "https://images.unsplash.com/photo-1562790351-d273a961e0e9",
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6",
      "https://images.unsplash.com/photo-1551632436-cbf8dd35adfa"
    ]
  },
  {
    id: 5,
    name: "Zostel Varanasi",
    location: "Varanasi, Uttar Pradesh",
    description: "Popular backpacker hostel with Ganges River views, offering both dorms and private rooms.",
    longDescription: "Zostel Varanasi offers travelers a comfortable and affordable stay with a prime location near the ghats of the sacred Ganges River. This vibrant hostel features clean dormitories as well as private rooms, all designed with colorful, contemporary decor that incorporates local artistic elements. The rooftop café provides stunning views of the Ganges and serves a variety of Indian and international dishes. The hostel organizes walking tours, boat rides, and cultural experiences to help guests explore the spiritual city of Varanasi.",
    type: "Hostel",
    price: "$",
    rating: 4,
    amenities: ["River Views", "Rooftop Cafe", "Free WiFi", "Common Areas", "Tour Desk", "24-hour Reception"],
    image: "https://images.unsplash.com/photo-1596436889106-be35e843f974",
    gallery: [
      "https://images.unsplash.com/photo-1578683010236-d716f9a3f461",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd",
      "https://images.unsplash.com/photo-1629140727571-9b5c6f6267b4"
    ]
  },
  {
    id: 6,
    name: "Neemrana Fort Palace",
    location: "Alwar, Rajasthan",
    description: "15th-century heritage fort converted into a luxury hotel with period furnishings and panoramic views.",
    longDescription: "Neemrana Fort Palace is a 15th-century heritage resort spread over 25 acres of gardens and built on a hillside. This magnificent medieval fort has been painstakingly restored and offers an extraordinary experience of staying in a historic structure while enjoying modern amenities. The palace features 77 rooms and suites, each uniquely designed and maintaining the charm of the original architecture. The property boasts hanging gardens, two swimming pools, an amphitheater, multiple restaurants, and even India's first zip-line experience.",
    type: "Heritage",
    price: "$$",
    rating: 4.5,
    amenities: ["Swimming Pools", "Fort Architecture", "Ayurvedic Spa", "Zip Line", "Multiple Restaurants", "Panoramic Views"],
    image: "https://images.unsplash.com/photo-1548013146-72479768bada",
    gallery: [
      "https://images.unsplash.com/photo-1533551037358-c8f7182cdb79",
      "https://images.unsplash.com/photo-1613977257363-707ba9348227",
      "https://images.unsplash.com/photo-1582719508461-905c673771fd"
    ]
  },
  {
    id: 7,
    name: "The Park Calangute",
    location: "Goa",
    description: "Contemporary beachfront hotel with stylish rooms, a pool, and vibrant dining options.",
    longDescription: "The Park Calangute is a stylish boutique hotel located near the popular Calangute Beach in Goa. This contemporary property features 30 well-appointed rooms and suites with modern amenities and vibrant decor inspired by Goa's Portuguese heritage and beach culture. The hotel boasts a swimming pool surrounded by sun loungers, perfect for relaxation after a day at the beach. The on-site restaurant serves a mix of local Goan specialties, Indian cuisine, and international favorites, while the bar offers creative cocktails in a lively atmosphere.",
    type: "Boutique",
    price: "$$",
    rating: 4,
    amenities: ["Swimming Pool", "Near Beach", "Restaurant & Bar", "Free WiFi", "Room Service", "Bicycle Rental"],
    image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
    gallery: [
      "https://images.unsplash.com/photo-1582719508461-905c673771fd",
      "https://images.unsplash.com/photo-1564501049412-61c2a3083791",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d"
    ]
  },
  {
    id: 8,
    name: "Spice Tree Munnar",
    location: "Munnar, Kerala",
    description: "Eco-friendly mountain retreat with private jacuzzis and stunning views of tea plantations.",
    longDescription: "Spice Tree Munnar is a luxurious mountain retreat nestled in the Western Ghats of Kerala, surrounded by cardamom and tea plantations. This eco-friendly boutique resort offers spacious suites and pool villas, many featuring private jacuzzis with panoramic mountain views. Built using local materials and sustainable practices, the property blends harmoniously with its natural surroundings. The resort's amenities include a mountain-view infinity pool, a spa offering traditional Ayurvedic treatments, yoga sessions, and a restaurant serving authentic Kerala cuisine prepared with fresh, organic ingredients.",
    type: "Resort",
    price: "$$",
    rating: 4.5,
    amenities: ["Mountain Views", "Infinity Pool", "Ayurvedic Spa", "Private Jacuzzis", "Organic Restaurant", "Eco-friendly"],
    image: "https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e",
    gallery: [
      "https://images.unsplash.com/photo-1584132967334-10e028bd69f7",
      "https://images.unsplash.com/photo-1544194215-541c2d3561a4",
      "https://images.unsplash.com/photo-1602002418539-1953e79563e7"
    ]
  },
  {
    id: 9,
    name: "Ginger Delhi",
    location: "New Delhi, Delhi",
    description: "Modern budget hotel offering clean, comfortable rooms with essential amenities.",
    longDescription: "Ginger Delhi is a contemporary budget hotel that provides comfortable accommodation with all the essential amenities for business and leisure travelers. Located in the heart of Delhi with easy access to major attractions and business districts, the hotel features clean, well-designed rooms with modern furnishings, air conditioning, and free WiFi. The property includes a multi-cuisine restaurant serving breakfast, lunch, and dinner, as well as a fitness center and meeting rooms. Ginger Delhi emphasizes efficiency, comfort, and value, making it an ideal choice for budget-conscious travelers.",
    type: "Budget",
    price: "$",
    rating: 3.5,
    amenities: ["Free WiFi", "Air Conditioning", "Restaurant", "Fitness Center", "24-hour Reception", "Meeting Rooms"],
    image: "https://images.unsplash.com/photo-1629794226066-349748040fb7",
    gallery: [
      "https://images.unsplash.com/photo-1575429198097-0414ec08e8cd",
      "https://images.unsplash.com/photo-1587527901949-ab0341697c1e",
      "https://images.unsplash.com/photo-1541971875076-8f970d573be6"
    ]
  },
  {
    id: 10,
    name: "Taj Exotica Resort & Spa",
    location: "Andaman Islands",
    description: "Luxury beachfront resort with private villas, world-class dining, and water activities.",
    longDescription: "Taj Exotica Resort & Spa in the Andaman Islands is a luxury beach resort set on the pristine Radhanagar Beach on Havelock Island. This eco-friendly resort features 50 luxurious villas built on stilts under a canopy of coconut and palmyra trees, each with a private deck offering stunning views of the turquoise lagoon. The resort was designed with minimal impact on the environment and blends harmoniously with the natural surroundings. Guests can enjoy a range of dining options featuring fresh seafood and local ingredients, an expansive spa offering Ayurvedic treatments, and various water activities including snorkeling, diving, and kayaking in the crystal-clear waters.",
    type: "Resort",
    price: "$$$",
    rating: 5,
    amenities: ["Beachfront", "Private Villas", "Spa", "Water Sports", "Multiple Restaurants", "Eco-friendly"],
    image: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf",
    gallery: [
      "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4",
      "https://images.unsplash.com/photo-1610641818989-c2051b5e2cfd",
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d"
    ]
  }
];

export default hotelsData; 