import {
  TTheme,
  useTheme,
} from "@/app/pages/_public/d/booking-page/CalenderTheme";
import { SlotButton } from "@/app/pages/_public/d/booking-page/SlotButton";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Input } from "@/components/ui/input";
import { Show } from "@/components/ui/show/Show";
import { Textarea } from "@/components/ui/textarea";
import {
  createLazyFileRoute,
  useParams,
  useRouter,
} from "@tanstack/react-router";
import dayjs from "dayjs";
import { motion } from "framer-motion";
import {
  Calendar as CalendarIcon,
  ChevronLeft,
  CreditCard,
  MessageSquare,
} from "lucide-react";
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

// Components
const PageTitle = ({
  username,
  service,
  theme,
}: {
  username: string;
  service: Service;
  theme: TTheme;
}) => {
  const router = useRouter();
  return (
    <motion.div
      initial={{ y: -20 }}
      animate={{ y: 0 }}
      className="text-center mb-12"
    >
      <div className="flex items-center justify-between">
        <ChevronLeft
          className="shadow-[0px_0px_24px_lightgray] rounded-full p-2 box-content "
          onClick={() => {
            router.navigate({
              to: "/d/$username",
              params: {
                username,
              },
            });
          }}
          role="button"
          style={{
            color: theme.colors.primary.text,
          }}
        />
        <h1
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{
            background: `linear-gradient(to right, ${theme.colors.primary.gradient.from}, ${theme.colors.primary.gradient.via}, ${theme.colors.primary.gradient.to})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Book Your Session
        </h1>
        <span></span>
      </div>
      <p className="text-lg" style={{ color: theme.colors.gray.text }}>
        {service.title} with {username}
      </p>
    </motion.div>
  );
};

const StepsProgress = ({
  steps,
  currentStep,
  theme,
}: {
  steps: any[];
  currentStep: number;
  theme: TTheme;
}) => (
  <div className="flex justify-center mb-12">
    <div className="flex items-center space-x-4">
      {steps.map((step, index) => (
        <div key={index} className="flex items-center">
          <motion.div
            className="flex items-center justify-center w-12 h-12 rounded-full"
            style={{
              background:
                currentStep > index
                  ? theme.colors.primary.base
                  : currentStep === index + 1
                    ? `linear-gradient(to right, ${theme.colors.primary.gradient.from}, ${theme.colors.primary.gradient.to})`
                    : theme.colors.white.bg,
              color: currentStep >= index + 1 ? "#fff" : theme.colors.gray.text,
            }}
            whileHover={{ scale: 1.05 }}
          >
            <step.icon className="w-6 h-6" />
          </motion.div>
          {index < steps.length - 1 && (
            <div
              className="w-24 h-1 mx-2"
              style={{ background: theme.colors.gray.bg }}
            >
              <motion.div
                style={{ background: theme.colors.primary.base }}
                className="h-full"
                initial={{ width: "0%" }}
                animate={{
                  width: currentStep > index + 1 ? "100%" : "0%",
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  </div>
);

const NavigationButtons = ({
  currentStep,
  steps,
  setCurrentStep,
  theme,
}: {
  currentStep: number;
  steps: any[];
  setCurrentStep: (step: number) => void;
  theme: TTheme;
}) => (
  <div className="flex justify-between max-w-lg m-auto mt-8">
    <Show
      where={currentStep > 1}
      render={
        <Button
          onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
          disabled={currentStep === 1}
          variant="outline"
          className="px-8"
        >
          Previous
        </Button>
      }
    />
    <Show
      where={currentStep > 1 && currentStep < steps.length}
      render={
        <Button
          onClick={() =>
            setCurrentStep(Math.min(steps.length, currentStep + 1))
          }
          disabled={currentStep === steps.length}
          className="px-8"
          style={{
            background: `linear-gradient(to right, ${theme.colors.primary.gradient.from}, ${theme.colors.primary.gradient.to})`,
          }}
        >
          Next
        </Button>
      }
    />
  </div>
);

export const Route = createLazyFileRoute("/_public/d/$username/$serviceId/")({
  component: BookingPage,
});

function BookingPage() {
  const { serviceId, username } = useParams({
    from: "/_public/d/$username/$serviceId/",
  });

  const { theme } = useTheme();

  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | undefined>(
    dayjs()
  );
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [currentStep, setCurrentStep] = useState(1);
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

  const steps = [
    {
      title: "Choose Date & Time",
      icon: CalendarIcon,
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-0"
        >
          <div
            style={{
              background: theme.colors.white.bg,
              borderColor: theme.colors.secondary.border,
            }}
            className="backdrop-blur-md w-full lg:w-fit rounded-3xl p-8 shadow-2xl border"
          >
            <Calendar
              mode="single"
              selected={selectedDate?.toDate()}
              onSelect={(date) =>
                setSelectedDate(date ? dayjs(date) : undefined)
              }
              className="rounded-xl place-items-center"
              styles={{
                day: {
                  borderRadius: "50%",
                },
                head_row: {
                  padding: "10px 0rem",
                },
              }}
              modifiersStyles={{
                selected: {
                  background: theme.colors.primary.base,
                },
              }}
            />
          </div>

          <div
            style={{
              background: theme.colors.white.bg,
              borderColor: theme.colors.secondary.border,
            }}
            className="backdrop-blur-md col-span-2 rounded-3xl p-8 shadow-2xl border"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4 gap-4">
              {timeSlots.map((slot) => {
                const isSelected = selectedTime === slot;
                return (
                  <SlotButton
                    isSelected={isSelected}
                    onClick={() => {
                      setSelectedTime(slot);
                    }}
                    onNext={() => {
                      setCurrentStep(currentStep + 1);
                    }}
                    slot={slot}
                    theme={theme}
                  />
                );
              })}
            </div>
          </div>
        </motion.div>
      ),
    },
    {
      title: "Your Information",
      icon: MessageSquare,
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: theme.colors.white.bg,
            borderColor: theme.colors.secondary.border,
          }}
          className="backdrop-blur-md max-w-lg m-auto rounded-3xl p-8 shadow-2xl border"
        >
          <h2
            style={{ color: theme.colors.primary.base }}
            className="pb-2 text-xl font-semibold"
          >
            Details
          </h2>
          <form className="space-y-6">
            <div className="space-y-4">
              <Input
                required
                placeholder="Full Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                className="h-14 text-lg bg-white/90 focus:border-violet-500"
                style={{ borderColor: theme.colors.secondary.border }}
              />
              <Input
                type="email"
                required
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-14 text-lg bg-white/90 focus:border-violet-500"
                style={{ borderColor: theme.colors.secondary.border }}
              />
              <Input
                required
                placeholder="Phone Number"
                value={formData.phone}
                onChange={(e) =>
                  setFormData({ ...formData, phone: e.target.value })
                }
                className="h-14 text-lg bg-white/90 focus:border-violet-500"
                style={{ borderColor: theme.colors.secondary.border }}
              />
              <Textarea
                placeholder="Additional Notes..."
                value={formData.notes}
                onChange={(e) =>
                  setFormData({ ...formData, notes: e.target.value })
                }
                className="min-h-[120px] text-lg bg-white/90 focus:border-violet-500"
                style={{ borderColor: theme.colors.secondary.border }}
              />
            </div>
          </form>
        </motion.div>
      ),
    },
    {
      title: "Confirmation",
      icon: CreditCard,
      content: (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={{
            background: theme.colors.white.bg,
            borderColor: theme.colors.secondary.border,
          }}
          className="backdrop-blur-md max-w-lg m-auto rounded-3xl p-8 shadow-2xl border"
        >
          <div className="space-y-6">
            <div
              className="flex justify-between items-center p-4 rounded-2xl"
              style={{
                background: `linear-gradient(to right, ${theme.colors.primary.light}, ${theme.colors.primary.light})`,
              }}
            >
              <span className="text-lg font-medium">Total Amount</span>
              <span
                style={{ color: theme.colors.primary.base }}
                className="text-2xl font-bold"
              >
                {service.currency} {service.price}
              </span>
            </div>

            <Button
              onClick={handleFormSubmit}
              className="w-full h-14 text-lg hover:opacity-90"
              style={{
                background: `linear-gradient(to right, ${theme.colors.primary.gradient.from}, ${theme.colors.primary.gradient.to})`,
              }}
            >
              Complete Booking
            </Button>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen p-6 md:p-12"
      style={{
        background: `linear-gradient(to bottom right, ${theme.colors.primary.light}, ${theme.colors.primary.light}, ${theme.colors.primary.light})`,
      }}
    >
      <div className="max-w-6xl mx-auto">
        <PageTitle username={username} service={service} theme={theme} />
        <StepsProgress steps={steps} currentStep={currentStep} theme={theme} />
        {steps[currentStep - 1].content}
        <NavigationButtons
          currentStep={currentStep}
          steps={steps}
          setCurrentStep={setCurrentStep}
          theme={theme}
        />
      </div>
    </motion.div>
  );
}
