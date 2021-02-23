import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1 className='mid-title'>What is Staking?</h1>
      <p className='mid-section'>The process of holding tokens in a cryptocurrency wallet to support the operations of a network. Participants help in the validation of new transactions and earn constant guaranteed time-based rewards.</p>
      <p className='mid-section'>Stakers earn rewards in proportion to the staked amount and the staking time — the longer you stake, the more you earn.</p>
    </div>
  );
}

export default Cards;
