import React, { useEffect, useState } from 'react';

const Popup = () => {
  const [tag, setTag] = useState('');

  useEffect(() => {
    chrome.storage.sync.get(['affiliateTag'], (result) => {
      if (result.affiliateTag) {
        setTag(result.affiliateTag);
      }
    });
  }, []);

  const handleSave = () => {
    chrome.storage.sync.set({ affiliateTag: tag }, () => {
      alert('Affiliate tag saved!');
    });
  };

  return (
    <div className="p-4 w-60 font-sans">
      <h1 className="text-lg font-bold mb-2">Affiliate Enhancer</h1>
      <input
        className="border rounded px-2 py-1 w-full"
        type="text"
        value={tag}
        onChange={(e) => setTag(e.target.value)}
        placeholder="yourtag-20"
      />
      <button
        className="mt-3 bg-blue-500 text-white py-1 px-3 rounded w-full"
        onClick={handleSave}
      >
        Save Tag
      </button>
    </div>
  );
};

export default Popup;