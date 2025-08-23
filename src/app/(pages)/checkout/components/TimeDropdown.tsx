import React from "react";
import {
  FormItem,
  FormControl,
  FormMessage,
  FormField,
} from "@/components/ui/form";
import { useFormContext } from "react-hook-form";
import { Label } from "@/components/ui/label";

interface TimeDropdownProps {
  name: string;
  fieldWidth: number;
  rangeMinutes?: number; // total minutes to show (e.g., 240 for 4 hours)
  interval?: number; // interval in minutes
}

function getFutureTimes(interval = 15, rangeMinutes = 240): string[] {
  const now = new Date();
  const times: string[] = [];
  const start = new Date(now);

  // Round up to the next interval
  start.setMinutes(Math.ceil(start.getMinutes() / interval) * interval, 0, 0);

  for (let i = 0; i <= rangeMinutes; i += interval) {
    const time = new Date(start.getTime() + i * 60000);
    const hours = time.getHours().toString().padStart(2, "0");
    const minutes = time.getMinutes().toString().padStart(2, "0");
    times.push(`${hours}:${minutes}`);
  }
  return times;
}

const TimeDropdown = ({
  name,
  fieldWidth,
  rangeMinutes = 240,
  interval = 15,
}: TimeDropdownProps) => {
  const { control } = useFormContext();
  const times = getFutureTimes(interval, rangeMinutes);

  return (
    <div className="flex items-center" style={{ width: `38.5%` }}>
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem className="w-full">
            <Label htmlFor={name}></Label>
            <FormControl>
              <div
                className="flex  items-center justify-center h-10 bg-[#FBEEAC] px-2 border border-dashed border-orange-300 rounded-full mt-0 !mt-0"
                style={{ width: `${fieldWidth}%` }}
              >
                <select
                  {...field}
                  id={name}
                  className="bg-[#FBEEAC] w-full text-center"
                >
                  <option value="ASAP">ASAP</option>
                  {times.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
              </div>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
};

export default TimeDropdown;
