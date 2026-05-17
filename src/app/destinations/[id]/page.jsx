import { DeleteDestination } from '@/components/DeleteDestination';
import { EditModal } from '@/components/EditModal';
import Image from 'next/image';
import React from 'react';
import { FaRegCalendar } from 'react-icons/fa';
import { LuMapPin } from 'react-icons/lu';

const DestinationDetails = async ({ params }) => {
    const { id } = await params
    console.log(id);
    const res = await fetch(`http://localhost:5000/destinations/${id}`)
    const data = await res.json()
    console.log(data);
    const { imageUrl, price, destinationName, duration, country, description } =
        data;

    return (
        <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 justify-end mt-5 mb-3">
                <EditModal data={data} />
                <DeleteDestination  data={data} />
            </div>
            <Image
                className="w-full h-100 object-cover"
                alt={destinationName}
                src={imageUrl}
                height={500}
                width={800}
            />

            <div className="flex justify-between gap-10">
                <div className="p-2">
                    <div className="flex items-center gap-1">
                        <LuMapPin /> <span>{country}</span>
                    </div>
                    <div className="flex justify-between ">
                        <div>
                            <div>
                                <h2 className="text-xl font-bold">{destinationName}</h2>
                            </div>
                            <div className="flex gap-1 items-center">
                                <FaRegCalendar /> {duration}
                            </div>
                        </div>
                    </div>

                    <h1 className="mt-10 text-2xl font-bold">Overview</h1>

                    <p className="max-w-6xl">{description}</p>
                </div>


                {/* <BookingCard destination={destination} /> */}
            </div>


        </div>
    );
};

export default DestinationDetails;