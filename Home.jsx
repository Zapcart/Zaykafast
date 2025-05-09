
import React from 'react';

export default function Home() {
  return (
    <div className="bg-orange-50 min-h-screen font-sans">
      <header className="bg-orange-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">ZaykaFast</h1>
          <nav>
            <ul className="flex gap-4 text-sm">
              <li>Home</li>
              <li>Restaurants</li>
              <li>Login</li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="bg-orange-100 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Swad bhi, Speed bhi 🍽️</h2>
        <p className="text-lg mb-6">Order delicious food from your favorite restaurants!</p>
        <input
          type="text"
          placeholder="Search for food or restaurant..."
          className="px-4 py-2 w-2/3 max-w-xl rounded-full border-2 border-orange-400"
        />
      </section>

      <section className="py-10">
        <h3 className="text-2xl text-center font-semibold mb-6">Popular Categories</h3>
        <div className="flex justify-center gap-6 flex-wrap px-4">
          {['Pizza', 'Burger', 'Biryani', 'Desserts'].map((item) => (
            <div
              key={item}
              className="bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
            >
              <p className="text-lg font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-orange-600 text-white text-center py-4 mt-10">
        &copy; 2025 ZaykaFast – Swad bhi, Speed bhi
      </footer>
    </div>
  );
}
