"use client"

import { useState } from "react"
import Link from "next/link"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
  AreaChart,
  Area,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  ComposedChart,
} from "recharts"
import { Globe, Clock, BookOpen } from "lucide-react"

// Time period options
type TimePeriod = "daily" | "weekly" | "monthly"

// Mock data for user statistics
const userData = {
  daily: [
    { name: "Mon", active: 1200, newSignups: 45, returning: 950 },
    { name: "Tue", active: 1300, newSignups: 52, returning: 1050 },
    { name: "Wed", active: 1450, newSignups: 78, returning: 1150 },
    { name: "Thu", active: 1600, newSignups: 63, returning: 1250 },
    { name: "Fri", active: 1550, newSignups: 59, returning: 1200 },
    { name: "Sat", active: 1100, newSignups: 48, returning: 850 },
    { name: "Sun", active: 950, newSignups: 42, returning: 750 },
  ],
  weekly: [
    { name: "Week 1", active: 8500, newSignups: 320, returning: 6800 },
    { name: "Week 2", active: 9200, newSignups: 380, returning: 7400 },
    { name: "Week 3", active: 10100, newSignups: 425, returning: 8100 },
    { name: "Week 4", active: 11000, newSignups: 390, returning: 8800 },
  ],
  monthly: [
    { name: "Jan", active: 32000, newSignups: 1200, returning: 25600 },
    { name: "Feb", active: 34000, newSignups: 1350, returning: 27200 },
    { name: "Mar", active: 38000, newSignups: 1500, returning: 30400 },
    { name: "Apr", active: 42000, newSignups: 1650, returning: 33600 },
    { name: "May", active: 45000, newSignups: 1800, returning: 36000 },
    { name: "Jun", active: 43000, newSignups: 1700, returning: 34400 },
    { name: "Jul", active: 41000, newSignups: 1600, returning: 32800 },
    { name: "Aug", active: 44000, newSignups: 1750, returning: 35200 },
    { name: "Sep", active: 47000, newSignups: 1900, returning: 37600 },
    { name: "Oct", active: 51000, newSignups: 2100, returning: 40800 },
    { name: "Nov", active: 53000, newSignups: 2200, returning: 42400 },
    { name: "Dec", active: 55000, newSignups: 2300, returning: 44000 },
  ],
}

// Mock data for user engagement
const engagementData = [
  { name: "0-5 min", users: 35 },
  { name: "5-10 min", users: 25 },
  { name: "10-20 min", users: 20 },
  { name: "20-30 min", users: 10 },
  { name: "30+ min", users: 10 },
]

// Mock data for user retention
const retentionData = [
  { name: "Day 1", retention: 100 },
  { name: "Day 3", retention: 70 },
  { name: "Day 7", retention: 58 },
  { name: "Day 14", retention: 45 },
  { name: "Day 30", retention: 32 },
  { name: "Day 60", retention: 25 },
  { name: "Day 90", retention: 20 },
]

// Add mock data for geographic distribution
const geoDistributionData = [
  { country: "United States", users: 42500, percentage: 35 },
  { country: "United Kingdom", users: 18200, percentage: 15 },
  { country: "Canada", users: 12100, percentage: 10 },
  { country: "Australia", users: 9700, percentage: 8 },
  { country: "Germany", users: 8500, percentage: 7 },
  { country: "France", users: 7300, percentage: 6 },
  { country: "India", users: 6100, percentage: 5 },
  { country: "Brazil", users: 4800, percentage: 4 },
  { country: "Japan", users: 3600, percentage: 3 },
  { country: "Other", users: 8500, percentage: 7 },
]

// Add mock data for session duration
const sessionDurationData = [
  { duration: "0-1 min", users: 15 },
  { duration: "1-3 min", users: 25 },
  { duration: "3-5 min", users: 20 },
  { duration: "5-10 min", users: 18 },
  { duration: "10-15 min", users: 12 },
  { duration: "15+ min", users: 10 },
]

