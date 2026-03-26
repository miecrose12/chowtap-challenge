import React from "react";
import { useSelector } from "react-redux";

const KPICardsSection = () => {
  const { overall } = useSelector((state) => state.inventory);

  const categories = overall?.categories ?? 14;
  const totalProducts = overall?.totalProducts ?? 868;
  const revenue = overall?.revenue ?? 25000;
  const topSelling = overall?.topSelling ?? 5;
  const topSellingCost = overall?.topSellingCost ?? 2500;
  const lowStocksOrdered = overall?.lowStocksOrdered ?? 12;
  const notInStock = overall?.notInStock ?? 2;

  return (
    <section className="w-full">
      <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
        <h2 className="text-xl font-semibold text-gray-800 mb-8">
          Overall Inventory
        </h2>
        <div className="flex flex-row items-stretch gap-0">
          <div className="flex-1 flex flex-col justify-start px-2 py-0">
            <span className="block font-inter font-semibold text-[16px]   text-blue-500 mb-5">
              Categories
            </span>

            <div className="flex flex-col justify-start">
              <span className="font-bold text-lg text-gray-500 leading-tight">
                {categories}
              </span>
              <span className="text-xs text-gray-400 mt-2">Last 7 days</span>
            </div>
          </div>

          <div className="w-px bg-gray-100 h-auto my-0"></div>

          <div className="flex-1 flex flex-col justify-start px-6 py-0">
            <span className="block font-inter font-semibold text-[16px]    text-orange-500 mb-5">
              Total Products
            </span>

            <div className="flex flex-col justify-start gap-0">
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col justify-start">
                  <span className="font-bold text-lg text-gray-500 leading-tight">
                    {totalProducts}
                  </span>
                  <span className="text-xs text-gray-400 mt-2">
                    Last 7 days
                  </span>
                </div>

                <div className="flex flex-col items-end justify-start">
                  <span className="font-bold text-lg text-gray-500 leading-tight">
                    ₦{revenue.toLocaleString("en-US")}
                  </span>
                  <span className="text-xs text-gray-400 mt-2">Revenue</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-px bg-gray-100 h-auto my-0"></div>

          <div className="flex-1 flex flex-col justify-start px-14 py-0">
            <span className="block font-inter font-semibold text-[16px]    text-purple-500 mb-5">
              Top Selling
            </span>

            <div className="flex flex-col justify-start gap-0">
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col justify-start">
                  <span className="font-bold text-lg text-gray-500 leading-tight">
                    {topSelling}
                  </span>
                  <span className="text-xs text-gray-400 mt-2">
                    Last 7 days
                  </span>
                </div>

                <div className="flex flex-col items-end justify-start">
                  <span className="font-bold text-lg text-gray-500 leading-tight">
                    ₦{topSellingCost.toLocaleString("en-US")}
                  </span>
                  <span className="text-xs text-gray-400 mt-2">Cost</span>
                </div>
              </div>
            </div>
          </div>

          <div className="w-px bg-gray-100 h-auto my-0"></div>

          <div className="flex-1 flex flex-col justify-start px-6 py-0">
            <span className="block font-inter font-semibold text-[16px]    text-red-500 mb-5">
              Low Stocks
            </span>

            <div className="flex flex-col justify-start gap-0">
              <div className="flex justify-between items-start gap-4">
                <div className="flex flex-col justify-start">
                  <span className="font-bold text-lg text-gray-500 leading-tight">
                    {lowStocksOrdered}
                  </span>
                  <span className="text-xs text-gray-400 mt-2">Ordered</span>
                </div>

                <div className="flex flex-col items-end justify-start">
                  <span className="font-bold text-lg text-gray-500 leading-tight">
                    {notInStock}
                  </span>
                  <span className="text-xs text-gray-400 mt-2">
                    Not in stock
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stat-label {
          font-weight: 600;
          font-size: 0.95rem;
          margin-bottom: 1.25rem;
          display: block;
        }
        
        .stat-value {
          font-weight: 700;
          font-size: 1.25rem;
          color: #374151;
          line-height: 1.2;
        }
        
        .sub-label {
          font-size: 0.85rem;
          color: #9ca3af;
          margin-top: 0.5rem;
        }
        
        /* Ensure all columns have same height container */
        .flex-row {
          align-items: stretch;
        }
        
        /* Precise spacing */
        .column-padding {
          padding: 0 1.5rem;
        }
      `}</style>
    </section>
  );
};

export default KPICardsSection;
