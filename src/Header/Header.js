import './Header.css';
import React from 'react';

const Header = ({ currentFilter, updateFilter }) => {
    
    return (
        <header>
            <section className='title-block'>
                <h1>TICKER</h1>
                <h2>the stories you care about</h2>
            </section>
            <section className='button-container'>
                <div className='small-button-container'>
                    <button className={(currentFilter === '') ? 'active' : ''} id='' onClick={e => updateFilter(e)}>ALL STORIES</button>
                    <button className={(currentFilter === 'health') ? 'active' : ''}  id='health' onClick={e => updateFilter(e)}>HEALTH</button>
                    <button className={(currentFilter === 'us') ? 'active' : ''} id='us' onClick={e => updateFilter(e)}>US</button>
                    <button className={(currentFilter === 'world') ? 'active' : ''} id='world' onClick={e => updateFilter(e)}>WORLD</button>
                </div>
                <div className='small-button-container'>
                    <button className={(currentFilter === 'sci') ? 'active' : ''} id='sci' onClick={e => updateFilter(e)}>SCIENCE</button>
                    <button className={(currentFilter === 'business') ? 'active' : ''} id='business' onClick={e => updateFilter(e)}>BUSINESS</button>
                    <button className={(currentFilter === 'opinion') ? 'active' : ''} id='opinion' onClick={e => updateFilter(e)}>OPINION</button>
                    <button className={(currentFilter === 'arts') ? 'active' : ''} id='arts' onClick={e => updateFilter(e)}>ARTS</button>
                </div>
            </section>
        </header>
    )
}

export default Header