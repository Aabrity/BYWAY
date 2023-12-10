import './index.css';

function PlanTrip() {
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
              <h3>Trip Details</h3>
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
                          data-type="date"
                          autoComplete=""
                          value=""
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
                        value=""
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
                        value=""
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
                        name="trip_length"
                        id="trip_length"
                        required
                        value=""
                      />
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group ">
                      <label className="required">Tour Type </label>
                      <div className="custom_select">
                        <select
                          className="form-control "
                          name="tour-type"
                          id="tour-type"
                          required
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
                          name="hotel-type"
                          id="hotel-type"
                          required
                        >
                          <option value="">---Select One Option---</option>
                          <option value="5-star">Trek and Hiking</option>
                          <option value="Normal Hotel">
                            Tour and Sightseeing
                          </option>
                          <option value="Medium Hotel">Day Tour</option>
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
                          name="hotel-type"
                          id="hotel-type"
                          required
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
                      name="hotel-type"
                      id="hotel-type"
                      required
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
                    rows={8}
                    style={{
                      height: "199px",
                      fontSize: "16px",
                      color: "black",
                    }}
                  ></textarea>
                </div>
                <button
                  type="submit"
                  name="submit"
                  value="customize_trip"
                  className="btn"
                >
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PlanTrip;
