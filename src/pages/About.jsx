import React, { useState } from 'react';
import axios from 'axios';
const About = () => {
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const makeReservation = async () => {
    setLoading(true);
    const url = 'https://backend.smartvision4p.com/hotel/public/api/user/rooms/1/reservation';
    const formData = new FormData()
    formData.append('type', 'all');
    formData.append('no_rooms', 1);
    formData.append('end_date', '2024-07-20');
    formData.append('start_date', '2024-07-21');
    formData.append('adult[0]', 1);
    formData.append('infant[0]', 1);
    formData.append('child[0]', 1);
    try {
      const response = await axios.post(url, formData, {
        headers: {
          'Accept': 'application/json',
          'Lang': 'ar',
          'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL2JhY2tlbmQuc21hcnR2aXNpb240cC5jb20vaG90ZWwvcHVibGljL2FwaS91c2VyL2xvZ2luIiwiaWF0IjoxNzIxMTExOTE2LCJleHAiOjE3MzQwNzE5MTYsIm5iZiI6MTcyMTExMTkxNiwianRpIjoicnc0TmdQVnVBb2VnaTlDSCIsInN1YiI6IjIzIiwicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyJ9.SZ3-bc3MMNbFe97beQjVOA3m_2SvvVRakxiFVsJ1Rl8'
        }
      });
      setResponse(response.data);
      console.log('Reservation successful!');
    } catch (error) {
      setError(error.response ? error.response.data : 'Error occurred');
      console.log('Error making reservation');
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <button onClick={makeReservation} disabled={loading}>
        {loading ? 'Loading...' : 'Reserve Room'}
      </button>
      {response && <div>Response: {JSON.stringify(response)}</div>}
      {error && <div>Error: {JSON.stringify(error)}</div>}
    </div>
  );
};
export default About;