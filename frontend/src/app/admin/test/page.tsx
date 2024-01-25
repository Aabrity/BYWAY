import React from "react";

const Page = () => {

  return (
    <div>
      <div className="text-4xl text-green-700 text-center font-semibold p-8 bg-blue-300 ">
        Create Blog
      </div>
      <div className="divcontainer bg-red-300 ml-16 overflow-y-auto">
        <div className=" title flex m-2  mb-5 items-center ">
          <label className="mr-10 text-xl text-slate-700 ">Blog Title :</label>
          <input
            type="text"
            className="p-1 text-xl rounded-sm w-[60%] border-2 border-slate-300"
            name="package_title"
            // value={packageData.package_title}
            // onChange={handleInputChange}
          />
        </div>
        <div className="image-files flex ml-2 mb-5 items-start">
          <label className="mr-10 text-xl text-slate-700">Image Files:</label>
          <input
            type="file"
            accept="image/*"
            multiple
            // onChange={handleFileInputChange}
          />
          {/* <div className="flex mt-2">
            {imagePreviews.map((preview, index) => (
              <img
              key={index}
              src={preview}
              alt={`Preview-${index}`}
              className="mr-2 border border-gray-300 rounded-sm"
              style={{ width: "100px", height: "100px" }}
              />
              ))}
            </div> */}
        </div>
        <div className="category flex ml-2 mb-5 items-start">
          <label className="mr-10 text-xl text-slate-700">Category:</label>
          <select
            id="category"
            className="border rounded-md p-2"
            // value={category}
            // onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Normal">Normal</option>
            <option value="Trending">Trending</option>
          </select>
        </div>
        <div className="blog_content flex flex-col ml-2 mb-5 items-start">
          <label className="mr-10 text-xl text-slate-700">
            Content Editor:
          </label>
          <div>
            {/* Other components or UI elements */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
