import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
} from 'recharts';
import categories from '../assets/Calendar.svg';


const GradientDefs = () => (
  <svg width={0} height={0} style={{ position: 'absolute', overflow: 'hidden' }}>
    <defs>

      <linearGradient id="gradPurchase" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"      stopColor="#817AF3" />
        <stop offset="47.92%" stopColor="#74B0FA" />
        <stop offset="100%"   stopColor="#79D0F1" />
      </linearGradient>

      <linearGradient id="gradSales" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%"      stopColor="#46A46C" />
        <stop offset="47.92%" stopColor="#51CC5D" />
        <stop offset="100%"   stopColor="#57DA65" />
      </linearGradient>
    </defs>
  </svg>
);

const CleanBar = ({ x, y, width, height, gradFill }) => {
  if (!height || height <= 0 || !width || width <= 0) return null;

  const r = Math.min(width / 2, 6);

  const path = [
    `M${x},${y + r}`,
    `Q${x},${y} ${x + r},${y}`,
    `L${x + width - r},${y}`,
    `Q${x + width},${y} ${x + width},${y + r}`,
    `L${x + width},${y + height}`,
    `L${x},${y + height}`,
    'Z',
  ].join(' ');

  return <path d={path} fill={gradFill} />;
};

const PurchaseBar = (props) => <CleanBar {...props} gradFill="url(#gradPurchase)" />;
const SalesBar    = (props) => <CleanBar {...props} gradFill="url(#gradSales)"    />;

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: '#fff',
      border: '1px solid #e5e7eb',
      borderRadius: 6,
      padding: '10px 14px',
      fontSize: 12,
      fontFamily: 'Inter,sans-serif',
      boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
    }}>
      <p style={{ fontWeight: 600, color: '#374151', marginBottom: 4 }}>{label}</p>
      {payload.map((p) => (
        <p
          key={p.dataKey}
          style={{ color: p.dataKey === 'purchase' ? '#817AF3' : '#46A46C', margin: '2px 0' }}
        >
          {p.dataKey.charAt(0).toUpperCase() + p.dataKey.slice(1)}: ₦{p.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

const CHART_DATA = [
  { month: 'Jan', purchase: 54000, sales: 48000 },
  { month: 'Feb', purchase: 57000, sales: 46000 },
  { month: 'Mar', purchase: 44000, sales: 52000 },
  { month: 'Apr', purchase: 36000, sales: 43000 },
  { month: 'May', purchase: 43000, sales: 45000 },
  { month: 'Jun', purchase: 27000, sales: 41000 },
  { month: 'Jul', purchase: 54000, sales: 49000 },
  { month: 'Aug', purchase: 44000, sales: 42000 },
  { month: 'Sep', purchase: 44000, sales: 43000 },
];

const Y_TICKS = [10000, 20000, 30000, 40000, 50000, 60000];
/* Full numbers with comma separator matching the screenshot: 10,000  20,000 … */
const fmtY = (v) => v.toLocaleString();

const SalesPurchaseChart = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl shadow-sm p-5">
      <GradientDefs />

      <div className="flex justify-between items-center mb-4">
        <h2 className="font-inter  font-medium text-20px] leading-[30px] tracking-normal text-gray-700">Sales &amp; Purchase</h2>
        
          <div className="flex items-center gap-1.5 border border-gray-200 px-3 py-1.5 rounded-lg text-xs text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer">
    <img src={categories} alt="Calendar Icon" className="w-4 h-4" />
    <span>Weekly</span>
  </div>
      </div>

      <ResponsiveContainer width="100%" height={265}>
        <BarChart
          data={CHART_DATA}
          margin={{
            top: 10,
            right: 8,
            left: 20,   
            bottom: 0,
          }}
        
          barCategoryGap="20%"
        
          barGap={0}
        >
          <CartesianGrid
            stroke="#D0D3D9"
            strokeDasharray="0 0"
            vertical={false}
            opacity={0.6}
          />

          <XAxis
            dataKey="month"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#9ca3af', fontFamily: 'Inter,sans-serif' }}
            dy={6}
          />
          <YAxis
            domain={[0, 60000]}
            ticks={Y_TICKS}
            tickFormatter={fmtY}
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: '#9ca3af', fontFamily: 'Inter,sans-serif' }}
            dx={-2}
            width={52}
          />

          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'rgba(0,0,0,0.025)' }} />
          <Legend wrapperStyle={{ display: 'none' }} />

          <Bar dataKey="purchase" shape={<PurchaseBar />} maxBarSize={12} isAnimationActive />
          <Bar dataKey="sales"    shape={<SalesBar />}    maxBarSize={12} isAnimationActive />
        </BarChart>
      </ResponsiveContainer>
      
      <div className="flex items-center gap-5 mt-2 pl-16">
        <span className="flex items-center gap-1.5 text-xs text-gray-500" style={{ fontFamily: 'Inter,sans-serif' }}>
          <span style={{
            display: 'inline-block', width: 10, height: 10, borderRadius: '50%',
            background: 'linear-gradient(180deg,#817AF3 0%,#79D0F1 100%)', flexShrink: 0,
          }} />
          Purchase
        </span>
        <span className="flex items-center gap-1.5 text-xs text-gray-500" style={{ fontFamily: 'Inter,sans-serif' }}>
          <span style={{
            display: 'inline-block', width: 10, height: 10, borderRadius: '50%',
            background: 'linear-gradient(180deg,#46A46C 0%,#57DA65 100%)', flexShrink: 0,
          }} />
          Sales
        </span>
      </div>
    </div>
  );
};

export default SalesPurchaseChart;