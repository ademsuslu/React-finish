import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
export default function Detay() {
  const params = useParams();
  console.log(params);
  const [contact, setContact] = useState([]);
  const FetchData = async () => {
    const detay = await axios(
      `${process.env.REACT_APP_API_KEY}basic/web/index.php/users/${params.id}`
    );
    const personList = detay.data;
    setContact(personList);
  };
  useEffect(() => {
    FetchData();
  }, [params]);
  return (
    <div className="container">
      <div className="col">
        <div className="row">
          <ul className="list-group list-group-flush mb-5">
            <li className="list-group-item">
              <label htmlFor="floatingInput">
                FirstName: {contact.firstname}{" "}
              </label>
            </li>
            <li className="list-group-item">
              <label htmlFor="floatingInput">Surname:{contact.surname} </label>
            </li>
            <li className="list-group-item">
              <label htmlFor="floatingInput">Email1: {contact.email} </label>
            </li>
            <li className="list-group-item">
              <label htmlFor="floatingInput">
                Access Token: {contact.access_token}{" "}
              </label>
            </li>
            <li className="list-group-item">
              <label htmlFor="floatingInput">Pwd: {contact.pwd} </label>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
