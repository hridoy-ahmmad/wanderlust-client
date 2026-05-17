'use client'
import { authClient } from '@/lib/auth-client';
import { Button, DateField, Label } from '@heroui/react';
import React, { useState } from 'react';
import { FaArrowRightLong } from "react-icons/fa6";
import { HiCheck } from "react-icons/hi2";

export default function BookingCard({ data }) {
  const { data: session } = authClient.useSession()
  const user = session?.user
  const { category, country, destinationName, imageUrl, price, _id, } = data
  const [departureDate, setDepartureDate] = useState(null)


  const handleBooking = async () => {
    if (!user) {
      console.log('please login');
      return
    }
    const bookingInfo = {
      destinationCategory: category,
      destinationCountry: country,
      destinationName,
      imageUrl,
      destinationId: _id,
      departureDate: departureDate?.toString(),
      price,
      userName: user.name,
      userImage: user.image,
      userId: user.id,
      userEmail: user?.email
    }
    const res = await fetch('http://localhost:5000/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(bookingInfo)
    })
    const bookingData = await res.json()
    console.log(bookingData);

  }

  return (
    <div className="max-w-90 rounded-xl border border-gray-100 bg-white p-6 shadow-[0_4px_20px_rgba(0,0,0,0.05)] font-sans">
      {/* প্রাইস সেকশন */}
      <div className="mb-6">
        <span className="text-sm font-medium text-gray-400 block mb-0.5">
          Starting from
        </span>
        <div className="flex items-baseline gap-1">
          <span className="text-4xl font-bold text-[#149fb8]">{data.price}</span>
        </div>
        <span className="text-sm font-medium text-gray-400 block mt-1">
          per person
        </span>
      </div>

      {/* ডেট ইনপুট ফিল্ড */}
      <div className="mb-4">
        <DateField onChange={setDepartureDate} className="w-[256px]" name="date">
          <Label>Departure Date</Label>
          <DateField.Group>
            <DateField.Input>
              {(segment) => <DateField.Segment segment={segment} />}
            </DateField.Input>
          </DateField.Group>
        </DateField>
      </div>

      <hr className="border-gray-100 my-5" />

      {/* বুক নাও বাটন */}
      <Button onClick={handleBooking} className="w-full bg-[#149fb8] hover:bg-[#108296] text-white font-medium py-3.5 px-4 rounded-md flex items-center justify-center gap-2 transition-colors mb-6 shadow-sm group">
        <span>Book Now</span>
        <FaArrowRightLong className="w-5 h-5 transition-transform group-hover:translate-x-1" />
      </Button>

      {/* বেনিফিট লিস্ট */}
      <div className="space-y-3.5">
        <div className="flex items-start gap-3">
          <HiCheck className="w-6 h-6 text-[#22c55e] stroke-1 shrink-0 mt-0.5" />
          <span className="text-[15px] font-medium text-gray-500">
            Free cancellation up to 7 days
          </span>
        </div>
        <div className="flex items-start gap-3">
          <HiCheck className="w-6 h-6 text-[#22c55e] stroke-1 shrink-0 mt-0.5" />
          <span className="text-[15px] font-medium text-gray-500">
            Travel insurance included
          </span>
        </div>
        <div className="flex items-start gap-3">
          <HiCheck className="w-6 h-6 text-[#22c55e] stroke-1 shrink-0 mt-0.5" />
          <span className="text-[15px] font-medium text-gray-500">
            24/7 customer support
          </span>
        </div>
      </div>
    </div>
  );
}
