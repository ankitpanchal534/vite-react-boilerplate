import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  CartesianGrid,
  Cell,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function DashboardPage() {
  const meetingData = [
    { name: "Jan", meetings: 65, revenue: 6500 },
    { name: "Feb", meetings: 59, revenue: 5900 },
    { name: "Mar", meetings: 80, revenue: 8000 },
    { name: "Apr", meetings: 81, revenue: 8100 },
    { name: "May", meetings: 56, revenue: 5600 },
    { name: "Jun", meetings: 55, revenue: 5500 },
    { name: "Jul", meetings: 40, revenue: 4000 },
  ];

  const formResponseData = [
    { name: "Contact Forms", value: 45 },
    { name: "Feedback Forms", value: 30 },
    { name: "Registration Forms", value: 25 },
  ];

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  return (
    <div className="min-h-screen bg-background p-6">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex justify-between items-center mb-8"
      >
        <div>
          <h1 className="text-4xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back, John Doe</p>
        </div>
        <div className="space-x-4">
          <Button variant="outline">Export Reports</Button>
          <Button>New Meeting</Button>
        </div>
      </motion.div>

      {/* Quick Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {[
          { title: "Total Bookings", value: "324", change: "+12%", icon: "📅" },
          { title: "Revenue", value: "$43,200", change: "+8%", icon: "💰" },
          { title: "Active Clients", value: "150", change: "+5%", icon: "👥" },
          { title: "Form Responses", value: "89", change: "+15%", icon: "📝" },
        ].map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className="bg-card p-6 rounded-xl shadow-lg"
          >
            <div className="flex justify-between items-center">
              <div>
                <p className="text-muted-foreground">{stat.title}</p>
                <h3 className="text-2xl font-bold">{stat.value}</h3>
                <span className="text-green-500 text-sm">{stat.change}</span>
              </div>
              <span className="text-3xl">{stat.icon}</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Revenue & Meetings Chart */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">Revenue & Meetings</h2>
          <LineChart width={600} height={300} data={meetingData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="meetings"
              stroke="#8884d8"
            />
            <Line
              yAxisId="right"
              type="monotone"
              dataKey="revenue"
              stroke="#82ca9d"
            />
          </LineChart>
        </motion.div>

        {/* Form Responses Distribution */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          className="bg-card p-6 rounded-xl shadow-lg"
        >
          <h2 className="text-xl font-semibold mb-4">
            Form Responses Distribution
          </h2>
          <PieChart width={400} height={300}>
            <Pie
              data={formResponseData}
              cx={200}
              cy={150}
              innerRadius={60}
              outerRadius={80}
              fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {formResponseData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </motion.div>
      </div>

      {/* Recent Activity Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mt-8 bg-card p-6 rounded-xl shadow-lg"
      >
        <h2 className="text-xl font-semibold mb-4">Recent Activity</h2>
        <div className="space-y-4">
          {[
            "New booking from Sarah Johnson - 30 min consultation",
            "Form response received - Feedback Survey",
            "Payment received - $150 for Premium Session",
            "New client registration - Mike Smith",
          ].map((activity, index) => (
            <div
              key={index}
              className="flex items-center space-x-4 p-3 hover:bg-accent rounded-lg"
            >
              <div className="w-2 h-2 bg-primary rounded-full" />
              <p className="text-muted-foreground">{activity}</p>
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
export default DashboardPage;
