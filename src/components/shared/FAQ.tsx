import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"
  import ReactGA from "react-ga4"
  export function AccordionDemo() {
    const captureFAQSPrice = (num:string)=>{
      ReactGA.event({
        category: num,
        action: 'FAQ Price',
      });
    }
    return (
      <Accordion type="single" collapsible className="w-[50vw] mb-10">
        <AccordionItem value="item-1">
          <AccordionTrigger onClick={()=>{
            captureFAQSPrice("1")
          }} className="text-2xl text-[#14B8A6] ">What factors influence the pricing of your services?</AccordionTrigger>
          <AccordionContent className="text-xl">
          Our pricing is influenced by several factors tailored to the specific needs of each client. These factors may include the complexity of the project, the scope of work involved, the level of expertise required, and any additional resources or materials needed. We take into account these variables to provide fair and competitive pricing while ensuring the highest quality of service delivery.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger onClick={()=>{
            captureFAQSPrice("2")
          }} className="text-2xl text-[#14B8A6] ">Are there any hidden fees or additional charges beyond the quoted price?</AccordionTrigger>
          <AccordionContent className="text-xl">
          We believe in transparency and strive to provide upfront pricing without any hidden fees or surprises. The quoted price covers all essential aspects of the service as discussed during our initial consultation. However, in some cases, additional services or unforeseen circumstances may arise, which could incur extra charges. Rest assured, we communicate openly about any potential additional costs before proceeding with the service, ensuring full transparency and clarity throughout the process.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger onClick={()=>{
            captureFAQSPrice("3")
          }} className="text-2xl text-[#14B8A6]">Do you offer discounts or packages for bundled services?</AccordionTrigger>
          <AccordionContent className="text-xl">
          Yes, we offer various discounts and packages tailored to meet the diverse needs and budgets of our clients. Depending on the scope of services required, we provide customized pricing packages and special offers designed to provide added value and cost savings. Additionally, for clients seeking multiple services or long-term partnerships, we offer competitive discounts and incentives to enhance the overall affordability and value of our services. Feel free to inquire about our available discounts and packages to find the best solution for your specific requirements.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-4">
          <AccordionTrigger className="text-2xl text-[#14B8A6]">What kind of businesses do you usually work with?</AccordionTrigger>
          <AccordionContent className="text-xl">
            We typically work with startups, e-commerce brands, service providers, and growing companies across different industries.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-5">
          <AccordionTrigger className="text-2xl text-[#14B8A6]">Do I need to have marketing experience to work with you?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Not at all. We explain everything clearly and help you make informed decisions, whether you're new or experienced.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-6">
          <AccordionTrigger className="text-2xl text-[#14B8A6]">Do you offer one-time services or only retainers?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Both. You can opt for project-based work or ongoing support based on what your business needs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-7">
          <AccordionTrigger className="text-2xl text-[#14B8A6]">Can you work with our in-house marketing team?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes. We often collaborate with internal teams to fill gaps, offer strategic support, or execute specific tasks.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-8">
          <AccordionTrigger className="text-2xl text-[#14B8A6]">How involved will I need to be during the process?</AccordionTrigger>
          <AccordionContent className="text-xl">
            We'll need your input early on to understand your goals. After that, we manage the execution and keep you updated regularly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-9">
          <AccordionTrigger className="text-2xl text-[#14B8A6]">Will I get regular reports and updates?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes. We share easy-to-understand reports so you can track performance and ROI clearly.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-10">
          <AccordionTrigger className="text-2xl text-[#14B8A6]">Can you redesign or build a website from scratch?</AccordionTrigger>
          <AccordionContent className="text-xl">
            Yes. We build websites tailored to your brand, optimised for performance, SEO, and user experience.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-11">
          <AccordionTrigger className="text-2xl text-[#14B8A6]">How do you decide what strategy is right for my business?</AccordionTrigger>
          <AccordionContent className="text-xl">
            We base our strategy on your business goals, audience behaviour, industry trends, and past data (if available).
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-12">
          <AccordionTrigger className="text-2xl text-[#14B8A6]">Is there a minimum budget required to work with you?</AccordionTrigger>
          <AccordionContent className="text-xl">
            We're flexible, but we'll guide you on what budget makes sense for your goals and expected results.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-13">
          <AccordionTrigger className="text-2xl text-[#14B8A6]">Do you work with international clients or only in India?</AccordionTrigger>
          <AccordionContent className="text-xl">
            We work with clients globally and adapt strategies based on regional trends and platform dynamics.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    )
  }
  