"""
Idempotent seed script — safe to run multiple times.
Checks for existing records before inserting, so re-running never duplicates data.
"""
from sqlmodel import Session
from app.database import engine
from app.models import Attraction, Hotel, Restaurant


# ---------------------------------------------------------------------------
# Attractions data (translated from frontend/src/app/data/attractions.ts)
# ---------------------------------------------------------------------------
ATTRACTIONS_DATA = [
    {
        "slug": "pendjari",
        "name": "Pendjari National Park",
        "region": "North Benin",
        "badge": "UNESCO Reserve",
        "category": "National Park",
        "description": "One of West Africa's last great wildlife sanctuaries — home to lions, elephants, hippos, and hundreds of bird species.",
        "long_description": "Pendjari National Park is a UNESCO Biosphere Reserve and the most important wildlife refuge in West Africa. Covering over 4,800 km², it harbours one of the last viable populations of lions and cheetahs in West Africa, alongside massive elephant herds, hippos, and over 300 bird species. The park's savannah landscapes, rivers, and seasonal swamps create a dramatic backdrop for unforgettable safari experiences.",
        "rating": 4.9,
        "reviews": 238,
        "best_time": "Nov – Apr",
        "travel_time": "4-5 hours from Cotonou",
        "image": "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1716998461781-95815e03bf63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1704183683766-37137be69d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "tips": [
            "Visit during the dry season (November to April) for the best wildlife viewing",
            "Book guided tours in advance, especially during peak season",
            "Bring binoculars — early morning drives yield the best sightings",
            "Pack neutral-coloured, lightweight clothing and sunscreen",
            "Stay overnight at park lodges for early morning safari access",
        ],
        "nearby_hotels": [
            {"name": "Pendjari Lodge", "distance": "Inside park"},
            {"name": "Hotel Tata-Somba", "distance": "15 km"},
            {"name": "Auberge de Boukoumbé", "distance": "45 km"},
        ],
        "nearby_restaurants": [
            {"name": "Restaurant du Parc", "distance": "Inside park"},
            {"name": "Chez Marcel", "distance": "12 km"},
            {"name": "Le Campement", "distance": "20 km"},
        ],
        "weather": [
            {"season": "Dry Season", "months": "Nov – Apr", "temp": "28–35°C"},
            {"season": "Rainy Season", "months": "May – Oct", "temp": "24–30°C"},
        ],
    },
    {
        "slug": "cotonou",
        "name": "Cotonou",
        "region": "Littoral",
        "badge": "City",
        "category": "City",
        "description": "The economic capital of Benin — a vibrant, fast-moving city with West Africa's largest open-air market and a buzzing waterfront.",
        "long_description": "Cotonou is Benin's largest city and economic heartbeat. Home to the sprawling Dantokpa Market — one of the largest open-air markets in all of West Africa — it is a city of relentless energy. The corniche along the Atlantic offers sunset views over fishing pirogues, while the upscale Ganhi neighbourhood has great restaurants and nightlife.",
        "rating": 4.6,
        "reviews": 411,
        "best_time": "Year-round",
        "travel_time": "Starting point",
        "image": "https://images.unsplash.com/photo-1718766304636-cb9309953a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1718766304636-cb9309953a55?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1734254807102-fbf62b0cc513?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1566585747350-ddd59837d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "tips": [
            "Visit Dantokpa Market early morning when it's most alive",
            "Take a pirogue from Fidjrossè beach at sunset",
            "Zémidjans (moto-taxis) are the fastest way to get around",
            "The corniche area is safest for evening walks",
        ],
        "nearby_hotels": [
            {"name": "Golden Tulip Le Diplomate", "distance": "City centre"},
            {"name": "Azalaï Hôtel de la Plage", "distance": "2 km"},
            {"name": "Novotel Cotonou Orisha", "distance": "3 km"},
        ],
        "nearby_restaurants": [
            {"name": "La Belle Vue", "distance": "City centre"},
            {"name": "Maquis du Centre", "distance": "1 km"},
            {"name": "Le Jardin", "distance": "4 km"},
        ],
        "weather": [
            {"season": "Dry Season", "months": "Nov – Apr", "temp": "26–32°C"},
            {"season": "Rainy Season", "months": "May – Oct", "temp": "23–28°C"},
        ],
    },
    {
        "slug": "grand-popo",
        "name": "Grand-Popo",
        "region": "Mono",
        "badge": "Beach",
        "category": "Beach & Nature",
        "description": "An unspoilt Atlantic coastline where the Mono River meets the sea — serene beaches, mangroves, and authentic village life.",
        "long_description": "Grand-Popo is Benin's most charming coastal retreat. Where the Mono River flows into the Atlantic, a unique ecosystem of mangrove forests, sand bars, and lagoons creates a paradise for nature lovers. The town retains the character of a traditional Beninese fishing village, with colourful pirogues, fresh seafood, and warm hospitality.",
        "rating": 4.7,
        "reviews": 184,
        "best_time": "Oct – Feb",
        "travel_time": "2 hours from Cotonou",
        "image": "https://images.unsplash.com/photo-1753872780884-12521c336c50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1753872780884-12521c336c50?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1716998461781-95815e03bf63?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "tips": [
            "Strong Atlantic currents — swim only in designated safe zones",
            "Pirogue rides through the mangroves are a highlight",
            "Fresh lobster grilled on the beach at sunset is unmissable",
            "Book accommodation in advance during December–January peak",
        ],
        "nearby_hotels": [
            {"name": "Auberge de Grand-Popo", "distance": "Village centre"},
            {"name": "Bab's Dock", "distance": "1 km"},
            {"name": "Casa del Papa", "distance": "3 km"},
        ],
        "nearby_restaurants": [
            {"name": "Bab's Dock Restaurant", "distance": "1 km"},
            {"name": "La Paillote", "distance": "2 km"},
            {"name": "Chez Mireille", "distance": "3 km"},
        ],
        "weather": [
            {"season": "Dry Season", "months": "Oct – Feb", "temp": "25–30°C"},
            {"season": "Rainy Season", "months": "Mar – Sep", "temp": "22–27°C"},
        ],
    },
    {
        "slug": "ouidah",
        "name": "Ouidah",
        "region": "Atlantique",
        "badge": "Heritage",
        "category": "Heritage & Culture",
        "description": "Heart of Voodoo culture and the Door of No Return — a profound historical city shaped by faith, the slave trade, and living tradition.",
        "long_description": "Ouidah is Benin's most historically and spiritually significant city. It was the main embarkation point for enslaved Africans during the transatlantic slave trade, and the Route des Esclaves ends at the haunting 'Door of No Return' monument on the beach. Today, Ouidah is also the global centre of Vodoun spirituality, with the annual Fête du Vodoun drawing pilgrims from the diaspora worldwide.",
        "rating": 4.8,
        "reviews": 302,
        "best_time": "Year-round",
        "travel_time": "1 hour from Cotonou",
        "image": "https://images.unsplash.com/photo-1566585747350-ddd59837d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1566585747350-ddd59837d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1704183683766-37137be69d4f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "tips": [
            "Visit during the Fête du Vodoun (January 10) for an unmissable cultural spectacle",
            "A guided tour of the Route des Esclaves is deeply moving — allow 3 hours",
            "The Python Temple is open to visitors with a small entrance fee",
            "Respect Vodoun ceremonies and always ask before photographing",
        ],
        "nearby_hotels": [
            {"name": "La Maison du Brésil", "distance": "Town centre"},
            {"name": "Villa Karo", "distance": "2 km"},
            {"name": "Hotel de la Plage", "distance": "3 km"},
        ],
        "nearby_restaurants": [
            {"name": "La Galère", "distance": "Town centre"},
            {"name": "Restaurant Chez Céleste", "distance": "1 km"},
            {"name": "Le Jardin d'Ouidah", "distance": "2 km"},
        ],
        "weather": [
            {"season": "Dry Season", "months": "Nov – Apr", "temp": "26–32°C"},
            {"season": "Rainy Season", "months": "May – Oct", "temp": "23–28°C"},
        ],
    },
    {
        "slug": "abomey",
        "name": "Abomey",
        "region": "Zou",
        "badge": "Royal Palace",
        "category": "UNESCO Heritage",
        "description": "Ancient seat of the Kingdom of Dahomey — twelve royal palaces with extraordinary bas-reliefs tell the story of one of Africa's most powerful empires.",
        "long_description": "The Royal Palaces of Abomey represent one of Africa's greatest historical legacies. This UNESCO World Heritage Site encompasses the ruins of twelve palaces built by successive kings of the powerful Kingdom of Dahomey between the 17th and 19th centuries. The exceptional bas-reliefs that decorate the palace walls narrate each king's reign in vivid historical detail.",
        "rating": 4.9,
        "reviews": 267,
        "best_time": "Nov – Feb",
        "travel_time": "3 hours from Cotonou",
        "image": "https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1668609268461-4f6a15269ff1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1566585747350-ddd59837d1b6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1729359035276-189519a4b072?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "tips": [
            "Hire the official museum guide — their knowledge brings the bas-reliefs to life",
            "The appliqué tapestry workshop next to the museum is worth a visit",
            "Photography inside the palaces requires a permit",
            "Combine with a visit to the artisan market for traditional crafts",
        ],
        "nearby_hotels": [
            {"name": "Hotel Chez Monique", "distance": "Town centre"},
            {"name": "Auberge d'Abomey", "distance": "1 km"},
            {"name": "Résidence des Rois", "distance": "2 km"},
        ],
        "nearby_restaurants": [
            {"name": "Chez le Roi", "distance": "Town centre"},
            {"name": "Restaurant Local", "distance": "500 m"},
            {"name": "La Cour Royale", "distance": "1 km"},
        ],
        "weather": [
            {"season": "Dry Season", "months": "Nov – Mar", "temp": "25–33°C"},
            {"season": "Rainy Season", "months": "Apr – Oct", "temp": "22–29°C"},
        ],
    },
]


