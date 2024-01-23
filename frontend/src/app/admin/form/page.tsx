"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Location {
  location_id: number;
  location_name: string;
}


const Packageform = () => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [packageData, setPackageData] = useState({
    title: "",
    location_id: "" as string,
    about: "",
    guidance_language: "",
    whats_included: "",
    what_to_expect: "",
    departure_and_return: "",
    accessibility: "",
    additional_info: "",
    price: 0,
    discount: 0,
  });


  useEffect(() => {
    axios
      .get("http://localhost:8081/packages/fetchAvailableLocations")
      .then((response) => {
        setLocations(response.data);
      });
  }, []);

  const handlePackageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:8081/packages/addpackages",
        packageData
      );

      if (response.data.Status === "Success") {
        alert(`${packageData.title} created successfully`);
        setPackageData({
          title: "",
          location_id: "",
          about: "",
          guidance_language: "",
          whats_included: "",
          what_to_expect: "",
          departure_and_return: "",
          accessibility: "",
          additional_info: "",
          price: 0,
          discount: 0,
        });
      } else {
        alert(response.data.Error);
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPackageData({
      ...packageData,
      [name]: value,
    });
  };

  return (
    <>
      <div className="w-full p-5 text-4xl text-center text-green-700 ">
        <strong>Create new Package</strong>
      </div>
      <form
        onSubmit={handlePackageSubmit}
        className="flex flex-col max-h-[65vh] overflow-y-auto"
      >
        <div className=" divcontainer ml-12">
          <div className=" name flex m-2  mb-5 items-center ">
            <label className="mr-10 text-xl text-slate-700 ">
              Name of Package :
            </label>
            <input
              type="text"
              className="p-1 text-xl rounded-sm w-[60%]"
              name="title"
              value={packageData.title}
              onChange={handleInputChange}
            />
          </div>
          <div className="location flex m-2 mb-5 items-center">
            <label className="mr-10 text-xl text-slate-700">
              Package Location :
            </label>
            <select
              value={packageData.location_id}
              onChange={(e) =>
                setPackageData({ ...packageData, location_id: e.target.value })
              }
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%]"
            >
              <option value="" disabled>
                Select Location
              </option>
              {locations.map((location) => (
                <option key={location.location_id} value={location.location_id}>
                  {location.location_name}
                </option>
              ))}
            </select>
          </div>
          <div className=" about flex m-2  mb-5 items-start ">
            <label className="mr-10 text-xl text-slate-700 ">
              About Section :
            </label>
            <div className="px-4"></div>
            <textarea
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%] h-[30vh]"
              name="about"
              value={packageData.about}
              onChange={handleInputChange}
            />
          </div>
          <div className=" language flex m-2  mb-5 items-start ">
            <label className=" text-xl text-slate-700 ">
              Guidance Language :
            </label>
            <div className="px-2"></div>
            <textarea
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%] h-[10vh]"
              name="guidance_language"
              value={packageData.guidance_language}
              onChange={handleInputChange}
            />
          </div>
          <div className=" what's_included flex m-2  mb-5 items-start ">
            <label className="mr-8 text-xl text-slate-700 ">
              What&apos;s included
              <br /> section :
            </label>
            <div className="px-4"></div>
            <textarea
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%] h-[30vh]"
              name="whats_included"
              value={packageData.whats_included}
              onChange={handleInputChange}
            />
          </div>
          <div className=" what_to_expect flex m-2  mb-5 items-start ">
            <label className="mr-10 text-xl text-slate-700 ">
              What to expect
              <br />
              section :
            </label>
            <div className="px-4"></div>
            <textarea
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%] h-[30vh]"
              name="what_to_expect"
              value={packageData.what_to_expect}
              onChange={handleInputChange}
            />
          </div>
          <div className="departure_return flex mb-5 items-start">
            <label className="text-xl text-slate-700 ">
              Departure and Return
              <br />
              Section :
            </label>
            <div className="px-2"></div>
            <textarea
              className="p-1 text-xl text-slate-700 rounded-sm w-[59%] h-[30vh]"
              name="departure_and_return"
              value={packageData.departure_and_return}
              onChange={handleInputChange}
            />
          </div>
          <div className=" accessibility flex m-2  mb-5 items-start ">
            <label className="mr-16 text-xl text-slate-700 ">
              Accessibility&nbsp;
              <br />
              Section :
            </label>
            <div className="px-4"></div>
            <textarea
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%] h-[30vh]"
              name="accessibility"
              value={packageData.accessibility}
              onChange={handleInputChange}
            />
          </div>
          <div className="info flex mb-5 items-start">
            <label className="text-xl text-slate-700 ">
              Additional Information
              <br />
              Section :
            </label>
            <div className="px-1"></div>
            <textarea
              className="p-1 text-xl text-slate-700 rounded-sm w-[59%] h-[30vh]"
              name="additional_info"
              value={packageData.additional_info}
              onChange={handleInputChange}
            />
          </div>
          <div className=" price flex m-2  mb-5 items-center ">
            <label className="mr-20 text-xl text-slate-700 ">
              Marked Price :
            </label>
            <input
              type="number"
              className="p-1 text-xl rounded-sm w-[60%]"
              name="price"
              value={packageData.price}
              onChange={handleInputChange}
            />
          </div>
          <div className=" discount flex m-2  mb-5 items-center ">
            <label className="mr-2 text-xl text-slate-700 ">
              Discount Percentage :
            </label>
            <input
              type="number"
              className="p-1 text-xl rounded-sm w-[60%]"
              name="discount"
              value={packageData.discount}
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div className="self-center w-auto">
          <button
            type="submit"
            className="w-full my-5 p-3 bg-green-700 text-white text-xl font-semibold rounded-sm"
          >
            Add Package
          </button>
        </div>
      </form>
    </>
  );
};

export default Packageform;
