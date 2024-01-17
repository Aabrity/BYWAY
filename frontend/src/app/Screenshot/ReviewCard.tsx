// ReviewCard.jsx
import React from 'react';
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa';
import './reviewPage.css';

interface Review {
  id: number;
  fullName: string;
  date: string;
  title: string;
  selectCountry: string;
  reviewDetails: string;
}

interface CardProps {
  reviews: Review[];
  currentIndex: number;
  Decrement: () => void;
  Increment: () => void;
}

const ReviewCard: React.FC<CardProps> = (props) => {
  const { reviews, currentIndex, Decrement, Increment } = props;
  const review = reviews[currentIndex];

  return (
    
    <div className=' border-green-400 rounded-md border-2 w-full h-72 justify-center p-9 mb-72 flex flex-col  '>
      
      <div className='underline w-full border-b-2 mb-4'></div>
      {review && (
        <div key={review.id}>
          <div className='text-container'>
            <div className='name-country '>
              <p className='name  whitespace-nowrap overflow-hidden'>{review.fullName}</p>
              <h1>|</h1>
              <p className='country whitespace-nowrap'>{review.selectCountry}</p>
            </div>
            <div >
                <p className='date '> {review.date}</p>
            </div>
          </div>
          <div className='title-desc'>
            <h5 className='title'>{review.title.toUpperCase()}</h5>
            <p className='description'>{review.reviewDetails}</p>
          </div>
        </div>
      )}
      <div className='underline w-full border-b-2'></div>
      <div className='button-container flex justify-center items-center'>
        <button
          className='font-bold text-7xl p-1 hover:text-blue-200  rounded-xl mt-6'
          onClick={Decrement}
        >
        <FaArrowAltCircleLeft className='text-3xl  '/>
        </button>
        <button
          className='font-bold text-7xl p-1 hover:text-blue-200 rounded-xl mt-6'
          onClick={Increment}
        >
         <FaArrowAltCircleRight className='text-3xl'/>
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
