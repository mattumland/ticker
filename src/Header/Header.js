import './Header.css';
import React, { useState } from 'react';

const Header = () => {

    const [currentFilter, updateCurrentFilter] = ('')


    return (
        <header>
            <section className='title-block'>
                <h1>TICKER</h1>
                <h2>the stories you care about</h2>
            </section>
            <section className='button-container'>
                <div className='small-button-container'>
                    <button>ALL STORIES</button>
                    <button>HEALTH</button>
                    <button>US</button>
                    <button>WORLD</button>
                </div>
                <div className='small-button-container'>
                    <button>TECH</button>
                    <button>BUSINESS</button>
                    <button>OPINION</button>
                    <button>TRAVEL</button>
                </div>
            </section>
        </header>
    )
}

export default Header