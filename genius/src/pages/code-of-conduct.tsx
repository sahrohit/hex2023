import Head from "next/head"

import { Footer } from "@/components/Footer"
import { Header } from "@/components/Header"
import Heading from "@/components/Heading"
import { MobileActions } from "@/components/Actions"
import Image from "next/image"
import { Container } from "@/components/Container"
import backgroundImage from "@/images/background.jpg"

const CodeOfConduct = () => {
  return (
    <>
      <Head>
        <title>HExGenius - Let&apos;s get Hacking!</title>
        <meta
          name="description"
          content="HExGenius: Empowering young innovators through a 36-hour hackathon where diverse talents unite to solve real-world issues. Join the global force for change!"
        />
      </Head>
      <Header />

      <MobileActions />

      <div className="relative pb-20 pt-10 sm:py-24">
        <div className="absolute inset-x-0 -bottom-14 -top-48 overflow-hidden bg-indigo-50">
          <Image
            className="absolute left-0 top-0 translate-x-[-55%] translate-y-[-10%] -scale-x-100 sm:left-1/2 sm:translate-x-[-98%] sm:translate-y-[-6%] lg:translate-x-[-106%] xl:translate-x-[-122%]"
            src={backgroundImage}
            alt=""
            width={918}
            height={1495}
            priority
            unoptimized
          />
          <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white" />
          <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white" />
        </div>
        <Container className="relative">
          <div className="mx-auto max-w-2xl lg:max-w-4xl lg:px-12">
            <div className="mt-6 space-y-6 pl-8 font-display text-2xl tracking-tight text-blue-900">
              <Heading order={1}>Why a Code of Conduct?</Heading>
              <p>
                We, the developer community of Nepal, are committed to nurturing
                an inclusive and safe environment for hackathons and our
                community as a whole. It is our responsibility to create spaces
                where individuals who face discrimination, harassment, or
                intimidation can feel protected and welcomed. We believe that
                hackathons have the power to not only drive technological
                progress but also shape our culture. Therefore, this Code of
                Conduct serves as a testament to our ongoing efforts to address
                these issues and reinforce our commitment to finding solutions.
              </p>
              <Heading order={1}>Applicability</Heading>
              <p>
                All participants, sponsors, and other stakeholders in HExGenius,
                as well as any projects created here, are subject to this Code
                of Conduct.
              </p>
              <Heading order={1}>TLDR;</Heading>
              <p>
                HExGenius is devoted to fostering an inclusive environment for
                all participants in our hackathons, irrespective of their
                gender, gender identity and expression, age, sexual orientation,
                disability, physical appearance, body size, color, ethnicity,
                religion (or lack thereof), or technological preferences. We
                strictly prohibit any form of harassment towards our
                participants. In the context of workshops, presentations, or
                online platforms associated with HExGenius, the use of profane
                language and explicit imagery is not permitted. Any participant
                found violating these guidelines may face disciplinary action or
                removal from the event. We are fully committed to creating a
                supportive and welcoming developer community where individuals
                from diverse backgrounds are respected and encouraged to
                participate.
              </p>
              <Heading order={1}>No Plagiarism or Re-Use of Past Work</Heading>
              <p>
                We encourage you to submit projects only prepared in the
                duration of the hackathon. Plagiarism and re-using past work are
                strictly prohibited. We enforce originality and professionalism
                in all our endeavors.
              </p>
              <p>
                If upon inspection, it is found that the project has re-used
                code, the organizer hold all the right to disqualify the
                submission from winning awards.
              </p>
              <Heading order={1}>Rules for Participants:</Heading>
              <ol>
                <li>
                  Participants will receive a designated theme, and their
                  projects must adhere to that specific theme.
                </li>
                <li>
                  A minimum of two participants must be seated at their
                  designated table at all times during the event.
                </li>
                <li>
                  Experienced judges will evaluate the final projects using a
                  set of judging criteria.
                </li>
                <li>
                  Participants are requested to bring their personal belongings
                  such as laptops, water bottles, hygiene essentials, and any
                  additional peripherals they may require.
                </li>
                <li>
                  Organizers have every right to amend the existing rules or
                  introduce new rules at any time before/during/after the
                  contest. Any such rules must be followed by all the members of
                  each team.
                </li>
                <li>
                  Participants should document their projects, including the
                  development process, code explanations, and any external
                  resources used.
                </li>
                <li>
                  Participants have the chance to interact with mentors through
                  Q&amp;A sessions and receive guidance throughout the program.
                </li>
                <li>
                  Participants are expected to demonstrate respect for the
                  judge’s decisions and feedback, regardless of the outcome or
                  desired recognition.
                </li>
                <li>
                  Participants are expected to maintain a tidy and
                  well-organized workspace, demonstrating respect for the
                  physical environment and equipment.
                </li>
                <li>
                  Participants must follow any instructions or announcements
                  made by the hackathon organizers during the event.
                </li>
                <li>
                  Non-authorized participants are prohibited from contributing
                  to the projects.
                </li>
                <li>
                  Participants must refrain from interfering with the progress
                  or work of other teams.
                </li>
                <li>
                  By participating in this contest, you agree that you have read
                  the above rules and fully agree to adhere to them.
                </li>
              </ol>
              <Heading order={1}>Rules for Team Formation:</Heading>
              <ol>
                <li>Teams can have a maximum of four members.</li>
                <li>Each team must have at least two members.</li>
                <li>
                  Team members must give their real names, personal email id,
                  and phone numbers in the registration form to verify their
                  identities and to collect prizes.
                </li>
                <li>
                  Changes to team members are not allowed after team
                  confirmation unless the committee finds the reason to be
                  legitimate.
                </li>
              </ol>
              <Heading order={1}>Rules for Project Development</Heading>
              <ol>
                <li>
                  No development should begin before the event&#x27;s actual
                  date and time. Any teams found violating this condition will
                  be disqualified immediately. Yet, it is recommended that you
                  plan ahead of time and structure your idea.
                </li>
                <li>
                  Written documentation and design sketches are permitted.
                </li>
                <li>
                  Any software development tools, game engines, IDE, and
                  programming language that conforms to the Creative Commons
                  License agreement standard or is freely available and/or you
                  have a license to use them can be used during the event.
                </li>
                <li>Upon request, proof of license must be provided.</li>
                <li>
                  A team cannot produce software that encourages racism,
                  sexuality, nudity, or other code of conduct violations.
                </li>
                <li>
                  Version Control System like Git must be used with frequent
                  commits to remote like Github, Gitlabs etc are highly
                  encouraged to promote active participation and collaboration.
                </li>
                <li>
                  Please note that any commits made after the submission period
                  (5 AM, 21<sup>st</sup> July) will not be considered.
                </li>
              </ol>
              <Heading order={1}>No Harassment Policy</Heading>
              <p>
                We have a zero-tolerance policy towards any type of harassment
                directed at hackathon participants. This includes but is not
                limited to offensive verbal discrimination, public display of
                sexual material in public settings, deliberate disruption,
                intentional intimidation, stalking, inappropriate physical
                contact, unwanted sexual advances, and unauthorized capturing of
                pictures or audio/video recordings without the subject&#x27;s
                consent.
              </p>
              <Heading order={1}>Reporting Guidelines</Heading>
              <p>
                If you encounter any form of harassment, witness someone else
                experiencing harassment, have concerns about the safety of the
                event and the well-being of participants, observe any violations
                of this Code of Conduct, come across suspicious activities, or
                have any other concerns, please reach out to a staff member
                immediately. We are committed to assisting participants in
                contacting security or exploring alternative measures to ensure
                the safety and security of individuals facing harassment during
                the hackathon.
              </p>
              <p>
                HExGenius staff members can be identified by their unique
                uniforms and IDs.
              </p>
              <p>
                <em>All reports will be treated confidentially.</em>
              </p>
              <Heading order={1}>Consequences of Violations</Heading>
              <p>
                Failure to adhere to the aforementioned Rules and Code of
                Conduct may lead to the following consequences, as determined by
                the organizers:
              </p>
              <ul>
                <li>The offending team may be disqualified.</li>
                <li>
                  Their access to HexGenius resources and/or provided facilities
                  may be revoked.
                </li>
                <li>
                  The organizers reserve the right to report their actions to
                  local law enforcement.
                </li>
              </ul>
              <Heading order={1}>Addressing Grievances</Heading>
              <p>
                If you believe you have been falsely or unfairly accused of
                breaching this Code of Conduct, please alert a member of the
                organizing team and provide a brief summary of your grievance.
                Our committee will handle your complaint in accordance with our
                existing internal governing policies.
              </p>
              <hr />
              <p>If you have questions regarding your application, contact:</p>
              <p>
                Dristi Gurung: <a href="tel:9840556101">9840556101</a>
                <br />
                Abin Timilsina : <a href="tel:9865071231">9865071231</a>
                <br />
                Sandeep Joshi : <a href="tel:9818119950">9818119950</a>
                <br />
              </p>
            </div>
          </div>
        </Container>
      </div>

      <Footer />
    </>
  )
}
export default CodeOfConduct
