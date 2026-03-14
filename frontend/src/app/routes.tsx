import { createBrowserRouter } from "react-router";
import { HomePage } from "./pages/home-page";
import { AttractionDetailPage } from "./pages/attraction-detail-page";
import { HotelsListingPage } from "./pages/hotels-listing-page";
import { TravelGuidePage } from "./pages/travel-guide-page";
import { ContactPage } from "./pages/contact-page";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/attractions/:id",
    Component: AttractionDetailPage,
  },
  {
    path: "/hotels",
    Component: HotelsListingPage,
  },
  {
    path: "/travel-guide",
    Component: TravelGuidePage,
  },
  {
    path: "/contact",
    Component: ContactPage,
  },
]);
