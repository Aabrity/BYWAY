import Image from "next/image";
import { FaMapMarkerAlt } from "react-icons/fa";

interface TrendingBlogContainerProps {
  title: string;
  location: string;
  date: string;
  description: string;
  imageSrc: string;
}

const TrendingBlogContainer: React.FC<TrendingBlogContainerProps> = ({ title, location, date, description, imageSrc }) => {
  return (
    <div className="w-2/3 p-3 mb-4 bg-white border border-gray-300 rounded-md shadow-xl">
      <div className="mb-2 relative w-full h-96">
        <Image
          src={imageSrc}
          alt={title}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h2 className="text-xl font-bold mb-2">{title}</h2>
      <div className="flex items-center mb-2">
        <FaMapMarkerAlt className="mr-2" />
        <span>{location}</span>
      </div>
      <div className="text-sm text-gray-500 mb-2">{date}</div>
      <p className="text-gray-700">{description.length > 150 ? `${description.slice(0, 150)}...` : description}</p>
    </div>
  );
};

export default TrendingBlogContainer;
