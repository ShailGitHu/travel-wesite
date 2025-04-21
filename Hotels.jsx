import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hotels = () => {
  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "The Oberoi Udaivilas",
      location: "Udaipur, Rajasthan",
      description: "Luxury hotel on the bank of Lake Pichola offering breathtaking views of the lake, City Palace and Jag Mandir.",
      type: "Luxury",
      price: "$$$",
      rating: 5,
      image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
    },
    {
      id: 2,
      name: "Taj Lake Palace",
      location: "Udaipur, Rajasthan",
      description: "Floating marble palace in the middle of Lake Pichola with royal heritage and luxury amenities.",
      type: "Heritage",
      price: "$$$",
      rating: 5,
      image: "https://images.unsplash.com/photo-1463620910506-d0458143143e"
    },
    {
      id: 3,
      name: "The Leela Palace",
      location: "New Delhi, Delhi",
      description: "Opulent 5-star hotel with spacious rooms, multiple dining options, and a spa.",
      type: "Luxury",
      price: "$$$",
      rating: 5,
      image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
    },
    {
      id: 4,
      name: "Taj Mahal Palace",
      location: "Mumbai, Maharashtra",
      description: "Iconic 5-star luxury hotel with sea views, multiple restaurants, and colonial-era charm.",
      type: "Heritage",
      price: "$$$",
      rating: 5,
      image: "https://images.unsplash.com/photo-1527511624584-388b58b9620b"
    },
    {
      id: 5,
      name: "Zostel Varanasi",
      location: "Varanasi, Uttar Pradesh",
      description: "Popular backpacker hostel with Ganges River views, offering both dorms and private rooms.",
      type: "Hostel",
      price: "$",
      rating: 4,
      image: "https://images.unsplash.com/photo-1596436889106-be35e843f974"
    },
    {
      id: 6,
      name: "Neemrana Fort Palace",
      location: "Alwar, Rajasthan",
      description: "15th-century heritage fort converted into a luxury hotel with period furnishings and panoramic views.",
      type: "Heritage",
      price: "$$",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1548013146-72479768bada"
    },
    {
      id: 7,
      name: "The Park Calangute",
      location: "Goa",
      description: "Contemporary beachfront hotel with stylish rooms, a pool, and vibrant dining options.",
      type: "Boutique",
      price: "$$",
      rating: 4,
      image: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4"
    },
    {
      id: 8,
      name: "Spice Tree Munnar",
      location: "Munnar, Kerala",
      description: "Eco-friendly mountain retreat with private jacuzzis and stunning views of tea plantations.",
      type: "Resort",
      price: "$$",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e"
    },
    {
      id: 9,
      name: "Ginger Delhi",
      location: "New Delhi, Delhi",
      description: "Modern budget hotel offering clean, comfortable rooms with essential amenities.",
      type: "Budget",
      price: "$",
      rating: 3.5,
      image: "https://images.unsplash.com/photo-1629794226066-349748040fb7"
    },
    {
      id: 10,
      name: "Taj Exotica Resort & Spa",
      location: "Andaman Islands",
      description: "Luxury beachfront resort with private villas, world-class dining, and water activities.",
      type: "Resort",
      price: "$$$",
      rating: 5,
      image: "https://images.unsplash.com/photo-1615880484746-a134be9a6ecf"
    }
  ]);

  const [filters, setFilters] = useState({
    type: 'All',
    price: 'All',
    rating: 0,
    searchTerm: ''
  });

  const hotelTypes = ['All', 'Luxury', 'Heritage', 'Boutique', 'Resort', 'Budget', 'Hostel'];
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

  const filteredHotels = hotels.filter(hotel => {
    // Filter by type
    if (filters.type !== 'All' && hotel.type !== filters.type) {
      return false;
    }
    
    // Filter by price
    if (filters.price !== 'All' && hotel.price !== filters.price) {
      return false;
    }
    
    // Filter by rating
    if (filters.rating > 0 && hotel.rating < filters.rating) {
      return false;
    }
    
    // Filter by search term
    if (filters.searchTerm && 
        !hotel.name.toLowerCase().includes(filters.searchTerm.toLowerCase()) && 
        !hotel.location.toLowerCase().includes(filters.searchTerm.toLowerCase())) {
      return false;
    }
    
    return true;
  });

  return (
    <div className="hotels-page">
      {/* Hero Banner */}
      <div className="hotels-hero">
        <div className="hotels-hero-content">
          <h1>Find the Perfect Place to Stay</h1>
          <p>Discover luxury hotels, heritage palaces, and budget-friendly accommodations across India</p>
        </div>
      </div>

      {/* Filters */}
      <div className="hotels-filters">
        <div className="search-bar">
          <input 
            type="text" 
            placeholder="Search hotels by name or location..." 
            value={filters.searchTerm}
            onChange={handleSearch}
          />
        </div>
        <div className="filter-options">
          <div className="filter-group">
            <label htmlFor="type-filter">Hotel Type:</label>
            <select 
              id="type-filter" 
              value={filters.type} 
              onChange={(e) => handleFilterChange('type', e.target.value)}
            >
              {hotelTypes.map(type => (
                <option key={type} value={type}>{type}</option>
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
          
          <div className="filter-group">
            <label>Minimum Rating:</label>
            <div className="rating-filter">
              {[0, 3, 3.5, 4, 4.5, 5].map(rating => (
                <button 
                  key={rating} 
                  className={filters.rating === rating ? 'active' : ''}
                  onClick={() => handleFilterChange('rating', rating)}
                >
                  {rating === 0 ? 'All' : rating}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Hotels Grid */}
      <div className="hotels-grid-container">
        <h2>Popular Accommodations in India</h2>
        {filteredHotels.length === 0 ? (
          <div className="no-results">
            <p>No hotels found with the current filters.</p>
            <button 
              className="btn btn-outline"
              onClick={() => setFilters({
                type: 'All',
                price: 'All',
                rating: 0,
                searchTerm: ''
              })}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="hotels-grid">
            {filteredHotels.map(hotel => (
              <div className="hotel-card" key={hotel.id}>
                <div className="hotel-image" style={{ backgroundImage: `url(${hotel.image})` }}>
                  <div className="hotel-price">{hotel.price}</div>
                  <div className="hotel-rating">
                    <span className="stars">{hotel.rating}</span>
                    <i className="fas fa-star"></i>
                  </div>
                </div>
                <div className="hotel-info">
                  <h3>{hotel.name}</h3>
                  <p className="hotel-location">{hotel.location}</p>
                  <p className="hotel-type">{hotel.type}</p>
                  <p className="hotel-description">{hotel.description}</p>
                  <button className="btn btn-primary">View Details</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Hotel Categories */}
      <div className="hotel-categories-section">
        <h2>Browse by Accommodation Type</h2>
        <div className="categories-grid">
          <div className="category-card">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945")' }}></div>
            <h3>Luxury Hotels</h3>
            <p>Experience the pinnacle of Indian hospitality with world-class amenities and service.</p>
          </div>
          <div className="category-card">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1548013146-72479768bada")' }}></div>
            <h3>Heritage Hotels</h3>
            <p>Stay in converted palaces, forts, and havelis for an authentic royal experience.</p>
          </div>
          <div className="category-card">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1580977276076-ae4b8c219b8e")' }}></div>
            <h3>Eco-Resorts</h3>
            <p>Sustainable accommodations that blend comfort with environmental consciousness.</p>
          </div>
          <div className="category-card">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629794226066-349748040fb7")' }}></div>
            <h3>Budget Stays</h3>
            <p>Comfortable and affordable options that won't break your travel budget.</p>
          </div>
        </div>
      </div>

      {/* Travel Tips for Booking */}
      <div className="booking-tips">
        <h2>Tips for Booking Accommodations in India</h2>
        <div className="tips-grid">
          <div className="tip-card">
            <i className="fas fa-calendar-check"></i>
            <h3>Book in Advance</h3>
            <p>Especially during peak tourist seasons (October-March) and festivals.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-map-marker-alt"></i>
            <h3>Location Matters</h3>
            <p>Consider proximity to attractions, transportation, and safety of the area.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-comments"></i>
            <h3>Read Reviews</h3>
            <p>Check recent guest reviews to ensure the property meets your expectations.</p>
          </div>
          <div className="tip-card">
            <i className="fas fa-rupee-sign"></i>
            <h3>Compare Prices</h3>
            <p>Check multiple booking platforms for the best deals and offers.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hotels; 