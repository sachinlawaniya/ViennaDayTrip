import { z } from 'zod';

export const bookingFormSchema = z.object({
  serviceType: z.enum(['transfer', 'hourly', 'daytrip']),
  pickupDate: z.string().min(1, 'Pickup date is required'),
  pickupTime: z.string().min(1, 'Pickup time is required'),
  pickupLocation: z.string().min(3, 'Pickup location is required'),
  dropoffLocation: z.string().optional(),
  transferType: z.enum(['one-way', 'return']).optional(),
  returnDate: z.string().optional(),
  returnTime: z.string().optional(),
  extraTime: z.string().optional(),
  durationHours: z.string().optional(),
  dayTripRoute: z.string().optional(),
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().min(6, 'Please enter a valid phone number'),
  passengers: z.number().min(1).max(20).default(1),
  luggage: z.number().min(0).max(20).default(1),
  vehiclePreference: z.string().optional(),
  specialRequests: z.string().optional(),
});

export type BookingFormInput = z.infer<typeof bookingFormSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  email: z.string().email('Valid email is required'),
  phone: z.string().min(6, 'Valid phone number is required'),
  service: z.string().optional(),
  message: z.string().min(5, 'Message must be at least 5 characters'),
});

export type ContactFormInput = z.infer<typeof contactFormSchema>;
