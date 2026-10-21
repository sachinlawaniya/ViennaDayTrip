export interface Vehicle {
  id: string;
  name: string;
  category: string;
  passengers: number;
  luggage: number;
  image: string;
  description: string;
  features: string[];
  recommendedFor: string;
}

export interface DayTrip {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  duration: string;
  distance: string;
  badge?: string;
  heroImage: string;
  cardImage: string;
  description: string;
  shortDescription: string;
  highlights: string[];
  itinerary: {
    title: string;
    description: string;
    duration?: string;
  }[];
  included: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  heroImage: string;
  shortDescription: string;
  fullDescription: string;
  features: string[];
  faqs: {
    question: string;
    answer: string;
  }[];
}

export interface ReviewItem {
  id: string;
  author: string;
  avatar?: string;
  rating: number;
  text: string;
  date: string;
  platform: 'Google' | 'TripAdvisor';
  location?: string;
}

export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  category: string;
  featuredImage?: string;
}

export interface BookingFormData {
  serviceType: 'transfer' | 'hourly' | 'daytrip';
  pickupDate: string;
  pickupTime: string;
  pickupLocation: string;
  dropoffLocation?: string;
  transferType?: 'one-way' | 'return';
  returnDate?: string;
  returnTime?: string;
  extraTime?: string;
  durationHours?: string;
  dayTripRoute?: string;
  name?: string;
  email?: string;
  phone?: string;
  passengers?: number;
  luggage?: number;
  vehiclePreference?: string;
  specialRequests?: string;
}
