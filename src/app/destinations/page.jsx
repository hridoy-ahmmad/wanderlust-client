import DestinationCard from '@/components/DestinationCard';
import React from 'react';

const DestinationPage = async () => {
    const res = await fetch('http://localhost:5000/destinations')
    const data = await res.json()
    console.log(data);


    return (
        <div className='container mx-auto my-5'>
            All Destinations
            <div className='grid grid-cols-4 gap-4'>
                {
                    data.map(item => <DestinationCard key={item._id} item={item} />)
                }
            </div>
        </div>
    );
};

export default DestinationPage;