// Add mock data for content consumption
const contentConsumptionData = [
  { category: "Politics", articles: 35, avgTimeSpent: 4.2 },
  { category: "Technology", articles: 28, avgTimeSpent: 5.1 },
  { category: "Entertainment", articles: 22, avgTimeSpent: 3.5 },
  { category: "Sports", articles: 18, avgTimeSpent: 3.8 },
  { category: "Health", articles: 15, avgTimeSpent: 4.7 },
  { category: "Finance", articles: 12, avgTimeSpent: 5.3 },
  { category: "Science", articles: 10, avgTimeSpent: 4.9 },
]

// Add mock data for user behavior metrics
const userBehaviorData = {
  daily: [
    { name: "Mon", pageViews: 3.2, bounceRate: 42, conversionRate: 2.1 },
    { name: "Tue", pageViews: 3.5, bounceRate: 40, conversionRate: 2.3 },
    { name: "Wed", pageViews: 3.8, bounceRate: 38, conversionRate: 2.5 },
    { name: "Thu", pageViews: 4.1, bounceRate: 36, conversionRate: 2.7 },
    { name: "Fri", pageViews: 3.9, bounceRate: 37, conversionRate: 2.6 },
    { name: "Sat", pageViews: 3.3, bounceRate: 41, conversionRate: 2.2 },
    { name: "Sun", pageViews: 3.0, bounceRate: 44, conversionRate: 2.0 },
  ],
  weekly: [
    { name: "Week 1", pageViews: 3.4, bounceRate: 41, conversionRate: 2.2 },
    { name: "Week 2", pageViews: 3.6, bounceRate: 39, conversionRate: 2.4 },
    { name: "Week 3", pageViews: 3.9, bounceRate: 37, conversionRate: 2.6 },
    { name: "Week 4", pageViews: 4.2, bounceRate: 35, conversionRate: 2.8 },
  ],
  monthly: [
    { name: "Jan", pageViews: 3.3, bounceRate: 42, conversionRate: 2.1 },
    { name: "Feb", pageViews: 3.4, bounceRate: 41, conversionRate: 2.2 },
    { name: "Mar", pageViews: 3.6, bounceRate: 40, conversionRate: 2.3 },
    { name: "Apr", pageViews: 3.7, bounceRate: 39, conversionRate: 2.4 },
    { name: "May", pageViews: 3.9, bounceRate: 38, conversionRate: 2.5 },
    { name: "Jun", pageViews: 4.0, bounceRate: 37, conversionRate: 2.6 },
    { name: "Jul", pageViews: 3.8, bounceRate: 38, conversionRate: 2.5 },
    { name: "Aug", pageViews: 3.7, bounceRate: 39, conversionRate: 2.4 },
    { name: "Sep", pageViews: 3.9, bounceRate: 38, conversionRate: 2.5 },
    { name: "Oct", pageViews: 4.1, bounceRate: 36, conversionRate: 2.7 },
    { name: "Nov", pageViews: 4.2, bounceRate: 35, conversionRate: 2.8 },
    { name: "Dec", pageViews: 4.0, bounceRate: 37, conversionRate: 2.6 },
  ],
}

// Colors for pie charts
const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
  "#ffc658",
  "#8dd1e1",
  "#a4de6c",
  "#d0ed57",
]

