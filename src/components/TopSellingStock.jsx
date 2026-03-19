import React from 'react';
import { useSelector } from 'react-redux';

const TopSellingStock = () => {
  const { topSellingProducts } = useSelector((state) => state.dashboard);

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <h2 className="font-inter  font-medium text-20px] leading-[30px] tracking-normal text-gray-700">Top Selling Stock</h2>
        <a href="#" className="text-blue-500 text-xs font-medium hover:underline">
          See All
        </a>
      </div>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b border-gray-200">
            <th className="text-left py-3 px-6 text-[14px] font-inter font-medium text-gray-600">Name</th>
            <th className="text-left py-3 px-6 text-[14px] font-inter font-medium text-gray-600">Sold Quantity</th>
            <th className="text-left py-3 px-6 text-[14px] font-inter font-medium text-gray-600">Remaining Quantity</th>
            <th className="text-left py-3 px-6 text-[14px] font-inter font-medium text-gray-600">Price</th>
          </tr>
        </thead>
        <tbody>
          {topSellingProducts.map((product, index) => {
            const isLast = index === topSellingProducts.length - 1;
            return (
              <tr
                key={index}
                className={`${!isLast ? 'border-b border-gray-100' : ''}`}
              >
                <td className="text-left py-3 px-6 text-[14px] font-inter font-medium text-gray-600">{product.name}</td>
                <td className="text-left py-3 px-6 text-[14px] font-inter font-medium text-gray-600">{product.sold}</td>
                <td className="text-left py-3 px-6 text-[14px] font-inter font-medium text-gray-600">{product.remaining}</td>
                <td className="text-left py-3 px-6 text-[14px] font-inter font-medium text-gray-600">
                  ₦{product.price}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default TopSellingStock;