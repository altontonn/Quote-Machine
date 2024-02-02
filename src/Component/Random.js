import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import $ from 'jquery';

const Random = (props) => {
  const quotes = [
    {
      text: 'If you do what you’ve always done, you’ll get what you’ve always gotten.',
      author: '-Tony Robbins',
    },
    {
      text: 'You can’t use up creativity. The more you use, the more you have.',
      author: '-Maya Angelou',
    },
    {
      text: 'It is never too late to be what you might have been.',
      author: '-George Eliot',
    },
    {
      text: 'Dream big and dare to fail.',
      author: '-Norman Vaughan',
    },
    {
      text: 'You miss 100% of the shots you don’t take.',
      author: '-Wayne Gretzky',
    },
    {
      text: 'When I stand before God at the end of my life, I would hope that I would not have a single bit of talent left and could say, I used everything you gave me.',
      author: '-Erma Bombeck',
    },
    {
      text: 'I have learned over the years that when one’s mind is made up, this diminishes fear.',
      author: '-Rosa Parks',
    },
    {
      text: 'Life is not measured by the number of breaths we take, but by the moments that take our breath away.',
      author: '-Maya Angelou',
    },
    {
      text: 'The question isn’t who is going to let me; it’s who is going to stop me.',
      author: '-Ayn Rand',
    },
  ];
  const quoteList = Math.floor(Math.random() * quotes.length);
  const selectedQuote = quotes[quoteList];
  const { changeColors, bodyBackgroundColors } = props;
  useEffect(() => {
    $('#new-quote').click(() => {
      $('#text').fadeIn(400, () => {
        $('#text').text(selectedQuote.text).fadeIn();
      });
    });
  }, [selectedQuote]);
  return (
    <>
      <section id="quote-box">
        <div id="text-quote">
          <i className="fa fa-quote-left" aria-hidden="true" />
          <p id="text">{selectedQuote.text}</p>
          <p id="author">{selectedQuote.author}</p>
        </div>
        <div id="aside">
          <div id="icons">
            <a href="twitter.com/intent/tweet" id="tweet-quote" target="_blank" aria-label="Tweet this quote">
              <i className="fa-brands fa-square-twitter" />
            </a>
            <i className="fa-brands fa-square-tumblr" />
          </div>
          <button
            id="new-quote"
            type="button"
            onClick={() => {
              changeColors();
            }}
            style={{
              backgroundColor: bodyBackgroundColors,
              transition: 'background-color 0.5s',
              color: '#fff',
            }}
          >
            New quotes
          </button>
        </div>
      </section>
      <footer>
        <p className="author-text">By Newton</p>
      </footer>
    </>
  );
};
Random.propTypes = {
  changeColors: PropTypes.func.isRequired,
  bodyBackgroundColors: PropTypes.string.isRequired,
};
export default Random;
