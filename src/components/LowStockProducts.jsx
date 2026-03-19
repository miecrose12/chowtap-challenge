import React from 'react';
import { useSelector } from 'react-redux';
import categories from '../assets/Rectangle 71.svg';

const LowStockProducts = () => {
  const { lowStockProducts } = useSelector((state) => state.dashboard);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-inter  font-medium text-20px] leading-[30px] tracking-normal text-gray-700">Low Quantity Stock</h2>
        <a href="#" className="text-blue-500 text-xs font-medium hover:underline">
          See All
        </a>
      </div>

      <div className="space-y-3">
        {lowStockProducts.map((product, index) => (
          <div
            key={index}
            className="flex items-center gap-3 py-2 border-b border-gray-50 last:border-b-0"
          >
            <div className="w-10 h-10 rounded-lg flex items-center justify-center text-lg flex-shrink-0 overflow-hidden">
             
                <img
                  src={categories}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
            
            </div>

            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-gray-700 truncate">{product.name}</p>
              <p className="text-xs text-gray-400 mt-0.5">
                Remaining Quantity: {product.quantity}
              </p>
            </div>

           <span className="px-3 py-1 bg-red-50 text-red-400 text-[10px] font-bold rounded-full uppercase tracking-wide flex-shrink-0">
  Low
</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LowStockProducts;