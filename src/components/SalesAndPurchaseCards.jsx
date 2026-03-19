import React from 'react';

const SalesAndPurchaseCards = ({ data }) => {
  const SalesOverviewCards = [
    { label: 'Sales',   value: '₦ 832',    icon: '📊', color: 'bg-blue-50' },
    { label: 'Revenue', value: '₦ 18,300', icon: '💰', color: 'bg-green-50' },
    { label: 'Profit',  value: '₦ 868',    icon: '📈', color: 'bg-purple-50' },
    { label: 'Cost',    value: '₦ 868',    icon: '💸', color: 'bg-orange-50' },
  ];

  const PurchaseOverviewCards = [
    { label: 'Purchase', value: '82',        icon: '📦', color: 'bg-blue-50' },
    { label: 'Cost',     value: '₦ 13,573',  icon: '💳', color: 'bg-green-50' },
    { label: 'Cancel',   value: '5',          icon: '❌', color: 'bg-red-50' },
    { label: 'Return',   value: '₦ 17,432',  icon: '↩️', color: 'bg-yellow-50' },
  ];

  const renderCards = (cards) => (
    <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
      {cards.map((card, index) => (
        <div key={index} className="flex flex-col items-center px-3 py-1">
          <div className={`${card.color} p-1 rounded-lg mb-1`}>
            <span className="text-base leading-none">{card.icon}</span>
          </div>
          <div className="flex flex-col items-center gap-0 w-full">
            <span className="text-[11px] font-bold text-gray-800 leading-tight text-center">
              {card.value}
            </span>
            <span className="text-[9px] text-gray-400 leading-tight text-center">
              {card.label}
            </span>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
      <div className="bg-white rounded-xl shadow-sm p-3">
        <h3 className="text-xs font-semibold text-gray-700 mb-1.5">Sales Overview</h3>
        {renderCards(SalesOverviewCards)}
      </div>
      <div className="bg-white rounded-xl shadow-sm p-3">
        <h3 className="text-xs font-semibold text-gray-700 mb-1.5">Purchase Overview</h3>
        {renderCards(PurchaseOverviewCards)}
      </div>
    </div>
  );
};

export default SalesAndPurchaseCards;