import { Disclosure } from "@headlessui/react"
import { MinusSmallIcon, PlusSmallIcon } from "@heroicons/react/24/outline"
import Heading from "./Heading"

const faqs = [
  {
    question: "What is HExGenius?",
    answer:
      "HExGenius is an event at Himalaya College of Engineering where individuals or teams collaborate to bring forward software or hardware-based solutions to a problem and work intensively for a set amount of time.",
  },
  {
    question: "How Long will HExGenius last?",
    answer:
      "While HExGenius is a 36-Hour program, HEx also has a lot of other fun, team-building events and other activites lined up for the participants. You can see the countdown on top of this page, to see how much time is left for HExGenius to start.",
  },
  {
    question: "Who can participate in HExGenius?",
    answer:
      "Anyone can participate in HExGenius, regardless of their background or skill level. But do make sure that you have the skill set to make your solution a reality.",
  },
  {
    question: "How will HExGenius be judged?",
    answer:
      "HExGenius has a diverse set of judges eager to know about your solutions. They will judge you on the basis of multiple factors like innovation, technical difficulty and user experience. Additionally, your teamwork and presentation skills might also be taken into consideration. Further details are available at https://genius.hexhimalaya.np/judging-criteria",
  },
  {
    question: "Can I work on a Project I've already done before HExGenius?",
    answer:
      "While we cannot stop ideas generated outside HExGenius from being used, we require that all work on the projects be done during the event. No pre-existing projects will be allowed to be used.",
  },
  {
    question: "What should I bring to HExGenius?",
    answer:
      "You should bring any necessary equipment or tools for your project, such as a laptop or hardware components. Additionally, you may also want to bring a water bottle, sanitary necessities, and comfortable clothing for the long hours of relentless innovation.",
  },
  {
    question: "Will Food and Drinks be provided at HExGenius?",
    answer: "Yes, you will be provided with food and momentary refreshment.",
  },
  {
    question: "What do I do if I get stuck on a problem during HexGenius?",
    answer:
      "With our experienced set of guides and mentors, HExGenius will make sure that if you encounter a problem, it will not go unsolved. Just don't be reluctant to reach out to us if you're facing a problem.",
  },
  {
    question: "What about APIs?",
    answer:
      "You are permitted to use either your own or third-party APIs, provided that your project is entirely original and has not been used before.",
  },
  {
    question: "I have additional questions, how can I ask them?",
    answer:
      "No need to worry. We are available to help and answer any questions you may have. You can send us an call at 9840556101, 9865071231 & 9818119950 or contact us through our social media accounts.",
  },
]

const FAQ = () => {
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:py-40 lg:px-8">
        <div className="mx-auto max-w-4xl divide-y divide-gray-900/10">
          <Heading order={2}>Frequently asked questions</Heading>
          <dl className="mt-10 space-y-6 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <Disclosure as="div" key={faq.question} className="pt-6">
                {({ open }) => (
                  <>
                    <dt>
                      <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                        <span className="text-base font-semibold leading-7">
                          {faq.question}
                        </span>
                        <span className="ml-6 flex h-7 items-center">
                          {open ? (
                            <MinusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          ) : (
                            <PlusSmallIcon
                              className="h-6 w-6"
                              aria-hidden="true"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                    </dt>
                    <Disclosure.Panel as="dd" className="mt-2 pr-12">
                      <p className="text-base leading-7 text-gray-600">
                        {faq.answer}
                      </p>
                    </Disclosure.Panel>
                  </>
                )}
              </Disclosure>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}

export default FAQ
