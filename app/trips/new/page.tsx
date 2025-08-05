"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { createTrip } from "@/lib/actions/create-trip";
import { cn } from "@/lib/utils";
import { UploadButton } from "@/lib/upload-thing";
import { useState, useTransition } from "react";
import Image from "next/image";

export default function NewTrip() {

  const [isPending, startTransition] = useTransition()
  const [imageUrl, setImageUrl] = useState<string | null>(null)

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      <Card>
        <CardHeader>
          New Trip
        </CardHeader>
        <CardContent>
          <form action={(formData: FormData) => {
            startTransition(() => {
              if(imageUrl) {
                formData.append("imageUrl", imageUrl)
              }
              createTrip(formData)
            })
          }} className="space-y-6">
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
            <div>
              <label htmlFor="">Trip Image</label>
              {imageUrl && (
                <Image src={imageUrl} alt="Trip Preview" className="w-full mb-4 rounded-md max-h-48 object-cover" width={300} height={100}/>
              )}
              <UploadButton
                endpoint={"imageUploader"}
                onClientUploadComplete={(res) => {
                  if (res && res[0].ufsUrl) {
                    setImageUrl(res[0].ufsUrl)
                  }
                }}
                onUploadError={(error: Error) => {
                  console.error("Upload error : ", error)
                }}
              />

            </div>

            <Button disabled={isPending} type="submit" className="w-full">
              {isPending ? "Creating..." : "Create Trip"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}