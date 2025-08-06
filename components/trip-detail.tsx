"use client"

import { Trip } from "@/app/generated/prisma"
import Image from "next/image"
import { Calendar, Plus } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs"
import { useState } from "react"


interface TripDetailClientProps {
  trip: Trip;
}

export default function TripDetailClient({ trip }: TripDetailClientProps) {
  
  const [activeTab, setActiveTab] = useState("overview")
  
  return (
    <div className="container mx-auto px-4 py-8 space-y-8">
      {trip.imageUrl && (
        <div className="w-full h-72 md:h-96 overflow-hidden rounded-xl shadow-lg relative">
          <Image src={trip.imageUrl} alt={trip.title} className="object-cover" fill priority />
        </div>
      )}

      <div className="bg-white p-6 shadow-md rounded-lg flex flex-col md:flex-row justify-between items-start md:items-center">
        <div className="">
          <h1 className="text-4xl outfit-bold text-neutral-900">{trip.title}</h1>
          <div className="mt-2 flex items-center text-neutral-500">
            <Calendar className="h-5 w-5 mr-2" />
            <span className="text-lg">
              {trip.startDate.toLocaleDateString()} - {trip.endDate.toLocaleDateString()}
            </span>
          </div>
        </div>
        <div className="mt-4 md:mt-0">
          <Link href={`/trips/${trip.id}/itinerary/new`}>
            <Button><Plus className="mr-1 h-5 w-5"/>Add Location</Button>
          </Link>
        </div>
      </div>

      <div className="bg-white p-6 shadow-md rounded-lg ">
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          <TabsList>
            <TabsTrigger className="text-lg" value="overview">Overview</TabsTrigger>
            <TabsTrigger className="text-lg" value="itinerary">Itinerary</TabsTrigger>
            <TabsTrigger className="text-lg" value="map">Map</TabsTrigger>
          </TabsList>

          <TabsContent value={""}></TabsContent>
        </Tabs>
      </div>
    </div>
  )
}