import React, { useState } from 'react';
import { getDatabase, ref, set } from "firebase/database";
import { database } from '../../firebase';

const UserForm = () => {


  const [profilepic, setprofilepic] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [username, setusername] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {

      const db = getDatabase();
      const userRef = ref(db, 'users/' + username);
      set(userRef, {
        profilepic: profilepic,
        email: email,
        phone: phone,
        username: username,
      });

      console.log('Form data saved to Firebase:', username);
    } catch (error) {
      console.error('Error saving data:', error);
    }

  };
  return (
    <>

      <h1>User Form</h1>

      <form onSubmit={handleSubmit}>
        <div className="upperform">
          <div className="formsec formsec1">
            <div className="mb-4">
              <label htmlFor="profilepic" className="form-label">Upload Profile Picture</label>
              <input type="file" accept=".png, .jpg, .jpeg" className="form-control"
                id="profilepic"
                value={profilepic}
                onChange={(e) => setprofilepic(e.target.value)}
              />
            </div>
          </div>
        </div>
        <div className="bottomform">
          <div className="formsec formsec2">
            <div className="mb-4">
              <label htmlFor="username" className="form-label">User Name</label>
              <input type="text" className="form-control" id="username" placeholder='Enter Username'
                value={username}
                onChange={(e) => setusername(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="phone" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="phone" placeholder='Enter Your Number'
                value={phone}
                onChange={(e) => setphone(e.target.value)}
              />
            </div>
          </div>
          <div className="formsec formsec3">
            <div className="mb-4">
              <label htmlFor="email" className="form-label">Email</label>
              <input type="email" className="form-control" id="email" placeholder='Enter Email'
                value={email}
                onChange={(e) => setemail(e.target.value)}
              />
            </div>
            <div className="mb-4">
              <label htmlFor="timing" className="form-label">Interview Preferred Time</label>
              <select className="form-select" id='timing'>
                <option value="Morning">Morning</option>
                <option value="AfterNoon">AfterNoon</option>
                <option value="Evening">Evening</option>
              </select>
            </div>
          </div>
        </div>
        <div className="lastform">
          <div className="mb-4 form-check form-switch">
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" />
            <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Select Your Role (optional)</label>
          </div>
          <div className="mb-4">
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Student" defaultValue="Student" />
              <label className="form-check-label" htmlFor="Student">Student</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Teacher" defaultValue="Teacher" />
              <label className="form-check-label" htmlFor="Teacher">Teacher</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="inlineRadioOptions" id="Other" defaultValue="Other" />
              <label className="form-check-label" htmlFor="Other">Other</label>
            </div>
          </div>
        </div>
        <button type="submit" className="adduser">ADD USER</button>
      </form>


    </>
  )
}

export default UserForm