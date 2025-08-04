"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

export default function NewTrip() {



  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <Card>
        <CardHeader>
          New Trip
        </CardHeader>
        <CardContent>
          <form action="" className="space-y-6">
            <div>
              <label htmlFor="" className="block text-sm outfit-medium text-neutral-700 mb-1">Title</label>
              <input required type="text" name="title" id="title" placeholder="Japan trip..." className={cn("w-full border border-[#d7d7d7] px-3 py-2", "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")} />
            </div>
            <div>
              <label htmlFor="" className="block text-sm outfit-medium text-neutral-700 mb-1">Description</label>
              <textarea required name="description" id="description" placeholder="Trip description..." className={cn("w-full border border-[#d7d7d7] px-3 py-2", "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")} />
            </div>
            <div className="grid grid-cols-2 gap-x-4">
              <div className="col-span-1">
                <label htmlFor="" className="block text-sm outfit-medium text-neutral-700 mb-1">Start Date</label>
                <input type="date" name="startDate" id="startDate" className={cn("w-full border border-[#d7d7d7] px-3 py-2", "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")} />
              </div>
              <div className="col-span-1">
                <label htmlFor="" className="block text-sm outfit-medium text-neutral-700 mb-1">End Date</label>
                <input type="date" name="endDate" id="endDate" className={cn("w-full border border-[#d7d7d7] px-3 py-2", "rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500")} />
              </div>
            </div>

            <Button type="submit" className="w-full">
              Create Trip
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}