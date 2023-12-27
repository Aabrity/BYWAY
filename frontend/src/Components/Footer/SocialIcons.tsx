import React, { FC } from "react";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "ion-icon": any;
    }
  }
}

interface Icon {
  name: string;
}

interface SocialIconsProps {
  Icons: Icon[];
}

const SocialIcons: FC<SocialIconsProps> = ({ Icons }) => {
  return (
    <div className="text-green-600">
      {Icons.map((icon) => (
        <span
          key={icon.name}
          className="p-2 cursor-pointer inline-flex items-center
        rounded-full bg-gray-700 mx-1.5 text-xl hover:text-gray-100 hover:bg-teal-500
        duration-300 "
        >
          <ion-icon name={icon.name}></ion-icon>
        </span>
      ))}
    </div>
  );
};
export default SocialIcons