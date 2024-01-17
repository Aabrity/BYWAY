// ReviewCard.jsx
import React from 'react';
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
    <div className='card-container flex flex-col'>
      <a className='review mb-4' href="./reviews">Write a review</a>
      <div className='underline w-full border-b-2 mb-4'></div>
      {review && (
        <div key={review.id}>
          <div className='text-container'>
            <div className='name-country '>
              <p className='name  whitespace-nowrap'>{review.fullName}</p>
              <h1>|</h1>
              <p className='country whitespace-nowrap'>{review.selectCountry}</p>
            </div>
            <div>
                <p className='date'> {review.date}</p>
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
          className='font-bold text-7xl p-1 hover:text-blue-200 rounded-xl'
          onClick={Decrement}
        >
          &#x2190;
        </button>
        <button
          className='font-bold text-7xl p-1 hover:text-blue-200 rounded-xl'
          onClick={Increment}
        >
          &#x2192;
        </button>
      </div>
    </div>
  );
};

export default ReviewCard;
