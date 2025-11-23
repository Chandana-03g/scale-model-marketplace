"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const timelineData = [
  { year: 2021, scale: 18, label: "1:18" },
  { year: 2022, scale: 24, label: "1:24" },
  { year: 2023, scale: 43, label: "1:43" },
];

// Custom tooltip box
const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white text-gray-900 px-4 py-3 rounded-xl shadow-lg border border-gray-200">
        <p className="font-semibold">Year: {payload[0].payload.year}</p>
        <p className="text-sm">Scale: {payload[0].payload.label}</p>
      </div>
    );
  }
  return null;
};

export default function VariantTimelineGraph() {
  return (
    <div className="mt-10 bg-white rounded-2xl shadow-md p-8 border border-gray-200">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">
        Variant Release Timeline
      </h2>

      <div className="w-full h-[350px]">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={timelineData}
            margin={{ top: 20, right: 30, left: 30, bottom: 30 }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb" // soft gray
              vertical={false}
            />

            <XAxis
              dataKey="year"
              tick={{ fill: "#4b5563", fontSize: 14 }}
              stroke="#9ca3af"
              padding={{ left: 20, right: 20 }}
            />

            <YAxis
              label={{
                value: "Units Released",
                angle: -90,
                position: "insideLeft",
                offset: 10,
                fill: "#4b5563",
                fontSize: 14,
              }}
              tick={{ fill: "#4b5563", fontSize: 13 }}
              stroke="#9ca3af"
              domain={[0, 60]}
              allowDecimals={false}
              width={50}
            />

            <Tooltip content={<CustomTooltip />} />

            <Line
              type="monotone"
              dataKey="scale"
              stroke="#111827"         // dark gray (premium)
              strokeWidth={3}
              dot={{ r: 7, fill: "#111827", strokeWidth: 2 }}
              activeDot={{ r: 9 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
