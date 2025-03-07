"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import emailjs from "emailjs-com"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"

const formSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phoneNumber: z.string().min(10, { message: "Please enter a valid phone number." }),
  budget: z.string().min(1, { message: "Please enter your budget." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
})

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const [isSent, setIsSent] = useState(false)


  // Remove the second onSubmit function and update the first one:

async function onSubmit(values: z.infer<typeof formSchema>) {
  setIsSubmitting(true)
  try {
    // Send data to MongoDB
    const response = await fetch("/api/form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: values.name,
        email: values.email,
        details: values.message,
        phoneNumber: values.phoneNumber,
        budget: values.budget,
      }),
    });

    if (!response.ok) {
      throw new Error('Failed to submit form to database');
    }

    // Send emails using EmailJS
    const emailData = {
      name: values.name,
      email: values.email,
      details: values.message,
      phoneNumber: values.phoneNumber,
      budget: values.budget,
    };

    // Send email to admin
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_1!,
      emailData,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    );

    // Send confirmation email to user
    await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID_2!,
      emailData,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID!
    );
 // Instead of alert, set isSent to true
 form.reset();
 setIsSent(true)
 // Reset the button state after 3 seconds
 setTimeout(() => {
   setIsSent(false)
 }, 2000)
} catch (error) {
 console.error("Error:", error);
 alert("An error occurred while submitting the form. Please try again.");
} finally {
 setIsSubmitting(false);
}
}


  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      budget: "",
      message: "",
    },
  })


  return (
    <section className="bg-background py-12 md:py-20" id="contact">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8 md:mb-12"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2 md:mb-4">
            Get in Touch
          </h2>
          <p className="text-base md:text-lg text-muted-foreground max-w-xl mx-auto">
            We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card rounded-xl md:rounded-2xl p-4 md:p-8 shadow-lg border border-border"
        >
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 md:space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">Name</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="John Doe" 
                          {...field} 
                          className="h-10 md:h-11"
                        />
                      </FormControl>
                      <FormMessage className="text-xs md:text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">Email</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="john@example.com" 
                          {...field} 
                          className="h-10 md:h-11"
                        />
                      </FormControl>
                      <FormMessage className="text-xs md:text-sm" />
                    </FormItem>
                  )}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                <FormField
                  control={form.control}
                  name="phoneNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">Phone Number</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="+1 (555) 000-0000" 
                          {...field} 
                          className="h-10 md:h-11"
                        />
                      </FormControl>
                      <FormMessage className="text-xs md:text-sm" />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="budget"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-sm md:text-base">Budget</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="$1,000 - $5,000" 
                          {...field} 
                          className="h-10 md:h-11"
                        />
                      </FormControl>
                      <FormMessage className="text-xs md:text-sm" />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm md:text-base">Message</FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Tell us about your project..." 
                        className="min-h-[100px] md:min-h-[120px] resize-y"
                        {...field} 
                      />
                    </FormControl>
                    <FormMessage className="text-xs md:text-sm" />
                  </FormItem>
                )}
              />

<Button 
  type="submit" 
  className={`w-full h-10 md:h-11 text-sm md:text-base transition-colors duration-300 ${
    isSent ? 'bg-green-500 hover:bg-green-600' : ''
  }`}
  disabled={isSubmitting || isSent}
>
  {isSubmitting ? "Sending..." : isSent ? "Sent!" : "Send Message"}
</Button>
            </form>
          </Form>
        </motion.div>
      </div>
    </section>
  )
}