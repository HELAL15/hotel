import React, { memo, useContext, useState } from 'react';
import { FaStar } from 'react-icons/fa6';
import { ConvertDecimel } from '../../helpers/ConvertDecimel';
import { Select, DatePicker, Spin } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { decreaseChild, decreaseInfant, increaseChild, increaseInfant, setChildDefault, setDate, setID, setInfantDefault, setType } from '../../redux/features/reservationSlice';
import { useNavigate, useParams } from 'react-router';
import { request } from '../../api/request';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const ReservationForm = ({ room }) => {
  const token = localStorage.getItem("hotel");
  const { userDetails } = useContext(UserContext);

  const [loading , setLoading] = useState(false)
  const [mealPrice, setMealPrice] = useState(0);
  const [daysCount, setDaysCount] = useState(1);
  const [dateRange, setDateRange] = useState([
    moment().startOf('day'),
    moment().add(1, 'days').startOf('day')
  ]);

  const dispatch = useDispatch();
  const { RangePicker } = DatePicker;
  const { Option } = Select;

  // Redux selectors
  const settings = useSelector((state) => state.setting.value);
  const meals = settings?.data?.hotel_setting;

  const reservationData = useSelector((state) => state.reservation.value);
  const { type, child, infant, date, no_rooms } = reservationData || {};

  // Date change handler
  const onDateChange = (dates, dateStrings) => {
    if (dates) {
      const [startDate, endDate] = dates;
      const days = endDate.diff(startDate, 'days');
      setDaysCount(days);
      setDateRange(dates);
      dispatch(setDate(dateStrings));
    } else {
      setDaysCount(0);
    }
  };

  // Meal change handler
  const handleMealChange = (value, option) => {
    setMealPrice(value);
    dispatch(setType(option.children));
  };

  const tax = room?.tax;
  const pricePerDay = room?.price_per_day;
  const rate = room?.avg_review;

  const reservationPrice = pricePerDay + Number(mealPrice);
  const childPrice = child * (reservationPrice / (room?.no_guests * 2));
  const nightsNumber = daysCount || 1;
  const subTotalPrice = (reservationPrice + childPrice);
  const SubTotalInNights = (reservationPrice + childPrice) * nightsNumber;
  const taxPrice = SubTotalInNights * (tax / 100);
  const totalPrice = SubTotalInNights + taxPrice;

  const navigate = useNavigate();
  const { id } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append('type', type);
    data.append('child[0]', child);
    data.append('infant[0]', infant);
    data.append('adult[0]', room?.no_guests);
    data.append('start_date', dateRange[0].format('YYYY-MM-DD'));
    data.append('end_date', dateRange[1].format('YYYY-MM-DD'));
    data.append('no_rooms', no_rooms);

    setLoading(true)
    request.post(`/user/rooms/${id}/reservation`, data)
      .then((res) => {
        toast.success(res.data.message);
        setLoading(false)
        const reservationId = res?.data?.data?.id;
        localStorage.setItem("reservationId", reservationId);
        navigate(`/checkout/${reservationId}`);
      })
      .catch((err) => {
        toast.error(err.response?.data?.message || 'An error occurred');
        setLoading(false)
        // Optionally redirect to login or handle errors
        // navigate("/login");
      });
  };

  const { t } = useTranslation();

  return (
    <div className='sticky top-28 rounded-[30px] overflow-hidden border border-neutral-200 p-4 mb-8 w-full'>
      <div className='flex items-center justify-between gap-4'>
        <p className='flex items-center gap-1 text-xl'>
          <span className='text-black text-2xl'>{t("$")} {pricePerDay} </span>
          <span>/ {t("day")}</span>
        </p>
        <p className='flex items-center gap-2 rate text-neutral-500'>
          <i className='text-yellow-400'><FaStar /></i>
          <span className='text-black'>{ConvertDecimel(rate)}</span>
        </p>
      </div>
      <div className='actions rounded-[30px] overflow-hidden flex flex-col border border-neutral-200 my-4 divide-y-2 divide-neutral-100'>
        <div className='flex flex-col gap-1 w-full overflow-x-auto px-4 py-4'>
          <h4 className='mb-2 text-lg font-medium'>{t("room.sDate")}</h4>
          <RangePicker
            className='w-full py-2 rounded-xl hover:border-primary focus-within:border-primary'
            onChange={onDateChange}
            value={dateRange}
          />
        </div>
        <div className='py-4 px-4'>
          <h4 className='mb-2 text-lg font-medium'>{t("room.meal")}</h4>
          <Select onChange={handleMealChange} defaultValue={''}>
            <Option value={''} disabled>{t("room.choose")}</Option>
            {meals?.map((meal) => (
              <Option key={meal.id} value={meal.value} className="flex items-center justify-between w-full">
                {/* {t(`selectMeal.${meal.title}`)} */}
                {meal.title}
              </Option>
            ))}
          </Select>
        </div>
        <div className='flex items-center justify-between p-4'>
          <p className='font-medium text-lg text-black'>{t("room.child")}</p>
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
          <p className='font-medium text-lg text-black'>{t("room.infant")}</p>
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
          <span>{t("$")}{Math.floor(subTotalPrice)} x {nightsNumber} {t("room.days")}</span>
          <span>{t("$")}{Math.floor(SubTotalInNights)}</span>
        </p>
        <p className='flex items-center justify-between gap-3'>
          <span>{t("room.charge")}</span>
          <span>%{tax}</span>
        </p>
      </div>
      <div className='text-black font-semibold text-lg flex items-center justify-between gap-4 my-3'>
        <p>{t("room.total")}</p>
        <p>{t("$")}{Math.floor(totalPrice)}</p>
      </div>
      {
        userDetails && token
          ? <button className='btn btn-primary w-full' onClick={onSubmit}>{loading? <Spin/> : t("room.book")}</button>
          : <Link className='btn btn-primary w-full block text-center' to='/login'>{t("room.login")}</Link>
      }
    </div>
  );
};

export default memo(ReservationForm);
