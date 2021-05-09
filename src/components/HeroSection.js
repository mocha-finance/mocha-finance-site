import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
      <h1>Start Your Journey</h1>
      <p>Let's get ready to Stake</p>
      <div className='hero-btns'>
      <a href='https://bscscan.com/token/0x33e73243E8bC4c5a5605D43a1087ADc00A79CAf2'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          Token Address
        </Button>
      </a>
      <a href='https://exchange.pancakeswap.finance/#/swap?inputCurrency=0x33e73243E8bC4c5a5605D43a1087ADc00A79CAf2'>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Buy Mocha Token <i className='far fa-play-circle' />
        </Button>
      </a>
      </div>
    </div>
  );
}

export default HeroSection;
