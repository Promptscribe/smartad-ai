'use client';

import { useState } from 'react';

export default function Home() {
  const [product, setProduct] = useState('');
  const [description, setDescription] = useState('');
  const [platform, setPlatform] = useState('Facebook');
  const [adCopy, setAdCopy] = useState('');

  const handleGenerate = async () => {
    // ✨ Placeholder response – will be replaced with real API call
    setAdCopy(`🔥 Introducing ${product} – ${description}. Perfect for your next ${platform} campaign!`);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 px-4 py-10 text-center">
      <h1 className="text-5xl font-bold text-gray-900 mb-6">SmartAd AI</h1>
      <p className="text-lg text-gray-600 mb-10 max-w-xl">
        Generate high-performing ads in seconds. Just enter your product details.
      </p>

      <div className="w-full max-w-xl space-y-4 text-left">
        <input
          type="text"
          placeholder="Product Name"
          value={product}
          onChange={(e) => setProduct(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        />
        <textarea
          placeholder="Short Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
          rows={3}
        />
        <select
          value={platform}
          onChange={(e) => setPlatform(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg"
        >
          <option value="Facebook">Facebook</option>
          <option value="Google">Google</option>
          <option value="Twitter">Twitter</option>
          <option value="LinkedIn">LinkedIn</option>
        </select>
        <button
          onClick={handleGenerate}
          className="w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition"
        >
          Generate My Ad
        </button>
      </div>

      {adCopy && (
        <div className="mt-10 max-w-xl bg-white shadow-md rounded-xl p-6 border text-left">
          <h2 className="text-xl font-semibold mb-2">Generated Ad Copy:</h2>
          <p>{adCopy}</p>
        </div>
      )}
    </main>
  );
}
