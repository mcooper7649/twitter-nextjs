import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline';
import React, { useState } from 'react';

function TweetBox() {
  const [input, setInput] = useState<string>('');
  return (
    <div className="flex space-x-2 p-5">
      <img
        src="https:////links.papareact.com/gll"
        alt=""
        className="mt-4 h-14 w-14 rounded-full object-cover"
      />

      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="What's Happening?"
          />
          <div className="flex items-center">
            <div className="text-twitter flex flex-1 space-x-2">
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5" />
              <EmojiHappyIcon className="h-5 w-5" />
              <CalendarIcon className="h-5 w-5" />
              <LocationMarkerIcon className="h-5 w-5" />
            </div>
            <button
              className="bg-twitter rounded-full px-5 font-bold text-white disabled:opacity-40"
              disabled={!input}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default TweetBox;
