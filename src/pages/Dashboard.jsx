import React from 'react';
import { useSelector } from 'react-redux';
import ProtectedLayout from '../components/ProtectedLayout';
import SalesPurchaseChart from '../components/SalesPurchaseChart';
import OrderSummaryChart from '../components/OrderSummaryChart';
import TopSellingStock from '../components/TopSellingStock';
import LowStockProducts from '../components/LowStockProducts';
import dashboardIcon from '../assets/Sales.svg';
import revenue from '../assets/Revenue.svg';
import profit from '../assets/profit.svg';
import cost from '../assets/cost.svg';
import purchase from '../assets/purchase.svg';
import cost1 from '../assets/Cost (1).svg';
import cancel from '../assets/Cancel.svg';
import quantity from '../assets/Quantity.svg';
import way from '../assets/on the way.svg';
import suppliers from '../assets/suppliers (1).svg';
import categories from '../assets/categories.svg';


/*
  Row layout (all rows share the same full width):

  ROW 1 ── Sales Overview (left, 2/3) │ Inventory Summary (right, 1/3)
  ROW 2 ── Purchase Overview (left, 2/3) │ Product Summary (right, 1/3)
  ROW 3 ── Sales & Purchase chart (2/3) │ Order Summary chart (1/3)
  ROW 4 ── Top Selling Stock (2/3) │ Low Quantity Stock (1/3)

  All rows use the same 3-column grid so every column edge aligns perfectly.
*/

/* ── Sales Overview inline (same data logic as SalesAndPurchaseCards) ── */
const salesCards = [
  { label: 'Sales',   value: '₦ 832',    image: dashboardIcon,  },
  { label: 'Revenue', value: '₦ 18,300', image: cancel, },
  { label: 'Profit',  value: '₦ 868',    image: profit, },
  { label: 'Cost',    value: '₦ 868',    image: cost, },
];

const purchaseCards = [
  { label: 'Purchase', value: '82',        image: purchase,  },
  { label: 'Cost',     value: '₦ 13,573',  image: cost1, },
  { label: 'Cancel',   value: '5',         image: cancel, },
  { label: 'Return',   value: '₦ 17,432',  image: profit, },
];

/* 
  OVERVIEW CARD - OPTIMIZED SPACING
  - pt-3.5: adds breathing room from top (14px)
  - pb-2.5: compact bottom (10px)
  - Icon size: text-lg (larger icons)
  - Icon container: p-1.5 (better padding)
  - Icon gap: mb-2 (more space between icon and text)
  - Value: text-sm (14px - LARGER)
  - Label: text-xs (12px - LARGER)
*/
const OverviewCard = ({ label, value, image, color }) => {
  const isImage = typeof image === 'string';
  
  return (
    <div className="flex flex-col items-center px-3 pt-3.5 pb-2.5 border-r border-gray-100 last:border-r-0">
      <div className={`${color} p-2 rounded-lg mb-2 flex items-center justify-center`}>
        {isImage ? (
          <img src={image} alt="icon" className=" object-contain" />
        ) : (
          <span className="text-lg leading-none">{image}</span>
        )}
      </div>
      <div className="flex items-center justify-between w-full px-0.5 gap-1">
        <span className="text-sm font-inter text-[14px]  font-medium text-gray-600 whitespace-nowrap">{value}</span>
        <span className="text-xs text-gray-400 text-right leading-tight">{label}</span>
      </div>
    </div>
  );
};

/*
  COMPACT SUMMARY BOX
  - Reduced vertical padding: py-2 instead of py-3
  - Smaller icon: text-base instead of lg
  - Icon container: p-1.5 instead of p-2.5
  - Icon gap: mb-1 instead of mb-2
  - Text sizes: value text-sm, label text-[9px]
*/
const SummaryBox = ({ label, value, image, color }) => (
  <div className="flex flex-col items-center justify-center flex-1 py-4 px-2">
    <div className={`${color} p-1.5 rounded-lg mb-1`}>
      {typeof image === 'string' && image.length > 2 ? (
        <img src={image} alt="icon" className=" object-contain" />
      ) : (
        <span className="text-base leading-none">{image}</span>
      )}
    </div>
    <span className="text-sm font-inter text-[14px]  font-medium text-gray-600 whitespace-nowrap">{value}</span>
    <span className="text-sm font-inter text-[9px]  font-medium text-gray-800 whitespace-nowrap">{label}</span>
  </div>
);

const Dashboard = () => {
  const { salesData, orderData } = useSelector((state) => state.dashboard);

  return (
    <ProtectedLayout>
      <div className="min-h-screen bg-[#F0F1F3] px-4 sm:px-6 lg:px-8 py-6 space-y-4">

        {/*
          ── ROW 1 ──
          LEFT (col-span-2): Sales Overview — 4 metric tiles
          RIGHT (col-span-1): Inventory Summary — 2 metric tiles
        */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Sales Overview — takes 2/3 width */}
          <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm p-3">
            <div className="flex items-center gap-2 mb-1.5">
              <h3 className="font-inter  font-medium text-20px] leading-[30px] tracking-normal text-gray-700">
  Sales Overview
</h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
              {salesCards.map((c) => <OverviewCard key={c.label} {...c} />)}
            </div>
          </div>

          {/* Inventory Summary — takes 1/3 width */}
          <div className="xl:col-span-1 bg-white rounded-2xl shadow-sm p-3">
            <h3 className="font-inter  font-medium text-[15px] leading-[30px] tracking-normal text-gray-700">Inventory Summary</h3>
            <div className="flex divide-x divide-gray-100">
              {[
                { label: 'Quantity in Hand', value: '868', image: quantity, },
                { label: 'To be received',   value: '200', image: way,   },
              ].map((c) => <SummaryBox key={c.label} {...c} />)}
            </div>
          </div>
        </div>

        {/*
          ── ROW 2 ──
          LEFT (col-span-2): Purchase Overview — 4 metric tiles
          RIGHT (col-span-1): Product Summary — 2 metric tiles
        */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          {/* Purchase Overview — takes 2/3 width */}
          <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm p-3">
            <h3 className="font-inter  font-medium text-[15px] leading-[30px] tracking-normal text-gray-700">Purchase Overview</h3>
            <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-gray-100">
              {purchaseCards.map((c) => <OverviewCard key={c.label} {...c} />)}
            </div>
          </div>

          {/* Product Summary — takes 1/3 width */}
          <div className="xl:col-span-1 bg-white rounded-2xl shadow-sm p-3">
            <h3 className="font-inter  font-medium text-[15px] leading-[30px] tracking-normal text-gray-700">Product Summary</h3>
            <div className="flex divide-x divide-gray-100">
              {[
                { label: 'Number of Suppliers',  value: '31', image: suppliers, },
                { label: 'Number of Categories', value: '21', image: categories, },
              ].map((c) => <SummaryBox key={c.label} {...c} />)}
            </div>
          </div>
        </div>

        {/*
          ── ROW 3 ──
          LEFT (col-span-2): Sales & Purchase bar chart
          RIGHT (col-span-1): Order Summary area chart
        */}
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-4">
          <div className="xl:col-span-2">
            <SalesPurchaseChart data={salesData} />
          </div>
          <div className="xl:col-span-1">
            <OrderSummaryChart data={orderData} />
          </div>
        </div>

        {/*
          ── ROW 4 ──
          LEFT (col-span-2): Top Selling Stock table
          RIGHT (col-span-1): Low Quantity Stock list
        */}
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