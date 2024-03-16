import React from "react";
import { Icons } from "@/components/icons";
export default function Loading() {
  return (
    <div className="flex items-center justify-center mt-12 p-12">
    <div className="text-center flex items-center">
    <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
      Loading...
    </div>
  </div>
  );
}
