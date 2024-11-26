import { __fake_meetings } from "@/app/__mock_data__/__meetings__";
import { BookingDetails } from "@/components/bookings/booking-details";
import { ResponsivePanel } from "@/components/ui/responsive-panel";
import { ResponsiveTable } from "@/components/ui/responsive-table";
import { createLazyFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Calendar, Clock, Filter, Search } from "lucide-react";
import { useState } from "react";

export const Route = createLazyFileRoute("/_admin/bookings/")({
  component: BookingsPage,
});

function BookingsPage() {
  const [bookings, setBookings] = useState([
    {
      id: 1,
      customerName: "Alex Johnson",
      service: "Career Consultation",
      date: "2024-02-15",
      time: "10:00 AM",
      duration: "30 mins",
      status: "upcoming",
      amount: 1500,
    },
    // Add more sample data
  ]);

  const [selectedBooking, setSelectedBooking] = useState(null);
  const [showFilters, setShowFilters] = useState(false);

  const columns = [
    {
      key: "customerName",
      label: "Customer",
      render: (value: any) => (
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
      key: "date",
      label: "Date & Time",
      render: (value: any, item: any) => (
        <div className="space-y-1 flex  gap-1 items-center text-sm">
          <Calendar className="w-3.5 h-4" />
          <p className="">{value}</p>
          <Clock className="w-3.5 h-3.5 ml-1 pb-0.5 text-muted-foreground" />
          <p className="text-muted-foreground">{item?.time}</p>
        </div>
      ),
    },
    {
      key: "status",
      label: "Status",
      render: (value: any) => (
        <span
          className={`px-2.5 py-1 rounded-full text-xs font-medium capitalize
          ${
            value === "upcoming"
              ? "bg-blue-100 text-blue-800"
              : value === "completed"
                ? "bg-green-100 text-green-800"
                : "bg-red-100 text-red-800"
          }`}
        >
          {value}
        </span>
      ),
    },
    {
      key: "amount",
      label: "Amount",
      render: (value: any) => <span className="font-semibold">₹{value}</span>,
    },
    {
      key: "actions",
      label: "",
      render: (_value: any, booking: any) => (
        <button
          onClick={() => setSelectedBooking(booking)}
          className="text-sm font-medium text-primary hover:text-primary/80"
        >
          View Details
        </button>
      ),
    },
  ];

  return (
    <>
      <div className="sm:p-6">
        <div className="max-w-7xl mx-auto space-y-6 sm:space-y-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4"
          >
            <div>
              <h1 className="heading text-foreground tracking-tight">
                Bookings
              </h1>
              <p className="text-sm sm:text-base text-muted-foreground mt-1 sm:mt-2 font-medium">
                Track and manage your service bookings
              </p>
            </div>
          </motion.div>

          {/* Stats Overview */}
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {__fake_meetings.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`${stat.color} rounded-xl p-4 sm:p-6 border`}
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-lg">
                    <stat.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs sm:text-sm font-medium opacity-80">
                      {stat.label}
                    </p>
                    <p className="text-xl sm:text-2xl font-semibold mt-0.5">
                      {stat.value}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Search and Filter Bar */}
          <div className="flex flex-row gap-2 md:gap-4 items-center">
            <div className="relative max-w-sm w-full">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground " />
              <input
                type="text"
                placeholder="Search bookings..."
                className="w-full pl-9 pr-4 py-2.5 rounded-lg border bg-white focus:outline-none focus:ring-2 focus-visible:ring-ring 
            focus-visible:ring-offset-2 focus:ring-primary text-sm"
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

          {/* Bookings Table */}
          <ResponsiveTable
            columns={columns}
            data={bookings}
            loading={false}
            hasMore={false}
          />
        </div>
      </div>

      {/* Booking Details Panel */}
      <ResponsivePanel
        open={!!selectedBooking}
        onClose={() => setSelectedBooking(null)}
      >
        {selectedBooking && <BookingDetails booking={selectedBooking} />}
      </ResponsivePanel>

      {/* Filters Panel */}
      <ResponsivePanel
        open={showFilters}
        onClose={() => setShowFilters(false)}
        title="Filters"
      >
        Filters will be here
        {/* Add your filter components here */}
      </ResponsivePanel>
    </>
  );
}
