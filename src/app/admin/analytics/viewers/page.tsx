"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  LineChart,
  Line,
  Legend,
  PieChart,
  Pie,
  Cell,
} from "recharts"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

// Time period options
type TimePeriod = "daily" | "weekly" | "monthly"

// Mock data for viewer statistics
const viewerData = {
  daily: [
    { name: "Mon", viewers: 2400, uniqueVisitors: 1800, newVisitors: 600 },
    { name: "Tue", viewers: 1398, uniqueVisitors: 1100, newVisitors: 350 },
    { name: "Wed", viewers: 9800, uniqueVisitors: 7200, newVisitors: 2400 },
    { name: "Thu", viewers: 3908, uniqueVisitors: 2900, newVisitors: 980 },
    { name: "Fri", viewers: 4800, uniqueVisitors: 3600, newVisitors: 1200 },
    { name: "Sat", viewers: 3800, uniqueVisitors: 2850, newVisitors: 950 },
    { name: "Sun", viewers: 4300, uniqueVisitors: 3200, newVisitors: 1075 },
  ],
  weekly: [
    { name: "Week 1", viewers: 24000, uniqueVisitors: 18000, newVisitors: 6000 },
    { name: "Week 2", viewers: 21398, uniqueVisitors: 16000, newVisitors: 5350 },
    { name: "Week 3", viewers: 34800, uniqueVisitors: 26100, newVisitors: 8700 },
    { name: "Week 4", viewers: 39080, uniqueVisitors: 29300, newVisitors: 9770 },
  ],
  monthly: [
    { name: "Jan", viewers: 95000, uniqueVisitors: 71250, newVisitors: 23750 },
    { name: "Feb", viewers: 85000, uniqueVisitors: 63750, newVisitors: 21250 },
    { name: "Mar", viewers: 124000, uniqueVisitors: 93000, newVisitors: 31000 },
    { name: "Apr", viewers: 144000, uniqueVisitors: 108000, newVisitors: 36000 },
    { name: "May", viewers: 162000, uniqueVisitors: 121500, newVisitors: 40500 },
    { name: "Jun", viewers: 104000, uniqueVisitors: 78000, newVisitors: 26000 },
    { name: "Jul", viewers: 119000, uniqueVisitors: 89250, newVisitors: 29750 },
    { name: "Aug", viewers: 142000, uniqueVisitors: 106500, newVisitors: 35500 },
    { name: "Sep", viewers: 138000, uniqueVisitors: 103500, newVisitors: 34500 },
    { name: "Oct", viewers: 165000, uniqueVisitors: 123750, newVisitors: 41250 },
    { name: "Nov", viewers: 147000, uniqueVisitors: 110250, newVisitors: 36750 },
    { name: "Dec", viewers: 159000, uniqueVisitors: 119250, newVisitors: 39750 },
  ],
}

// Mock data for traffic sources
const trafficSourcesData = [
  { name: "Direct", value: 40 },
  { name: "Search", value: 30 },
  { name: "Social", value: 15 },
  { name: "Referral", value: 10 },
  { name: "Email", value: 5 },
]

// Mock data for device usage
const deviceUsageData = [
  { name: "Desktop", value: 55 },
  { name: "Mobile", value: 35 },
  { name: "Tablet", value: 10 },
]

// Colors for pie charts
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#8884d8"]