# ---------------------------------------------------------------------------
# Hotels data (translated from frontend/src/app/data/hotels.ts)
# ---------------------------------------------------------------------------
HOTELS_DATA = [
    {
        "slug": "golden-tulip-le-diplomate",
        "name": "Golden Tulip Le Diplomate",
        "city": "Cotonou",
        "address": "Avenue Steinmetz, Cotonou, Bénin",
        "price": 12000,
        "rating": 4.8,
        "stars": 5,
        "reviews": 245,
        "description": "Cotonou's premier five-star address, the Golden Tulip Le Diplomate sits in the heart of the business district with sweeping Atlantic views. Rooms are spacious and elegantly furnished, the rooftop pool is one of the finest in the city, and the in-house restaurant serves both Beninese and international cuisine to a high standard.",
        "image": "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "amenities": ["Rooftop pool", "Fitness centre", "Free Wi-Fi", "Airport transfer", "24-hour room service", "Business centre", "Restaurant & bar", "Concierge", "Air conditioning", "Parking"],
        "contact": {"phone": "+229 21 31 61 00", "email": "reservations@goldentulip-cotonou.com", "website": "goldentuliplediplomatehotel.com"},
        "nearby_attractions": [
            {"name": "Dantokpa Market", "distance": "2 km"},
            {"name": "Cotonou Marina", "distance": "500 m"},
            {"name": "Foundation Zinsou", "distance": "3 km"},
        ],
        "policies": {"checkIn": "14:00", "checkOut": "12:00", "cancellation": "Free cancellation up to 48 hours before arrival"},
    },
    {
        "slug": "azalai-hotel-de-la-plage",
        "name": "Azalaï Hotel de la Plage",
        "city": "Cotonou",
        "address": "Boulevard de la Marina, Cotonou, Bénin",
        "price": 9500,
        "rating": 4.6,
        "stars": 4,
        "reviews": 182,
        "description": "Right on the Cotonou waterfront, the Azalaï de la Plage offers comfortable rooms with direct beach access. Part of the trusted pan-African Azalaï Hotels group, it blends contemporary comfort with warm West African hospitality. The beachside terrace is a highlight — perfect for sundowners with views over the Atlantic.",
        "image": "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "amenities": ["Private beach access", "Outdoor pool", "Free Wi-Fi", "Restaurant & bar", "Room service", "Air conditioning", "Meeting rooms", "Parking", "Laundry service"],
        "contact": {"phone": "+229 21 30 09 00", "email": "info@azalaihotels.com", "website": "azalaihotels.com"},
        "nearby_attractions": [
            {"name": "Cotonou Beach", "distance": "On-site"},
            {"name": "Fidjrossè Beach", "distance": "4 km"},
            {"name": "Dantokpa Market", "distance": "5 km"},
        ],
        "policies": {"checkIn": "15:00", "checkOut": "11:00", "cancellation": "Free cancellation up to 24 hours before arrival"},
    },
    {
        "slug": "hotel-maison-rouge",
        "name": "Hotel Maison Rouge",
        "city": "Porto-Novo",
        "address": "Rue des Artisans, Porto-Novo, Bénin",
        "price": 7500,
        "rating": 4.5,
        "stars": 4,
        "reviews": 128,
        "description": "A charming boutique hotel tucked into a colonial-era building in Benin's official capital. The Maison Rouge is ideal for travellers who want to explore Porto-Novo's museums, craft markets, and royal architecture without the crowds of Cotonou. Rooms are individually decorated with locally sourced textiles and art.",
        "image": "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1664908790579-34b71154f603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "amenities": ["Garden courtyard", "Free Wi-Fi", "Breakfast included", "Restaurant", "Air conditioning", "Bicycle rental", "Tour desk", "Luggage storage"],
        "contact": {"phone": "+229 20 21 44 00", "email": "contact@maisonrouge-benin.com", "website": "maisonrouge-benin.com"},
        "nearby_attractions": [
            {"name": "Musée Ethnographique", "distance": "700 m"},
            {"name": "Grande Mosquée", "distance": "1.2 km"},
            {"name": "Palais Royal", "distance": "2 km"},
        ],
        "policies": {"checkIn": "13:00", "checkOut": "11:00", "cancellation": "Free cancellation up to 48 hours before arrival"},
    },
    {
        "slug": "benin-marina-hotel",
        "name": "Benin Marina Hotel",
        "city": "Cotonou",
        "address": "Boulevard de la République, Cotonou, Bénin",
        "price": 11000,
        "rating": 4.7,
        "stars": 4,
        "reviews": 203,
        "description": "A well-established landmark in central Cotonou, the Benin Marina Hotel is favoured by business travellers and government delegations for its central location and reliable service. The expansive pool terrace overlooks the lagoon, and the conference facilities are among the best-equipped in the country.",
        "image": "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "amenities": ["Lagoon-view pool", "Conference centre", "Free Wi-Fi", "Multiple restaurants", "24-hour front desk", "Airport shuttle", "Fitness centre", "Air conditioning", "Parking", "Spa"],
        "contact": {"phone": "+229 21 30 01 50", "email": "info@beninmarinahotel.com", "website": "beninmarinahotel.com"},
        "nearby_attractions": [
            {"name": "Cotonou Lagoon", "distance": "On-site"},
            {"name": "Centre Culturel Français", "distance": "1 km"},
            {"name": "Dantokpa Market", "distance": "3 km"},
        ],
        "policies": {"checkIn": "14:00", "checkOut": "12:00", "cancellation": "Free cancellation up to 72 hours before arrival"},
    },
    {
        "slug": "grand-popo-beach-resort",
        "name": "Grand Popo Beach Resort",
        "city": "Grand Popo",
        "address": "Route de la Plage, Grand-Popo, Bénin",
        "price": 8500,
        "rating": 4.6,
        "stars": 3,
        "reviews": 156,
        "description": "Perched right on the Atlantic coast, the Grand Popo Beach Resort is the ideal escape from city life. Traditional thatched bungalows sit steps from the sand, and the sound of the ocean is your alarm clock. The restaurant serves the freshest grilled fish and lobster you'll find anywhere in Benin.",
        "image": "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "amenities": ["Private beach", "Beach bungalows", "Restaurant & bar", "Free Wi-Fi", "Pirogue excursions", "Bicycle rental", "Hammocks", "Laundry service"],
        "contact": {"phone": "+229 21 43 00 11", "email": "info@grandpoporesort.com", "website": "grandpoporesort.com"},
        "nearby_attractions": [
            {"name": "Grand-Popo Beach", "distance": "On-site"},
            {"name": "Mono River Delta", "distance": "3 km"},
            {"name": "Agoué Village", "distance": "8 km"},
        ],
        "policies": {"checkIn": "14:00", "checkOut": "11:00", "cancellation": "Free cancellation up to 48 hours before arrival"},
    },
    {
        "slug": "auberge-de-grand-popo",
        "name": "Auberge de Grand Popo",
        "city": "Grand Popo",
        "address": "Village de Grand-Popo, Bénin",
        "price": 6500,
        "rating": 4.4,
        "stars": 3,
        "reviews": 94,
        "description": "A friendly, low-key auberge in the heart of the village, popular with backpackers and budget-conscious travellers who want an authentic local experience. Simple, clean rooms, a shaded courtyard, and a kitchen that puts out excellent local food at honest prices.",
        "image": "https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1729673766770-83160c576668?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1558117338-aa433feb1c62?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "amenities": ["Courtyard garden", "Local restaurant", "Free Wi-Fi", "Shared kitchen", "Luggage storage", "Tour advice", "Hammocks"],
        "contact": {"phone": "+229 97 45 12 33", "email": "auberge.grandpopo@gmail.com", "website": ""},
        "nearby_attractions": [
            {"name": "Grand-Popo Beach", "distance": "500 m"},
            {"name": "Mono River", "distance": "1 km"},
            {"name": "Local fishing village", "distance": "200 m"},
        ],
        "policies": {"checkIn": "13:00", "checkOut": "11:00", "cancellation": "Cancellation policy varies — contact hotel directly"},
    },
    {
        "slug": "hotel-du-port",
        "name": "Hotel du Port",
        "city": "Porto-Novo",
        "address": "Quartier Gbeto, Porto-Novo, Bénin",
        "price": 8000,
        "rating": 4.5,
        "stars": 3,
        "reviews": 167,
        "description": "Overlooking the lagoon in Porto-Novo, the Hotel du Port is a reliable mid-range choice for explorers of Benin's capital. Clean, well-maintained rooms, a rooftop terrace with city views, and a helpful staff who know the local area inside out.",
        "image": "https://images.unsplash.com/photo-1664908790579-34b71154f603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1664908790579-34b71154f603?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1772064901543-fb4a5d9f4736?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1683914791878-4d3132794594?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "amenities": ["Rooftop terrace", "Restaurant", "Free Wi-Fi", "Air conditioning", "Laundry service", "Tour desk", "Parking", "Room service"],
        "contact": {"phone": "+229 20 21 37 60", "email": "hotelduport.pn@gmail.com", "website": ""},
        "nearby_attractions": [
            {"name": "Musée da Silva", "distance": "1 km"},
            {"name": "Cathédrale Notre-Dame", "distance": "800 m"},
            {"name": "Marché de Porto-Novo", "distance": "500 m"},
        ],
        "policies": {"checkIn": "14:00", "checkOut": "11:00", "cancellation": "Free cancellation up to 24 hours before arrival"},
    },
    {
        "slug": "novotel-cotonou-orisha",
        "name": "Novotel Cotonou Orisha",
        "city": "Cotonou",
        "address": "Avenue Jean-Paul II, Cotonou, Bénin",
        "price": 1350,
        "rating": 4.9,
        "stars": 5,
        "reviews": 312,
        "description": "The Novotel Cotonou Orisha is the gold standard of business travel in West Africa. Named after the Orisha spirits of the Vodoun tradition, the hotel blends global hospitality standards with a distinctly Beninese soul. Impeccably designed rooms, a world-class spa, and an acclaimed rooftop restaurant make this the top choice for discerning travellers.",
        "image": "https://images.unsplash.com/photo-1759462692354-404b2c995c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        "gallery": [
            "https://images.unsplash.com/photo-1759462692354-404b2c995c99?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1575999080555-3f7a698dd8d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
            "https://images.unsplash.com/photo-1509647924673-bbb53e22eeb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
        ],
        "amenities": ["Rooftop restaurant", "Full-service spa", "Indoor & outdoor pools", "Fitness centre", "Free Wi-Fi", "Airport limousine", "24-hour concierge", "Business lounge", "Multiple dining venues", "Valet parking"],
        "contact": {"phone": "+229 21 30 05 00", "email": "H8008@accor.com", "website": "novotel.com"},
        "nearby_attractions": [
            {"name": "Foundation Zinsou", "distance": "2 km"},
            {"name": "Cotonou Cathedral", "distance": "1.5 km"},
            {"name": "Dantokpa Market", "distance": "4 km"},
        ],
        "policies": {"checkIn": "15:00", "checkOut": "12:00", "cancellation": "Free cancellation up to 72 hours before arrival"},
    },
]


