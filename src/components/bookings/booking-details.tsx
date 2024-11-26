import { ScrollArea } from "@/components/ui/scroll-area";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, Mail, User, Video } from "lucide-react";

export function BookingDetails({ booking }: { booking: any }) {
  return (
    <ScrollArea className="h-full">
      <div className="space-y-6 p-6 pt-0 sm:pt-2 sm:p-2 ">
        <div className="border-b pb-2">
          <h3 className="text-lg font-semibold text-foreground">
            Booking Details
          </h3>
          {/* <p className="text-sm text-muted-foreground">
            complete booking information
          </p> */}
        </div>

        <div className="space-y-4">
          {/* Status Badge */}
          <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground">
            {booking.status}
          </div>

          {/* Service Info */}
          <div className="space-y-1">
            <h4 className="text-base font-semibold">{booking.service}</h4>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Clock className="h-4 w-4" />
              <span>{booking.duration}</span>
            </div>
          </div>

          {/* Time and Location */}
          <div className="rounded-lg border bg-card p-4 space-y-3">
            <div className="flex items-start gap-3">
              <Calendar className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">{booking.date}</p>
                <p className="text-sm text-muted-foreground">{booking.time}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Video className="h-4 w-4 text-primary" />
              <div>
                <p className="text-sm font-medium">Zoom Meeting</p>
                <p className="text-sm text-muted-foreground">
                  Meeting link will be shared via email
                </p>
              </div>
            </div>
          </div>

          {/* Customer Info */}
          <div>
            <div className="rounded-lg border bg-card p-4">
              <div className="flex items-center gap-3">
                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <User className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium">{booking.customerName}</p>
                  <p className="text-sm text-muted-foreground">
                    customer@example.com
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Payment Info */}
          <div className="rounded-lg border bg-card p-4">
            <p className="text-sm font-medium mb-2">Payment</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">Amount Paid</span>
              <span className="text-base font-semibold">₹{booking.amount}</span>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col gap-3 pt-4">
            {/* TODO: ASK FOR TESTIMONIAL */}
            {/* <div className="flex justify-end">
              <Button variant={"link"} className=" text-xs py-0" size={"sm"}>
                <Mail size={8} />
                ask for testimonial
              </Button>
            </div> */}
            <Button
              variant="outline"
              className="w-full "
              onClick={() => {
                // Handle reschedule logic
              }}
            >
              Reschedule Meeting
            </Button>
            <Button
              variant="outline"
              className="w-full text-red-500 border-red-500"
              onClick={() => {
                // Handle cancel logic
              }}
            >
              Cancel Meeting
            </Button>
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
