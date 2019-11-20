import React from 'react';
import '../css/SplashPage.css';

function splashPage(){
  return(
    <div className='wrapper'>
      <div className='splash'>
        <h1 className='logo'><em>Pierre's</em> LuxKombucha</h1>
        <blockquote className='blockquote'>
          <p className="mb-0">The <em>finest</em> ingredients. The <em>finest</em> Kombucha.</p>
          <footer className="blockquote-footer">Pierre</footer>
        </blockquote>
      </div>
    </div>
  );
}

export default splashPage;