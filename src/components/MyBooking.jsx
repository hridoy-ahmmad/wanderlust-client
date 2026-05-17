'use client'
import Image from 'next/image';
import { HiCheckCircle, HiOutlineCalendar, HiOutlineHashtag, HiOutlineEye } from 'react-icons/hi2';
import { FiTrash2 } from 'react-icons/fi';
import { Button } from '@heroui/react';
import { MyBookingDelModal } from './MyBookingDelModal';


export default function MyBooking({ item }) {
 
    return (
        <div className="w-full mt-2 max-w-250 border border-gray-200 bg-white p-4 rounded-sm flex flex-col md:flex-row gap-6 items-center shadow-sm font-sans">

            {/* বাম পাশের ইমেজ সেকশন */}
            <div className="relative w-full md:w-[280px] h-[160px] shrink-0 rounded-sm overflow-hidden">
                <Image
                    src={item.imageUrl} // আপনার ইমেজ পাথ এখানে দিন
                    alt="Bali Paradise"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* ডানপাশের কন্টেন্ট সেকশন */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center w-full gap-4 md:gap-2">

                {/* ইনফরমেশন এরিয়া */}
                <div className="space-y-2.5">
                    {/* Confirmed ব্যাজ */}
                    <div className="inline-flex items-center gap-1.5 bg-[#e6f7ed] text-[#22c55e] px-3 py-1 rounded-full text-sm font-medium">
                        <HiCheckCircle className="w-4 h-4" />
                        <span>Confirmed</span>
                    </div>

                    {/* টাইটেল */}
                    <h2 className="text-3xl font-bold text-gray-950 tracking-tight">
                        {item.destinationName}
                    </h2>

                    {/* ডেট এবং আইডি */}
                    <div className="space-y-1.5 text-gray-500 font-medium text-[15px]">
                        <div className="flex items-center gap-2">
                            <HiOutlineCalendar className="w-5 h-5 text-gray-400" />
                            <span>Departure: {item.departureDate}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <HiOutlineHashtag className="w-5 h-5 text-gray-400" />
                            <span>Booking ID: {item._id}</span>
                        </div>
                    </div>
                </div>

                {/* প্রাইস এবং বাটন অ্যাকশন এরিয়া */}
                <div className="flex flex-col md:items-end gap-4 w-full md:w-auto self-stretch md:self-auto justify-between md:justify-end">
                    {/* প্রাইস */}
                    <div className="text-3xl font-bold text-[#149fb8] md:mb-2">
                        ${item.price}
                    </div>

                    {/* বাটন গ্রুপ */}
                    <div className="flex items-center gap-3 w-full md:w-auto">
                        {/* Cancel বাটন */}


                        <MyBookingDelModal item={item} />
                       
                        {/* View বাটন */}
                        <button className="flex-1 md:flex-none flex items-center justify-center gap-2 bg-[#149fb8] hover:bg-[#108296] text-white font-medium px-6 py-2.5 rounded-sm transition-colors text-base">
                            <HiOutlineEye className="w-5 h-5" />
                            <span>View</span>
                        </button>
                    </div>
                </div>

            </div>
        </div>
    );
}