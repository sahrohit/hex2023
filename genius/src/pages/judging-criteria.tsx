import Head from 'next/head'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { MobileActions } from '@/components/Actions'

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

      <article className="prose prose-zinc mx-auto">
        <h1>JUDGING CRITERIA</h1>
        <p>
          • Scores for each criteria will be assigned on a scale of 1 to 5. •
          Judges will have the discretion to assign partial points. • Scores
          will be tallied and the winners will be determined based on the total
          score.
        </p>
        <h1>Pitch (Total Score: 15 Points)</h1>
        <h2>A. Balanced (1-5 Points)</h2>
        <ol>
          <li>
            The pitch is unbalanced and does not cover all the necessary
            elements or does not present them in a clear and concise way.
          </li>
          <li>
            The pitch covers most of the necessary elements but some key
            elements are missing or not well-developed.
          </li>
          <li>
            The pitch covers all the necessary elements in a clear and concise
            way, demonstrating a deep understanding of the problem, solution,
            product/market fit, business model, traction, financials, team, and
            funding request.
          </li>
          <li>
            The pitch covers all the necessary elements in a clear and concise
            way, and the team presents them with enthusiasm and passion.
          </li>
          <li>
            The pitch covers all the necessary elements in a clear and concise
            way, and the team presents them with exceptional enthusiasm,
            passion, and creativity.
          </li>
        </ol>
        <h2>B. Compelling (1-5 Points)</h2>
        <ol>
          <li>
            The pitch is not engaging and lacks storytelling or other effective
            techniques, making it hard for the audience to stay interested.
          </li>
          <li>
            The pitch is somewhat engaging and uses some storytelling or other
            effective techniques, but could be improved to make it more
            compelling.
          </li>
          <li>
            The pitch is highly engaging and effectively uses storytelling or
            other effective techniques to capture and maintain the audience’s
            attention.
          </li>
          <li>
            The pitch is highly engaging and includes a creative and innovative
            approach to storytelling or other effective techniques that
            captivate the audience.
          </li>
          <li>
            The pitch is exceptional, delivering a highly creative and
            innovative approach to storytelling or other effective techniques
            that thoroughly captivate the audience.
          </li>
        </ol>
        <h2>C. Interactive (1-5 Points)</h2>
        <ol>
          <li>
            The team struggles to manage the Q&amp;A and callbacks, appearing
            unsure or unprepared for questions.
          </li>
          <li>
            The team manages the Q&amp;A and callbacks adequately, but could
            improve in terms of confidence and clarity in their responses.
          </li>
          <li>
            The team manages the Q&amp;A and callbacks confidently and
            successfully, effectively addressing any questions or concerns
            raised by the judges or audience.
          </li>
          <li>
            The team manages the Q&amp;A and callbacks with exceptional
            confidence and clarity, effectively responding to all questions or
            concerns raised by the judges or audience.
          </li>
          <li>
            The team manages the Q&amp;A and callbacks with exceptional
            confidence, clarity and creativity, effectively responding to all
            questions or concerns raised by the judges or audience and
            delivering additional insights or ideas that impress the judges.
          </li>
        </ol>
        <h1>Code Quality (Total Score: 15 Points)</h1>
        <h2>A. Functionality (1-5 Points)</h2>
        <ol>
          <li>
            The code does not function as intended or has major flaws that
            prevent it from working properly.
          </li>
          <li>
            The code works but has minor bugs or errors that affect its
            functionality.
          </li>
          <li>
            The code works as intended and is functional, but could be improved
            in terms of efficiency or accuracy.
          </li>
          <li>
            The code is highly functional, efficient, and accurate, with minimal
            or no bugs or errors.
          </li>
          <li>
            The code is exceptional, demonstrating a highly efficient and
            accurate implementation of the intended functionality, with a high
            degree of complexity or sophistication.
          </li>
        </ol>
        <h2>B. Readability (1-5 Points)</h2>
        <ol>
          <li>
            The code is unreadable and difficult to understand, with poor naming
            conventions, lack of comments or documentation, and inconsistent
            formatting.
          </li>
          <li>
            The code is somewhat readable, but could be improved with better
            naming conventions, more comments or documentation, and more
            consistent formatting.
          </li>
          <li>
            The code is generally readable and easy to understand, with good
            naming conventions, sufficient comments or documentation, and
            consistent formatting.
          </li>
          <li>
            The code is highly readable, with excellent naming conventions,
            thorough comments or documentation, and consistent, well-organized
            formatting.
          </li>
          <li>
            The code is exceptional, demonstrating outstanding readability and
            clarity, with clear, concise naming conventions, thorough, detailed
            comments or documentation, and impeccable formatting.
          </li>
        </ol>
        <h2>C. Modularity (1-5 Points)</h2>
        <ol>
          <li>
            The code is not modular and is difficult to maintain, with a lack of
            separation of concerns or proper organization.
          </li>
          <li>
            The code is somewhat modular, but could be improved with better
            separation of concerns or organization.
          </li>
          <li>
            The code is generally modular and organized, with reasonable
            separation of concerns and organization.
          </li>
          <li>
            The code is highly modular and well-organized, with clear separation
            of concerns and proper organization.
          </li>
          <li>
            The code is exceptional, demonstrating exceptional modularity and
            organization, with outstanding separation of concerns and
            exceptional organization.
          </li>
        </ol>
        <h1>Innovation (Total Score: 15 Points)</h1>
        <h2>A. Originality (1-5 Points)</h2>
        <ol>
          <li>The idea is not original and has been done before.</li>
          <li>
            The idea is somewhat original, but not highly unique or novel.
          </li>
          <li>
            The idea is moderately original with some unique or novel elements.
          </li>
          <li>
            The idea is highly original, with many unique or novel elements.
          </li>
          <li>
            The idea is exceptional, demonstrating exceptional originality and
            innovation.
          </li>
        </ol>
        <h2>B. Compelling (1-5 Points)</h2>
        <ol>
          <li>
            The idea has little to no impact and does not solve a significant
            problem or meet a significant need.
          </li>
          <li>
            The idea has some impact, but could be more significant in terms of
            addressing a pressing problem or need.
          </li>
          <li>
            The idea has moderate impact, with potential to address a
            significant problem or need.
          </li>
          <li>
            The idea has significant impact, with clear potential to address a
            pressing problem or need.
          </li>
          <li>
            The idea has exceptional impact, with outstanding potential to
            address a significant problem or need.
          </li>
        </ol>
        <h2>C. Feasibility (1-5 Points)</h2>
        <ol>
          <li>
            The idea is not feasible and cannot realistically be implemented.
          </li>
          <li>
            The idea is somewhat feasible, but would require significant
            resources or development to be implemented.
          </li>
          <li>
            The idea is moderately feasible, with potential to be implemented
            with some resources and development.
          </li>
          <li>
            The idea is highly feasible, with clear potential to be implemented
            with reasonable resources and development.
          </li>
          <li>
            The idea is exceptional, demonstrating exceptional feasibility and
            potential for implementation.
          </li>
        </ol>
        <h1>Practicality (Total Score: 15 Points)</h1>
        <h2>A. Implementation (1-5 Points)</h2>
        <ol>
          <li>
            The solution is not implementable and cannot realistically be
            developed or deployed.
          </li>
          <li>
            The solution is somewhat implementable, but would require
            significant resources or development to be realized.
          </li>
          <li>
            The solution is moderately implementable, with potential to be
            developed and deployed with some resources and development.
          </li>
          <li>
            The solution is highly implementable, with clear potential to be
            developed and deployed.
          </li>
          <li>
            The solution is exceptional, demonstrating exceptional feasibility
            and potential for development and deployment.
          </li>
        </ol>
        <h2>B. Scalability (1-5 Points)</h2>
        <ol>
          <li>
            The solution is not scalable and would not work for larger audiences
            or markets.
          </li>
          <li>
            The solution is somewhat scalable, but would require significant
            modification or adaptation to work for larger audiences or markets.
          </li>
          <li>
            The solution is moderately scalable, with potential to be adapted or
            modified to work for larger audiences or markets.
          </li>
          <li>
            The solution is highly scalable, with clear potential to work for
            larger audiences or markets with minimal modification or adaptation.
          </li>
          <li>
            The solution is exceptional, demonstrating outstanding scalability
            and potential for working for larger audiences or markets.
          </li>
        </ol>
        <h2>C. Sustainability (1-5 Points)</h2>
        <ol>
          <li>
            The solution is not sustainable and would not work in the long term.
          </li>
          <li>
            The solution is somewhat sustainable, but would require significant
            modification or adaptation to work in the long term.
          </li>
          <li>
            The solution is moderately sustainable, with potential to be adapted
            or modified to work in the long term.
          </li>
          <li>
            The solution is highly sustainable, with clear potential to work in
            the long term with minimal modification or adaptation.
          </li>
          <li>
            The solution is exceptional, demonstrating outstanding
            sustainability and potential for working in the long term.
          </li>
        </ol>
        <h1>Team Collaboration (Total Score: 10 Points)</h1>
        <h2>A. Communication (1-5 Points)</h2>
        <ol>
          <li>
            The team had poor communication and had difficulty working together.
          </li>
          <li>
            The team had some communication issues, but was able to work through
            them.
          </li>
          <li>
            The team had adequate communication and was able to work together
            effectively.
          </li>
          <li>
            The team had good communication and worked together very well.
          </li>
          <li>
            The team had exceptional communication and was able to work together
            seamlessly.
          </li>
        </ol>
        <h2>B. Coordination (1-5 Points)</h2>
        <ol>
          <li>
            The team had poor coordination and had difficulty working on tasks
            together.
          </li>
          <li>
            The team had some coordination issues, but was able to work through
            them.
          </li>
          <li>
            The team had adequate coordination and was able to work together on
            tasks effectively.
          </li>
          <li>
            The team had good coordination and worked together on tasks very
            well.
          </li>
          <li>
            The team had exceptional coordination and was able to work together
            on tasks seamlessly
          </li>
        </ol>
      </article>

      <Footer />
    </>
  )
}
export default CodeOfConduct