export default function UserAnalyticsPage() {
  // State for time period filters
  const [timePeriod, setTimePeriod] = useState<TimePeriod>("daily")
  const [activeTab, setActiveTab] = useState("overview")

  // Calculate total statistics
  const totalActiveUsers =
    userData[timePeriod].reduce((sum, item) => sum + item.active, 0) / userData[timePeriod].length
  const totalNewSignups = userData[timePeriod].reduce((sum, item) => sum + item.newSignups, 0)
  const totalReturningUsers =
    userData[timePeriod].reduce((sum, item) => sum + item.returning, 0) / userData[timePeriod].length

  // Calculate average time spent
  const avgTimeSpent = 4.2 // In minutes, mock value

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">User Analytics</h1>
        <Link href="/admin" className="px-4 py-2 border border-gray-300 rounded hover:bg-gray-100 transition-colors">
          Back to Dashboard
        </Link>
      </div>

      {/* Custom Tabs */}
      <div className="w-full">
        <div className="grid w-full grid-cols-5 bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setActiveTab("overview")}
            className={`py-2 px-4 rounded-md transition-colors ${
              activeTab === "overview" ? "bg-white shadow" : "hover:bg-gray-200"
            }`}
          >
            Overview
          </button>
          <button
            onClick={() => setActiveTab("engagement")}
            className={`py-2 px-4 rounded-md transition-colors ${
              activeTab === "engagement" ? "bg-white shadow" : "hover:bg-gray-200"
            }`}
          >
            Engagement
          </button>
          <button
            onClick={() => setActiveTab("geography")}
            className={`py-2 px-4 rounded-md transition-colors ${
              activeTab === "geography" ? "bg-white shadow" : "hover:bg-gray-200"
            }`}
          >
            Geography
          </button>
          <button
            onClick={() => setActiveTab("content")}
            className={`py-2 px-4 rounded-md transition-colors ${
              activeTab === "content" ? "bg-white shadow" : "hover:bg-gray-200"
            }`}
          >
            Content
          </button>
          <button
            onClick={() => setActiveTab("retention")}
            className={`py-2 px-4 rounded-md transition-colors ${
              activeTab === "retention" ? "bg-white shadow" : "hover:bg-gray-200"
            }`}
          >
            Retention
          </button>
        </div>

        {/* Overview Tab Content */}
        <div className={`space-y-6 mt-6 ${activeTab !== "overview" ? "hidden" : ""}`}>
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
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">Active Users</h3>
              </div>
              <div>
                <div className="text-2xl font-bold">{Math.round(totalActiveUsers).toLocaleString()}</div>
                <p className="text-xs text-gray-500">
                  {timePeriod === "daily"
                    ? "Daily average"
                    : timePeriod === "weekly"
                      ? "Weekly average"
                      : "Monthly average"}
                </p>
                <p className="text-sm text-green-500 mt-2">+8.3% from previous period</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">New Signups</h3>
              </div>
              <div>
                <div className="text-2xl font-bold">{totalNewSignups.toLocaleString()}</div>
                <p className="text-xs text-gray-500">
                  {timePeriod === "daily" ? "Past 7 days" : timePeriod === "weekly" ? "Past 4 weeks" : "Past year"}
                </p>
                <p className="text-sm text-green-500 mt-2">+15.2% from previous period</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">Returning Users</h3>
              </div>
              <div>
                <div className="text-2xl font-bold">{Math.round(totalReturningUsers).toLocaleString()}</div>
                <p className="text-xs text-gray-500">
                  {timePeriod === "daily"
                    ? "Daily average"
                    : timePeriod === "weekly"
                      ? "Weekly average"
                      : "Monthly average"}
                </p>
                <p className="text-sm text-green-500 mt-2">+6.7% from previous period</p>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="pb-2">
                <h3 className="text-sm font-medium text-gray-500">Avg. Time on Site</h3>
              </div>
              <div>
                <div className="text-2xl font-bold">{avgTimeSpent} min</div>
                <p className="text-xs text-gray-500">Per session</p>
                <p className="text-sm text-green-500 mt-2">+0.3 min from previous period</p>
              </div>
            </div>
          </div>

          {/* User Trends Chart */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div>
              <h3 className="text-lg font-medium">User Trends</h3>
              <p className="text-sm text-gray-500">
                {timePeriod === "daily"
                  ? "Daily user statistics for the past week"
                  : timePeriod === "weekly"
                    ? "Weekly user statistics for the past month"
                    : "Monthly user statistics for the past year"}
              </p>
            </div>
            <div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={userData[timePeriod]} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="active" stroke="#3b82f6" name="Active Users" strokeWidth={2} />
                    <Line type="monotone" dataKey="newSignups" stroke="#10b981" name="New Signups" strokeWidth={2} />
                    <Line type="monotone" dataKey="returning" stroke="#f59e0b" name="Returning Users" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* User Behavior Metrics */}
          <div className="bg-white p-6 rounded-lg shadow">
            <div>
              <h3 className="text-lg font-medium">User Behavior Metrics</h3>
              <p className="text-sm text-gray-500">Key performance indicators for user engagement</p>
            </div>
            <div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <ComposedChart
                    data={userBehaviorData[timePeriod]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="pageViews" fill="#3b82f6" name="Pages per Session" barSize={20} />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="bounceRate"
                      stroke="#f43f5e"
                      name="Bounce Rate (%)"
                      strokeWidth={2}
                    />
                    <Line
                      yAxisId="right"
                      type="monotone"
                      dataKey="conversionRate"
                      stroke="#10b981"
                      name="Conversion Rate (%)"
                      strokeWidth={2}
                    />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>
        </div>

        {/* Engagement Tab Content */}
        <div className={`space-y-6 mt-6 ${activeTab !== "engagement" ? "hidden" : ""}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div>
                <h3 className="text-lg font-medium">Session Duration</h3>
                <p className="text-sm text-gray-500">How long users spend on your site</p>
              </div>
              <div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={sessionDurationData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="duration" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Bar dataKey="users" fill="#3b82f6" name="Users (%)" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div className="flex flex-row items-center justify-between space-y-0 pb-2">
                <div>
                  <h3 className="text-lg font-medium">Time Spent Metrics</h3>
                  <p className="text-sm text-gray-500">Detailed breakdown of user engagement</p>
                </div>
                <Clock className="h-4 w-4 text-gray-400" />
              </div>
              <div>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">Average Session Duration</p>
                      <p className="text-2xl font-bold">4.2 minutes</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">Pages per Session</p>
                      <p className="text-2xl font-bold">3.8</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">Bounce Rate</p>
                      <p className="text-2xl font-bold">38.5%</p>
                    </div>
                    <div className="space-y-2">
                      <p className="text-sm font-medium text-gray-500">Scroll Depth (avg)</p>
                      <p className="text-2xl font-bold">65%</p>
                    </div>
                  </div>

                  <div className="pt-4 border-t">
                    <h4 className="text-sm font-medium mb-2">Time Spent by Device</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Desktop</span>
                        <span className="font-medium">5.3 min</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "75%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Mobile</span>
                        <span className="font-medium">3.1 min</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Tablet</span>
                        <span className="font-medium">4.2 min</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "60%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div>
              <h3 className="text-lg font-medium">User Activity by Hour</h3>
              <p className="text-sm text-gray-500">When users are most active on your site</p>
            </div>
            <div>
              <div className="h-[300px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={[
                      { hour: "12am", users: 1200 },
                      { hour: "2am", users: 800 },
                      { hour: "4am", users: 600 },
                      { hour: "6am", users: 1500 },
                      { hour: "8am", users: 3200 },
                      { hour: "10am", users: 4800 },
                      { hour: "12pm", users: 5100 },
                      { hour: "2pm", users: 4900 },
                      { hour: "4pm", users: 5300 },
                      { hour: "6pm", users: 6200 },
                      { hour: "8pm", users: 5800 },
                      { hour: "10pm", users: 3100 },
                    ]}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="hour" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey="users" fill="#3b82f6" name="Active Users" />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div>
              <h3 className="text-lg font-medium">User Engagement Funnel</h3>
              <p className="text-sm text-gray-500">Conversion path from visitors to subscribers</p>
            </div>
            <div>
              <div className="space-y-4">
                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Visitors</span>
                    <span className="font-medium">100%</span>
                  </div>
                  <div className="w-full bg-blue-100 h-8 rounded-t-md flex items-center justify-center text-blue-800 font-medium">
                    121,500
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Article Readers</span>
                    <span className="font-medium">68%</span>
                  </div>
                  <div className="w-[68%] bg-blue-200 h-8 flex items-center justify-center text-blue-800 font-medium">
                    82,620
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Engaged Readers ({">"}2min)</span>
                    <span className="font-medium">42%</span>
                  </div>
                  <div className="w-[42%] bg-blue-300 h-8 flex items-center justify-center text-blue-800 font-medium">
                    51,030
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Newsletter Subscribers</span>
                    <span className="font-medium">12%</span>
                  </div>
                  <div className="w-[12%] bg-blue-400 h-8 flex items-center justify-center text-blue-800 font-medium">
                    14,580
                  </div>
                </div>

                <div className="flex flex-col">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium">Premium Subscribers</span>
                    <span className="font-medium">3%</span>
                  </div>
                  <div className="w-[3%] bg-blue-500 h-8 rounded-b-md flex items-center justify-center text-white font-medium">
                    3,645
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Geography Tab Content */}
        <div className={`space-y-6 mt-6 ${activeTab !== "geography" ? "hidden" : ""}`}>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <h3 className="text-lg font-medium">Geographic Distribution</h3>
                <p className="text-sm text-gray-500">Where your users are coming from</p>
              </div>
              <Globe className="h-4 w-4 text-gray-400" />
            </div>
            <div>
              <div className="h-[400px] flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="h-[300px] w-full md:w-1/2">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={geoDistributionData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="percentage"
                      >
                        {geoDistributionData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>

                <div className="w-full md:w-1/2">
                  <h3 className="text-lg font-medium mb-4">Top Countries</h3>
                  <div className="space-y-4">
                    {geoDistributionData.slice(0, 5).map((country, index) => (
                      <div key={country.country} className="flex items-center">
                        <div
                          className="w-4 h-4 rounded-full mr-2"
                          style={{ backgroundColor: COLORS[index % COLORS.length] }}
                        ></div>
                        <div className="flex-1">
                          <div className="flex justify-between">
                            <span>{country.country}</span>
                            <span className="font-medium">{country.percentage}%</span>
                          </div>
                          <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
                            <div
                              className="h-2 rounded-full"
                              style={{
                                width: `${country.percentage}%`,
                                backgroundColor: COLORS[index % COLORS.length],
                              }}
                            ></div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-medium mb-4">Detailed Geographic Breakdown</h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Country
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Users
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Percentage
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Avg. Session Duration
                        </th>
                        <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Bounce Rate
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {geoDistributionData.map((country, index) => (
                        <tr key={country.country}>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <div
                                className="w-3 h-3 rounded-full mr-2"
                                style={{ backgroundColor: COLORS[index % COLORS.length] }}
                              ></div>
                              <div className="text-sm font-medium text-gray-900">{country.country}</div>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{country.users.toLocaleString()}</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{country.percentage}%</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{(3 + Math.random() * 3).toFixed(1)} min</div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="text-sm text-gray-500">{(30 + Math.random() * 20).toFixed(1)}%</div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div>
                <h3 className="text-lg font-medium">Growth by Region</h3>
                <p className="text-sm text-gray-500">User growth compared to previous period</p>
              </div>
              <div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={[
                        { region: "North America", growth: 15.2 },
                        { region: "Europe", growth: 12.8 },
                        { region: "Asia Pacific", growth: 24.5 },
                        { region: "Latin America", growth: 18.3 },
                        { region: "Middle East", growth: 9.7 },
                        { region: "Africa", growth: 7.2 },
                      ]}
                      margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    >
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="region" />
                      <YAxis />
                      <Tooltip formatter={(value) => `${value}%`} />
                      <Bar dataKey="growth" fill="#10b981" name="Growth %" />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div>
                <h3 className="text-lg font-medium">Language Preferences</h3>
                <p className="text-sm text-gray-500">User interface language settings</p>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>English</span>
                    <span className="font-medium">68.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "68.5%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Spanish</span>
                    <span className="font-medium">12.3%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "12.3%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>French</span>
                    <span className="font-medium">5.7%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "5.7%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>German</span>
                    <span className="font-medium">4.2%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "4.2%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Portuguese</span>
                    <span className="font-medium">3.8%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "3.8%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Other</span>
                    <span className="font-medium">5.5%</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: "5.5%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content Tab Content */}
        <div className={`space-y-6 mt-6 ${activeTab !== "content" ? "hidden" : ""}`}>
          <div className="bg-white p-6 rounded-lg shadow">
            <div className="flex flex-row items-center justify-between space-y-0 pb-2">
              <div>
                <h3 className="text-lg font-medium">Content Consumption</h3>
                <p className="text-sm text-gray-500">What content users are engaging with</p>
              </div>
              <BookOpen className="h-4 w-4 text-gray-400" />
            </div>
            <div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={contentConsumptionData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                    layout="vertical"
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis type="number" />
                    <YAxis dataKey="category" type="category" width={100} />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="articles" name="Articles Read (%)" fill="#3b82f6" />
                    <Bar dataKey="avgTimeSpent" name="Avg. Time Spent (min)" fill="#f59e0b" />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 border-t pt-4">
                <h3 className="text-lg font-medium mb-4">Most Popular Articles</h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-medium text-xs mr-2">
                      1
                    </span>
                    <div>
                      <h4 className="text-sm font-medium">Breaking News: Tech Innovation Revolutionizes Industry</h4>
                      <p className="text-xs text-gray-500">Views: 45,230 | Avg. Time: 6.2 min</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-medium text-xs mr-2">
                      2
                    </span>
                    <div>
                      <h4 className="text-sm font-medium">Political Analysis: Election Results and Implications</h4>
                      <p className="text-xs text-gray-500">Views: 38,450 | Avg. Time: 7.5 min</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-medium text-xs mr-2">
                      3
                    </span>
                    <div>
                      <h4 className="text-sm font-medium">Health Report: New Study Reveals Breakthrough</h4>
                      <p className="text-xs text-gray-500">Views: 32,780 | Avg. Time: 5.8 min</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-medium text-xs mr-2">
                      4
                    </span>
                    <div>
                      <h4 className="text-sm font-medium">Entertainment: Celebrity Interview Goes Viral</h4>
                      <p className="text-xs text-gray-500">Views: 29,340 | Avg. Time: 4.3 min</p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <span className="inline-flex items-center justify-center h-6 w-6 rounded-full bg-blue-100 text-blue-800 font-medium text-xs mr-2">
                      5
                    </span>
                    <div>
                      <h4 className="text-sm font-medium">Sports Update: Championship Final Results</h4>
                      <p className="text-xs text-gray-500">Views: 27,890 | Avg. Time: 5.1 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div>
                <h3 className="text-lg font-medium">Content Engagement by Time of Day</h3>
                <p className="text-sm text-gray-500">When different content types are consumed</p>
              </div>
              <div>
                <div className="space-y-6">
                  <div>
                    <h4 className="text-sm font-medium mb-2">Morning (6am - 12pm)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>News & Politics</span>
                        <span className="font-medium">42%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Business & Finance</span>
                        <span className="font-medium">28%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "28%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Afternoon (12pm - 6pm)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Technology</span>
                        <span className="font-medium">35%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Health & Science</span>
                        <span className="font-medium">25%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-sm font-medium mb-2">Evening (6pm - 12am)</h4>
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Entertainment</span>
                        <span className="font-medium">45%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                      </div>

                      <div className="flex justify-between items-center">
                        <span>Sports</span>
                        <span className="font-medium">30%</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div className="bg-blue-600 h-2 rounded-full" style={{ width: "30%" }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div>
                <h3 className="text-lg font-medium">Content Format Preferences</h3>
                <p className="text-sm text-gray-500">How users prefer to consume content</p>
              </div>
              <div>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={[
                          { name: "Long-form Articles", value: 35 },
                          { name: "Short News", value: 25 },
                          { name: "Video Content", value: 20 },
                          { name: "Photo Galleries", value: 12 },
                          { name: "Interactive Content", value: 8 },
                        ]}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                        outerRadius={100}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {[...Array(5)].map((_, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip formatter={(value) => `${value}%`} />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Retention Tab Content */}
        <div className={`space-y-6 mt-6 ${activeTab !== "retention" ? "hidden" : ""}`}>
          <div className="bg-white p-6 rounded-lg shadow">
            <div>
              <h3 className="text-lg font-medium">User Retention</h3>
              <p className="text-sm text-gray-500">Percentage of users who return after signup</p>
            </div>
            <div>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={retentionData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip formatter={(value) => `${value}%`} />
                    <Area
                      type="monotone"
                      dataKey="retention"
                      stroke="#3b82f6"
                      fill="#3b82f6"
                      fillOpacity={0.3}
                      name="Retention Rate (%)"
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow">
              <div>
                <h3 className="text-lg font-medium">Cohort Analysis</h3>
                <p className="text-sm text-gray-500">User retention by signup month</p>
              </div>
              <div>
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Cohort
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Day 1
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Day 7
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Day 30
                        </th>
                        <th className="px-4 py-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                          Day 90
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap">Jan 2023</td>
                        <td className="px-4 py-2 whitespace-nowrap">100%</td>
                        <td className="px-4 py-2 whitespace-nowrap">58%</td>
                        <td className="px-4 py-2 whitespace-nowrap">32%</td>
                        <td className="px-4 py-2 whitespace-nowrap">20%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap">Feb 2023</td>
                        <td className="px-4 py-2 whitespace-nowrap">100%</td>
                        <td className="px-4 py-2 whitespace-nowrap">62%</td>
                        <td className="px-4 py-2 whitespace-nowrap">35%</td>
                        <td className="px-4 py-2 whitespace-nowrap">22%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap">Mar 2023</td>
                        <td className="px-4 py-2 whitespace-nowrap">100%</td>
                        <td className="px-4 py-2 whitespace-nowrap">65%</td>
                        <td className="px-4 py-2 whitespace-nowrap">38%</td>
                        <td className="px-4 py-2 whitespace-nowrap">24%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap">Apr 2023</td>
                        <td className="px-4 py-2 whitespace-nowrap">100%</td>
                        <td className="px-4 py-2 whitespace-nowrap">60%</td>
                        <td className="px-4 py-2 whitespace-nowrap">36%</td>
                        <td className="px-4 py-2 whitespace-nowrap">23%</td>
                      </tr>
                      <tr>
                        <td className="px-4 py-2 whitespace-nowrap">May 2023</td>
                        <td className="px-4 py-2 whitespace-nowrap">100%</td>
                        <td className="px-4 py-2 whitespace-nowrap">63%</td>
                        <td className="px-4 py-2 whitespace-nowrap">37%</td>
                        <td className="px-4 py-2 whitespace-nowrap">25%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow">
              <div>
                <h3 className="text-lg font-medium">Churn Rate</h3>
                <p className="text-sm text-gray-500">Monthly user churn rate</p>
              </div>
              <div>
                <div className="space-y-4">
                  <div className="flex justify-between items-center pb-2 border-b">
                    <span className="font-medium">Month</span>
                    <span className="font-medium">Churn Rate</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>January</span>
                    <span>5.2%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>February</span>
                    <span>4.8%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>March</span>
                    <span>4.5%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>April</span>
                    <span>4.7%</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span>May</span>
                    <span>4.3%</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow">
            <div>
              <h3 className="text-lg font-medium">User Lifecycle Analysis</h3>
              <p className="text-sm text-gray-500">Understanding user journey stages</p>
            </div>
            <div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">New Users</h3>
                  <p className="text-2xl font-bold">24.5%</p>
                  <p className="text-xs text-gray-500">First 7 days</p>
                  <p className="text-sm text-green-500 mt-2">+3.2% from previous period</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Engaged Users</h3>
                  <p className="text-2xl font-bold">42.8%</p>
                  <p className="text-xs text-gray-500">8-30 days</p>
                  <p className="text-sm text-green-500 mt-2">+1.5% from previous period</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Regular Users</h3>
                  <p className="text-2xl font-bold">18.3%</p>
                  <p className="text-xs text-gray-500">31-90 days</p>
                  <p className="text-sm text-red-500 mt-2">-0.8% from previous period</p>
                </div>

                <div className="bg-gray-50 p-4 rounded-lg">
                  <h3 className="text-sm font-medium text-gray-500 mb-1">Loyal Users</h3>
                  <p className="text-2xl font-bold">14.4%</p>
                  <p className="text-xs text-gray-500">90+ days</p>
                  <p className="text-sm text-green-500 mt-2">+2.1% from previous period</p>
                </div>
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-medium mb-4">Retention Strategies Impact</h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span>Email Newsletters</span>
                    <span className="font-medium">+12.5% retention</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "62.5%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Push Notifications</span>
                    <span className="font-medium">+8.3% retention</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "41.5%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Personalized Content</span>
                    <span className="font-medium">+15.7% retention</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "78.5%" }}></div>
                  </div>

                  <div className="flex justify-between items-center">
                    <span>Loyalty Program</span>
                    <span className="font-medium">+18.2% retention</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div className="bg-green-500 h-2 rounded-full" style={{ width: "91%" }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

