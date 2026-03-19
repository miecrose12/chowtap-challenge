import React from 'react';

const SummaryCards = () => {
  const inventorySummary = [
    { label: 'Quantity in Hand', value: '868', icon: '📦', color: 'bg-orange-50' },
    { label: 'To be received',   value: '200', icon: '🚚', color: 'bg-blue-50' },
  ];

  const productSummary = [
    { label: 'Number of Suppliers',  value: '31', icon: '👥', color: 'bg-blue-50' },
    { label: 'Number of Categories', value: '21', icon: '📂', color: 'bg-purple-50' },
  ];

  const renderItems = (items) => (
    <div className="flex divide-x divide-gray-100">
      {items.map((item, index) => (
        <div
          key={index}
          className="flex flex-col items-center justify-center flex-1 py-3 px-2"
        >
          {/* Icon centred at top */}
          <div className={`${item.color} p-2.5 rounded-xl mb-2`}>
            <span className="text-lg leading-none">{item.icon}</span>
          </div>
          {/* Value */}
          <span className="text-lg font-bold text-gray-800">{item.value}</span>
          {/* Label */}
          <span className="text-[10px] text-gray-400 mt-0.5 text-center leading-tight">
            {item.label}
          </span>
        </div>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-5">
      {/* Inventory Summary */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Inventory Summary</h3>
        {renderItems(inventorySummary)}
      </div>

      {/* Product Summary */}
      <div className="bg-white rounded-2xl shadow-sm p-4">
        <h3 className="text-sm font-semibold text-gray-700 mb-3">Product Summary</h3>
        {renderItems(productSummary)}
      </div>
    </div>
  );
};

export default SummaryCards;