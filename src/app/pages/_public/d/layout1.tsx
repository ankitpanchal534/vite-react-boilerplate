// create  5 mobile responsive layouts and 5 multistep layout
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "@tanstack/react-router";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import { CreditCard, LayoutGrid, LayoutList, Sparkles } from "lucide-react";
import { useState } from "react";

interface Service {
  id: string;
  type: "call" | "dm" | "webinar" | "interview" | "digital";
  title: string;
  description: string;
  price?: number;
  currency?: string;
  requiresPayment: boolean;
  scheduledTime?: string;
}

interface BookingFormData {
  name: string;
  email: string;
  phone: string;
  notes: string;
}
export function BookingPageLayout1() {
  const { serviceId, username } = useParams({
    from: "/_public/d/$username/$serviceId/",
  });

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | undefined>(
    dayjs()
  );
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [isGridLayout, setIsGridLayout] = useState(true);
  const [formData, setFormData] = useState<BookingFormData>({
    name: "",
    email: "",
    phone: "",
    notes: "",
  });

  const service: Service = {
    id: serviceId,
    type: "call",
    title: "1:1 Strategy Call",
    description: "One-on-one consultation session",
    price: 150,
    currency: "USD",
    requiresPayment: true,
  };

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
  ];

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (service.requiresPayment) {
      handlePayment();
    } else {
      console.log("Form submitted:", formData);
    }
  };

  const handlePayment = async () => {
    try {
      const res = await fetch("/api/razorpay/create-order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: service.price! * 100,
          currency: service.currency,
          serviceId: service.id,
        }),
      });

      const data = await res.json();
    } catch (error) {
      console.error("Payment error:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 p-4 md:p-8"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="flex items-center space-x-3"
          >
            <Sparkles className="h-8 w-8 text-purple-500" />
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 text-transparent bg-clip-text">
              Book {service.title} with {username}
            </h2>
          </motion.div>

          <Button
            variant="outline"
            size="icon"
            onClick={() => setIsGridLayout(!isGridLayout)}
            className="rounded-full bg-white/80 backdrop-blur-sm hover:bg-white/90 border-purple-200"
          >
            {isGridLayout ? <LayoutList size={20} /> : <LayoutGrid size={20} />}
          </Button>
        </div>

        <div
          className={`${
            isGridLayout ? "grid grid-cols-1 md:grid-cols-2 gap-8" : "space-y-8"
          }`}
        >
          {/* Left Column/Section - Date/Time Selection */}
          {(service.type === "call" || service.type === "interview") && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all border border-purple-100">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  Select Date
                </h3>
                <Calendar
                  mode="single"
                  selected={selectedDate?.toDate()}
                  onSelect={(date) =>
                    setSelectedDate(date ? dayjs(date) : undefined)
                  }
                  className="rounded-xl border-purple-100"
                />
              </div>

              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 shadow-xl hover:shadow-2xl transition-all border border-purple-100">
                <h3 className="text-xl font-semibold mb-4 text-purple-700">
                  Select Time
                </h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {timeSlots.map((slot) => (
                    <Button
                      key={slot}
                      variant={selectedTime === slot ? "default" : "outline"}
                      size="lg"
                      onClick={() => setSelectedTime(slot)}
                      className={`w-full transition-all ${
                        selectedTime === slot
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white scale-105"
                          : "hover:scale-105 border-purple-200"
                      }`}
                    >
                      {slot}
                    </Button>
                  ))}
                </div>
              </div>
            </motion.div>
          )}

          {/* Right Column/Section - Booking Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all border border-purple-100"
          >
            <h3 className="text-2xl font-semibold mb-6 bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
              Your Details
            </h3>
            <form onSubmit={handleFormSubmit} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-700">
                  Full Name
                </label>
                <Input
                  required
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="h-12 text-lg border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-700">
                  Email Address
                </label>
                <Input
                  type="email"
                  required
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="h-12 text-lg border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-700">
                  Phone Number
                </label>
                <Input
                  required
                  placeholder="Your contact number"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="h-12 text-lg border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-purple-700">
                  Additional Notes
                </label>
                <Textarea
                  placeholder="Any special requests or notes..."
                  value={formData.notes}
                  onChange={(e) =>
                    setFormData({ ...formData, notes: e.target.value })
                  }
                  className="min-h-[100px] text-lg border-purple-200 focus:border-purple-500 focus:ring-purple-500"
                />
              </div>

              {service.requiresPayment && (
                <div className="flex justify-between items-center py-4 border-t border-b border-purple-200">
                  <span className="text-lg text-purple-600">Total Amount</span>
                  <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-500 text-transparent bg-clip-text">
                    {service.currency} {service.price}
                  </span>
                </div>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full text-lg h-12 bg-gradient-to-r from-purple-600 via-pink-500 to-blue-500 hover:opacity-90 transition-opacity"
              >
                {service.requiresPayment ? (
                  <div className="flex items-center justify-center space-x-2">
                    <CreditCard className="h-5 w-5" />
                    <span>Proceed to Payment</span>
                  </div>
                ) : (
                  "Confirm Booking"
                )}
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
