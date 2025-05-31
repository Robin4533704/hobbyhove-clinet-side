import React from 'react';

const AllCar = () => {
    return (
        <div className='mt-6'>
            <h1 className='text-center text-4xl text-yellow-400 p-6 font-bold'>
                This <span className='text-blue-400'>is Our</span> New Cars 2025
            </h1>
            <div className='grid grid-cols-1 lg:grid-cols-4 gap-4 bg-blue-100 p-4'>
                {[
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYqL3Fu-ioNzpgGnC3BM4h9rFtVa083sZuxw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTzfAnM7VbFM92-JgZcRy2rNyKDFTxLgd_3Q&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUSeC7SWCGCfe2TQAsq8YublbNt9f_vGttrg&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvuXILLUhro6niZAG4sKB3gaQbztkjQCTJPQ&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9dc6oTBo7slmqs4RGWx1ZQ2N4yg-ghSY8iw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS8c3_YAGmGF-MqYsKVbunVpmXZBY9yZ3VBpw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfENfouIcYzWg6tMA0WbJKik9OTPZ94rUUmA&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpJv9hSP7ptdoc0tLtLF0IWTlPT7wQYU8bjA&s",
                    "https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/models_gw/2025/s2.jpg",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjuNcDht_Xjs0L27gFyReRhsd2vQYQH0WijA&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXuz-o8Gvq4RfntBrDZeJNJFaXgD0WU8Uurw&s",
                    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlXKI05Jsarf5Vj7HfqLorBC72wUPGwWuhsQ&s",
                ].map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`Car ${index + 1}`}
                        className='w-full transition-transform duration-300 ease-in-out transform hover:scale-170 rounded-lg shadow-lg'
                    />
                ))}
            </div>
        </div>
    );
};

export default AllCar;
