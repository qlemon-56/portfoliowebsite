import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const interests = ["books", "podcasts", "creators"];

export function InterestSidebar() {
  return (
    <aside id="areatwo" className="w-1/4 flex-auto overflow-hidden pl-5 ml-2 border">
      <div className="w-full pt-5">
        <span className="font-bold">interests</span>
        <div className="space-y-1">
          <Accordion type="single" collapsible>
            {interests.map((label) => (
              <AccordionItem value={label} key={label}>
                <AccordionTrigger>{label}</AccordionTrigger>
                <AccordionContent />
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </aside>
  );
}
