"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";

interface Location {
  location_id: number;
  location_name: string;
}

interface PackageData {
  package_title: string;
  location_id: string;
  about: string;
  guidance_language: string;
  whats_included: string;
  what_to_expect: string;
  departure_and_return: string;
  accessibility: string;
  additional_info: string;
  price: number;
  discount: number;
}

export const PackageForm = ({ id }: { id?: string | number }) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [packageData, setPackageData] = useState<PackageData>({
    package_title: "",
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
  const [imageFiles, setImageFiles] = useState<FileList | null>(null);
  const [imagePreviews, setImagePreviews] = useState<string[]>([]);
  const [isUpdateMode, setIsUpdateMode] = useState(false); // New state to track update mode

  useEffect(() => {
    axios
      .get("http://localhost:8081/maps/fetchAvailableLocations")
      .then((response) => {
        setLocations(response.data);
      });

    // Fetch package data if id prop is provided
    if (id) {
      axios
        .get(`http://localhost:8081/packages/getselectedpackage/${id}`)
        .then((response) => {
          const fetchedPackageData = response.data.package;
          setPackageData(fetchedPackageData);
          setImagePreviews([]);
           const imagePreviews = [];
           for (let i = 1; i <= 4; i++) {
             const imageData = fetchedPackageData[`image${i}`];
             if (
               imageData &&
               imageData.type === "Buffer" &&
               Array.isArray(imageData.data)
             ) {
               const blob = new Blob([Buffer.from(imageData.data)], {
                 type: "image/jpeg",
               }); // Assuming JPEG format
               const imageUrl = URL.createObjectURL(blob);
               imagePreviews.push(imageUrl);
             }
           }
           setImagePreviews(imagePreviews); // Clear existing previews
          setIsUpdateMode(true); // Enable update mode
        })
        .catch((error) => {
          console.error("Error fetching package data:", error);
        });
    }
  }, [id]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setPackageData({
      ...packageData,
      [name]: value,
    });
  };
  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);

      const previews = files.map((file) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        return new Promise<string>((resolve) => {
          reader.onloadend = () => {
            resolve(reader.result as string);
          };
        });
      });

      Promise.all(previews).then((previewUrls) => {
        setImagePreviews(previewUrls);
      });

      setImageFiles(e.target.files);
    }
  };
  const handlePackageSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = new FormData();

    if (imageFiles) {
      for (let i = 0; i < imageFiles.length; i++) {
        formData.append(`image`, imageFiles[i]); // Use the same field name "image"
      }
    }

    for (const key in packageData) {
      if (Object.prototype.hasOwnProperty.call(packageData, key)) {
        formData.append(key === 'package_title' ? 'title' : key, (packageData as any)[key]);

      }
    }

    try {
      let response;

      if (isUpdateMode) {
        response = await axios.put(
          `http://localhost:8081/packages/updatePackage/${id}`,
          
          formData,
          
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      } else {
        console.log(formData);
        response = await axios.post(
          "http://localhost:8081/packages/insertPackage",
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
      }
      console.log("Server Response:", response);
      if (response.data.Status==="Success") {
        alert(
          isUpdateMode
            ? "Package updated successfully"
            : "Package added successfully"
        );
        setPackageData({
          package_title: "",
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
        setImageFiles(null);
        setIsUpdateMode(false);
      } else {
        alert("Error adding/updating package");
      }
    } catch (error) {
      console.error("Submission error:", error);
    }
  };
  return (
    <div className="">
      <form
        onSubmit={handlePackageSubmit}
        className="flex flex-col max-h-[75vh] overflow-y-auto "
      >
        <div className="w-auto pb-12 ml-3 text-4xl text-center text-green-700 ">
          <strong>
            {isUpdateMode ? "Update Package" : "Create new Package"}
          </strong>
        </div>

        <div className=" divcontainer ml-24">
          <div className=" name flex m-2  mb-5 items-center ">
            <label className="mr-10 text-xl text-slate-700 ">
              Name of Package :
            </label>
            <input
              type="text"
              className="p-1 text-xl rounded-sm w-[60%] border-2 border-slate-300"
              name="package_title"
              value={packageData.package_title}
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

          <div className="image-files flex ml-2 mb-5 items-start">
            <label className="mr-10 text-xl text-slate-700">Image Files:</label>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleFileInputChange}
              name="image"
            />
            <div className="flex mt-2">
              {imagePreviews.map((preview, index) => (
                <img
                  key={index}
                  src={preview}
                  alt={`Preview-${index}`}
                  className="mr-2 border border-gray-300 rounded-sm"
                  style={{ width: "100px", height: "100px" }}
                />
              ))}
            </div>
          </div>

          <div className=" about flex m-2  mb-5 items-start ">
            <label className="mr-10 text-xl text-slate-700 ">
              About Section :
            </label>
            <div className="px-4"></div>
            <textarea
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%] h-[30vh] border-2 border-slate-300 "
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
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%] h-[10vh]  border-2 border-slate-300 "
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
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%] h-[30vh] border-2 border-slate-300 "
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
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%] h-[30vh]  border-2 border-slate-300 "
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
              className="p-1 text-xl text-slate-700 rounded-sm w-[59%] h-[30vh]  border-2 border-slate-300 "
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
              className="p-1 text-xl text-slate-700 rounded-sm w-[60%] h-[30vh]  border-2 border-slate-300 "
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
              className="p-1 text-xl text-slate-700 rounded-sm w-[59%] h-[30vh]  border-2 border-slate-300 "
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
              className="p-1 text-xl rounded-sm w-[60%]  border-2 border-slate-300 "
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
              className="p-1 text-xl rounded-sm w-[60%]  border-2 border-slate-300 "
              name="discount"
              value={packageData.discount}
              onChange={handleInputChange}
            />
          </div>

          <div className="self-center w-48">
            <button
              type="submit"
              className="w-full mb-5 p-3 bg-green-600 text-white text-xl rounded hover:bg-green-700 focus:outline-none focus:ring focus:border-green-700 transition"
            >
              {isUpdateMode ? "Update Package" : "Add Package"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
