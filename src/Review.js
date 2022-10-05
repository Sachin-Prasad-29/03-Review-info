import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
    const [index, setIndex] = useState(0);
    const { name, job, image, text } = people[index];
    const prevPerson = () => {
        if (index >= 1) setIndex((index) => index - 1);
    };
    const nextPerson = () => {
        if (index < people.length - 1) setIndex((index) => index + 1);
    };
    const getRandom = () => {
        const newIndex = Math.floor(Math.random() * people.length);
        setIndex((index) => {
            return newIndex;
        });
    };
    return (
        <article className='review'>
            <div className='img-container'>
                <img src={image} alt={name} className='person-img' />
                <span className='quote-icon'>
                    <FaQuoteRight />
                </span>
            </div>
            <h4 className='author'>{name}</h4>
            <p className='job'>{job}</p>
            <p className='info'>{text}</p>
            <div>
                <button className='next-btn' onClick={prevPerson}>
                    <FaChevronLeft />
                </button>
                <button className='next-btn' onClick={nextPerson}>
                    <FaChevronRight />
                </button>
            </div>
            <button className='random-btn' onClick={getRandom}>
                Surprise me
            </button>
        </article>
    );
};

export default Review;
