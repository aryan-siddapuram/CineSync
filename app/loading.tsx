import React from "react";
import { Icons } from "@/components/icons"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Skeleton } from "@/components/ui/skeleton"

export default function Loading(){
    return(
        <div className="hidden flex-col md:flex">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2 mb-5">
            <Skeleton className="h-10 w-[180px]"/>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Skeleton className="h-[110px] w-[330px] rounded-xl"/>
            <Skeleton className="h-[110px] w-[330px] rounded-xl"/>
            <Skeleton className="h-[110px] w-[330px] rounded-xl"/>
            <Skeleton className="h-[110px] w-[330px] rounded-xl"/>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Skeleton className="h-[515px] col-span-4 rounded-xl"/>
            <Skeleton className="h-[515px] col-span-3 rounded-xl"/>
          </div>
        </div>
      </div>
    )
}