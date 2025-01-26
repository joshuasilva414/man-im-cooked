import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function WebResources() {
  return (
    <Accordion type="single" collapsible className="w-1/2" >
          <AccordionItem value="web-resources">
            <AccordionTrigger className="text-xl">
              Web Resources
            </AccordionTrigger>
            <AccordionContent>
              <div className="flex flex-col space-y-2">
                {/* 1. Khan Academy */}
                <div>
                  <a
                    href="https://www.khanacademy.org/"
                    className="text-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Khan Academy
                  </a>
                </div>

                {/* 2. Math Is Fun */}
                <div>
                  <a
                    href="https://www.mathsisfun.com/"
                    className="text-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Math Is Fun
                  </a>
                </div>

                {/* 3. WolframAlpha */}
                <div>
                  <a
                    href="https://www.wolframalpha.com/"
                    className="text-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    WolframAlpha
                  </a>
                </div>

                {/* 4. Desmos */}
                <div>
                  <a
                    href="https://www.desmos.com/"
                    className="text-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Desmos
                  </a>
                </div>

                {/* 5. Purplemath */}
                <div>
                  <a
                    href="https://www.purplemath.com/"
                    className="text-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Purplemath
                  </a>
                </div>

                {/* 6. MathWorld */}
                <div>
                  <a
                    href="https://mathworld.wolfram.com/"
                    className="text-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    MathWorld
                  </a>
                </div>

                {/* 7. Paul's Online Math Notes */}
                <div>
                  <a
                    href="https://tutorial.math.lamar.edu/"
                    className="text-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Paul&apos;s Online Math Notes
                  </a>
                </div>

                {/* 8. Coolmath */}
                <div>
                  <a
                    href="https://www.coolmath.com/"
                    className="text-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coolmath
                  </a>
                </div>

                {/* 9. Brilliant */}
                <div>
                  <a
                    href="https://brilliant.org/"
                    className="text-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Brilliant
                  </a>
                </div>

                {/* 10. Coursera (Math Courses) */}
                <div>
                  <a
                    href="https://www.coursera.org/search?query=math"
                    className="text-sky-500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coursera Math
                  </a>
                </div>
              </div>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
    )
}