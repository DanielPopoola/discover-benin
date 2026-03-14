import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home-page";
import { AttractionsListingPage } from "./pages/attractions-listing-page";
import { AttractionDetailPage } from "./pages/attraction-detail-page";
import { HotelsListingPage } from "./pages/hotels-listing-page";
import { HotelDetailPage } from "./pages/hotel-detail-page";
import { RestaurantsPage } from "./pages/restaurants-page";
import { TravelGuidePage } from "./pages/travel-guide-page";
import { ContactPage } from "./pages/contact-page";

export const router = createBrowserRouter([
  { path: "/",                  Component: HomePage },
  { path: "/attractions",       Component: AttractionsListingPage },
  { path: "/attractions/:id",   Component: AttractionDetailPage },
  { path: "/hotels",            Component: HotelsListingPage },
  { path: "/hotels/:id",        Component: HotelDetailPage },
  { path: "/restaurants",       Component: RestaurantsPage },
  { path: "/travel-guide",      Component: TravelGuidePage },
  { path: "/contact",           Component: ContactPage },
]);
