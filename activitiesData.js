const activitiesData = [
  {
    id: 1,
    name: "Taj Mahal Visit",
    location: "Agra, Uttar Pradesh",
    category: "Historical",
    description: "Visit one of the world's most iconic monuments, a UNESCO World Heritage site and a symbol of eternal love.",
    longDescription: "The Taj Mahal is an ivory-white marble mausoleum on the southern bank of the river Yamuna in the Indian city of Agra. It was commissioned in 1632 by the Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal. The tomb is the centerpiece of a 17-hectare complex, which includes a mosque and a guest house, and is set in formal gardens bounded on three sides by a crenellated wall. For its construction, materials from all over India and Asia were used, and over 20,000 artisans were employed under the guidance of the emperor's chief architect, Ustad Ahmad Lahori.",
    duration: "2-3 hours",
    bestTime: "Sunrise for fewer crowds and beautiful lighting",
    price: "$$",
    bookingInfo: "Entry tickets can be purchased online or at the gate. Foreign tourists pay a higher fee than Indian nationals.",
    image: "https://images.unsplash.com/photo-1564507592333-c60657eea523",
    tips: [
      "Visit early in the morning to avoid crowds",
      "Bring a wide-angle lens for photography",
      "Hire a guide to learn about the history and architecture",
      "Be prepared for security checks at the entrance"
    ]
  },
  {
    id: 2,
    name: "Kerala Backwater Cruise",
    location: "Alleppey, Kerala",
    category: "Nature",
    description: "Cruise through the serene backwaters of Kerala on a traditional houseboat, enjoying beautiful landscapes and village life.",
    longDescription: "The Kerala backwaters are a network of interconnected canals, rivers, lakes, and inlets, formed by more than 900 km of waterways. The backwater cruise in a traditional houseboat (kettuvallam) is one of the most peaceful and relaxing ways to experience the beauty of Kerala. These houseboats were once used to transport rice and spices but have now been converted into comfortable floating accommodations. As you cruise along the backwaters, you'll witness rural Kerala life, lush paddy fields, coconut groves, and small villages. The houseboats typically come with a crew including a captain, chef, and attendant who ensure a comfortable journey.",
    duration: "1-2 days",
    bestTime: "October to March, when the weather is pleasant",
    price: "$$",
    bookingInfo: "Houseboats can be booked through travel agencies or online. Options range from basic to luxury houseboats with air conditioning and multiple bedrooms.",
    image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944",
    tips: [
      "Book in advance during peak tourist season",
      "Opt for overnight stays to experience both sunset and sunrise",
      "Bring mosquito repellent",
      "Check if meals are included in your package"
    ]
  },
  {
    id: 3,
    name: "Goa Beach Hopping",
    location: "Goa",
    category: "Beach",
    description: "Explore Goa's beautiful beaches, from bustling tourist spots to secluded stretches of sand.",
    longDescription: "Goa, India's smallest state, is known for its stunning beaches along the Arabian Sea. With over 50 beaches stretching across its 100 km coastline, Goa offers something for every type of traveler. North Goa beaches like Baga, Calangute, and Anjuna are famous for their vibrant atmosphere, water sports, beach shacks, and nightlife. South Goa features more serene and less crowded beaches such as Palolem, Agonda, and Butterfly Beach, perfect for relaxation and natural beauty. Beach hopping in Goa allows you to experience the diverse coastal character of this popular destination, from lively party scenes to tranquil sunset views.",
    duration: "1-2 days",
    bestTime: "November to February for pleasant weather",
    price: "$",
    bookingInfo: "No booking required for beach access. Water sports and activities can be booked on-site at most popular beaches.",
    image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2",
    tips: [
      "Rent a scooter for easy transportation between beaches",
      "Visit North Goa for lively atmosphere and South Goa for serenity",
      "Be cautious of strong currents during monsoon season",
      "Try local seafood at beach shacks"
    ]
  },
  {
    id: 4,
    name: "Varanasi Ganga Aarti",
    location: "Varanasi, Uttar Pradesh",
    category: "Cultural",
    description: "Experience the spiritual evening ceremony on the banks of the Ganges River with fire, chanting, and rituals.",
    longDescription: "The Ganga Aarti is a powerful and highly choreographed ritual that takes place every evening at Dashashwamedh Ghat in Varanasi. This spiritual ceremony is performed by a group of priests dressed in traditional robes, who make offerings to the Goddess Ganga (the river), fire, and the universe. The ceremony includes the waving of large brass lamps with circular movements, accompanied by chants, bells, drums, and Sanskrit mantras. Hundreds of oil lamps are lit and set afloat on the river, creating a magical spectacle against the darkening sky. This ritual is believed to thank the river for sustaining life and seek blessings for prosperity.",
    duration: "1-2 hours",
    bestTime: "Evening, ceremony starts around 6:30-7:00 PM",
    price: "$",
    bookingInfo: "No booking required to watch from the ghats. Boat rides for viewing from the river can be arranged on-site.",
    image: "https://images.unsplash.com/photo-1561361058-c24e04e3f417",
    tips: [
      "Arrive early to secure a good viewing spot",
      "Consider watching from a boat on the river for a different perspective",
      "Be respectful of local customs and traditions",
      "Bring a camera but check if photography is permitted during all parts of the ceremony"
    ]
  },
  {
    id: 5,
    name: "Jaipur City Palace Tour",
    location: "Jaipur, Rajasthan",
    category: "Historical",
    description: "Explore the magnificent palace complex that showcases Rajput and Mughal architecture in the Pink City.",
    longDescription: "The City Palace of Jaipur is a stunning blend of Rajasthani and Mughal architectural styles, built between 1729 and 1732 by Maharaja Sawai Jai Singh II, the founder of Jaipur. The palace complex occupies nearly one-seventh of the old city area and includes several buildings, courtyards, gardens, and temples. Key attractions within the complex include the Chandra Mahal (still a royal residence), Mubarak Mahal (textile museum), Diwan-i-Khas (hall of private audience), Diwan-i-Aam (hall of public audience), and Pritam Niwas Chowk (peacock courtyard). The palace houses a museum with a collection of royal costumes, manuscripts, weapons, and other items that showcase the rich cultural heritage of the Rajput rulers.",
    duration: "2-3 hours",
    bestTime: "Morning, to avoid afternoon heat",
    price: "$$",
    bookingInfo: "Tickets can be purchased at the entrance or online. Additional fee for camera use and special exhibits.",
    image: "https://images.unsplash.com/photo-1599661046827-dacbd9eb2283",
    tips: [
      "Hire a guide to understand the historical significance of different sections",
      "Wear comfortable shoes as there is a lot of walking involved",
      "Combine with visits to nearby attractions like Jantar Mantar and Hawa Mahal",
      "Check for special exhibitions or cultural performances"
    ]
  },
  {
    id: 6,
    name: "Darjeeling Toy Train Ride",
    location: "Darjeeling, West Bengal",
    category: "Scenic",
    description: "Take a ride on the historic narrow-gauge railway with breathtaking views of the Himalayan mountains and tea plantations.",
    longDescription: "The Darjeeling Himalayan Railway, affectionately known as the 'Toy Train,' is a UNESCO World Heritage Site and one of the most remarkable engineering achievements of the colonial era. Built between 1879 and 1881, this narrow-gauge railway (2 feet wide) runs from New Jalpaiguri to Darjeeling, climbing from 100 meters to over 2,200 meters above sea level. The journey offers spectacular views of the Himalayan mountains, lush tea gardens, dense forests, and quaint villages. The train uses a unique zigzag reversal and loop line system to navigate the steep mountain terrain. While the full journey takes about 7 hours, many tourists opt for the shorter joy rides between Darjeeling and Ghum, which include a stop at the Batasia Loop and the Himalayan Railway Museum.",
    duration: "2-7 hours (depending on route chosen)",
    bestTime: "March to May, or October to November for clear mountain views",
    price: "$",
    bookingInfo: "Tickets can be booked through Indian Railways or at the Darjeeling railway station. Joy rides and full journeys available.",
    image: "https://images.unsplash.com/photo-1544953450-d20d7f19566a",
    tips: [
      "Book tickets in advance, especially during peak tourist season",
      "Opt for a morning ride for better visibility of the mountains",
      "Carry warm clothes as it can get chilly at higher altitudes",
      "Sit on the right side of the train (from Darjeeling to Ghum) for the best views"
    ]
  },
  {
    id: 7,
    name: "Rann of Kutch Festival",
    location: "Kutch, Gujarat",
    category: "Cultural",
    description: "Experience the vibrant festival held on the white salt desert during full moon nights with cultural performances and crafts.",
    longDescription: "The Rann Utsav (Festival of Rann) is a colorful and vibrant festival celebrated annually in the Great Rann of Kutch, one of the largest salt deserts in the world. This three-month-long festival showcases the cultural heritage and traditions of Gujarat and the Kutch region. During the festival, the white salt desert transforms into a carnival ground with hundreds of tents, cultural performances, handicraft bazaars, and adventure activities. Visitors can enjoy folk dances like Garba and Dandiya, traditional music performances, camel safari rides, and shopping for local handicrafts including embroidery, mirror work, and block printing. The highlight is experiencing the breathtaking view of the white desert under the full moon, creating a magical silver landscape that appears to stretch endlessly.",
    duration: "1-3 days (festival runs for 3 months from November to February)",
    bestTime: "Full moon nights for the most magical experience",
    price: "$$",
    bookingInfo: "Packages including accommodation in the tent city can be booked through the Gujarat Tourism website or authorized travel agents.",
    image: "https://images.unsplash.com/photo-1593096009696-99464adf5d6e",
    tips: [
      "Book accommodation well in advance as the tent city gets full quickly",
      "Plan your visit around the full moon night for the best experience",
      "Carry warm clothes as desert nights can be extremely cold",
      "Attend cultural performances and try the local cuisine"
    ]
  },
  {
    id: 8,
    name: "Paragliding in Bir Billing",
    location: "Bir, Himachal Pradesh",
    category: "Adventure",
    description: "Experience tandem paragliding from one of the world's highest paragliding sites with stunning Himalayan views.",
    longDescription: "Bir Billing, located in the Kangra district of Himachal Pradesh, is known as the 'Paragliding Capital of India' and is one of the best paragliding sites in the world. Billing (at 2,400 meters altitude) serves as the take-off site, while Bir (at 1,400 meters) is the landing site. The 14 km journey through the air offers breathtaking panoramic views of the Dhauladhar range of the Himalayas, lush green valleys, and picturesque villages. Tandem paragliding, where you fly with an experienced pilot, is perfect for beginners and requires no prior experience. The flight typically lasts 15-30 minutes, depending on weather conditions. Bir Billing has hosted several paragliding world championships and attracts adventure enthusiasts from across the globe.",
    duration: "30 minutes (flight time) + 1 hour (preparation and transport to take-off site)",
    bestTime: "March to May and October to November for stable weather conditions",
    price: "$$",
    bookingInfo: "Numerous operators in Bir offer tandem paragliding packages. Booking can be done on-site or in advance through their websites.",
    image: "https://images.unsplash.com/photo-1622493977868-7b8db759164e",
    tips: [
      "Check the credentials and safety record of the paragliding operator",
      "Wear comfortable clothing and sturdy shoes",
      "Book early morning flights for clearer skies and better views",
      "Consider purchasing the video recording option to capture your experience"
    ]
  },
  {
    id: 9,
    name: "Delhi Food Tour",
    location: "Delhi",
    category: "Food & Drink",
    description: "Sample the diverse street food and culinary delights of Old Delhi's bustling markets and food streets.",
    longDescription: "Delhi, particularly Old Delhi, is a paradise for food lovers with its centuries-old culinary traditions and diverse street food scene. A food tour through the narrow lanes of Chandni Chowk and surrounding areas offers an immersive experience into the rich flavors of North Indian cuisine. The tour typically includes stops at famous establishments like Paranthe Wali Gali (for stuffed flatbreads), Jalebi Wala (for sweet jalebis), Natraj Dahi Bhalle (for yogurt-based snacks), and Kuremal Mahavir Prasad Kulfiwale (for traditional Indian ice cream). You'll also get to sample chaat (savory snacks), kebabs, biryani, and various sweets while learning about their historical and cultural significance. Many tours also include visits to spice markets and demonstrations of traditional cooking methods.",
    duration: "3-4 hours",
    bestTime: "Evening, when most food stalls are open and lively",
    price: "$",
    bookingInfo: "Various tour operators offer guided food tours that can be booked online. Self-guided tours are also possible.",
    image: "https://images.unsplash.com/photo-1625398407796-82280d24d84d",
    tips: [
      "Come hungry and pace yourself as there are many places to try",
      "Carry hand sanitizer and water",
      "Be open to trying new flavors and dishes",
      "Consider a guided tour for the best experience and food safety"
    ]
  },
  {
    id: 10,
    name: "Tiger Safari in Ranthambore",
    location: "Sawai Madhopur, Rajasthan",
    category: "Wildlife",
    description: "Embark on a jeep safari to spot the majestic Bengal tigers in their natural habitat at this famous national park.",
    longDescription: "Ranthambore National Park, spread over 1,334 square kilometers, is one of India's most famous tiger reserves and offers excellent opportunities to spot the magnificent Bengal tiger in its natural habitat. Once the hunting grounds of the Maharajas of Jaipur, the park is now a major wildlife conservation success story. Besides tigers, the park is home to leopards, sloth bears, sambar deer, nilgai, wild boars, and over 300 species of birds. The park also features the impressive 10th-century Ranthambore Fort, ancient temples, and several lakes, creating a diverse and picturesque landscape. Safari drives are conducted in open-top jeeps or larger canters (open-sided buses) with experienced naturalist guides who help track and spot wildlife while sharing information about the park's ecosystem and conservation efforts.",
    duration: "3-4 hours per safari drive",
    bestTime: "October to June, with April to June offering the highest chance of tiger sightings",
    price: "$$$",
    bookingInfo: "Safari permits must be booked through the official Rajasthan Tourism website or authorized tour operators. Morning and afternoon slots available.",
    image: "https://images.unsplash.com/photo-1549366021-9f761d450615",
    tips: [
      "Book safaris well in advance as permits are limited",
      "Try to book multiple safaris to increase chances of tiger sightings",
      "Morning safaris often offer better wildlife viewing opportunities",
      "Wear neutral-colored clothing and bring binoculars and a camera with zoom lens"
    ]
  },
  {
    id: 11,
    name: "Yoga Retreat in Rishikesh",
    location: "Rishikesh, Uttarakhand",
    category: "Wellness",
    description: "Practice yoga and meditation in the yoga capital of the world, set on the banks of the sacred Ganges River.",
    longDescription: "Rishikesh, nestled in the foothills of the Himalayas along the sacred Ganges River, is renowned worldwide as the 'Yoga Capital of the World.' The city attracts spiritual seekers from across the globe who come to study yoga, meditation, and various holistic healing practices. Numerous ashrams and yoga centers offer retreats ranging from a few days to several weeks, catering to beginners and advanced practitioners alike. A typical yoga retreat includes daily yoga classes (often Hatha, Ashtanga, or Kundalini), meditation sessions, pranayama (breathing exercises), philosophy discussions, and vegetarian meals. Many retreats also incorporate Ayurvedic treatments, nature walks, and cultural excursions. The serene environment, with the sound of the flowing Ganges and views of the surrounding mountains, creates the perfect setting for deepening one's yoga practice and spiritual journey.",
    duration: "1-30 days (depending on the retreat program)",
    bestTime: "February to April, September to November for pleasant weather",
    price: "$$",
    bookingInfo: "Retreats can be booked directly through ashrams' websites or specialized yoga retreat platforms.",
    image: "https://images.unsplash.com/photo-1585916136880-9a080e4afd20",
    tips: [
      "Research different ashrams and their teaching styles before booking",
      "Pack comfortable, modest clothing suitable for yoga practice",
      "Be prepared for basic accommodations in traditional ashrams",
      "Respect the vegetarian, alcohol-free, and often tech-minimal environment"
    ]
  },
  {
    id: 12,
    name: "Camel Safari in Jaisalmer",
    location: "Jaisalmer, Rajasthan",
    category: "Adventure",
    description: "Ride camels through the golden Thar Desert and camp under the stars for an authentic desert experience.",
    longDescription: "A camel safari in the golden sands of the Thar Desert near Jaisalmer is one of the most iconic experiences Rajasthan has to offer. These safaris range from a few hours to several days and take you through remote desert landscapes, traditional villages, and ancient temple ruins. The journey typically begins from Jaisalmer or nearby villages, from where you ride on camelback through rolling sand dunes, guided by experienced local camel drivers. Overnight safaris include camping in the desert, where you can enjoy traditional Rajasthani meals cooked over a campfire, folk music and dance performances under the starlit sky, and sleeping in tents or under the open sky. The sunset and sunrise views over the sand dunes are particularly spectacular, offering perfect photo opportunities. This adventure provides a glimpse into the unique desert culture and the traditional way of life of the local communities.",
    duration: "Half-day to 3 days (depending on the safari package)",
    bestTime: "October to March, when desert temperatures are pleasant",
    price: "$$",
    bookingInfo: "Safari packages can be booked through hotels in Jaisalmer or with various tour operators in the city.",
    image: "https://images.unsplash.com/photo-1604544203292-0daa7f847478",
    tips: [
      "Choose longer safari packages (at least overnight) for a more authentic experience",
      "Carry sunscreen, hat, sunglasses, and plenty of water",
      "Pack warm clothes for cold desert nights",
      "Check the reputation of your tour operator for ethical treatment of camels and quality of camping facilities"
    ]
  }
];

export default activitiesData; 