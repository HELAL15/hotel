import React, { useState } from 'react';

const GuestCounter = ({ label, price, onCountChange }) => {
  const [count, setCount] = useState(0);
  const [adultCount , setAdultCount] = useState(0)
  const [childCount , setChildCount] = useState(0)
  const [infantCount , setInfantCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
    onCountChange(label, count + 1);
  };

  const decrement = () => {
    setCount(count > 0 ? count - 1 : 0);
    onCountChange(label, count > 0 ? count - 1 : 0);
  };

  return (
    <>
      <span className="ml-2 text-xl">{label}</span>
      <div className='flex items-center gap-4'>
        <button
          className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
          onClick={decrement}
        >
          -
        </button>
        <span className="text-xl font-semibold w-[30px] text-center">{count}</span>
        <button
          className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
          onClick={increment}
        >
          +
        </button>
      </div>
    </>
  );
};

const GuestsCounter = ({ room }) => {
  const [counts, setCounts] = useState(1);
  const [totalAdults, setTotalAdults] = useState(0);
  const [totalChildren, setTotalChildren] = useState(0);
  const [totalInfants, setTotalInfants] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const adultPrice = room?.adult_price;
  const childPrice = room?.children_price;
  const infantPrice = room?.infant_price;

  const handleCountChange = (label, count) => {
    switch (label) {
      case 'adult':
        setTotalAdults(count);
        break;
      case 'child':
        setTotalChildren(count);
        break;
      case 'infant':
        setTotalInfants(count);
        break;
      default:
        break;
    }

    const newTotalPrice = (totalAdults * adultPrice) + (totalChildren * childPrice) + (totalInfants * infantPrice);
    setTotalPrice(newTotalPrice);
  };

  const increment = () => setCounts(counts + 1);
  const decrement = () => setCounts(counts > 1 ? counts - 1 : 1);

  const multi = () => {
    const rooms = [];
    for (let i = 0; i < counts; i++) {
      rooms.push(
        <div key={i} className='flex flex-col gap-3 border-b border-gray-300 py-3'>
          <h5 className='mx-4 mb-2 mt-3 text-xl font-semibold'>{`Room (${i + 1})`}</h5>
          <div className='flex items-center justify-between px-5 gap-4'>
            <GuestCounter label="adult" price={adultPrice} onCountChange={handleCountChange} />
          </div>
          <div className='flex items-center justify-between px-5 gap-4'>
            <GuestCounter label="infant" price={infantPrice} onCountChange={handleCountChange} />
          </div>
          <div className='flex items-center justify-between px-5 gap-4'>
            <GuestCounter label="child" price={childPrice} onCountChange={handleCountChange} />
          </div>
        </div>
      );
    }
    return rooms;
  };

  return (
    <div className="flex flex-col gap-4 py-4">
      <h3 className='text-2xl text-black font-semibold px-4'>Guests ({counts})</h3>

      <div className='overflow-y-auto'>
        {multi()}
      </div>

      <div className="flex items-center justify-between px-5 gap-4">
        <span className="ml-2 text-xl">Rooms number</span>
        <div className='flex items-center gap-4'>
          <button
            className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
            onClick={decrement}
          >
            -
          </button>
          <span className="text-xl font-semibold w-[30px] text-center">{counts}</span>
          <button
            className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
            onClick={increment}
          >
            +
          </button>
        </div>
      </div>

      <div className='flex items-center justify-between px-5 mt-4'>
        <span className='text-xl font-semibold'>Total Price:</span>
        <span className='text-xl font-semibold'>{totalPrice}</span>
      </div>
    </div>
  );
};

export default GuestsCounter;
