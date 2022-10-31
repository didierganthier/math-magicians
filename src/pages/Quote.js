import React, { useEffect, useState } from 'react';
import TypeWriterEffect from 'react-typewriter-effect';

const Quote = () => {
  const [quote, setQuote] = useState({
    quote: 'Mathematics is not about numbers, equations, computations, or algorithms: it is about understanding. –William Paul Thurston',
    author: 'William Paul Thurston',
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://random-math-quote-api.herokuapp.com/')
      .then((response) => response.json())
      .then((data) => setQuote(data))
      .then(() => setLoading(false));
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#22272D]">
      <div className="flex flex-col items-center justify-center md:ml-20 md:mr-20 border text-7xl shadow-md shadow-white md:p-10 animate-pulse">
        <h1 className="hidden">{quote.quote}</h1>
        {loading ? (
          <TypeWriterEffect
            textStyle={{
              fontFamily: 'monospace',
              fontSize: '1.5rem',
              color: '#fff',
              'text-shadow': '0 0 10px #fff',
            }}
            startDelay={100}
            cursorColor="white"
            text="Loading..."
            typeSpeed={100}
            eraseSpeed={100}
          />
        ) : (
          <>
            <TypeWriterEffect
              textStyle={{
                fontFamily: 'monospace',
                fontSize: '1.5rem',
                color: '#fff',
                'text-shadow': '0 0 10px #fff',
              }}
              startDelay={100}
              cursorColor="white"
              text={quote.quote}
              typeSpeed={100}
              eraseSpeed={100}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Quote;
