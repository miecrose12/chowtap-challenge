import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import ProtectedLayout from '../components/ProtectedLayout';
import toast from 'react-hot-toast';
import KPICardsSection from '../components/KpiCardsSection';

const ITEMS_PER_PAGE = 10;

const availabilityClass = (status) => {
  if (status === 'In-stock')     return 'text-sm font-semibold text-emerald-500';
  if (status === 'Out of stock') return 'text-sm font-semibold text-rose-500';
  if (status === 'Low stock')    return 'text-sm font-semibold text-amber-500';
  return 'text-sm font-semibold text-slate-500';
};

const Inventory = () => {
  const { products } = useSelector((state) => state.inventory);
  const [page, setPage] = useState(1);

  const totalPages        = Math.max(1, Math.ceil(products.length / ITEMS_PER_PAGE));
  const startIndex        = (page - 1) * ITEMS_PER_PAGE;
  const paginatedProducts = products.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handleAddProduct = () => toast.success('Add product feature coming soon');
  const handleFilter     = () => toast.success('Filter feature coming soon');
  const handleDownload   = () => toast.success('Download feature coming soon');

  return (
    <ProtectedLayout>
      <div className="p-8 space-y-8">


        <KPICardsSection />


        <section>
          <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">

    
            <div className="p-6 flex items-center justify-between">
              <h2 className="text-xl font-semibold text-slate-800">Products</h2>
              <div className="flex gap-3">
                <button
                  onClick={handleAddProduct}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition-colors"
                >
                  Add Product
                </button>
                <button
                  onClick={handleFilter}
                  className="border border-slate-200 text-slate-600 px-4 py-2 rounded-md font-medium text-sm flex items-center gap-2 hover:bg-slate-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                      d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
                    />
                  </svg>
                  Filters
                </button>
                <button
                  onClick={handleDownload}
                  className="border border-slate-200 text-slate-600 px-4 py-2 rounded-md font-medium text-sm hover:bg-slate-50 transition-colors"
                >
                  Download all
                </button>
              </div>
            </div>

 
            <div className="overflow-x-auto">
              <table className="w-full text-left" style={{ borderCollapse: 'collapse' }}>

     
                <thead>
                  <tr style={{ borderBottom: '1px solid #D0D3D9' }}>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Products
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Buying Price
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Quantity
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Threshold Value
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Expiry Date
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                      Availability
                    </th>
                  </tr>
                </thead>

        
                <tbody>
                  {paginatedProducts.map((product, index) => (
                    <tr 
                      key={product.id} 
                      className="hover:bg-slate-50/50"
                      style={{ borderBottom: index === paginatedProducts.length - 1 ? 'none' : '1px solid #D0D3D9' }}
                    >
                      <td className="px-6 py-4 text-sm font-medium text-slate-900">
                        {product.name}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        ₦{Number(product.buyingPrice).toLocaleString()}
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {product.quantity} Packets
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {product.threshold} Packets
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600">
                        {product.expiry}
                      </td>
                      <td className="px-6 py-4">
                        <span className={availabilityClass(product.availability)}>
                          {product.availability}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="px-6 py-4 flex items-center justify-between bg-white">
              <button
                onClick={() => setPage((p) => Math.max(1, p - 1))}
                disabled={page === 1}
                className="px-4 py-2 border border-slate-200 rounded text-sm text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <span className="text-sm text-slate-500 font-medium">
                Page {page} of {totalPages}
              </span>
              <button
                onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                disabled={page === totalPages}
                className="px-4 py-2 border border-slate-200 rounded text-sm text-slate-600 hover:bg-slate-50 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>

          </div>
        </section>

      </div>
    </ProtectedLayout>
  );
};

export default Inventory;