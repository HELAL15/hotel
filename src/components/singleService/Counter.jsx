import React, { useState, useEffect, memo, useContext } from 'react';
import { FaTrash } from 'react-icons/fa6';
import { BookServiceContext } from '../../context/BookServiceContext';

const Counter = ({ label, onCountChange, adultPrice, childPrice, infantPrice }) => {

const {setRoomsCount , roomCounts} = useContext(BookServiceContext)


  const [guestGroups, setGuestGroups] = useState([
    {
      guests: [
        { type: 'adult', count: 1 },
        { type: 'child', count: 1 },
        { type: 'infant', count: 0 },
      ],
    },
  ]);

  const calculateTotalPrice = () => {
    return guestGroups.reduce((total, group) => {
      return total + group.guests.reduce((groupTotal, guest) => {
        if (guest.type === 'adult') return groupTotal + guest.count * adultPrice;
        if (guest.type === 'child') return groupTotal + guest.count * childPrice;
        if (guest.type === 'infant') return groupTotal + guest.count * infantPrice;
        return groupTotal;
      }, 0);
    }, 0);
  };

  const getGuestData = () => {
    return guestGroups.map((group) => ({
      adult: group.guests.find((guest) => guest.type === 'adult').count,
      child: group.guests.find((guest) => guest.type === 'child').count,
      infant: group.guests.find((guest) => guest.type === 'infant').count,
    }));
  };

  useEffect(() => {
    onCountChange(label, null, null, calculateTotalPrice(), getGuestData());
  }, [guestGroups]);

  const increment = (groupIndex, guestIndex) => {
    const updatedGroups = [...guestGroups];
    updatedGroups[groupIndex].guests[guestIndex].count++;
    setGuestGroups(updatedGroups);
    onCountChange(
      label,
      updatedGroups[groupIndex].guests[guestIndex].type,
      updatedGroups[groupIndex].guests[guestIndex].count,
      calculateTotalPrice(),
      getGuestData()
    );
  };

  const decrement = (groupIndex, guestIndex) => {
    const updatedGroups = [...guestGroups];
    updatedGroups[groupIndex].guests[guestIndex].count =
      updatedGroups[groupIndex].guests[guestIndex].count > 0
        ? updatedGroups[groupIndex].guests[guestIndex].count - 1
        : 0;
    setGuestGroups(updatedGroups);
    onCountChange(
      label,
      updatedGroups[groupIndex].guests[guestIndex].type,
      updatedGroups[groupIndex].guests[guestIndex].count,
      calculateTotalPrice(),
      getGuestData()
    );
  };

  const handleSubmit = () => {
    const data = guestGroups.flatMap((group, groupIndex) =>
      group.guests.map((guest, guestIndex) => ({
        key: `${guest.type}[${groupIndex}]`,
        value: guest.count.toString(),
        type: 'text',
      }))
    );
    console.log(data); 
  };


  const addGuestGroup = () => {
    setRoomsCount(roomCounts + 1);
    setGuestGroups([
      ...guestGroups,
      {
        guests: [
          { type: 'adult', count: 0 },
          { type: 'child', count: 0 },
          { type: 'infant', count: 0 },
        ],
      },
    ]);
  };

  const removeGuestGroup = (groupIndex) => {
    if (guestGroups.length > 1) {
      const updatedGroups = [...guestGroups];
      updatedGroups.splice(groupIndex, 1);
      setGuestGroups(updatedGroups);
    }
    setRoomsCount(roomCounts > 1 ? roomCounts - 1 : 1);
  };

  return (
    <>
      {guestGroups.map((group, groupIndex) => (
        <div key={groupIndex} className='relative'>
          <h4 className='text-xl font-semibold mx-4 mt-2'>
            room ({groupIndex + 1})
          </h4>
          {group.guests.map((guest, guestIndex) => (
            <div key={guestIndex} className="my-4 px-4">
              <div className="flex items-center gap-4">
                {guestIndex === 0 && guestGroups.length > 1 && (
                  <button
                    className="absolute top-3 right-2 bg-red-500 hover:bg-red-700 text-white font-bold w-[30px] h-[30px] grid place-items-center rounded-full"
                    onClick={() => removeGuestGroup(groupIndex)}
                  >
                    <FaTrash/>
                  </button>
                )}
                <button
                  className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
                  onClick={() => decrement(groupIndex, guestIndex)}
                >
                  -
                </button>
                <span className="text-xl font-semibold w-[30px] text-center">{guest.count}</span>
                <button
                  className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
                  onClick={() => increment(groupIndex, guestIndex)}
                >
                  +
                </button>
                <div>{guest.type.charAt(0).toUpperCase() + guest.type.slice(1)}s</div>
              </div>
            </div>
          ))}
        </div>
      ))}
      <button
        className="mt-3 mb-2 mx-4 btn btn-primary"
        onClick={addGuestGroup}
      >
        add room ({roomCounts})
      </button>
    </>
  );
};

export default memo(Counter);
