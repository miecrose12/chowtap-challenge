import React from 'react';
import { useSelector } from 'react-redux';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const CustomTooltip = ({ active, payload, label }) => {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      backgroundColor: '#FFFFFF',
      border: '1px solid #E5E5E5',
      borderRadius: 6,
      padding: '10px 14px',
      boxShadow: '0 2px 8px rgba(0,0,0,0.10)',
      fontFamily: 'Inter,sans-serif',
      fontSize: 12,
    }}>
      <p style={{ color: '#333', fontWeight: 600, marginBottom: 6 }}>{label}</p>
      {payload.map((p) => (
        <p key={p.dataKey} style={{
          color: p.dataKey === 'ordered' ? '#DBA362' : '#A8C5E0',
          margin: '2px 0',
        }}>
          {p.dataKey.charAt(0).toUpperCase() + p.dataKey.slice(1)}: {p.value.toLocaleString()}
        </p>
      ))}
    </div>
  );
};

const OrderSummaryChart = () => {
  const { data, yAxisTicks, yAxisDomain } = useSelector(
    (state) => state.dashboard.orderSummaryChart
  );

  return (
    <div className="bg-white rounded-2xl shadow-sm p-5 h-full flex flex-col w-full">

      {/* Header */}
      <div className="flex justify-between items-center mb-2">
        <h2 className="font-inter font-medium text-[20px] leading-[30px] tracking-normal text-gray-700">
          Order Summary
        </h2>
      </div>

      <div className="flex-1 min-h-0">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 10, right: 8, left: -4, bottom: 0 }}
          >
            <defs>
              <linearGradient id="fillOrdered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#DBA362" stopOpacity={0.18} />
                <stop offset="60%"  stopColor="#E8C98A" stopOpacity={0.10} />
                <stop offset="100%" stopColor="#F5E6CC" stopOpacity={0.06} />
              </linearGradient>

              <linearGradient id="fillDelivered" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%"   stopColor="#A8C5E0" stopOpacity={0} />
                <stop offset="100%" stopColor="#A8C5E0" stopOpacity={0} />
              </linearGradient>
            </defs>

            <CartesianGrid
              stroke="#E8E8E8"
              strokeDasharray="0 0"
              vertical={false}
              opacity={1}
            />

            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: '#999', fontFamily: 'Inter,sans-serif' }}
              height={28}
              dy={6}
              tickFormatter={(v) => v}
            />

            <YAxis
              domain={yAxisDomain}
              ticks={yAxisTicks}
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 11, fill: '#aaa', fontFamily: 'Inter,sans-serif' }}
              width={40}
              dx={-4}
              tickFormatter={(v) => v.toLocaleString()}
            />

            <Tooltip
              content={<CustomTooltip />}
              cursor={{ stroke: '#ddd', strokeWidth: 1 }}
            />
            <Legend wrapperStyle={{ display: 'none' }} />

            <Area
              type="natural"
              dataKey="ordered"
              stroke="#DBA362"
              strokeWidth={2}
              fill="url(#fillOrdered)"
              dot={false}
              activeDot={{ r: 4, fill: '#DBA362', stroke: '#fff', strokeWidth: 2 }}
              isAnimationActive
              animationDuration={900}
            />

            <Area
              type="natural"
              dataKey="delivered"
              stroke="#A8C5E0"
              strokeWidth={2}
              fill="url(#fillDelivered)"
              dot={false}
              activeDot={{ r: 4, fill: '#A8C5E0', stroke: '#fff', strokeWidth: 2 }}
              isAnimationActive
              animationDuration={900}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="flex items-center justify-center gap-6 mt-2">
        <span
          className="flex items-center gap-1.5"
          style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#555' }}
        >
          <span style={{
            display: 'inline-block',
            width: 9,
            height: 9,
            borderRadius: '50%',
            background: '#DBA362',
            flexShrink: 0,
          }} />
          Ordered
        </span>
        <span
          className="flex items-center gap-1.5"
          style={{ fontFamily: 'Inter,sans-serif', fontSize: 12, color: '#555' }}
        >
          <span style={{
            display: 'inline-block',
            width: 9,
            height: 9,
            borderRadius: '50%',
            background: '#A8C5E0',
            flexShrink: 0,
          }} />
          Delivered
        </span>
      </div>
    </div>
  );
};

export default OrderSummaryChart;