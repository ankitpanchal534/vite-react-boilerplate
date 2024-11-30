import { ResponsivePanel } from "@/components/ui/responsive-panel";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { motion } from "framer-motion";
import {
  CheckCircle,
  Clock,
  Filter,
  MessageSquare,
  Search,
  XCircle,
} from "lucide-react";
import { useState } from "react";

export function DMComponent1() {
  const [selectedDM, setSelectedDM] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const dms = [
    {
      id: 1,
      customerName: "Sarah Wilson",
      service: "Career Growth Priority DM",
      message: "Need advice on switching to tech industry",
      timestamp: "2024-02-15 10:30 AM",
      status: "pending",
      priority: "high",
    },
    // Add more sample DMs
  ];

  const columns = [
    {
      key: "customerName",
      label: "Customer",
      render: (value: string) => (
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
            {value.charAt(0)}
          </div>
          <span>{value}</span>
        </div>
      ),
    },
    { key: "service", label: "Service" },
    {
      key: "message",
      label: "Message",
      render: (value: string) => (
        <p className="truncate max-w-[200px]">{value}</p>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (value: string) => (
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize
          ${value === "pending" ? "bg-yellow-100 text-yellow-800" : "bg-green-100 text-green-800"}`}
        >
          {value}
        </span>
      ),
    },
  ];

  return (
    <div className="p-0 sm:p-6">
      <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
        >
          <div>
            <h1 className="heading text-foreground">Priority DMs</h1>
            <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2">
              Manage and respond to your priority direct messages
            </p>
          </div>
        </motion.div>

        {/* Stats Overview */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            {
              label: "Total DMs",
              value: "45",
              icon: MessageSquare,
              color: "bg-blue-50",
            },
            {
              label: "Pending",
              value: "12",
              icon: Clock,
              color: "bg-yellow-50",
            },
            {
              label: "Answered",
              value: "33",
              icon: CheckCircle,
              color: "bg-green-50",
            },
            { label: "Expired", value: "5", icon: XCircle, color: "bg-red-50" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`${stat.color} rounded-xl p-6 border`}
            >
              <div className="flex items-center gap-3">
                <stat.icon className="w-5 h-5" />
                <div>
                  <p className="text-sm font-medium text-gray-600">
                    {stat.label}
                  </p>
                  <p className="text-2xl font-bold mt-1">{stat.value}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Search and Filter Bar */}
        <div className="flex flex-row gap-2 md:gap-4 items-center">
          <div className="relative max-w-sm w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search messages..."
              className="w-full pl-9 pr-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus:ring-primary text-sm"
            />
          </div>
          <button
            onClick={() => setShowFilters(true)}
            className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2"
          >
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </button>
        </div>

        {/* DMs Table */}
        <ResponsiveTable
          columns={columns}
          data={dms}
          loading={false}
          hasMore={false}
        />
      </div>

      {/* Reply Panel */}
      <ResponsivePanel
        open={!!selectedDM}
        onClose={() => setSelectedDM(null)}
        title="Reply to DM"
      >
        {selectedDM && (
          <div className="p-4 space-y-4">
            <div className="space-y-2">
              <textarea
                className="w-full p-3 rounded-lg border min-h-[150px] focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Type your response..."
              />
            </div>
            <div className="flex justify-end gap-3">
              <button className="px-4 py-2 rounded-lg border hover:bg-accent">
                Cancel
              </button>
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90">
                Send Reply
              </button>
            </div>
          </div>
        )}
      </ResponsivePanel>
    </div>
  );
}
