import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import ReactGA from "react-ga4"
  
  export function FAQMeet() {
    const captureFAQMeet = (faq:string)=>{
      ReactGA.event({
        category: faq,
        action: 'FAQ Meet',
      });
    }
    return (
      <Accordion type="single" collapsible className="w-full max-w-4xl mb-10">
        <AccordionItem value="item-1">
          <AccordionTrigger onClick={()=>{
            captureFAQMeet("1")
          }} className="text-left text-lg sm:text-2xl text-[#14B8A6] ">How do I schedule a meeting with your team?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
          Scheduling a meeting with our team is simple and convenient. You can easily schedule a meeting by visiting our website and using our online booking system. Simply select a date and time that works best for you from the available options, provide some basic information, and confirm your appointment. If you have any specific preferences or requirements, feel free to mention them in the booking form, and we'll do our best to accommodate your needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger onClick={()=>{
            captureFAQMeet("2")
          }} className="text-left text-lg sm:text-2xl text-[#14B8A6] ">What are your available meeting times and how long do meetings typically last?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
          Our team understands the importance of flexibility and convenience when it comes to scheduling meetings. We offer a range of available meeting times to suit various schedules and time zones. Typically, our meetings last between 30 minutes to an hour, depending on the nature of the discussion and the agenda items. However, we're always willing to adjust the meeting duration based on your availability and the topics you'd like to cover.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger onClick={()=>{
            captureFAQMeet("3")
          }} className="text-left text-lg sm:text-2xl text-[#14B8A6]">Is there a fee for scheduling a meeting, and what is your cancellation policy?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
          Scheduling a meeting with our team is completely free of charge. We believe in providing accessible and hassle-free access to our services, including consultations and discussions. However, we kindly ask that you provide us with at least 24 hours' notice if you need to cancel or reschedule your appointment. This allows us to adjust our schedule accordingly and offer the appointment slot to another client if needed. Please refer to our cancellation policy for more details on any potential fees or penalties associated with late cancellations or no-shows.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-left text-lg sm:text-2xl text-[#14B8A6]">What kind of businesses do you usually work with?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
            We typically work with startups, e-commerce brands, service providers, and growing companies across different industries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-left text-lg sm:text-2xl text-[#14B8A6]">Do I need to have marketing experience to work with you?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
            Not at all. We explain everything clearly and help you make informed decisions, whether you're new or experienced.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-left text-lg sm:text-2xl text-[#14B8A6]">Do you offer one-time services or only retainers?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
            Both. You can opt for project-based work or ongoing support based on what your business needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-left text-lg sm:text-2xl text-[#14B8A6]">Can you work with our in-house marketing team?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
            Yes. We often collaborate with internal teams to fill gaps, offer strategic support, or execute specific tasks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-left text-lg sm:text-2xl text-[#14B8A6]">How involved will I need to be during the process?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
            We'll need your input early on to understand your goals. After that, we manage the execution and keep you updated regularly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-left text-lg sm:text-2xl text-[#14B8A6]">Will I get regular reports and updates?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
            Yes. We share easy-to-understand reports so you can track performance and ROI clearly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="text-left text-lg sm:text-2xl text-[#14B8A6]">Can you redesign or build a website from scratch?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
            Yes. We build websites tailored to your brand, optimised for performance, SEO, and user experience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger className="text-left text-lg sm:text-2xl text-[#14B8A6]">How do you decide what strategy is right for my business?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
            We base our strategy on your business goals, audience behaviour, industry trends, and past data (if available).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger className="text-left text-lg sm:text-2xl text-[#14B8A6]">Is there a minimum budget required to work with you?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
            We're flexible, but we'll guide you on what budget makes sense for your goals and expected results.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger className="text-left text-lg sm:text-2xl text-[#14B8A6]">Do you work with international clients or only in India?</AccordionTrigger>
          <AccordionContent className="text-sm sm:text-lg">
            We work with clients globally and adapt strategies based on regional trends and platform dynamics.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  
