/**
 * All API calls go through here.
 * BASE resolves to "/api" — the Vite proxy forwards this to FastAPI in dev,
 * and Nginx handles the same routing in production. No environment-specific
 * URLs anywhere in the app.
 */

import type { Attraction } from "../app/data/attractions";
import type { Hotel } from "../app/data/hotels";
import type { Restaurant } from "../app/data/restaurants";

const BASE = "/api";

// ---------------------------------------------------------------------------
// Attractions
// ---------------------------------------------------------------------------
export async function getAttractions(params?: {
  category?: string;
  region?: string;
}): Promise<Attraction[]> {
  const qs = new URLSearchParams();
  if (params?.category) qs.set("category", params.category);
  if (params?.region) qs.set("region", params.region);
  const res = await fetch(`${BASE}/attractions?${qs}`);
  if (!res.ok) throw new Error("Failed to fetch attractions");
  return res.json();
}

export async function getAttraction(slug: string): Promise<Attraction> {
  const res = await fetch(`${BASE}/attractions/${slug}`);
  if (!res.ok) throw new Error(`Attraction not found: ${slug}`);
  return res.json();
}


// ---------------------------------------------------------------------------
// Hotels
// ---------------------------------------------------------------------------
export async function getHotels(params?: {
  city?: string;
  stars?: number;
  min_price?: number;
  max_price?: number;
}): Promise<Hotel[]> {
  const qs = new URLSearchParams();
  if (params?.city) qs.set("city", params.city);
  if (params?.stars) qs.set("stars", String(params.stars));
  if (params?.min_price != null) qs.set("min_price", String(params.min_price));
  if (params?.max_price != null) qs.set("max_price", String(params.max_price));
  const res = await fetch(`${BASE}/hotels?${qs}`);
  if (!res.ok) throw new Error("Failed to fetch hotels");
  return res.json();
}

export async function getHotel(slug: string): Promise<Hotel> {
  const res = await fetch(`${BASE}/hotels/${slug}`);
  if (!res.ok) throw new Error(`Hotel not found: ${slug}`);
  return res.json();
}

// ---------------------------------------------------------------------------
// Restaurants
// ---------------------------------------------------------------------------
export async function getRestaurants(params?: {
  city?: string;
  cuisine?: string;
}): Promise<Restaurant[]> {
  const qs = new URLSearchParams();
  if (params?.city) qs.set("city", params.city);
  if (params?.cuisine) qs.set("cuisine", params.cuisine);
  const res = await fetch(`${BASE}/restaurants?${qs}`);
  if (!res.ok) throw new Error("Failed to fetch restaurants");
  return res.json();
}

export async function getRestaurant(slug: string): Promise<Restaurant> {
  const res = await fetch(`${BASE}/restaurants/${slug}`);
  if (!res.ok) throw new Error(`Restaurant not found: ${slug}`);
  return res.json();
}

// ---------------------------------------------------------------------------
// AI streaming
// ---------------------------------------------------------------------------
export async function streamRecommendation(
  message: string,
  onChunk: (text: string) => void,
  onDone: () => void
): Promise<void> {
  const res = await fetch(`${BASE}/ai/recommend`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message }),
  });

  if (!res.ok || !res.body) throw new Error("AI stream failed");

  const reader = res.body.getReader();
  const decoder = new TextDecoder();

  while (true) {
    const { done, value } = await reader.read();
    if (done) break;

    // Each SSE chunk looks like "data: some text\n\n"
    const raw = decoder.decode(value);
    for (const line of raw.split("\n")) {
      if (!line.startsWith("data: ")) continue;
      const text = line.slice(6); // strip "data: "
      if (text === "[DONE]") {
        onDone();
        return;
      }
      onChunk(text);
    }
  }
  onDone();
}