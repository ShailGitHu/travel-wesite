import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ThingsToDo = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      name: "Taj Mahal Visit",
      location: "Agra, Uttar Pradesh",
      category: "Historical",
      description: "Visit one of the world's most iconic monuments, a UNESCO World Heritage site and a symbol of eternal love.",
      duration: "2-3 hours",
      bestTime: "Sunrise",
      price: "$$",
      image: "https://images.unsplash.com/photo-1564507592333-c60657eea523"
    },
    {
      id: 2,
      name: "Kerala Backwater Cruise",
      location: "Alleppey, Kerala",
      category: "Nature",
      description: "Cruise through the serene backwaters of Kerala on a traditional houseboat, enjoying beautiful landscapes and village life.",
      duration: "1-2 days",
      bestTime: "October to March",
      price: "$$",
      image: "https://images.unsplash.com/photo-1602216056096-3b40cc0c9944"
    },
    {
      id: 3,
      name: "Goa Beach Hopping",
      location: "Goa",
      category: "Beach",
      description: "Explore Goa's beautiful beaches, from bustling tourist spots to secluded stretches of sand.",
      duration: "1-2 days",
      bestTime: "November to February",
      price: "$",
      image: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2"
    },
    {
      id: 4,
      name: "Varanasi Ganga Aarti",
      location: "Varanasi, Uttar Pradesh",
      category: "Cultural",
      description: "Experience the spiritual evening ceremony on the banks of the Ganges River with fire, chanting, and rituals.",
      duration: "1-2 hours",
      bestTime: "Evening",
      price: "$",
      image: "https://images.unsplash.com/photo-1561361058-c24e04e3f417"
    },
    {
      id: 5,
      name: "Jaipur City Palace Tour",
      location: "Jaipur, Rajasthan",
      category: "Historical",
      description: "Explore the magnificent palace complex that showcases Rajput and Mughal architecture in the Pink City.",
      duration: "2-3 hours",
      bestTime: "Morning",
      price: "$$",
      image: "https://images.unsplash.com/photo-1599661046827-dacbd9eb2283"
    },
    {
      id: 6,
      name: "Darjeeling Toy Train Ride",
      location: "Darjeeling, West Bengal",
      category: "Scenic",
      description: "Take a ride on the historic narrow-gauge railway with breathtaking views of the Himalayan mountains and tea plantations.",
      duration: "2-7 hours",
      bestTime: "March to May",
      price: "$",
      image: "https://images.unsplash.com/photo-1544953450-d20d7f19566a"
    },
    {
      id: 7,
      name: "Rann of Kutch Festival",
      location: "Kutch, Gujarat",
      category: "Cultural",
      description: "Experience the vibrant festival held on the white salt desert during full moon nights with cultural performances and crafts.",
      duration: "1-2 days",
      bestTime: "November to February",
      price: "$$",
      image: "https://images.unsplash.com/photo-1593096009696-99464adf5d6e"
    },
    {
      id: 8,
      name: "Paragliding in Bir Billing",
      location: "Bir, Himachal Pradesh",
      category: "Adventure",
      description: "Experience tandem paragliding from one of the world's highest paragliding sites with stunning Himalayan views.",
      duration: "30 minutes",
      bestTime: "March to May, October to November",
      price: "$$",
      image: "https://images.unsplash.com/photo-1622493977868-7b8db759164e"
    },
    {
      id: 9,
      name: "Delhi Food Tour",
      location: "Delhi",
      category: "Food & Drink",
      description: "Sample the diverse street food and culinary delights of Old Delhi's bustling markets and food streets.",
      duration: "3-4 hours",
      bestTime: "Evening",
      price: "$",
      image: "https://images.unsplash.com/photo-1625398407796-82280d24d84d"
    },
    {
      id: 10,
      name: "Tiger Safari in Ranthambore",
      location: "Sawai Madhopur, Rajasthan",
      category: "Wildlife",
      description: "Embark on a jeep safari to spot the majestic Bengal tigers in their natural habitat at this famous national park.",
      duration: "3-4 hours",
      bestTime: "October to June",
      price: "$$$",
      image: "https://images.unsplash.com/photo-1549366021-9f761d450615"
    },
    {
      id: 11,
      name: "Yoga Retreat in Rishikesh",
      location: "Rishikesh, Uttarakhand",
      category: "Wellness",
      description: "Practice yoga and meditation in the yoga capital of the world, set on the banks of the sacred Ganges River.",
      duration: "1-30 days",
      bestTime: "February to April, September to November",
      price: "$$",
      image: "https://images.unsplash.com/photo-1585916136880-9a080e4afd20"
    },
    {
      id: 12,
      name: "Camel Safari in Jaisalmer",
      location: "Jaisalmer, Rajasthan",
      category: "Adventure",
      description: "Ride camels through the golden Thar Desert and camp under the stars for an authentic desert experience.",
      duration: "Half-day to 3 days",
      bestTime: "October to March",
      price: "$$",
      image: "https://images.unsplash.com/photo-1604544203292-0daa7f847478"
    }
  ]);

  const [filters, setFilters] = useState({
    category: 'All',
    price: 'All',
    searchTerm: ''
  });

  const categories = ['All', 'Historical', 'Nature', 'Beach', 'Cultural', 'Adventure', 'Wildlife', 'Food & Drink', 'Scenic', 'Wellness'];
  const priceRanges = ['All', '$', '$$', '$$$'];

  const handleFilterChange = (filterType, value) => {
    setFilters({
      ...filters,
      [filterType]: value
    });
  };

  const handleSearch = (e) => {
    setFilters({
      ...filters,
      searchTerm: e.target.value
    });
  };

  const filteredActivities = activities.filter(activity => {
    // Filter by category
    if (filters.category !== 'All' && activity.category !== filters.category) {
      return false;
    }
    
    // Filter by price
    if (filters.price !== 'All' && activity.price !== filters.price) {
      return false;
    }
    
    // Filter by search term
    if (filters.searchTerm && 
        !activity.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) && 
        !activity.location.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="things-to-do-page">
      {/* Hero Banner */}
      <div className="activities-hero">
        <div className="activities-hero-content">
          <h1>Unforgettable Experiences in India</h1>
          <p>Discover amazing activities, attractions, and adventures across India</p>
        </div>
      </div>

      {/* Filters */}
      <div className="activities-filters">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search activities or locations..." 
            value={filters.searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter-options">
          <div className="filter-group">
            <label htmlFor="category-filter">Category:</label>
            <select 
              id="category-filter" 
              value={filters.category} 
              onChange={(e) => handleFilterChange('category', e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>
          
          <div className="filter-group">
            <label htmlFor="price-filter">Price Range:</label>
            <select 
              id="price-filter" 
              value={filters.price} 
              onChange={(e) => handleFilterChange('price', e.target.value)}
            >
              {priceRanges.map(price => (
                <option key={price} value={price}>
                  {price === 'All' ? 'All' : price}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Activities Grid */}
      <div className="activities-grid-container">
        <h2>Popular Things to Do in India</h2>
        {filteredActivities.length === 0 ? (
          <div className="no-results">
            <p>No activities found with the current filters.</p>
            <button 
              className="btn btn-outline"
              onClick={() => setFilters({
                category: 'All',
                price: 'All',
                searchTerm: ''
              })}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="activities-grid">
            {filteredActivities.map(activity => (
              <div className="activity-card" key={activity.id}>
                <div className="activity-image" style={{ backgroundImage: `url(${activity.image})` }}>
                  <span className="category-tag">{activity.category}</span>
                  <span className="price-tag">{activity.price}</span>
                </div>
                <div className="activity-info">
                  <h3>{activity.name}</h3>
                  <p className="activity-location">{activity.location}</p>
                  <p className="activity-description">{activity.description}</p>
                  <div className="activity-details">
                    <span className="duration">
                      <i className="fas fa-clock"></i> {activity.duration}
                    </span>
                    <span className="best-time">
                      <i className="fas fa-calendar-alt"></i> {activity.bestTime}
                    </span>
                  </div>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Activity Categories */}
      <div className="activity-categories-section">
        <h2>Explore by Category</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1564507592333-c60657eea523")' }}></div>
            <h3>Historical Sites</h3>
            <p>Explore ancient forts, palaces, temples, and monuments that tell the story of India's rich history.</p>
          </div>
          <div className="category-card">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d")' }}></div>
            <h3>Adventure Activities</h3>
            <p>Get your adrenaline pumping with exciting activities from paragliding to white water rafting.</p>
          </div>
          <div className="category-card">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1561361058-c24e04e3f417")' }}></div>
            <h3>Cultural Experiences</h3>
            <p>Immerse yourself in India's diverse culture through festivals, ceremonies, and traditional arts.</p>
          </div>
          <div className="category-card">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1625398407796-82280d24d84d")' }}></div>
            <h3>Food Experiences</h3>
            <p>Taste your way through India's incredible culinary landscape with food tours and cooking classes.</p>
          </div>
        </div>
      </div>

      {/* Seasonal Activities */}
      <div className="seasonal-activities">
        <h2>Best Experiences by Season</h2>
        <div className="seasons-grid">
          <div className="season-card">
            <h3>Winter (October - March)</h3>
            <ul className="season-activities">
              <li>Desert festivals in Rajasthan</li>
              <li>Beach holidays in Goa and Kerala</li>
              <li>Wildlife safaris in national parks</li>
              <li>Cultural tours in major cities</li>
            </ul>
          </div>
          <div className="season-card">
            <h3>Summer (April - June)</h3>
            <ul className="season-activities">
              <li>Hill station retreats in Himalayas</li>
              <li>Trekking in Ladakh</li>
              <li>Spiti Valley road trips</li>
              <li>Indoor cultural activities</li>
            </ul>
          </div>
          <div className="season-card">
            <h3>Monsoon (July - September)</h3>
            <ul className="season-activities">
              <li>Ayurvedic treatments in Kerala</li>
              <li>Valley of Flowers trek in Uttarakhand</li>
              <li>Dudhsagar Falls visit in Goa</li>
              <li>Periyar Wildlife Sanctuary in Kerala</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Booking Tips */}
      <div className="booking-tips">
        <h2>Tips for Planning Activities in India</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <i className="fas fa-ticket-alt"></i>
            <h3>Book in Advance</h3>
            <p>Popular attractions like Taj Mahal and tiger safaris require advance booking.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-sun"></i>
            <h3>Check Weather</h3>
            <p>Plan outdoor activities according to the season and weather conditions.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-user-friends"></i>
            <h3>Use Local Guides</h3>
            <p>Enhance your experience with knowledgeable local guides who offer cultural insights.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-hand-holding-usd"></i>
            <h3>Bargain Respectfully</h3>
            <p>Negotiate prices for activities and souvenirs, but do so with respect and fairness.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThingsToDo; 