import React from 'react';
import { useSelector } from 'react-redux';
import ProtectedLayout from '../components/ProtectedLayout';
import SalesPurchaseChart from '../components/SalesPurchaseChart';
import OrderSummaryChart from '../components/OrderSummaryChart';
import TopSellingStock from '../components/TopSellingStock';
import LowStockProducts from '../components/LowStockProducts';
import dashboardIcon from '../assets/Sales.svg';
import revenue from '../assets/Revenue.svg';
import profit from '../assets/Profit.svg';
import cost from '../assets/Cost.svg';
import purchase from '../assets/Purchase.svg';
import cost1 from '../assets/Cost (1).svg';
import cancel from '../assets/Cancel.svg';
import quantity from '../assets/Quantity.svg';
import way from '../assets/On the way.svg';
import suppliers from '../assets/Suppliers (1).svg';
import categories from '../assets/Categories.svg';

// Map image names to imported assets
const imageMap = {
  dashboardIcon,
  revenue,
  profit,
  cost,
  purchase,
  cost1,
  cancel,
  quantity,
  way,
  suppliers,
  categories,
};

const OverviewCard = ({ label, value, image, color }) => {
  const isImage = typeof image === 'string';
  const imageAsset = isImage ? imageMap[image] : image;

  return (
    <div className="flex flex-col items-center px-3 pt-3.5 pb-2.5 border-r border-gray-100 last:border-r-0">
      <div className={`${color} p-2 rounded-lg mb-2 flex items-center justify-center`}>
        {imageAsset && typeof imageAsset === 'string' ? (
          <img src={imageAsset} alt="icon" className=" object-contain" />
        ) : (
          <span className="text-lg leading-none">{imageAsset}</span>
        )}
      </div>
      <div className="flex items-center justify-between w-full px-0.5 gap-1">
        <span className="text-sm font-inter text-[14px]  font-medium text-gray-600 whitespace-nowrap">
          {value}
        </span>
        <span className="text-xs text-gray-400 text-right leading-tight">{label}</span>
      </div>
    </div>
  );
};

const SummaryBox = ({ label, value, image, color }) => {
  const imageAsset = typeof image === 'string' ? imageMap[image] : image;

  return (
    <div className="flex flex-col items-center justify-center flex-1 py-4 px-2">
      <div className={`${color} p-1.5 rounded-lg mb-1`}>
        {typeof imageAsset === 'string' && imageAsset.length > 2 ? (
          <img src={imageAsset} alt="icon" className=" object-contain" />
        ) : (
          <span className="text-base leading-none">{imageAsset}</span>
        )}
      </div>
      <span className="text-sm font-inter text-[14px]  font-medium text-gray-600 whitespace-nowrap">
        {value}
      </span>
      <span className="text-sm font-inter text-[9px]  font-medium text-gray-800 whitespace-nowrap">
        {label}
      </span>
    </div>
  );
};

const Dashboard = () => {
  const { salesCards, purchaseCards, salesData, orderData } = useSelector(
    (state) => state.dashboard
  );

  return (
    <ProtectedLayout>
      <div className="min-h-screen bg-[#F0F1F3] px-4 sm:px-6 lg:px-8 py-6 space-y-4">
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm p-3">
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="font-inter  font-medium text-20px] leading-[30px] tracking-normal text-gray-700">
                Sales Overview
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
              {salesCards.map((c) => (
                <OverviewCard key={c.label} {...c} />
              ))}
            </div>
          </div>
          <div className="xl:col-span-1 bg-white rounded-2xl shadow-sm p-3">
            <h3 className="font-inter  font-medium text-[15px] leading-[30px] tracking-normal text-gray-700">
              Inventory Summary
            </h3>
            <div className="flex divide-x divide-gray-100">
              {[
                { label: 'Quantity in Hand', value: '868', image: 'quantity' },
                { label: 'To be received', value: '200', image: 'way' },
              ].map((c) => (
                <SummaryBox key={c.label} {...c} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm p-3">
            <h3 className="font-inter  font-medium text-[15px] leading-[30px] tracking-normal text-gray-700">
              Purchase Overview
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
              {purchaseCards.map((c) => (
                <OverviewCard key={c.label} {...c} />
              ))}
            </div>
          </div>

          <div className="xl:col-span-1 bg-white rounded-2xl shadow-sm p-3">
            <h3 className="font-inter  font-medium text-[15px] leading-[30px] tracking-normal text-gray-700">
              Product Summary
            </h3>
            <div className="flex divide-x divide-gray-100">
              {[
                { label: 'Number of Suppliers', value: '31', image: 'suppliers' },
                { label: 'Number of Categories', value: '21', image: 'categories' },
              ].map((c) => (
                <SummaryBox key={c.label} {...c} />
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2">
            <SalesPurchaseChart data={salesData} />
          </div>
          <div className="xl:col-span-1">
            <OrderSummaryChart data={orderData} />
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2">
            <TopSellingStock />
          </div>
          <div className="xl:col-span-1">
            <LowStockProducts />
          </div>
        </div>
      </div>
    </ProtectedLayout>
  );
};

export default Dashboard;