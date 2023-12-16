import React, { useState, useEffect } from 'react'
import userPhoto from "../../assets/myphoto.jpg"
import { getDatabase, ref, child, get } from 'firebase/database';

const UserTable = () => {





  const [userData, setUserData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const db = getDatabase();
        const dbRef = ref(db);
        const snapshot = await get(child(dbRef, 'users/'));

        if (snapshot.exists()) {
          // Convert object to array
          const usersArray = Object.keys(snapshot.val()).map(key => ({
            id: key,
            ...snapshot.val()[key]
          }));
          setUserData(usersArray);
        } else {
          console.log("No data available");
        }
      } catch (error) {
        console.error(error);
      }
    };
    
    fetchData();
  }, []);

  // const dbRef = ref(getDatabase());
  // get(child(dbRef, `users/`)).then((snapshot) => {
  //   if (snapshot.exists()) {
  //     console.log(snapshot.val());
  //   } else {
  //     console.log("No data available");
  //   }
  // }).catch((error) => {
  //   console.error(error);
  // });

  return (
    <>

      <h1>User Table</h1>

      <div className="show-entries">
        <label>Showing</label>
        <select>
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
          <option value="100">100</option>
        </select>
        <label>entries</label>
      </div>

      <div className="table-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">EMAIL</th>
              <th scope="col">NAME</th>
              <th scope="col">PHONE NO</th>
              <th scope="col">INTERVIEW TIMINGS</th>
              <th scope="col">ROLE</th>
              <th scope="col">ACTIVE</th>
            </tr>
          </thead>
          {/* <tbody>
            <tr>
              <th scope="row">1</th>
              <td>abc786@gmail.com</td>
              <td><span><img src={userPhoto} alt="userPhoto" className='userPhoto' /></span> Rehan</td>
              <td>03162007264</td>
              <td>Night</td>
              <td>Developer</td>
              <td>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>abc786@gmail.com</td>
              <td><span><img src={userPhoto} alt="userPhoto" className='userPhoto' /></span> Rehan</td>
              <td>03162007264</td>
              <td>Night</td>
              <td>Developer</td>
              <td>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
              </td>
            </tr>
            <tr>
              <th scope="row">1</th>
              <td>abc786@gmail.com</td>
              <td><span><img src={userPhoto} alt="userPhoto" className='userPhoto' /></span> Rehan</td>
              <td>03162007264</td>
              <td>Night</td>
              <td>Developer</td>
              <td>
                <div className="form-check form-switch">
                  <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                </div>
              </td>
            </tr>
          </tbody> */}
 <tbody>
            {userData.map((user, index) => (
              <tr key={index+1}>
                <th scope="row">{index + 1}</th>
                <td>{user.email}</td>
                <td>
                  <span><img src={userPhoto} alt="userPhoto" className='userPhoto' /></span>
                  {user.username}
                </td>
                <td>{user.phone}</td>
                <td>Noon</td>
                <td>Developer</td>
                <td>
                  <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id='flexSwitchCheck' />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>









        </table>
      </div>
      <div className="tableFooter">

        <div className="showingentries">
          Showing 1 to 10 of 87 entries
        </div>

        <nav aria-label="Page navigation example">
          <ul className="pagination">
            <li className="page-item"><a className="page-link" href="/">Previous</a></li>
            <li className="page-item"><a className="page-link" href="/">1</a></li>
            <li className="page-item"><a className="page-link" href="/">2</a></li>
            <li className="page-item"><a className="page-link" href="/">3</a></li>
            <li className="page-item"><a className="page-link" href="/">4</a></li>
            <li className="page-item"><a className="page-link" href="/">5</a></li>
            <li className="page-item"><a className="page-link" href="/">Next</a></li>
          </ul>
        </nav>

      </div>

    </>
  )
}

export default UserTable