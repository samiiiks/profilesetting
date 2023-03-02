import React from 'react'
import { useState } from 'react'

function Profileinfo() {
  const [detail, setDetail] = useState(JSON.parse(localStorage.getItem('profile_setting')))
  const handleChange = (e) => {
    setDetail({
      ...detail,
      [e.target.name]: e.target.value,
    });
  }
  const onSubmit = (e) => {
    e.preventDefault()

    localStorage.setItem('profile_setting', JSON.stringify({
      firstname: detail.firstname, surname: detail.surname, phone: detail.phone, address: detail.address, email: detail.email, education: detail.education, country: detail.country, state: detail.state, city: detail.city
    }));
    alert("submitted")
    // console.log("submitted", detail)
  }
  // console.log("submitted", detail);
 

  return (
    <div>
      <h2>Profile setting</h2>
      <form className='form'>
        Name: <input type="text" placeholder='First name' name='firstname' value={detail.firstname} onChange={handleChange} />
        Surname: <input type="text" placeholder='Surname' name='surname' value={detail.surname} onChange={handleChange} />
        Phone Number<input type="text" placeholder='Enter your phone number' name='phone' value={detail.phone} onChange={handleChange} />
        Address<input type="text" placeholder='Enter address' name='address' value={detail.address} onChange={handleChange} />
        Email Id<input type="text" placeholder='Enter email id' name='email' value={detail.email} onChange={handleChange} />
        Education<input type="text" placeholder='Education' name='education' value={detail.education} onChange={handleChange} />
        Country<input type="text" placeholder='Country' name='country' value={detail.country} onChange={handleChange} />
        State<input type="text" placeholder='State' name='state' value={detail.state} onChange={handleChange} />
        city<input type="text" placeholder='city' name='city' value={detail.city} onChange={handleChange} />
        <button className='btn' type='submit' onClick={onSubmit}>Save Profile</button>
      </form>
    </div>
  )
}

export default Profileinfo

