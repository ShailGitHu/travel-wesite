import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [featuredDestinations, setFeaturedDestinations] = useState([
    {
      id: 1,
      name: 'Delhi',
      image: 'https://images.unsplash.com/photo-1587474260584-136574528ed5',
      description: 'Explore the vibrant capital city with its blend of ancient monuments and modern attractions.'
    },
    {
      id: 2,
      name: 'Goa',
      image: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2',
      description: 'Relax on beautiful beaches and enjoy the unique Portuguese-influenced culture.'
    },
    {
      id: 3,
      name: 'Rajasthan',
      image: 'https://images.unsplash.com/photo-1477587458883-47145ed94245',
      description: 'Discover royal palaces, majestic forts, and the colorful culture of the desert state.'
    },
    {
      id: 4,
      name: 'Kerala',
      image: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944',
      description: 'Experience the serene backwaters, lush green landscapes, and relaxing ayurvedic retreats.'
    }
  ]);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Discover the Magic of India</h1>
          <p>Explore incredible destinations, find amazing experiences, and plan your perfect Indian adventure</p>
          <div className="hero-buttons">
            <Link to="/destinations" className="btn btn-primary">Explore Destinations</Link>
            <Link to="/things-to-do" className="btn btn-secondary">Find Activities</Link>
          </div>
        </div>
      </section>

      {/* Featured Destinations */}
      <section className="featured-destinations">
        <div className="section-header">
          <h2>Featured Destinations</h2>
          <p>Discover the most popular places to visit in India</p>
        </div>
        <div className="destinations-grid">
          {featuredDestinations.map((destination) => (
            <div className="destination-card" key={destination.id}>
              <div className="destination-image" style={{ backgroundImage: `url(${destination.image})` }}>
                <div className="destination-overlay">
                  <h3>{destination.name}</h3>
                </div>
              </div>
              <div className="destination-info">
                <p>{destination.description}</p>
                <Link to={`/destinations/${destination.id}`} className="btn btn-sm">Explore</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all">
          <Link to="/destinations" className="btn btn-outline">View All Destinations</Link>
        </div>
      </section>

      {/* Things to Do Section */}
      <section className="things-to-do">
        <div className="section-header">
          <h2>Top Things To Do</h2>
          <p>Unforgettable experiences waiting for you</p>
        </div>
        <div className="activities-grid">
          <div className="activity-card">
            <div className="activity-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1544514245-091e872fff46")' }}>
              <h3>Historical Tours</h3>
            </div>
            <p>Discover ancient monuments and heritage sites</p>
          </div>
          <div className="activity-card">
            <div className="activity-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1583309219338-a582f1f9ca6d")' }}>
              <h3>Adventure Sports</h3>
            </div>
            <p>Experience thrilling activities across diverse landscapes</p>
          </div>
          <div className="activity-card">
            <div className="activity-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1527751171053-6ac5ec50000b")' }}>
              <h3>Cultural Experiences</h3>
            </div>
            <p>Immerse yourself in India's rich and diverse cultures</p>
          </div>
        </div>
        <div className="view-all">
          <Link to="/things-to-do" className="btn btn-outline">Explore All Activities</Link>
        </div>
      </section>

      {/* Hotel Showcase */}
      <section className="hotel-showcase">
        <div className="section-header">
          <h2>Where to Stay</h2>
          <p>Find your perfect accommodation</p>
        </div>
        <div className="hotel-categories">
          <div className="hotel-category">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1566073771259-6a8506099945")' }}></div>
            <h3>Luxury Resorts</h3>
          </div>
          <div className="hotel-category">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1546484396-fb3fc6f95f98")' }}></div>
            <h3>Heritage Hotels</h3>
          </div>
          <div className="hotel-category">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1647891940243-77a6483a152e")' }}></div>
            <h3>Boutique Stays</h3>
          </div>
          <div className="hotel-category">
            <div className="category-image" style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1629794226066-349748040fb7")' }}></div>
            <h3>Budget Hotels</h3>
          </div>
        </div>
        <div className="view-all">
          <Link to="/hotels" className="btn btn-outline">Browse All Hotels</Link>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter">
        <div className="newsletter-content">
          <h2>Get Travel Inspiration</h2>
          <p>Subscribe to our newsletter for the latest updates and travel offers</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Your Email Address" />
            <button type="submit" className="btn btn-primary">Subscribe</button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Home; 