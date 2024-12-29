"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function ContactSupport() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would handle the form submission, e.g., send an email or save to a database
    console.log("Form submitted:", { name, email, message })
  }

  return (
    (<section className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Contact & Support</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <Input
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required />
              </div>
              <div className="mb-4">
                <Input
                  type="email"
                  placeholder="Your Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required />
              </div>
              <div className="mb-4">
                <Textarea
                  placeholder="Your Message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required />
              </div>
              <Button type="submit">Send Message</Button>
            </form>
          </div>
          <div>
            <h3 className="text-2xl font-semibold mb-4">FAQ</h3>
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>How are donations used?</AccordionTrigger>
                <AccordionContent>
                  Donations are used for veterinary care, food, shelter, and rescue operations for dogs in need.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Can I donate to a specific dog?</AccordionTrigger>
                <AccordionContent>
                  Yes, you can donate to a specific dog by visiting their profile page and using the 'Donate for [Dog's Name]' button.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>Are donations tax-deductible?</AccordionTrigger>
                <AccordionContent>
                  Yes, all donations are tax-deductible. You will receive a receipt for your donation for tax purposes.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>
    </section>)
  );
}

