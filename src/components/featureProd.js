import { useState } from 'react';

export default function FeaturedProduct() {
  const [color, setColor] = useState('black');
  console.log(color);

  const gradientColors = {
    black: 'black',
    blue: '#3b82f6',
    green: '#10b981',
    yellow: '#fbbf24',
  };

  const fromColor = gradientColors[color] || 'black';
  const viaColor = color === 'black' ? 'gray-900' : 'slate-50';

  return (
    <div
      className="relative min-h-96 w-full  flex flex-col lg:flex-row items-center justify-center"
      style={{
        background: `linear-gradient(to right, ${fromColor}, ${viaColor}, slate-50)`,
      }}>
      <div
        className={`flex-1 flex items-center py-11 rounded-lg justify-center text-center p-6 ${
          color !== 'black' ? `bg-${color}-600` : 'bg-black'
        } text-slate-50`}>
        <div>
          <h1 className="text-3xl font-bold mb-4">Hot Selling</h1>
          <p className="text-lg mb-6">
            Discover our top-selling products that are flying off the shelves.
            Don't miss out on these hot items!
          </p>
          <a
            href="/shop"
            className={`inline-block px-6 py-3 ${
              color !== 'black'
                ? `bg-slate-100 text-${color}-600`
                : 'bg-slate-100 text-black'
            } font-semibold rounded-full ${
              color !== 'black'
                ? `hover:bg-slate-200 text-${color}-600`
                : `bg-gray-200 text-slate-950`
            } transition-colors`}>
            Shop Now
          </a>
        </div>
      </div>

      <div className="flex-1 flex flex-col justify-center items-center p-6">
        <img
          src={`../img/${color === 'black' ? 'watch' : color}.png`}
          alt={`Watch in ${color} color`}
          className="object-cover h-64 w-auto rounded-lg "
        />
        <div className="flex gap-4 mt-4">
          {['black', 'blue', 'green', 'yellow'].map((colorOption) => (
            <span
              key={colorOption}
              onClick={() => setColor(colorOption)}
              className={`w-6 h-6 rounded-full cursor-pointer transition-transform transform hover:scale-110 ${
                colorOption === 'black' ? 'bg-black' : `bg-${colorOption}-600`
              }`}
              role="button"
              aria-label={`Select ${colorOption} color`}></span>
          ))}
        </div>
      </div>
    </div>
  );
}