# ---------------------------------------------------------------------------
# Restaurants data (translated from frontend/src/app/data/restaurants.ts)
# ---------------------------------------------------------------------------
RESTAURANTS_DATA = [
    {
        "slug": "la-belle-vue",
        "name": "La Belle Vue",
        "city": "Cotonou",
        "address": "Rue du Gouverneur Général Ponty, Cotonou, Bénin",
        "cuisine": "Beninese & French Fusion",
        "description": "Perched on the rooftop of one of Cotonou's finest buildings, La Belle Vue earns its name. The panoramic views over the Atlantic harbour set the stage for a menu that marries French culinary technique with the bold, earthy flavours of Beninese tradition.",
        "price": "$$",
        "rating": 4.8,
        "reviews": 312,
        "hours": "12:00 – 23:00",
        "specialty": "Grilled Fish & Amiwo",
        "image": "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        ],
        "menu": [
            {
                "section": "Starters",
                "items": [
                    {"name": "Crab salad with palm heart", "description": "Fresh Atlantic crab, local palm heart, citrus dressing", "price": "CFA 800"},
                    {"name": "Akassa fritters", "description": "Fermented corn fritters, spiced tomato dip", "price": "CFA 500"},
                    {"name": "Smoked barracuda rillettes", "description": "House-smoked fish, toasted brioche, pickled shallots", "price": "CFA 900"},
                ],
            },
            {
                "section": "Mains",
                "items": [
                    {"name": "Grilled barracuda, amiwo sauce", "description": "Whole barracuda, tomato-corn porridge, plantain crisps", "price": "CFA 1800"},
                    {"name": "Poulet DG", "description": "Roast chicken, fried plantain, vegetables, house jus", "price": "CFA 1500"},
                    {"name": "Vegetarian amiwo", "description": "Red sauce corn porridge, seasonal vegetables, boiled egg", "price": "CFA 1100"},
                ],
            },
            {
                "section": "Desserts",
                "items": [
                    {"name": "Coconut panna cotta", "description": "Fresh coconut, mango coulis, lime zest", "price": "CFA 600"},
                    {"name": "Chocolate fondant", "description": "Dark Beninese chocolate, vanilla cream", "price": "CFA 700"},
                ],
            },
        ],
        "contact": {"phone": "+229 21 31 44 00", "instagram": "@labellevue_cotonou"},
        "features": ["Rooftop terrace", "Live music Fridays", "Reservations recommended", "Private dining available", "Vegetarian options", "Bar & cocktails"],
    },
    {
        "slug": "babs-dock",
        "name": "Bab's Dock",
        "city": "Grand-Popo",
        "address": "Route de la Plage, Grand-Popo, Bénin",
        "cuisine": "Seafood & Local",
        "description": "Right on the beach in Grand-Popo, Bab's Dock is the kind of place you find once and return to every trip. The day's catch arrives at your table grilled over wood fire with nothing but lime, sea salt, and a cold Flag beer.",
        "price": "$$",
        "rating": 4.7,
        "reviews": 228,
        "hours": "11:00 – 22:00",
        "specialty": "Lobster & Tilapia",
        "image": "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
        ],
        "menu": [
            {
                "section": "From the Sea",
                "items": [
                    {"name": "Whole grilled tilapia", "description": "Wood-fired, lime butter, attieke", "price": "CFA 1200"},
                    {"name": "Lobster thermidor", "description": "Half lobster, cream sauce, gruyère gratin", "price": "CFA 2400"},
                    {"name": "Shrimp brochettes", "description": "Atlantic prawns, garlic oil, garden salad", "price": "CFA 1400"},
                ],
            },
            {
                "section": "Sides & Extras",
                "items": [
                    {"name": "Attieke", "description": "Fermented cassava couscous", "price": "CFA 3000"},
                    {"name": "Aloko", "description": "Fried sweet plantain, chilli sauce", "price": "CFA 3000"},
                    {"name": "House salad", "description": "Mixed leaves, tomato, cucumber, vinaigrette", "price": "CFA 4000"},
                ],
            },
        ],
        "contact": {"phone": "+229 97 12 45 88", "instagram": "@babsdock_grandpopo"},
        "features": ["Beachfront setting", "Fresh catch daily", "Open-air dining", "Sunset views", "Family friendly", "No reservations needed"],
    },
    {
        "slug": "la-galere",
        "name": "La Galère",
        "city": "Ouidah",
        "address": "Rue des Pêcheurs, Ouidah, Bénin",
        "cuisine": "Traditional Beninese",
        "description": "Set in a restored colonial-era courtyard just off the Route des Esclaves, La Galère is the most authentic Beninese dining experience in Ouidah. The recipes come from the kitchen of founder Maman Félicité.",
        "price": "$",
        "rating": 4.6,
        "reviews": 189,
        "hours": "08:00 – 21:00",
        "specialty": "Amiwo & Akassa",
        "image": "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
        ],
        "menu": [
            {
                "section": "Traditional Dishes",
                "items": [
                    {"name": "Amiwo with fish", "description": "Corn-tomato porridge, whole fried fish, piment", "price": "CFA 7000"},
                    {"name": "Akassa with sauce graine", "description": "Fermented corn dough, palm nut sauce, smoked fish", "price": "CFA 6000"},
                    {"name": "Ablo with chicken", "description": "Steamed rice cake, grilled chicken, onion sauce", "price": "CFA 8000"},
                ],
            },
        ],
        "contact": {"phone": "+229 97 88 23 41", "instagram": "@lagalere_ouidah"},
        "features": ["Colonial courtyard", "Breakfast served", "Vegetarian friendly", "Cooking classes available", "Historic setting", "Cash only"],
    },
    {
        "slug": "chez-clarisse",
        "name": "Chez Clarisse",
        "city": "Ganvié",
        "address": "Sur le lac Nokoué, Ganvié, Bénin",
        "cuisine": "Lake & River Cuisine",
        "description": "Possibly the most uniquely situated restaurant in all of Benin — Chez Clarisse floats on Lake Nokoué in the heart of the stilt village of Ganvié. You arrive by pirogue, you eat on the water, and everything on the menu was swimming in the lake that morning.",
        "price": "$",
        "rating": 4.5,
        "reviews": 143,
        "hours": "10:00 – 20:00",
        "specialty": "Lake Fish & Plantain",
        "image": "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800",
            "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
        ],
        "menu": [
            {
                "section": "Lake Specialities",
                "items": [
                    {"name": "Grilled lake tilapia", "description": "Whole fish, palm oil sauce, steamed rice", "price": "CFA 6000"},
                    {"name": "Fresh water snails", "description": "Spiced with piment doux, served with bread", "price": "CFA 5000"},
                    {"name": "Catfish stew", "description": "Slow-cooked in tomato sauce, plantain", "price": "CFA 7000"},
                ],
            },
        ],
        "contact": {"phone": "+229 97 34 12 09", "instagram": "@chezclarisse_ganvie"},
        "features": ["Floating on Lake Nokoué", "Arrive by pirogue", "All ingredients from the lake", "Unique cultural experience", "Booking recommended", "Cash only"],
    },
    {
        "slug": "le-jardin",
        "name": "Le Jardin",
        "city": "Porto-Novo",
        "address": "Quartier Missèbo, Porto-Novo, Bénin",
        "cuisine": "Pan-African",
        "description": "Hidden behind a wooden gate in Porto-Novo's old quarter, Le Jardin is exactly what the name promises — a lush, shaded garden restaurant where the evening breeze carries the smell of grilling meat and the sounds of conversation in five languages.",
        "price": "$$",
        "rating": 4.6,
        "reviews": 176,
        "hours": "12:00 – 22:30",
        "specialty": "Jollof & Grilled Meats",
        "image": "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
            "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800",
            "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
        ],
        "menu": [
            {
                "section": "Pan-African Mains",
                "items": [
                    {"name": "Jollof rice", "description": "West African tomato rice, grilled chicken, fried plantain", "price": "CFA 1300"},
                    {"name": "Thiéboudienne", "description": "Senegalese rice and fish, stuffed with herbs", "price": "CFA 1400"},
                    {"name": "Moambe chicken", "description": "Congolese palm nut sauce, fufu", "price": "CFA 1300"},
                ],
            },
        ],
        "contact": {"phone": "+229 20 22 31 45", "instagram": "@lejardin_portonovo"},
        "features": ["Garden seating", "Live music weekends", "Pan-African menu", "Good wine list", "Reservations advised", "Vegetarian options"],
    },
    {
        "slug": "maquis-du-centre",
        "name": "Maquis du Centre",
        "city": "Cotonou",
        "address": "Avenue Clozel, Quartier Cadjehoun, Cotonou, Bénin",
        "cuisine": "Street Food & Grills",
        "description": "A maquis is the West African institution of the open-air grill restaurant — and Maquis du Centre is the best version of that in Cotonou. Plastic chairs, cold beer, charcoal smoke, and the best brochettes in the city.",
        "price": "$",
        "rating": 4.4,
        "reviews": 267,
        "hours": "10:00 – 00:00",
        "specialty": "Brochettes & Aloko",
        "image": "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
        "gallery": [
            "https://images.unsplash.com/photo-1590846406792-0adc7f938f1d?w=800",
            "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800",
            "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=800",
        ],
        "menu": [
            {
                "section": "Grills",
                "items": [
                    {"name": "Beef brochettes", "description": "Charcoal-grilled beef skewers, onion, spiced sauce", "price": "CFA 4000"},
                    {"name": "Poulet braisé", "description": "Half grilled chicken, piment, aloko", "price": "CFA 7000"},
                    {"name": "Mixed brochette platter", "description": "Beef, chicken, sausage, six skewers total", "price": "CFA 9000"},
                ],
            },
        ],
        "contact": {"phone": "+229 97 56 78 34", "instagram": "@maquis_cotonou"},
        "features": ["Open-air grill", "Late night dining", "Local atmosphere", "Budget friendly", "No reservations", "Cash only"],
    },
]


def seed():
    """Seed the database. Idempotent — safe to run multiple times."""
    with Session(engine) as session:
        # Attractions
        for data in ATTRACTIONS_DATA:
            existing = session.get(Attraction, data["slug"])
            if not existing:
                session.add(Attraction(**data))

        # Hotels
        for data in HOTELS_DATA:
            existing = session.get(Hotel, data["slug"])
            if not existing:
                session.add(Hotel(**data))

        # Restaurants
        for data in RESTAURANTS_DATA:
            existing = session.get(Restaurant, data["slug"])
            if not existing:
                session.add(Restaurant(**data))

        session.commit()
        print("✓ Database seeded successfully")


if __name__ == "__main__":
    from app.database import create_db_and_tables
    create_db_and_tables()
    seed()