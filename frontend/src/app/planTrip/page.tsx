"use client";
import Axios from "axios";
import { useEffect, useState } from "react";
import "./planTrip.css";

import App from "../reviews/ReviewApp";

interface TravelData {
  fullName: string;
  phoneNumber: string;
  emailAddress: string;
  selectTrip: string;
  approxDate: string;
  tripLength: string;
  numberOfAdults: string;
  numberOfChildren: string;
  tourType: string;
  hotelType: string;
  estimatedBudget: string;
  guideLanguage: string;
  moreInfo: string;
  selectCountry: string;
  whereDidYouFindUs: string;
}

function FormValidation() {
  const [values, setValues] = useState({
    fullName: "",
  });
}
function PlanTrip() {
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [selectTrip, setTrip] = useState("");
  const [approxDate, setApproxDate] = useState("");
  const [tripLength, setTripLength] = useState("");
  const [numberOfAdults, setNumberOfAdults] = useState("");
  const [numberOfChildren, setNumberOfChildren] = useState("");
  const [tourType, setTourType] = useState("");
  const [hotelType, setHotelType] = useState("");
  const [estimatedBudget, setEstimatedBudget] = useState("");
  const [guideLanguage, setGuideLanguage] = useState("");
  const [moreInfo, setMoreInfo] = useState("");
  const [selectCountry, setSelectCountry] = useState("");
  const [whereDidYouFindUs, setWhereDidYouFindUs] = useState("");
  const [travelList, setTravelList] = useState<TravelData[]>([]);

  useEffect(() => {
    Axios.get("http://localhost:8081/planTrip/api/get").then((response) => {
      setTravelList(response.data);
      // console.log(response.data);
    });
  }, []); // Empty dependency array

  const submit = () => {
    // Proceed with the submission
    Axios.post("http://localhost:8081/planTrip/api/insert", {
      fullName,
      phoneNumber,
      emailAddress,
      selectTrip,
      approxDate,
      tripLength,
      numberOfAdults,
      numberOfChildren,
      tourType,
      hotelType,
      estimatedBudget,
      guideLanguage,
      moreInfo,
      selectCountry,
      whereDidYouFindUs,
    });

    setTravelList([
      ...travelList,
      {
        fullName,
        phoneNumber,
        emailAddress,
        selectTrip,
        approxDate,
        tripLength,
        numberOfAdults,
        numberOfChildren,
        tourType,
        hotelType,
        estimatedBudget,
        guideLanguage,
        moreInfo,
        selectCountry,
        whereDidYouFindUs,
      },
    ]);
  };

  return (
    <>
      <div className="container-1">
        <div className="page-banner ">
          <div className="page-title">
            <h1 className="customizeH1">Plan Your Trip</h1>
          </div>
        </div>
      </div>

      <div className="common-box" role="main">
        <div className="container">
          <div className="col-lg-12">
            <div className="standard-form booking-form common-module bg-white shadow">
              <h3 className="details">Trip Details</h3>
              <div className="inner-box">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="required">Select Trip</label>
                      <div className="custom_select">
                        <select
                          className="form-control "
                          name="package_name"
                          id="package_name"
                          required
                          onChange={(e) => {
                            setTrip(e.target.value);
                          }}
                        >
                          <option value="">Select Trip</option>
                          <option value="12 Days Everest Base Camp Trek">
                            12 Days Everest Base Camp Trek
                          </option>
                          <option value="Annapurna Base Camp Helicopter Tour">
                            Annapurna Base Camp Helicopter Tour
                          </option>
                          <option value="Annapurna Base Camp Trek">
                            Annapurna Base Camp Trek
                          </option>
                          <option value="Annapurna Base Camp Trek with Helicopter Return">
                            Annapurna Base Camp Trek with Helicopter Return
                          </option>
                          <option
                            value="Everest Base Camp Helicopter Tour"
                            selected
                          >
                            Everest Base Camp Helicopter Tour
                          </option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="required">Approx. Date of Travel</label>
                      <div className="calendar">
                        <input
                          type="text"
                          className="form-control "
                          id="approx_date"
                          name="approx_date"
                          required
                          // data-type="date"
                          autoComplete=""
                          onChange={(e) => {
                            setApproxDate(e.target.value);
                          }}
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="required">Length of Trip</label>
                      <input
                        type="number"
                        className="form-control "
                        min="1"
                        name="trip_length"
                        id="trip_length"
                        required
                        onChange={(e) => {
                          setTripLength(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="required">Number of Adults </label>
                      <input
                        type="number"
                        className="form-control "
                        min="1"
                        name="adult"
                        id="adult"
                        required
                        onChange={(e) => {
                          setNumberOfAdults(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="required">Number of Children</label>
                      <input
                        type="number"
                        className="form-control "
                        min="1"
                        name="num_child"
                        id="num_child"
                        required
                        onChange={(e) => {
                          setNumberOfChildren(e.target.value);
                        }}
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="required">Tour Type </label>
                      <div className="custom_select">
                        <select
                          className="form-control "
                          required
                          onChange={(e) => {
                            setTourType(e.target.value);
                          }}
                        >
                          <option value="">---Select One Option---</option>
                          <option value="Trek and Hiking">
                            Trek and Hiking
                          </option>
                          <option value="Tour and Sightseeing">
                            Tour and Sightseeing
                          </option>
                          <option value="Day Tour">Day Tour</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="required">Hotel type</label>
                      <div className="custom_select">
                        <select
                          className="form-control "
                          required
                          onChange={(e) => {
                            setHotelType(e.target.value);
                          }}
                        >
                          <option value="">---Select One Option---</option>
                          <option value="5-star">5-star</option>
                          <option value="Normal Hotel">Normal Hotel</option>
                          <option value="Medium Hotel">Medium Hotel</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="required">Estimated Budget </label>
                      <div className="custom_select">
                        <select
                          className="form-control "
                          required
                          onChange={(e) => {
                            setEstimatedBudget(e.target.value);
                          }}
                        >
                          <option value="">---Estimated Budget---</option>
                          <option value="$1-$500">$1 - $500</option>
                          <option value="$500-$1000">$500 - $1000</option>
                          <option value="$1500-$2000">$1500 - $2000</option>
                          <option value="$2000-$3000">$2000 - $3000</option>
                          <option value="$3000-$4000">$3000 - $4000</option>
                          <option value="$4000-$5000">$4000 - $5000</option>
                          <option value="Above $5000">Above $5000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="form-group ">
                  <label className="required">Guide Language </label>
                  <div className="custom_select">
                    <select
                      className="form-control "
                      required
                      onChange={(e) => {
                        setGuideLanguage(e.target.value);
                      }}
                    >
                      <option value="">English</option>
                      <option value="English">English</option>
                      <option value="Chinese">Chinese</option>
                      <option value="Japanese">Japanese</option>
                      <option value="French">French</option>
                    </select>
                  </div>
                </div>
                <div className="form-group ">
                  <label className="required">More information </label>
                  <textarea
                    className="form-control"
                    name="comments"
                    id="comments"
                    required
                    onChange={(e) => {
                      setMoreInfo(e.target.value);
                    }}
                    rows={8}
                    style={{
                      height: "199px",
                      fontSize: "16px",
                      color: "black",
                    }}
                  ></textarea>
                </div>

                <div className="Personal-info">
                  <h2>Personal information</h2>
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
                      <label className="required"> Phone Number</label>
                      <input
                        className="form-control"
                        name="phoneNumber"
                        id="phoneNumber"
                        max="15"
                        required
                        onChange={(e) => {
                          setPhoneNumber(e.target.value);
                        }}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <label className="required"> Email Address</label>
                      <input
                        type="text"
                        className="form-control"
                        name="emailAddress"
                        id="emailAddress"
                        required
                        onChange={(e) => {
                          setEmailAddress(e.target.value);
                        }}
                      ></input>
                    </div>
                  </div>
                  <div className="col-md-6">
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
                  </div>
                </div>

                <div className="form-group">
                  <label className="required"> Where did you find us</label>
                  <div className="custom_select">
                    <select
                      className="form-control"
                      name="wheredidyou"
                      id="wheredidyou"
                      required
                      onChange={(e) => {
                        setWhereDidYouFindUs(e.target.value);
                      }}
                    >
                      <option value={""}>Where did you find us</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Friends">Friends</option>
                      <option value="Google">Google</option>
                    </select>
                  </div>
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
      </div>

      <div>
        <App />
      </div>
    </>
  );
}

export default PlanTrip;
