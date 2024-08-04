import React, { memo, useState, useEffect } from 'react'
import { IoIosCloseCircle } from 'react-icons/io'
import { useLocation, useNavigate } from 'react-router'
import { Select, Slider } from 'antd'
import { useTranslation } from 'react-i18next'
import { useDispatch, useSelector } from 'react-redux'
import { setFilter } from '../../redux/features/filterSlice'

const Filter = () => {
  const { t } = useTranslation()
  const isOpen = useSelector((state) => state.filter.value)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const setting = useSelector((state)=>state.setting.value)
  
  const location = useLocation()
  const searchParam = new URLSearchParams(location.search);
  
  const fromPrice = searchParam.get('from_price');
  const toPrice = searchParam.get('to_price');
  const noGuest = searchParam.get("no_guests");


  const {
    max_no_guests,
    max_price_per_day,
    min_price_per_day
  } = setting?.data || {}



  const defaultPrice = [fromPrice || 800 , toPrice || 3000 ]
  const [prices, setPrices] = useState(defaultPrice)
  const [guests, setGuests] = useState(noGuest || 1)
  const [type, setType] = useState(searchParam.get('type') || "room")
  
  
  const { Option } = Select

  const onChange = (value) => {
    setPrices(value)
  }

  const handleChange = (value) => {
    setGuests(value)
  }

  const handleTypeChange = (value) => {
    setType(value)
  }

  const handleClose = () => {
    dispatch(setFilter(false))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    navigate(`/rooms?no_guests=${guests}&type=${type}&from_price=${prices[0]}&to_price=${prices[1]}`)
    dispatch(setFilter(false))
  }


  useEffect(() => {
    dispatch(setFilter(false))
  }, [location])



  return (
    <div
      className={`h-screen ${isOpen ? 'ltr:left-0 rtl:right-0 rtl:left-[unset]' : 'ltr:-left-full rtl:-right-full rtl:-left-[unset]'} fixed top-0 bottom-0 w-full h-screen transition-all duration-300 z-50`}
    >
      <form onSubmit={handleSubmit} className='bg-white w-full md:w-[450px] h-full p-8 shadow-xl flex flex-col justify-between'>
        <div>
          <div className='mb-8 flex items-center justify-between'>
            <h3 className='text-lg font-semibold'>{t('rooms.filteration')}</h3>
            <IoIosCloseCircle onClick={handleClose} className='text-2xl text-slate-700 cursor-pointer' />
          </div>
          <div className='price mt-4 pb-4 border-b border-b-slate-300'>
            <h3 className='text-lg font-semibold'>{t('rooms.filter.price')}</h3>
            <Slider
              range
              onChange={onChange}
              defaultValue={defaultPrice}
              max={parseFloat(max_price_per_day)}
              min={parseFloat(min_price_per_day)}
              trackStyle={[{ backgroundColor: '#4F46E5' }]}
              handleStyle={[
                { borderColor: '#4F46E5', backgroundColor: 'white' },
                { borderColor: '#4F46E5', backgroundColor: 'white' }
              ]}
              railStyle={{ backgroundColor: '#737373' }}
            />
            <div className="price-display flex items-center justify-between px-6">
              <span>${prices[0] || defaultPrice[0] }</span>
              <span>${prices[1] || defaultPrice[1]}</span>
            </div>
          </div>
          <div className='mt-4 pb-4 border-b border-b-slate-300'>
            <h3 className='text-lg font-semibold'>{t('rooms.filter.guests')}</h3>
            {/* <Select className='w-full mt-2' defaultValue={1} onChange={handleChange}>
              {[...Array(5)].map((_, index) => (
                <Option value={index + 1} key={index}>
                  {index + 1} {index + 1 === 1 ? "guest" : "guests"}
                </Option>
              ))}
            </Select> */}
            
            <input 
              type='number' 
              className='w-full border-none outline-none py-2 px-1' 
              placeholder={t('rooms.filter.guests')}
              min={1}
              value={guests}
              onChange={(e) => setGuests(+e.target.value)} />
          </div>
          <div className='mt-4 pb-4 border-b border-b-slate-300 mb-8'>
            <h3 className='text-lg font-semibold'>{t('rooms.filter.type')}</h3>
            <Select className='w-full mt-2' defaultValue={"room"} onChange={handleTypeChange}>
              <Select.Option value='suite'>suite</Select.Option>
              <Select.Option value='poo_view'>pool view</Select.Option>
              <Select.Option value='room'>room</Select.Option>
            </Select>
          </div>
        </div>
        <button type="submit" className='btn btn-primary w-full'>
        {t('rooms.filter.search')}
        </button>
      </form>
    </div>
  )
}

export default memo(Filter)
