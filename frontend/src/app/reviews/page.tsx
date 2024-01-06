"use client";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./reviewForm.css";
import App from './ReviewApp'
import HeaderTab from "@/Components/Header";

interface ReviewData {
  title: string;
  fullName: string;
  date: string;
  selectCountry: string;
  reviewDetails: string;
}

function PlanTrip() {
  const [fullName, setFullName] = useState("");

  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");

  const [selectCountry, setSelectCountry] = useState("");
  const [reviewDetails, setReviewDetails] = useState("");
  const [reviewList, setReviewList] = useState<ReviewData[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:3001/api/get/review").then((response) => {
      setReviewList(response.data);
      // console.log(response.data);
    });
  }, []); // Empty dependency array

  const submit = () => {
    Axios.post("http://localhost:3001/api/insert/review", {
      fullName: fullName,
      selectCountry: selectCountry,
      date: date,
      title: title,
      reviewDetails: reviewDetails,
    });

    1;

    setReviewList([
      ...reviewList,
      {
        fullName: fullName,
        selectCountry: selectCountry,
        date: date,
        title: title,
        reviewDetails: reviewDetails,
      },
    ]);
  };

  return (
    <>
    <HeaderTab/>
      <div className="container-1">
        <div className="page-banner ">
          <div className="page-title">
            <h1 className="customizeH1">Write a review</h1>
          </div>
        </div>
      </div>

      <div className="common-box" role="main">
        <div className="container">
          <div className="col-lg-12">
            <div className="standard-form booking-form common-module bg-white shadow">
              <div className="form-group">
                <label className="required"> Title of your review</label>
                <input
                  className="form-control"
                  name="phoneNumber"
                  id="phoneNumber"
                  max="15"
                  required
                  onChange={(e) => {
                    setTitle(e.target.value);
                  }}
                ></input>
              </div>

              <div className="row">
                <div className="col-md-6">
                  <div className="form-group">
                    <label className="required"> Full Name</label>
                    <input
                      type="text"
                      className="form-control"
                      name="fullName"
                      id="fullName"
                      required
                      onChange={(e) => {
                        setFullName(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>

                <div className="col-md-6">
                  <div className="form-group">
                    <label className="required"> Date</label>
                    <input
                      className="form-control"
                      name="phoneNumber"
                      id="phoneNumber"
                      max="15"
                      required
                      onChange={(e) => {
                        setDate(e.target.value);
                      }}
                    ></input>
                  </div>
                </div>
              </div>
              <div className="form-group">
                <label className="required"> Select Your Country</label>
                <div className="custom_select">
                  <select
                    className="form-control"
                    onChange={(e) => {
                      setSelectCountry(e.target.value);
                    }}
                  >
                    <option value={""}>Select Your Country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antartica">Antartica</option>
                  </select>
                </div>
              </div>
              <div className="form-group ">
                <label className="required">Your review details </label>
                <textarea
                  className="form-control"
                  name="comments"
                  id="comments"
                  required
                  onChange={(e) => {
                    setReviewDetails(e.target.value);
                  }}
                  rows={8}
                  style={{
                    height: "199px",
                    fontSize: "16px",
                    color: "black",
                  }}
                ></textarea>
              </div>

              <div className="button-submit">
                <button className="btn" onClick={submit}>
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <App/>
      </div>
    </>
  );
}

export default PlanTrip;
