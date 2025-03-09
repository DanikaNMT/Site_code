import React from 'react';
import { ProductData } from "@/models/Product.ts";

const ToyCardPreview: React.FC<{ product: ProductData }> = ({ product }) => {
    return (
        <div className="rounded-xl overflow-hidden shadow-lg bg-gradient-to-b from-yellow-200 to-pink-100 h-fit pb-3 transform hover:scale-105 transition-transform duration-300 ease-in-out items-center border-4 border-purple-300">
            {/* Image Section */}
            <div className="relative bg-white w-full rounded-t-xl">
                <img
                    className="w-full h-48 object-contain p-4 rounded-t-xl"
                    src={product.imgUrl}
                    alt={product.name}
                />
                <div className="absolute top-0 right-0 bg-red-500 text-white px-3 py-1 rounded-bl-lg font-bold shadow-md">
                    🎉 {product.amount} left!
                </div>
            </div>

            {/* Product Info Section */}
            <div className="px-6 py-4 w-full text-center">
                <h2 className="font-bold text-xl mb-2 text-purple-700 drop-shadow-md">{product.name}</h2>
                <p className="text-sm text-gray-600">✨ Grab your favorite toy today! ✨</p>
            </div>

            {/* Price and Button Section */}
            <div className="px-6 pt-4 pb-2 w-full flex justify-between items-center">
                <span className="inline-block bg-green-400 rounded-full px-4 py-2 mr-2 text-sm font-semibold text-white shadow-lg">
                    💵 ${product.price.toFixed(2)}
                </span>
                <button
                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded-full shadow-lg transition-transform transform hover:scale-110 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    🛒 Add to Cart!
                </button>
            </div>
        </div>
    );
};

export default ToyCardPreview;
