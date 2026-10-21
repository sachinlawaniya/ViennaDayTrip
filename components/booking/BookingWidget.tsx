'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  Users, 
  Briefcase, 
  Check, 
  ArrowRight, 
  ChevronRight, 
  Car, 
  Send, 
  MessageSquare, 
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO, FLEET_VEHICLES, DAY_TRIP_ROUTES_LIST } from '@/lib/content';
import ServiceAreaModal from './ServiceAreaModal';

type ServiceTab = 'transfer' | 'hourly' | 'daytrip';

export default function BookingWidget() {
  const [activeTab, setActiveTab] = useState<ServiceTab>('transfer');
  const [step, setStep] = useState<1 | 2 | 3>(1);

  // Form Fields
  const [pickupDate, setPickupDate] = useState('');
  const [pickupTime, setPickupTime] = useState('10:00');
  const [pickupLocation, setPickupLocation] = useState('');
  const [dropoffLocation, setDropoffLocation] = useState('');
  const [transferType, setTransferType] = useState<'one-way' | 'return'>('one-way');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('18:00');
  const [extraTime, setExtraTime] = useState('0');
  const [durationHours, setDurationHours] = useState('4');
  const [dayTripRoute, setDayTripRoute] = useState(DAY_TRIP_ROUTES_LIST[0]);
  const [selectedVehicle, setSelectedVehicle] = useState('e-class');

  // Customer Contact Fields
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [flightNumber, setFlightNumber] = useState('');
  const [notes, setNotes] = useState('');

  // Status & Modal
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [serviceAreaWarning, setServiceAreaWarning] = useState(false);
  const [warningLocation, setWarningLocation] = useState('');

  // Check service area helper
  const checkLocationAllowed = (loc: string) => {
    if (!loc) return true;
    const lower = loc.toLowerCase();
    const isAllowed = COMPANY_INFO.allowedServiceAreas.some(area => lower.includes(area));
    if (!isAllowed && loc.length > 3) {
      setWarningLocation(loc);
      setServiceAreaWarning(true);
      return false;
    }
    return true;
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!pickupDate || !pickupTime || !pickupLocation) {
      alert('Please fill in pickup date, time, and location.');
      return;
    }
    if (activeTab === 'transfer' && !dropoffLocation) {
      alert('Please provide a drop-off destination.');
      return;
    }
    // Location check
    checkLocationAllowed(pickupLocation);
    if (dropoffLocation) checkLocationAllowed(dropoffLocation);

    setStep(2);
  };

  const handleStep2Submit = () => {
    setStep(3);
  };

  const generateWhatsAppMessage = () => {
    let msg = `*New Booking Request - Vienna Day Trip*\n\n`;
    msg += `*Service:* ${activeTab.toUpperCase()}\n`;
    msg += `*Date:* ${pickupDate} at ${pickupTime}\n`;
    msg += `*Pickup:* ${pickupLocation}\n`;
    if (activeTab === 'transfer') {
      msg += `*Dropoff:* ${dropoffLocation}\n`;
      msg += `*Transfer Type:* ${transferType}\n`;
      if (transferType === 'return') {
        msg += `*Return:* ${returnDate} at ${returnTime}\n`;
      }
      if (extraTime !== '0') msg += `*Extra Waiting Time:* ${extraTime} mins\n`;
    } else if (activeTab === 'hourly') {
      msg += `*Duration:* ${durationHours} hours\n`;
      if (dropoffLocation) msg += `*End Location:* ${dropoffLocation}\n`;
    } else if (activeTab === 'daytrip') {
      msg += `*Route:* ${dayTripRoute}\n`;
    }
    const vehicle = FLEET_VEHICLES.find(v => v.id === selectedVehicle);
    msg += `*Vehicle:* ${vehicle?.name || selectedVehicle}\n`;
    if (fullName) msg += `*Name:* ${fullName}\n`;
    if (phone) msg += `*Phone:* ${phone}\n`;
    if (email) msg += `*Email:* ${email}\n`;
    if (flightNumber) msg += `*Flight No:* ${flightNumber}\n`;
    if (notes) msg += `*Notes:* ${notes}\n`;

    return encodeURIComponent(msg);
  };

  const handleSubmitFinal = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !phone) {
      alert('Please provide your name, email, and phone number.');
      return;
    }
    setIsSubmitted(true);
  };

  const currentVehicleObj = FLEET_VEHICLES.find(v => v.id === selectedVehicle);

  return (
    <div id="booking-section" className="w-full max-w-5xl mx-auto rounded-2xl bg-luxury-black/95 border border-gold/40 shadow-2xl overflow-hidden backdrop-blur-xl">
      {/* Service Area Warning Modal */}
      <ServiceAreaModal
        isOpen={serviceAreaWarning}
        onClose={() => setServiceAreaWarning(false)}
        locationEntered={warningLocation}
      />

      {/* Tabs Header */}
      <div className="flex border-b border-gold/20 bg-luxury-dark/90">
        <button
          type="button"
          onClick={() => { setActiveTab('transfer'); setStep(1); }}
          className={`flex-1 py-4 px-3 sm:px-6 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
            activeTab === 'transfer'
              ? 'bg-gold text-luxury-black font-bold shadow-inner'
              : 'text-gray-300 hover:text-gold hover:bg-white/5'
          }`}
        >
          <Car className="w-4 h-4" />
          <span>Transfer</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('hourly'); setStep(1); }}
          className={`flex-1 py-4 px-3 sm:px-6 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
            activeTab === 'hourly'
              ? 'bg-gold text-luxury-black font-bold shadow-inner'
              : 'text-gray-300 hover:text-gold hover:bg-white/5'
          }`}
        >
          <Clock className="w-4 h-4" />
          <span>Hourly Chauffeur</span>
        </button>

        <button
          type="button"
          onClick={() => { setActiveTab('daytrip'); setStep(1); }}
          className={`flex-1 py-4 px-3 sm:px-6 text-xs sm:text-sm font-semibold tracking-wider uppercase transition-all flex items-center justify-center gap-2 ${
            activeTab === 'daytrip'
              ? 'bg-gold text-luxury-black font-bold shadow-inner'
              : 'text-gray-300 hover:text-gold hover:bg-white/5'
          }`}
        >
          <Sparkles className="w-4 h-4" />
          <span>Day Trip</span>
        </button>
      </div>

      {/* Booking Steps Progress Indicator */}
      <div className="px-6 pt-4 pb-2 border-b border-white/5 flex items-center justify-between text-xs text-gray-400">
        <div className="flex items-center gap-2">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 1 ? 'bg-gold text-luxury-dark' : 'bg-gray-700 text-white'}`}>1</span>
          <span className={step === 1 ? 'text-gold font-medium' : 'text-gray-400'}>Route & Time</span>
        </div>
        <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
        <div className="flex items-center gap-2">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 2 ? 'bg-gold text-luxury-dark' : 'bg-gray-700 text-white'}`}>2</span>
          <span className={step === 2 ? 'text-gold font-medium' : 'text-gray-400'}>Select Vehicle</span>
        </div>
        <ChevronRight className="w-3.5 h-3.5 text-gray-600" />
        <div className="flex items-center gap-2">
          <span className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold ${step >= 3 ? 'bg-gold text-luxury-dark' : 'bg-gray-700 text-white'}`}>3</span>
          <span className={step === 3 ? 'text-gold font-medium' : 'text-gray-400'}>Quote & Details</span>
        </div>
      </div>

      {/* Main Content Body */}
      <div className="p-6 sm:p-8">
        {isSubmitted ? (
          /* Confirmation State */
          <div className="text-center py-8 space-y-4 animate-fade-in">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
              <Check className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-2xl font-bold text-white">
              Thank You! Your Request Has Been Received
            </h3>
            <p className="text-gray-300 text-sm max-w-md mx-auto leading-relaxed">
              Our dispatch team is reviewing your route ({activeTab.toUpperCase()}) and will reply with your confirmed fixed quote and chauffeur details within 15 minutes.
            </p>
            <div className="p-4 bg-white/5 border border-gold/30 rounded-xl max-w-md mx-auto text-left text-xs space-y-1.5 text-gray-300">
              <p><strong className="text-gold">Passenger:</strong> {fullName}</p>
              <p><strong className="text-gold">Pickup:</strong> {pickupLocation} on {pickupDate} at {pickupTime}</p>
              <p><strong className="text-gold">Vehicle:</strong> {currentVehicleObj?.name}</p>
              <p><strong className="text-gold">Contact:</strong> {email} | {phone}</p>
            </div>
            <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={`https://wa.me/436642035445?text=${generateWhatsAppMessage()}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-6 py-3 rounded-lg transition-colors"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Confirm Instantly via WhatsApp</span>
              </a>
              <button
                type="button"
                onClick={() => { setIsSubmitted(false); setStep(1); }}
                className="text-xs text-gray-400 hover:text-white px-4 py-3 underline"
              >
                Book Another Trip
              </button>
            </div>
          </div>
        ) : step === 1 ? (
          /* Step 1: Route & Dates Form */
          <form onSubmit={handleStep1Submit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {/* Pickup Date */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gold uppercase tracking-wider flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>Pickup Date</span>
                </label>
                <input
                  type="date"
                  required
                  value={pickupDate}
                  min={new Date().toISOString().split('T')[0]}
                  onChange={(e) => setPickupDate(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Pickup Time */}
              <div className="space-y-1.5">
                <label className="text-xs font-semibold text-gold uppercase tracking-wider flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Pickup Time</span>
                </label>
                <input
                  type="time"
                  required
                  value={pickupTime}
                  step="900"
                  onChange={(e) => setPickupTime(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                />
              </div>

              {/* Pickup Location */}
              <div className="md:col-span-2 space-y-1.5">
                <div className="flex items-center justify-between">
                  <label className="text-xs font-semibold text-gold uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Pickup Location</span>
                  </label>
                  <button
                    type="button"
                    onClick={() => {
                      if (navigator.geolocation) {
                        navigator.geolocation.getCurrentPosition(
                          () => setPickupLocation('Current Location (Vienna)'),
                          () => setPickupLocation('Vienna City Center (Stephansplatz)')
                        );
                      }
                    }}
                    className="text-[10px] text-gray-400 hover:text-gold transition-colors"
                  >
                    Use my location
                  </button>
                </div>
                <input
                  type="text"
                  required
                  placeholder="e.g. Vienna Airport (VIE) or Hotel Sacher Vienna"
                  value={pickupLocation}
                  onChange={(e) => setPickupLocation(e.target.value)}
                  className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                />
              </div>
            </div>

            {/* Dynamic Fields for Tab 1: Transfer */}
            {activeTab === 'transfer' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pt-2 border-t border-white/10">
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-gold uppercase tracking-wider flex items-center gap-1.5">
                    <MapPin className="w-3.5 h-3.5" />
                    <span>Drop-off Destination</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Stephansplatz, Vienna or Hotel Address"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gold uppercase tracking-wider">
                    Transfer Type
                  </label>
                  <select
                    value={transferType}
                    onChange={(e) => setTransferType(e.target.value as 'one-way' | 'return')}
                    className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="one-way">One Way</option>
                    <option value="return">Return Trip</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gold uppercase tracking-wider">
                    Extra Waiting Time
                  </label>
                  <select
                    value={extraTime}
                    onChange={(e) => setExtraTime(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold transition-colors"
                  >
                    <option value="0">0 minutes</option>
                    <option value="30">30 minutes</option>
                    <option value="60">60 minutes</option>
                    <option value="90">90 minutes</option>
                    <option value="120">120 minutes (2 hrs)</option>
                  </select>
                </div>

                {/* Return Date & Time if Return Trip */}
                {transferType === 'return' && (
                  <>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gold uppercase tracking-wider">
                        Return Date
                      </label>
                      <input
                        type="date"
                        required
                        value={returnDate}
                        min={pickupDate || new Date().toISOString().split('T')[0]}
                        onChange={(e) => setReturnDate(e.target.value)}
                        className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                      />
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-xs font-semibold text-gold uppercase tracking-wider">
                        Return Time
                      </label>
                      <input
                        type="time"
                        required
                        value={returnTime}
                        onChange={(e) => setReturnTime(e.target.value)}
                        className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                      />
                    </div>
                  </>
                )}
              </div>
            )}

            {/* Dynamic Fields for Tab 2: Hourly */}
            {activeTab === 'hourly' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pt-2 border-t border-white/10">
                <div className="space-y-1.5">
                  <label className="text-xs font-semibold text-gold uppercase tracking-wider">
                    Duration (Hours on Standby)
                  </label>
                  <select
                    value={durationHours}
                    onChange={(e) => setDurationHours(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    <option value="2">2 Hours (Minimum)</option>
                    <option value="3">3 Hours</option>
                    <option value="4">4 Hours (Half Day)</option>
                    <option value="6">6 Hours</option>
                    <option value="8">8 Hours (Full Day)</option>
                    <option value="10">10 Hours</option>
                    <option value="12">12 Hours (Executive Roadshow)</option>
                  </select>
                </div>

                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-gold uppercase tracking-wider">
                    Optional Final Drop-off Location
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Return to Hotel or Vienna Airport (VIE)"
                    value={dropoffLocation}
                    onChange={(e) => setDropoffLocation(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-gold"
                  />
                </div>
              </div>
            )}

            {/* Dynamic Fields for Tab 3: Day Trip */}
            {activeTab === 'daytrip' && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-white/10">
                <div className="md:col-span-2 space-y-1.5">
                  <label className="text-xs font-semibold text-gold uppercase tracking-wider flex items-center gap-1.5">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Select Signature Day Trip Route</span>
                  </label>
                  <select
                    value={dayTripRoute}
                    onChange={(e) => setDayTripRoute(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                  >
                    {DAY_TRIP_ROUTES_LIST.map((route) => (
                      <option key={route} value={route}>
                        {route}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            )}

            {/* Next Step Button */}
            <div className="pt-4 flex items-center justify-between border-t border-white/10">
              <div className="text-xs text-gray-400 flex items-center gap-1.5">
                <Check className="w-3.5 h-3.5 text-gold" />
                <span>Zero obligation • Instant transparent chauffeur quote</span>
              </div>
              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-luxury-black font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-lg shadow-lg hover:shadow-gold/20 transition-all transform hover:-translate-y-0.5"
              >
                <span>Continue to Vehicle</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : step === 2 ? (
          /* Step 2: Vehicle Selection */
          <div className="space-y-6 animate-fade-in">
            <div>
              <h3 className="font-serif text-lg font-bold text-white mb-1">
                Choose Your Preferred Vehicle
              </h3>
              <p className="text-xs text-gray-400">
                All vehicles feature complimentary bottled Austrian spring water, Wi-Fi, and certified professional chauffeurs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {FLEET_VEHICLES.filter(v => v.id !== 'armored').map((vehicle) => {
                const isSelected = selectedVehicle === vehicle.id;
                return (
                  <div
                    key={vehicle.id}
                    onClick={() => setSelectedVehicle(vehicle.id)}
                    className={`cursor-pointer rounded-xl border p-4 transition-all relative flex flex-col justify-between ${
                      isSelected
                        ? 'border-gold bg-gold/10 shadow-lg shadow-gold/10 ring-1 ring-gold'
                        : 'border-white/10 bg-black/40 hover:border-gold/50 hover:bg-black/60'
                    }`}
                  >
                    {isSelected && (
                      <div className="absolute top-3 right-3 w-5 h-5 rounded-full bg-gold text-luxury-dark flex items-center justify-center">
                        <Check className="w-3.5 h-3.5 stroke-[3]" />
                      </div>
                    )}

                    <div className="space-y-3">
                      <div className="relative w-full h-28 rounded-lg overflow-hidden bg-black/50 border border-white/5">
                        <Image
                          src={vehicle.image}
                          alt={vehicle.name}
                          fill
                          className="object-cover"
                        />
                      </div>

                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-gold font-semibold">
                          {vehicle.category}
                        </span>
                        <h4 className="font-serif text-sm font-bold text-white mt-0.5">
                          {vehicle.name}
                        </h4>
                      </div>

                      <div className="flex items-center gap-4 text-xs text-gray-400">
                        <div className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-gold" />
                          <span>Max {vehicle.passengers}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Briefcase className="w-3.5 h-3.5 text-gold" />
                          <span>Max {vehicle.luggage}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-white/5 text-[11px] text-gray-400">
                      {vehicle.recommendedFor}
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="pt-4 flex items-center justify-between border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-xs text-gray-400 hover:text-white px-4 py-2"
              >
                ← Back to Route
              </button>
              <button
                type="button"
                onClick={handleStep2Submit}
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-400 text-luxury-black font-bold text-xs uppercase tracking-wider px-8 py-3 rounded-lg shadow transition-all"
              >
                <span>Proceed to Quote Details</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        ) : (
          /* Step 3: Passenger Details & Submission */
          <form onSubmit={handleSubmitFinal} className="space-y-6 animate-fade-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Trip Summary Card */}
              <div className="bg-black/60 border border-gold/30 rounded-xl p-5 space-y-3">
                <h4 className="font-serif text-sm font-semibold tracking-wider text-gold uppercase border-b border-white/10 pb-2">
                  Trip Summary
                </h4>
                <div className="text-xs space-y-2 text-gray-300">
                  <div>
                    <span className="text-gray-400">Service:</span>
                    <p className="font-medium text-white capitalize">{activeTab} Booking</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Date & Time:</span>
                    <p className="font-medium text-white">{pickupDate} at {pickupTime}</p>
                  </div>
                  <div>
                    <span className="text-gray-400">Pickup:</span>
                    <p className="font-medium text-white">{pickupLocation}</p>
                  </div>
                  {dropoffLocation && (
                    <div>
                      <span className="text-gray-400">Destination:</span>
                      <p className="font-medium text-white">{dropoffLocation}</p>
                    </div>
                  )}
                  {activeTab === 'daytrip' && (
                    <div>
                      <span className="text-gray-400">Route:</span>
                      <p className="font-medium text-gold">{dayTripRoute}</p>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-400">Vehicle:</span>
                    <p className="font-medium text-white">{currentVehicleObj?.name}</p>
                  </div>
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="md:col-span-2 space-y-4">
                <h4 className="font-serif text-sm font-semibold tracking-wider text-gold uppercase">
                  Passenger & Contact Details
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-300">Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alexander Schmidt"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-300">Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. alex@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-300">Mobile Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +43 664 1234567"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs text-gray-300">Flight No. (Airport Transfers)</label>
                    <input
                      type="text"
                      placeholder="e.g. OS 501 (for flight tracking)"
                      value={flightNumber}
                      onChange={(e) => setFlightNumber(e.target.value)}
                      className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2.5 text-sm text-white focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs text-gray-300">Special Notes / Child Seats / Requests</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Need 1 baby seat, 4 large suitcases, or specific arrival instructions"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full bg-black/60 border border-white/20 rounded-lg px-3.5 py-2 text-sm text-white focus:outline-none focus:border-gold"
                  />
                </div>
              </div>
            </div>

            {/* Final Actions */}
            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="text-xs text-gray-400 hover:text-white"
              >
                ← Back to Vehicle Selection
              </button>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <a
                  href={`https://wa.me/436642035445?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs px-5 py-3 rounded-lg transition-colors"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                </a>

                <button
                  type="submit"
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gold-500 to-gold-400 hover:from-gold-400 hover:to-gold-300 text-luxury-black font-bold text-xs uppercase tracking-wider px-6 py-3 rounded-lg shadow transition-all"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Quote Request</span>
                </button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
