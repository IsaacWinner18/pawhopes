"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Switch } from "@/components/ui/switch"

export default function DonationOptions() {
  const [donationType, setDonationType] = useState("one-time")
  const [amount, setAmount] = useState("")
  const [isAnonymous, setIsAnonymous] = useState(false)
  const [message, setMessage] = useState("")

  const handleDonate = (e) => {
    e.preventDefault()
    // Here you would integrate with your payment processor (e.g., Stripe or PayPal)
    console.log("Donation submitted:", { donationType, amount, isAnonymous, message })
  }

  return (
    (<section className="py-16 bg-gray-100">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Make a Donation</h2>
        <form onSubmit={handleDonate} className="max-w-md mx-auto">
          <RadioGroup value={donationType} onValueChange={setDonationType} className="mb-4">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="one-time" id="one-time" />
              <Label htmlFor="one-time">One-time donation</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="recurring" id="recurring" />
              <Label htmlFor="recurring">Monthly recurring donation</Label>
            </div>
          </RadioGroup>
          
          <div className="mb-4">
            <Label htmlFor="amount">Amount ($)</Label>
            <Input
              type="number"
              id="amount"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter amount"
              required />
          </div>
          
          <div className="flex items-center space-x-2 mb-4">
            <Switch id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
            <Label htmlFor="anonymous">Donate anonymously</Label>
          </div>
          
          <div className="mb-4">
            <Label htmlFor="message">Leave a message (optional)</Label>
            <Input
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Your message of support" />
          </div>
          
          <Button type="submit" className="w-full">Donate Now</Button>
        </form>
      </div>
    </section>)
  );
}

