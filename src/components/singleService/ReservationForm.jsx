import React, { memo, useEffect, useState } from 'react'
import { FaStar } from 'react-icons/fa6'
import { ConvertDecimel } from '../../helpers/ConvertDecimel'
import { Select , DatePicker } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { decreaseChild, decreaseInfant, increaseChild, increaseInfant, setChildDefault, setDate, setID, setInfantDefault, setType } from '../../redux/features/reservationSlice'
import { useLocation, useNavigate, useParams } from 'react-router'
import { request } from '../../api/request'
import { toast } from 'react-toastify'

const ReservationForm = ({room}) => {

  const [mealPrice , setMealPrice] = useState(0)
  const [daysCount, setDaysCount] = useState(1);

  const onDateChange = (dates, dateStrings) => {

    if (dates) {
      const startDate = dates[0];
      const endDate = dates[1];
      const days = endDate.diff(startDate, 'days');
      setDaysCount(days);
      dispatch(setDate(dateStrings))
    } else {
      setDaysCount(0);
    }
  };

  const { RangePicker } = DatePicker;
// dispatch of action redux 
const dispatch = useDispatch()

// setting 
const settings = useSelector((state)=>state.setting.value)
const meals = settings?.data?.hotel_setting

// value of reservation slice
const reservationData = useSelector((state)=>state.reservation.value)
const {
  type,
  child,
  infant,
  date,
  no_rooms
} = reservationData || {}


  // select meal 
  const {Option} = Select
  const handleMealChange = (value , Option) => {
    setMealPrice(value)
    dispatch(setType(Option.children))
  }

  // const location = useLocation()
  // console.log(location);
  // useEffect(() => {
  //   dispatch(setType(''));
  //   dispatch(setInfantDefault());
  //   dispatch(setChildDefault());
  //   dispatch(setID(null));
  //   dispatch(setDate([]));
  // }, [location.pathname, dispatch]);
  
    const tax = room?.tax
    const pricePerDay = room?.price_per_day
    const rate = room?.avg_review

  const reservationPrice = pricePerDay + Number(mealPrice)

  const childPrice = child * (reservationPrice / (room?.no_guests * 2))

  const nightsNumber = daysCount || 1
  const subTotalPrice = (reservationPrice + childPrice)

  const SubTotalInNights = (reservationPrice + childPrice) * nightsNumber

  const taxPrice = SubTotalInNights * (tax / 100) 

  const totalPrice = SubTotalInNights + taxPrice

const navigate = useNavigate()
const {id} = useParams()

const onSubmit = (e) => {
  e.preventDefault()
  const data = new FormData()
  data.append('type', type)
  data.append('child[0]', child)
  data.append('infant[0]', infant)
  data.append('adult[0]' , room?.no_guests )
  data.append('start_date', date[0])
  data.append('end_date', date[1])
  data.append('no_rooms', no_rooms )

  request.post(`/user/rooms/${id}/reservation`, data)
  .then((res) => {
    toast.success(res.data.message)
    const id = res?.data?.data?.id
    localStorage.setItem("reservationId" , id )
    navigate(`/checkout/${id}`)
  })
  .catch((err) => {
    toast.error(err.response.data.message)
    navigate("/login")
  });
}








  return (
    <>
      <div  className='sticky top-28 rounded-[30px] overflow-hidden border border-neutral-200 p-4 mb-8 w-full'>
        <div className='flex items-center justify-between gap-4 '>
          <p className='flex items-center gap-1 text-xl'>
            <span className='text-black text-2xl'>$ {pricePerDay} </span>
            <span>/ night</span>
          </p>
          <p className='flex items-center gap-2 rate text-neutral-500'>
            <i className='text-yellow-400'><FaStar /></i>
            <span className='text-black'>{ConvertDecimel(rate)}</span>
          </p>
        </div>
        <div className='actions rounded-[30px] overflow-hidden flex flex-col border border-neutral-200 my-4 divide-y-2 divide-neutral-100'>
          <div className='flex flex-col gap-1 w-full overflow-x-auto px-4 py-4'>
          <h4 className='mb-2 text-lg font-medium'>select date</h4>
            <RangePicker
              className='w-full py-2 rounded-xl hover:border-primary focus-within:border-primary'
              onChange={onDateChange}
              />
          </div>
          <div className='py-4 px-4'>
            <h4 className='mb-2 text-lg font-medium'>day meal</h4>
            <Select onChange={handleMealChange} defaultValue={''} >
              <Option value={''} disabled >choose meal</Option>
              {
                meals?.map((meal)=>(
                  <Option key={meal.id} value={meal.value}>{meal.title}</Option>
                ))
              }
            </Select>
          </div>


          <div className='flex items-center justify-between p-4'>
            <p className='font-medium text-lg text-black'>child</p>
            <div className="flex items-center gap-3">
              <button
                className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
                onClick={() => dispatch(decreaseChild())}
              >
                -
              </button>
              <span className="text-xl font-semibold w-[30px] text-center">{child}</span>
              <button
                className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
                onClick={() => dispatch(increaseChild())}
              >
                +
              </button>
            </div>
          </div>

          <div className='flex items-center justify-between p-4'>
            <p className='font-medium text-lg text-black'>infant</p>
            <div className="flex items-center gap-3">
              <button
                className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
                onClick={() => dispatch(decreaseInfant())}
              >
                -
              </button>
              <span className="text-xl font-semibold w-[30px] text-center">{infant}</span>
              <button
                className="bg-primary rounded-full w-[30px] h-[30px] text-white overflow-hidden grid place-items-center text-xl font-semibold"
                onClick={() => dispatch(increaseInfant())}
              >
                +
              </button>
            </div>
          </div>



        </div>
        <div className='calcs flex flex-col gap-4 pb-4 border-b border-b-neutral-200 font-semibold'>
          <p className='flex items-center justify-between gap-3'>
            <span>${Math.floor(subTotalPrice)} x {nightsNumber} nights</span>
            <span>${Math.floor(SubTotalInNights)}</span>
          </p>
          <p className='flex items-center justify-between gap-3'>
            <span>Service charge</span>
            <span>%{tax}</span>
          </p>
        </div>
        <div className='text-black font-semibold text-lg flex items-center justify-between gap-4 my-3'>
          <p>Total</p>
          <p>${Math.floor(totalPrice)}</p>
        </div>
        <div className='flex justify-center'>
          <button className='btn btn-primary w-full' onClick={onSubmit} >Book now</button>
        </div>
    </div>
    </>
  )
}

export default memo(ReservationForm)
