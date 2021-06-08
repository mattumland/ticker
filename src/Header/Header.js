import './Header.css';
import React from 'react';

const Header = ({ filter, updateFilter }) => {
    
    return (
        <header>
            <section className='title-block'>
                <h1>TICKER</h1>
                <h2>the stories you care about</h2>
            </section>
            <section className='button-container'>
                <div className='small-button-container'>
                    <button id='' onClick={e => updateFilter(e)}>ALL STORIES</button>
                    <button id='health' onClick={e => updateFilter(e)}>HEALTH</button>
                    <button id='us' onClick={e => updateFilter(e)}>US</button>
                    <button id='world' onClick={e => updateFilter(e)}>WORLD</button>
                </div>
                <div className='small-button-container'>
                    <button id='tech' onClick={e => updateFilter(e)}>TECH</button>
                    <button id='business' onClick={e => updateFilter(e)}>BUSINESS</button>
                    <button id='opinion' onClick={e => updateFilter(e)}>OPINION</button>
                    <button id='travel' onClick={e => updateFilter(e)}>TRAVEL</button>
                </div>
            </section>
        </header>
    )
}

export default Header