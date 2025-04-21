const destinationsData = [
  {
    id: 1,
    name: 'Delhi',
    image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
    region: 'North India',
    description: 'Explore the vibrant capital city with its blend of ancient monuments and modern attractions.',
    longDescription: "Delhi, India's capital territory, is a massive metropolitan area in the country's north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people. Delhi is a city where ancient and modern blend seamlessly together. It is a place that not only touches your pulse but even fastens it to a frenetic speed.",
    attractions: [
      {
        name: "Red Fort",
        description: "A historic fort that served as the main residence of the emperors of the Mughal dynasty.",
        image: "https://images.unsplash.com/photo-1592635196078-9fcc364c5324"
      },
      {
        name: "Qutub Minar",
        description: "A UNESCO World Heritage Site, this 73-meter tall minaret is an example of early Indo–Islamic architecture.",
        image: "https://images.unsplash.com/photo-1548013146-72479768bada"
      },
      {
        name: "India Gate",
        description: "A war memorial dedicated to the soldiers of the British Indian Army who died in the First World War.",
        image: "https://images.unsplash.com/photo-1597042324845-c7891ab42ad1"
      }
    ]
  },
  {
    id: 2,
    name: 'Mumbai',
    image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445',
    region: 'West India',
    description: 'Experience the bustling metropolis, home to Bollywood and beautiful coastal areas.',
    longDescription: "Mumbai (formerly called Bombay) is a densely populated city on India's west coast. A financial center, it's India's largest city. On the Mumbai Harbour waterfront stands the iconic Gateway of India stone arch, built by the British Raj in 1924. Offshore, nearby Elephanta Island holds ancient cave temples dedicated to the Hindu god Shiva. The city's also famous as the heart of the Bollywood film industry.",
    attractions: [
      {
        name: "Gateway of India",
        description: "An arch monument built during the 20th century to commemorate the landing of King George V and Queen Mary at Apollo Bunder.",
        image: "https://images.unsplash.com/photo-1529253355930-ddbe423a2ac7"
      },
      {
        name: "Marine Drive",
        description: "A 3.6-kilometer-long boulevard that stretches along the coastline of the Arabian Sea, also known as the Queen's Necklace.",
        image: "https://images.unsplash.com/photo-1580581096469-27b7860ccac5"
      },
      {
        name: "Elephanta Caves",
        description: "Ancient cave temples dedicated to Lord Shiva, located on Elephanta Island.",
        image: "https://images.unsplash.com/photo-1626621331169-5f34be280ed9"
      }
    ]
  },
  {
    id: 3,
    name: 'Jaipur',
    image: 'https://images.unsplash.com/photo-1599661046827-dacbd9eb2283',
    region: 'North India',
    description: 'Visit the Pink City with its stunning palaces, forts, and vibrant markets.',
    longDescription: "Jaipur is the capital of India's Rajasthan state. It evokes the royal family that once ruled the region and that, in 1727, founded what is now called the Old City, or "Pink City" for its trademark building color. At the center of its stately street grid stands the opulent, colonnaded City Palace complex. With gardens, courtyards and museums, part of it is still a royal residence.",
    attractions: [
      {
        name: "Hawa Mahal",
        description: "A palace known for its honeycomb facade with 953 small windows, designed to allow royal ladies to observe street festivals without being seen.",
        image: "https://images.unsplash.com/photo-1599661046307-5923cedca838"
      },
      {
        name: "Amber Fort",
        description: "A majestic fort known for its artistic Hindu style elements, with large ramparts and series of gates and cobbled paths.",
        image: "https://images.unsplash.com/photo-1477439913985-fc7ecac9b6ff"
      },
      {
        name: "City Palace",
        description: "A palace complex that includes the Chandra Mahal and Mubarak Mahal palaces and other buildings, showcasing Rajput architecture.",
        image: "https://images.unsplash.com/photo-1587295656906-b5b04a5af9cf"
      }
    ]
  },
  {
    id: 4,
    name: 'Goa',
    image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
    region: 'West India', 
    description: 'Relax on beautiful beaches and enjoy the unique Portuguese-influenced culture.',
    longDescription: "Goa is a state in western India with coastlines stretching along the Arabian Sea. Its long history as a Portuguese colony prior to 1961 is evident in its preserved 17th-century churches and the area's tropical spice plantations. Goa is also known for its beaches, ranging from popular stretches at Baga and Palolem to those in laid-back fishing villages such as Agonda.",
    attractions: [
      {
        name: "Calangute Beach",
        description: "One of the largest and most popular beaches in Goa, known for its water sports and nightlife.",
        image: "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86"
      },
      {
        name: "Basilica of Bom Jesus",
        description: "A UNESCO World Heritage Site that contains the mortal remains of St. Francis Xavier.",
        image: "https://images.unsplash.com/photo-1590064661010-d542fa386b95"
      },
      {
        name: "Dudhsagar Falls",
        description: "A four-tiered waterfall located on the Mandovi River, one of India's tallest waterfalls.",
        image: "https://images.unsplash.com/photo-1563543542006-4430355403e1"
      }
    ]
  },
  {
    id: 5,
    name: 'Agra',
    image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
    region: 'North India',
    description: 'Home to the iconic Taj Mahal and other magnificent Mughal architecture.',
    longDescription: "Agra is a city in northern India's Uttar Pradesh state. It's home to the iconic Taj Mahal, a mausoleum built for the Mughal ruler Shah Jahan's wife, Mumtaz Mahal (who died in childbirth in 1631). The imposing main building features a massive dome and intricately carved white marble inlaid with precious stones. This is set behind a reflecting pool inside a courtyard defined by 4 minarets.",
    attractions: [
      {
        name: "Taj Mahal",
        description: "An ivory-white marble mausoleum commissioned by Mughal emperor Shah Jahan to house the tomb of his favorite wife, Mumtaz Mahal.",
        image: "https://images.unsplash.com/photo-1564507592333-c60657eea523"
      },
      {
        name: "Agra Fort",
        description: "A UNESCO World Heritage site, this red sandstone fort was the main residence of the emperors of the Mughal Dynasty.",
        image: "https://images.unsplash.com/photo-1547494912-1888bfdb2a2a"
      },
      {
        name: "Fatehpur Sikri",
        description: "A city founded in 1569 by the Mughal Emperor Akbar, serving as the empire's capital from 1571 until 1585.",
        image: "https://images.unsplash.com/photo-1600091106748-3bde6261447b"
      }
    ]
  },
  {
    id: 6,
    name: 'Varanasi',
    image: 'https://images.unsplash.com/photo-1561361058-c24e04e3f417',
    region: 'North India',
    description: 'Experience the spiritual heart of India on the banks of the sacred Ganges River.',
    longDescription: "Varanasi is a city in the northern Indian state of Uttar Pradesh dating to the 11th century B.C. Regarded as the spiritual capital of India, the city draws Hindu pilgrims who bathe in the Ganges River's sacred waters and perform funeral rites. Along the city's winding streets are some 2,000 temples, including Kashi Vishwanath, the "Golden Temple," dedicated to the Hindu god Shiva.",
    attractions: [
      {
        name: "Dashashwamedh Ghat",
        description: "The main ghat in Varanasi, where the evening Ganga Aarti (a spiritual ritual) is performed every day.",
        image: "https://images.unsplash.com/photo-1561361058-c24e04e3f417"
      },
      {
        name: "Kashi Vishwanath Temple",
        description: "One of the most famous Hindu temples dedicated to Lord Shiva, located on the western bank of the Ganges.",
        image: "https://images.unsplash.com/photo-1635766054632-88dd4c89e5c3"
      },
      {
        name: "Sarnath",
        description: "A place where Gautama Buddha first taught the Dharma, located just 10 km from Varanasi.",
        image: "https://images.unsplash.com/photo-1612438214625-75f40b5cc8f3"
      }
    ]
  },
  {
    id: 7,
    name: 'Kerala',
    image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
    region: 'South India',
    description: 'Experience the serene backwaters, lush green landscapes, and relaxing ayurvedic retreats.',
    longDescription: "Kerala, a state on India's tropical Malabar Coast, has nearly 600km of Arabian Sea shoreline. It's known for its palm-lined beaches and backwaters, a network of canals. Inland are the Western Ghats, mountains whose slopes support tea, coffee and spice plantations as well as wildlife. National parks like Eravikulam and Periyar, plus Wayanad and other sanctuaries, are home to elephants, langur monkeys and tigers.",
    attractions: [
      {
        name: "Alleppey Backwaters",
        description: "A network of lagoons, lakes, and canals, best explored on a traditional houseboat (kettuvallam).",
        image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
      },
      {
        name: "Munnar",
        description: "A hill station and former resort for the British Raj elite, known for its tea plantations and cool climate.",
        image: "https://images.unsplash.com/photo-1595815771614-ade20770c260"
      },
      {
        name: "Kochi",
        description: "A port city known for its Fort Kochi area, featuring colonial buildings, Chinese fishing nets, and the 16th century Jewish Synagogue.",
        image: "https://images.unsplash.com/photo-1590766740616-0e6bb2421e80"
      }
    ]
  },
  {
    id: 8,
    name: 'Darjeeling',
    image: 'https://images.unsplash.com/photo-1544953450-d20d7f19566a',
    region: 'East India',
    description: 'Visit the beautiful tea gardens and experience the stunning Himalayan landscapes.',
    longDescription: "Darjeeling is a town in India's West Bengal state, in the Himalayan foothills. Once a summer resort for the British Raj elite, it remains the terminus of the narrow-gauge Darjeeling Himalayan Railway, or "Toy Train," completed in 1881. It's famed for the distinctive black tea grown on plantations that dot its surrounding slopes. Its backdrop is Mt. Kanchenjunga, among the world's highest peaks.",
    attractions: [
      {
        name: "Tiger Hill",
        description: "A summit known for its stunning sunrise views of the Kanchenjunga and Mount Everest.",
        image: "https://images.unsplash.com/photo-1591725855746-e2baa84660c4"
      },
      {
        name: "Darjeeling Himalayan Railway",
        description: "A UNESCO World Heritage Site, this narrow-gauge railway is known as the 'Toy Train' and offers scenic mountain views.",
        image: "https://images.unsplash.com/photo-1544953450-d20d7f19566a"
      },
      {
        name: "Happy Valley Tea Estate",
        description: "One of the oldest tea estates in Darjeeling, offering tours of the gardens and tea-making process.",
        image: "https://images.unsplash.com/photo-1576788525375-336952d4a55e"
      }
    ]
  },
  {
    id: 9,
    name: 'Udaipur',
    image: 'https://images.unsplash.com/photo-1622274310885-89070282d25c',
    region: 'North India',
    description: 'Explore the romantic city of lakes with its royal palaces and breathtaking views.',
    longDescription: "Udaipur, formerly the capital of the Mewar Kingdom, is a city in the western Indian state of Rajasthan. Founded by Maharana Udai Singh II in 1559, it's set around a series of artificial lakes and is known for its lavish royal residences. City Palace, overlooking Lake Pichola, is a monumental complex of 11 palaces, courtyards and gardens, famed for its intricate peacock mosaics.",
    attractions: [
      {
        name: "City Palace",
        description: "A majestic palace complex that stands on the east bank of Lake Pichola, a fusion of Rajasthani and Mughal architectural styles.",
        image: "https://images.unsplash.com/photo-1622274310885-89070282d25c"
      },
      {
        name: "Lake Pichola",
        description: "An artificial freshwater lake created in 1362 AD, with two islands: Jag Niwas (Lake Palace) and Jag Mandir.",
        image: "https://images.unsplash.com/photo-1596456129369-adb1dabc6c85"
      },
      {
        name: "Jag Mandir",
        description: "A palace built on an island in Lake Pichola, used as a summer resort by the royal family.",
        image: "https://images.unsplash.com/photo-1595654792981-320c12a64f06"
      }
    ]
  },
  {
    id: 10,
    name: 'Amritsar',
    image: 'https://images.unsplash.com/photo-1589738217693-7061fc705ea9',
    region: 'North India',
    description: 'Visit the Golden Temple and experience the vibrant Punjabi culture.',
    longDescription: "Amritsar is a city in the northwestern Indian state of Punjab, 28 kilometers from the border with Pakistan. At the center of its walled old town, the gilded Golden Temple (Harmandir Sahib) is the holiest gurdwara (religious complex) of the Sikh religion. It's at the end of a causeway, surrounded by the sacred Amrit Sarovar tank (lake), where pilgrims bathe.",
    attractions: [
      {
        name: "Golden Temple (Harmandir Sahib)",
        description: "The holiest gurdwara and most important pilgrimage site of Sikhism, known for its golden architecture.",
        image: "https://images.unsplash.com/photo-1589738217693-7061fc705ea9"
      },
      {
        name: "Jallianwala Bagh",
        description: "A public garden that houses a memorial of national importance, established in 1951 to commemorate the massacre by British forces.",
        image: "https://images.unsplash.com/photo-1603262413997-22daa0e0a55c"
      },
      {
        name: "Wagah Border",
        description: "The only road border crossing between India and Pakistan, known for its elaborate daily border ceremony.",
        image: "https://images.unsplash.com/photo-1599739291060-4578e77dac5d"
      }
    ]
  },
  {
    id: 11,
    name: 'Chennai',
    image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220',
    region: 'South India',
    description: 'Discover the cultural capital of South India with its temples, beaches, and delicious cuisine.',
    longDescription: "Chennai, on the Bay of Bengal in eastern India, is the capital of the state of Tamil Nadu. The city is home to Fort St. George, built in 1644 and now a museum showcasing the city's roots as a British military garrison and East India Company trading outpost, when it was called Madras. Religious sites include Kapaleeshwarar Temple, adorned with carved and painted gods, and St. Mary's, a 17th-century Anglican church.",
    attractions: [
      {
        name: "Marina Beach",
        description: "One of the longest urban beaches in the world, stretching over 13 km along the Bay of Bengal.",
        image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220"
      },
      {
        name: "Kapaleeshwarar Temple",
        description: "A 7th century Hindu temple dedicated to Lord Shiva, featuring Dravidian architecture.",
        image: "https://images.unsplash.com/photo-1597738429744-998bf3708783"
      },
      {
        name: "Fort St. George",
        description: "The first English fortress in India, founded in 1644, now housing a museum.",
        image: "https://images.unsplash.com/photo-1603189906476-7124a6dd7da7"
      }
    ]
  },
  {
    id: 12,
    name: 'Rishikesh',
    image: 'https://images.unsplash.com/photo-1585916136880-9a080e4afd20',
    region: 'North India',
    description: 'The yoga capital of the world, nestled in the foothills of the Himalayas along the Ganges River.',
    longDescription: "Rishikesh is a city in India's northern state of Uttarakhand, in the Himalayan foothills beside the Ganges River. The river is considered holy, and the city is renowned as a center for studying yoga and meditation. Temples and ashrams (centers for spiritual studies) line the eastern bank around Swarg Ashram, a traffic-free, alcohol-free and vegetarian enclave upstream from Rishikesh town.",
    attractions: [
      {
        name: "Laxman Jhula",
        description: "A suspension bridge across the Ganges River, offering stunning views of the surrounding mountains.",
        image: "https://images.unsplash.com/photo-1585916136880-9a080e4afd20"
      },
      {
        name: "Triveni Ghat",
        description: "A sacred bathing spot at the confluence of three holy rivers, where evening Ganga Aarti is performed.",
        image: "https://images.unsplash.com/photo-1591018104077-5661049aae2b"
      },
      {
        name: "The Beatles Ashram",
        description: "Formerly known as Chaurasi Kutia, this is where The Beatles stayed in 1968 to practice Transcendental Meditation.",
        image: "https://images.unsplash.com/photo-1625731533662-9ab1c3243aa1"
      }
    ]
  }
];

export default destinationsData; 