import { auth } from "@/auth"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default async function TripsPage() {

  const session = await auth()
  if (!session) {
    return (
      <div className="p-4 flex items-center justify-center h-screen">
        <h1 className="text-4xl outfit-medium text-neutral-900">PLEASE SIGN IN.</h1>
      </div>
    )
  }

  return (
    <div className="space-y-6 container mx-auto px-4 py-8">
      <div className="">
        <h1 className="">Dashboard</h1>
        <Link href={"/trips/new"}>
          <Button>New Trip</Button>
        </Link>
      </div>
    </div>
  )
}