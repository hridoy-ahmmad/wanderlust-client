import MyBooking from '@/components/MyBooking';
import { auth } from '@/lib/auth';
import { headers } from 'next/headers';
import React from 'react';

const MyBookings = async () => {
    const session = await auth.api.getSession({
        headers: await headers() // you need to pass the headers object.
    })
    const user = session?.user

    const res = await fetch(`http://localhost:5000/bookings/${user?.id}`)
    const bookings = await res.json()
    console.log(bookings);

    return (
        <div className='container mx-auto my-8'>
            <div>
                <h1 className='text-3xl'>My Bookings: {bookings.length} </h1>
                <p>Manage and view your upcoming travel plans</p>
            </div>
            <div>
                {
                    bookings.map(item => <MyBooking key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default MyBookings;