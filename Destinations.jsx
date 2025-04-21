import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Destinations = () => {
  const [destinations, setDestinations] = useState([
    {
      id: 1,
      name: 'Delhi',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      region: 'North India',
      description: 'Explore the vibrant capital city with its blend of ancient monuments and modern attractions.'
    },
    {
      id: 2,
      name: 'Mumbai',
      image: 'https://images.unsplash.com/photo-1566552881560-0be862a7c445',
      region: 'West India',
      description: 'Experience the bustling metropolis, home to Bollywood and beautiful coastal areas.'
    },
    {
      id: 3,
      name: 'Jaipur',
      image: 'https://images.unsplash.com/photo-1599661046827-dacbd9eb2283',
      region: 'North India',
      description: 'Visit the Pink City with its stunning palaces, forts, and vibrant markets.'
    },
    {
      id: 4,
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
      region: 'West India', 
      description: 'Relax on beautiful beaches and enjoy the unique Portuguese-influenced culture.'
    },
    {
      id: 5,
      name: 'Agra',
      image: 'https://images.unsplash.com/photo-1564507592333-c60657eea523',
      region: 'North India',
      description: 'Home to the iconic Taj Mahal and other magnificent Mughal architecture.'
    },
    {
      id: 6,
      name: 'Varanasi',
      image: 'https://images.unsplash.com/photo-1561361058-c24e04e3f417',
      region: 'North India',
      description: 'Experience the spiritual heart of India on the banks of the sacred Ganges River.'
    },
    {
      id: 7,
      name: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
      region: 'South India',
      description: 'Experience the serene backwaters, lush green landscapes, and relaxing ayurvedic retreats.'
    },
    {
      id: 8,
      name: 'Darjeeling',
      image: 'https://images.unsplash.com/photo-1544953450-d20d7f19566a',
      region: 'East India',
      description: 'Visit the beautiful tea gardens and experience the stunning Himalayan landscapes.'
    },
    {
      id: 9,
      name: 'Udaipur',
      image: 'https://images.unsplash.com/photo-1622274310885-89070282d25c',
      region: 'North India',
      description: 'Explore the romantic city of lakes with its royal palaces and breathtaking views.'
    },
    {
      id: 10,
      name: 'Amritsar',
      image: 'https://images.unsplash.com/photo-1589738217693-7061fc705ea9',
      region: 'North India',
      description: 'Visit the Golden Temple and experience the vibrant Punjabi culture.'
    },
    {
      id: 11,
      name: 'Chennai',
      image: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220',
      region: 'South India',
      description: 'Discover the cultural capital of South India with its temples, beaches, and delicious cuisine.'
    },
    {
      id: 12,
      name: 'Rishikesh',
      image: 'https://images.unsplash.com/photo-1585916136880-9a080e4afd20',
      region: 'North India',
      description: 'The yoga capital of the world, nestled in the foothills of the Himalayas along the Ganges River.'
    }
  ]);

  const [filters, setFilters] = useState({
    region: 'All',
    searchTerm: ''
  });

  const regions = ['All', 'North India', 'South India', 'East India', 'West India', 'Central India', 'Northeast India'];

  const handleRegionChange = (e) => {
    setFilters({
      ...filters,
      region: e.target.value
    });
  };

  const handleSearch = (e) => {
    setFilters({
      ...filters,
      searchTerm: e.target.value
    });
  };

  const filteredDestinations = destinations.filter(destination => {
    // Filter by region
    if (filters.region !== 'All' && destination.region !== filters.region) {
      return false;
    }
    
    // Filter by search term
    if (filters.searchTerm && !destination.name.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="destinations-page">
      {/* Hero Banner */}
      <div className="destinations-hero">
        <div className="destinations-hero-content">
          <h1>Explore India's Top Destinations</h1>
          <p>Discover the diversity and richness of India's most beautiful places</p>
        </div>
      </div>

      {/* Filters */}
      <div className="destinations-filters">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search destinations..." 
            value={filters.searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter-options">
          <label htmlFor="region-filter">Filter by Region:</label>
          <select 
            id="region-filter" 
            value={filters.region} 
            onChange={handleRegionChange}
          >
            {regions.map(region => (
              <option key={region} value={region}>{region}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Destinations Grid */}
      <div className="destinations-grid-container">
        <h2>Popular Destinations in India</h2>
        {filteredDestinations.length === 0 ? (
          <div className="no-results">
            <p>No destinations found with the current filters.</p>
          </div>
        ) : (
          <div className="destinations-grid">
            {filteredDestinations.map(destination => (
              <div className="destination-card" key={destination.id}>
                <Link to={`/destinations/${destination.id}`}>
                  <div className="destination-image" style={{ backgroundImage: `url(${destination.image})` }}>
                    <div className="destination-overlay">
                      <h3>{destination.name}</h3>
                      <span className="region-tag">{destination.region}</span>
                    </div>
                  </div>
                </Link>
                <div className="destination-info">
                  <p>{destination.description}</p>
                  <Link to={`/destinations/${destination.id}`} className="btn btn-sm">Explore</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Destination Map */}
      <div className="india-map-section">
        <h2>Discover India's Destinations by Region</h2>
        <div className="india-map">
          {/* This would typically be replaced with an interactive map component */}
          <p className="map-placeholder">Interactive Map of India Coming Soon!</p>
        </div>
      </div>

      {/* Travel Tips */}
      <div className="travel-tips">
        <h2>Travel Tips for Exploring India</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <i className="fas fa-calendar-alt"></i>
            <h3>Best Time to Visit</h3>
            <p>October to March is generally the best time to visit most parts of India, avoiding the monsoon season.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-plane"></i>
            <h3>Getting Around</h3>
            <p>India has extensive rail networks, domestic flights, and bus services connecting major destinations.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-utensils"></i>
            <h3>Food & Cuisine</h3>
            <p>Try local specialties in each region, but be cautious with street food and always drink bottled water.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-suitcase"></i>
            <h3>Packing Essentials</h3>
            <p>Pack modest clothing, comfortable shoes, and essentials like sunscreen and insect repellent.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Destinations; 