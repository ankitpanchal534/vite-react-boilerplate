import { Input } from "@/components/ui/input";
import { RadioGroup } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Label } from "@radix-ui/react-label";
import { RadioGroupItem } from "@radix-ui/react-radio-group";

export function ServiceForm({
  type,
}: {
  type: "1-1-call" | "priority-dm" | "webinar" | "digital-product";
}) {
  const forms = {
    "1-1-call": (
      <div className="space-y-4">
        <div>
          <Label className="text-sm sm:text-base font-medium">Title</Label>
          <Input
            className="text-sm sm:text-base mt-1.5"
            placeholder="e.g. 30-min Consultation Call"
          />
        </div>
        <div>
          <Label className="text-sm sm:text-base font-medium">
            Duration (mins)
          </Label>
          <Select>
            <SelectTrigger className="text-sm sm:text-base mt-1.5">
              <SelectValue placeholder="Select duration" />
            </SelectTrigger>
            <SelectContent>
              {[15, 30, 45, 60, 90].map((duration) => (
                <SelectItem
                  key={duration}
                  value={duration.toString()}
                  className="text-sm sm:text-base"
                >
                  {duration} minutes
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label className="text-sm sm:text-base font-medium">Amount (₹)</Label>
          <Input
            type="number"
            className="text-sm sm:text-base mt-1.5"
            placeholder="0"
          />
        </div>
      </div>
    ),

    "priority-dm": (
      <div className="space-y-4">
        <div>
          <Label className="text-sm sm:text-base font-medium">Title</Label>
          <Input
            className="text-sm sm:text-base mt-1.5"
            placeholder="e.g. VIP Direct Message Access"
          />
        </div>
        <div>
          <Label className="text-sm sm:text-base font-medium">
            Additional Info
          </Label>
          <Input
            className="text-sm sm:text-base mt-1.5"
            placeholder="e.g. anything you want to add"
          />
        </div>
        <div>
          <Label className="text-sm sm:text-base font-medium">Amount (₹)</Label>
          <Input
            type="number"
            className="text-sm sm:text-base mt-1.5"
            placeholder="0"
          />
        </div>
      </div>
    ),

    webinar: (
      <div className="space-y-4">
        <div>
          <Label className="text-sm sm:text-base font-medium">Title</Label>
          <Input
            className="text-sm sm:text-base mt-1.5"
            placeholder="e.g. Masterclass Workshop"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label className="text-sm sm:text-base font-medium">
              Duration (mins)
            </Label>
            <Select>
              <SelectTrigger className="text-sm sm:text-base mt-1.5">
                <SelectValue placeholder="Duration" />
              </SelectTrigger>
              <SelectContent>
                {[60, 90, 120, 180].map((duration) => (
                  <SelectItem
                    key={duration}
                    value={duration.toString()}
                    className="text-sm sm:text-base"
                  >
                    {duration} minutes
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label className="text-sm sm:text-base font-medium">
              Session Type
            </Label>
            <Select>
              <SelectTrigger className="text-sm sm:text-base mt-1.5">
                <SelectValue placeholder="Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="one-time" className="text-sm sm:text-base">
                  One-time
                </SelectItem>
                <SelectItem value="recurring" className="text-sm sm:text-base">
                  Recurring
                </SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div>
          <Label className="text-sm sm:text-base font-medium">Amount (₹)</Label>
          <Input
            type="number"
            className="text-sm sm:text-base mt-1.5"
            placeholder="0"
          />
        </div>
        <div>
          <Label className="text-sm sm:text-base font-medium">
            Hosting Platform
          </Label>
          <Select>
            <SelectTrigger className="text-sm sm:text-base mt-1.5">
              <SelectValue placeholder="Select platform" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="zoom" className="text-sm sm:text-base">
                Zoom
              </SelectItem>
              <SelectItem value="gmeet" className="text-sm sm:text-base">
                Google Meet
              </SelectItem>
              <SelectItem value="teams" className="text-sm sm:text-base">
                Microsoft Teams
              </SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    ),

    "digital-product": (
      <div className="space-y-4">
        <div>
          <Label className="text-sm sm:text-base font-medium">
            Product Type
          </Label>
          <RadioGroup defaultValue="ebook" className="mt-2">
            <div className="grid gap-2">
              <div className="flex items-center space-x-2 rounded-lg border p-3 cursor-pointer hover:bg-accent">
                <RadioGroupItem value="ebook" id="ebook" />
                <Label htmlFor="ebook" className="text-sm sm:text-base">
                  E-book, notes, Guides, Resources
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border p-3 cursor-pointer hover:bg-accent">
                <RadioGroupItem value="exclusive" id="exclusive" />
                <Label htmlFor="exclusive" className="text-sm sm:text-base">
                  Exclusive Content (Video answers)
                </Label>
              </div>
              <div className="flex items-center space-x-2 rounded-lg border p-3 cursor-pointer hover:bg-accent">
                <RadioGroupItem value="course" id="course" />
                <Label htmlFor="course" className="text-sm sm:text-base">
                  Crash Course
                </Label>
              </div>
            </div>
          </RadioGroup>
        </div>
        <div>
          <Label className="text-sm sm:text-base font-medium">Title</Label>
          <Input
            className="text-sm sm:text-base mt-1.5"
            placeholder="e.g. Complete Guide to Success"
          />
        </div>
        <div>
          <Label className="text-sm sm:text-base font-medium">Amount (₹)</Label>
          <Input
            type="number"
            className="text-sm sm:text-base mt-1.5"
            placeholder="0"
          />
        </div>
      </div>
    ),
  };

  return forms[type] || null;
}
