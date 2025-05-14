import { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

type ToggleProps = {
  enabled: boolean;
  onToggle: () => void;
};

export default function ToggleSwitch({ enabled, onToggle }: ToggleProps) {

  return (
    <Label className="relative inline-block w-12 h-7 cursor-pointer">
      <Input
        type="checkbox"
        checked={enabled}
        onChange={onToggle}
        className="sr-only peer"
      />
      <div
        className={`w-full h-full rounded-full transition-colors duration-300
          ${enabled ? "bg-[#FBEEAC]" : "bg-gray-300"}`}
      ></div>
      <div
        className={`absolute top-0.5 left-0.5 w-6 h-6 rounded-full transition-transform duration-300
          ${enabled ? "translate-x-5 bg-[#FCB131]" : "translate-x-0 bg-white"}`}
      ></div>
    </Label>
  );
}