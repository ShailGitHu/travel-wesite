import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

const DestinationDetail = () => {
  const { id } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // In a real application, this would be an API call
    // For now, we'll use mock data
    const fetchDestination = () => {
      const mockDestinations = {
        "1": {
          id: 1,
          name: "Delhi",
          region: "North India",
          description: "Delhi, India's capital territory, is a massive metropolitan area in the country's north. In Old Delhi, a neighborhood dating to the 1600s, stands the imposing Mughal-era Red Fort, a symbol of India, and the sprawling Jama Masjid mosque, whose courtyard accommodates 25,000 people.",
          longDescription: "Delhi is a city where ancient and modern blend seamlessly together. It is a place that not only touches your pulse but even fastens it to a frenetic speed. Home to millions of dreams, the city takes on unprecedented responsibilities of realizing dreams bringing people closer and inspiring their thoughts. Delhi has always been the capital for empires that ruled India, and each of them has left behind a distinctive mark, making the national capital of India a dream destination for history lovers across the world.",
          image: "https://images.unsplash.com/photo-1587474260584-136574528ed5",
          gallery: [
            "https://images.unsplash.com/photo-1592635196078-9fcc364c5324",
            "https://images.unsplash.com/photo-1597042324845-c7891ab42ad1",
            "https://images.unsplash.com/photo-1536514900905-0d5681fa5efd",
            "https://images.unsplash.com/photo-1576519495556-a0288c3e6421"
          ],
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
            },
            {
              name: "Humayun's Tomb",
              description: "This tomb, built in 1570, is of particular cultural significance as it was the first garden-tomb on the Indian subcontinent.",
              image: "https://images.unsplash.com/photo-1548013146-cedb79180ec9"
            }
          ],
          hotels: [
            {
              name: "The Imperial",
              type: "Luxury",
              price: "$$$",
              image: "https://images.unsplash.com/photo-1566073771259-6a8506099945"
            },
            {
              name: "Leela Palace",
              type: "Luxury",
              price: "$$$",
              image: "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa"
            },
            {
              name: "Bloomrooms",
              type: "Budget",
              price: "$",
              image: "https://images.unsplash.com/photo-1629794226066-349748040fb7"
            }
          ],
          restaurants: [
            {
              name: "Indian Accent",
              cuisine: "Modern Indian",
              price: "$$$",
              description: "Award-winning restaurant serving innovative Indian cuisine."
            },
            {
              name: "Karim's",
              cuisine: "Mughlai",
              price: "$",
              description: "Historic restaurant famous for its kebabs and curries."
            },
            {
              name: "Bukhara",
              cuisine: "North Indian",
              price: "$$$",
              description: "Legendary restaurant known for its tandoori cuisine."
            }
          ],
          weather: {
            bestTimeToVisit: "October to March",
            seasons: [
              {
                name: "Summer (April to June)",
                description: "Very hot and dry with temperatures reaching up to 45°C."
              },
              {
                name: "Monsoon (July to September)",
                description: "Hot and humid with heavy rainfall."
              },
              {
                name: "Winter (October to March)",
                description: "Cool and pleasant with temperatures ranging from 5°C to 25°C."
              }
            ]
          },
          transportation: {
            airport: "Indira Gandhi International Airport",
            localTransport: ["Metro", "Buses", "Auto-rickshaws", "Taxis", "Ride-sharing services"]
          }
        }
      };

      // For this demo, we'll check if we have the destination in our mock data
      // In real app, we would fetch from API
      setTimeout(() => {
        if (mockDestinations[id]) {
          setDestination(mockDestinations[id]);
        } else {
          // For other IDs, create a simplified mock
          setDestination({
            id: parseInt(id),
            name: `Destination ${id}`,
            region: "Region info not available",
            description: "Detailed information coming soon!",
            longDescription: "We're working on gathering the best information about this amazing destination. Check back soon for updates!",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
            gallery: [],
            attractions: [],
            hotels: [],
            restaurants: [],
            weather: {
              bestTimeToVisit: "Information coming soon",
              seasons: []
            },
            transportation: {
              airport: "Information coming soon",
              localTransport: []
            }
          });
        }
        setLoading(false);
      }, 500);
    };

    fetchDestination();
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
        <p>Loading destination information...</p>
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="error-container">
        <h2>Destination Not Found</h2>
        <p>We couldn't find the destination you're looking for.</p>
        <Link to="/destinations" className="btn btn-primary">Back to All Destinations</Link>
      </div>
    );
  }

  return (
    <div className="destination-detail">
      {/* Hero Section */}
      <div className="destination-hero" style={{ backgroundImage: `url(${destination.image})` }}>
        <div className="destination-hero-overlay">
          <div className="destination-hero-content">
            <h1>{destination.name}</h1>
            <p className="region">{destination.region}</p>
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="destination-overview">
        <div className="container">
          <h2>Overview</h2>
          <p className="lead">{destination.description}</p>
          <div className="long-description">
            <p>{destination.longDescription}</p>
          </div>
        </div>
      </section>

      {/* Photo Gallery */}
      {destination.gallery && destination.gallery.length > 0 && (
        <section className="photo-gallery">
          <div className="container">
            <h2>Photo Gallery</h2>
            <div className="gallery-grid">
              {destination.gallery.map((photo, index) => (
                <div className="gallery-item" key={index}>
                  <img src={photo} alt={`${destination.name} - Photo ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Top Attractions */}
      {destination.attractions && destination.attractions.length > 0 && (
        <section className="attractions">
          <div className="container">
            <h2>Top Attractions</h2>
            <div className="attractions-grid">
              {destination.attractions.map((attraction, index) => (
                <div className="attraction-card" key={index}>
                  <div className="attraction-image">
                    <img src={attraction.image} alt={attraction.name} />
                  </div>
                  <div className="attraction-content">
                    <h3>{attraction.name}</h3>
                    <p>{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Where to Stay */}
      {destination.hotels && destination.hotels.length > 0 && (
        <section className="accommodation">
          <div className="container">
            <h2>Where to Stay</h2>
            <div className="hotels-grid">
              {destination.hotels.map((hotel, index) => (
                <div className="hotel-card" key={index}>
                  <div className="hotel-image" style={{ backgroundImage: `url(${hotel.image})` }}>
                    <div className="hotel-price">{hotel.price}</div>
                  </div>
                  <div className="hotel-content">
                    <h3>{hotel.name}</h3>
                    <p className="hotel-type">{hotel.type}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="view-all-link">
              <Link to="/hotels" className="btn btn-outline">View All Hotels</Link>
            </div>
          </div>
        </section>
      )}

      {/* Where to Eat */}
      {destination.restaurants && destination.restaurants.length > 0 && (
        <section className="dining">
          <div className="container">
            <h2>Where to Eat</h2>
            <div className="restaurants-grid">
              {destination.restaurants.map((restaurant, index) => (
                <div className="restaurant-card" key={index}>
                  <div className="restaurant-content">
                    <h3>{restaurant.name}</h3>
                    <p className="cuisine">{restaurant.cuisine}</p>
                    <p className="price">{restaurant.price}</p>
                    <p className="description">{restaurant.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Weather & Best Time to Visit */}
      <section className="weather-info">
        <div className="container">
          <h2>Weather & Best Time to Visit</h2>
          <p className="best-time"><strong>Best Time to Visit:</strong> {destination.weather.bestTimeToVisit}</p>
          
          {destination.weather.seasons && destination.weather.seasons.length > 0 && (
            <div className="seasons-grid">
              {destination.weather.seasons.map((season, index) => (
                <div className="season-card" key={index}>
                  <h3>{season.name}</h3>
                  <p>{season.description}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Transportation */}
      <section className="transportation">
        <div className="container">
          <h2>Transportation</h2>
          <div className="transportation-details">
            <div className="transport-item">
              <h3>Airport</h3>
              <p>{destination.transportation.airport}</p>
            </div>
            
            {destination.transportation.localTransport && destination.transportation.localTransport.length > 0 && (
              <div className="transport-item">
                <h3>Local Transportation</h3>
                <ul className="transport-list">
                  {destination.transportation.localTransport.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Related Destinations */}
      <section className="related-destinations">
        <div className="container">
          <h2>Explore More Destinations</h2>
          <div className="related-destinations-cta">
            <Link to="/destinations" className="btn btn-primary">Browse All Destinations</Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DestinationDetail; 