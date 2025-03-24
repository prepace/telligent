"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

// Mock data for the chart
const data = [
  { name: "Jan 1", views: 2400 },
  { name: "Jan 2", views: 1398 },
  { name: "Jan 3", views: 9800 },
  { name: "Jan 4", views: 3908 },
  { name: "Jan 5", views: 4800 },
  { name: "Jan 6", views: 3800 },
  { name: "Jan 7", views: 4300 },
  { name: "Jan 8", views: 5300 },
  { name: "Jan 9", views: 4800 },
  { name: "Jan 10", views: 6000 },
  { name: "Jan 11", views: 5600 },
  { name: "Jan 12", views: 7000 },
  { name: "Jan 13", views: 6500 },
  { name: "Jan 14", views: 5900 },
]

export function Overview() {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis dataKey="name" stroke="#888888" fontSize={12} tickLine={false} axisLine={false} />
        <YAxis stroke="#888888" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value}`} />
        <Tooltip />
        <Bar dataKey="views" fill="currentColor" radius={[4, 4, 0, 0]} className="fill-primary" />
      </BarChart>
    </ResponsiveContainer>
  )
}