export default function ViewerAnalyticsPage() {
  // State for time period filters
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("daily")

  // Calculate total statistics
  const totalViewers = viewerData[timePeriod].reduce((sum, item) => sum + item.viewers, 0)
  const totalUniqueVisitors = viewerData[timePeriod].reduce((sum, item) => sum + item.uniqueVisitors, 0)
  const totalNewVisitors = viewerData[timePeriod].reduce((sum, item) => sum + item.newVisitors, 0)

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Viewer Analytics</h1>
        <Link href="/admin" className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
          Back to Dashboard
        </Link>
      </div>

      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="traffic-sources">Traffic Sources</TabsTrigger>
          <TabsTrigger value="device-usage">Device Usage</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Time Period Selector */}
          <div className="flex justify-end space-x-2 mt-4">
            <button
              onClick={() => setTimePeriod("daily")}
              className={`px-3 py-1 rounded ${
                timePeriod === "daily" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Daily
            </button>
            <button
              onClick={() => setTimePeriod("weekly")}
              className={`px-3 py-1 rounded ${
                timePeriod === "weekly" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Weekly
            </button>
            <button
              onClick={() => setTimePeriod("monthly")}
              className={`px-3 py-1 rounded ${
                timePeriod === "monthly" ? "bg-blue-600 text-white" : "bg-gray-200 hover:bg-gray-300"
              }`}
            >
              Monthly
            </button>
          </div>

          {/* Summary Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Viewers</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalViewers.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {timePeriod === "daily" ? "Past 7 days" : timePeriod === "weekly" ? "Past 4 weeks" : "Past year"}
                </p>
                <p className="text-sm text-green-500 mt-2">+12.5% from previous period</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Unique Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalUniqueVisitors.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {timePeriod === "daily" ? "Past 7 days" : timePeriod === "weekly" ? "Past 4 weeks" : "Past year"}
                </p>
                <p className="text-sm text-green-500 mt-2">+8.3% from previous period</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">New Visitors</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{totalNewVisitors.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  {timePeriod === "daily" ? "Past 7 days" : timePeriod === "weekly" ? "Past 4 weeks" : "Past year"}
                </p>
                <p className="text-sm text-green-500 mt-2">+15.2% from previous period</p>
              </CardContent>
            </Card>
          </div>

          {/* Viewer Trends Chart */}
          <Card>
            <CardHeader>
              <CardTitle>Viewer Trends</CardTitle>
              <CardDescription>
                {timePeriod === "daily"
                  ? "Daily viewer statistics for the past week"
                  : timePeriod === "weekly"
                    ? "Weekly viewer statistics for the past month"
                    : "Monthly viewer statistics for the past year"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={viewerData[timePeriod]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="viewers" stroke="#3b82f6" name="Total Viewers" strokeWidth={2} />
                    <Line
                      type="monotone"
                      dataKey="uniqueVisitors"
                      stroke="#10b981"
                      name="Unique Visitors"
                      strokeWidth={2}
                    />
                    <Line type="monotone" dataKey="newVisitors" stroke="#f59e0b" name="New Visitors" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="traffic-sources" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Traffic Sources</CardTitle>
              <CardDescription>Where your visitors are coming from</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="h-[300px] w-full md:w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={trafficSourcesData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {trafficSourcesData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-medium mb-4">Traffic Breakdown</h3>
                <div className="space-y-4">
                  {trafficSourcesData.map((source, index) => (
                    <div key={source.name} className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span>{source.name}</span>
                          <span className="font-medium">{source.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${source.value}%`,
                              backgroundColor: COLORS[index % COLORS.length],
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Referral Traffic</CardTitle>
              <CardDescription>Top websites sending traffic to your site</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-medium">Website</span>
                  <span className="font-medium">Visitors</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>google.com</span>
                  <span>15,234</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>facebook.com</span>
                  <span>8,942</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>twitter.com</span>
                  <span>6,253</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>linkedin.com</span>
                  <span>3,871</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>reddit.com</span>
                  <span>2,517</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="device-usage" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Device Usage</CardTitle>
              <CardDescription>What devices your visitors are using</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col md:flex-row items-center justify-center gap-8">
              <div className="h-[300px] w-full md:w-1/2">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={deviceUsageData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {deviceUsageData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip formatter={(value) => `${value}%`} />
                  </PieChart>
                </ResponsiveContainer>
              </div>

              <div className="w-full md:w-1/2">
                <h3 className="text-lg font-medium mb-4">Device Breakdown</h3>
                <div className="space-y-4">
                  {deviceUsageData.map((device, index) => (
                    <div key={device.name} className="flex items-center">
                      <div
                        className="w-4 h-4 rounded-full mr-2"
                        style={{ backgroundColor: COLORS[index % COLORS.length] }}
                      ></div>
                      <div className="flex-1">
                        <div className="flex justify-between">
                          <span>{device.name}</span>
                          <span className="font-medium">{device.value}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                          <div
                            className="h-2 rounded-full"
                            style={{
                              width: `${device.value}%`,
                              backgroundColor: COLORS[index % COLORS.length],
                            }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Browser Usage</CardTitle>
              <CardDescription>What browsers your visitors are using</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex justify-between items-center pb-2 border-b">
                  <span className="font-medium">Browser</span>
                  <span className="font-medium">Percentage</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Chrome</span>
                  <span>64.5%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Safari</span>
                  <span>15.2%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Firefox</span>
                  <span>8.7%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Edge</span>
                  <span>7.3%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span>Others</span>
                  <span>4.3%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}

