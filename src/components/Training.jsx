import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

const Training = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto flex flex-col justify-center items-center text-white text-center h-screen">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold mt-10">
          TRAINING
        </h1>
        <p className="text-sm font-medium tracking-[.35em] bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-orange-500">
          EXPLORE NOW
        </p>
        <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical mt-10 text-start mx-2">
          <li>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end">
              <time className="font-mono italic">May 2024 - Jul 2024</time>
              <div className="text-lg font-black">
                <HoverCard>
                  <HoverCardTrigger className="hover:underline hover:underline-offset-4">
                    Mobile App Development React Native
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[500px]">
                    <ul className="list-disc text-sm text-start mx-3">
                      <li>
                        Developed websites using React components, resulting in
                        85% proficiency in creating dynamic web applications.
                      </li>
                      <li>
                        Applied React knowledge through hands-on projects like
                        ToDo, Note App, and WeatherApp, and Movie App. Gaining
                        practical experience and proficiency in real-case
                        scenarios.
                      </li>
                      <li>
                        Studied React Native lifecycle methods and mobile UI
                        component development, achieving an 85% proficiency in
                        mobile application development.
                      </li>
                      <li>
                        Integrated APIs using Axios and developed a React Native
                        + TypeScript application, demonstrating advanced skills
                        and achieving 95% proficiency in application
                        development.
                      </li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <p className="mb-5">Digital Talent Scholarship x Progate</p>
            </div>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
          </li>
          <li>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end ">
              <time className="font-mono italic">Sep 2023 - Nov 2023</time>
              <div className="text-lg font-black">
                <HoverCard>
                  <HoverCardTrigger className="hover:underline-offset-4 hover:underline">
                    Bootcamp Backend Javascript
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[500px]">
                    <ul className="list-disc mx-3 text-sm">
                      <li>
                        Create a simple program that performs routing,
                        middleware, and views using Express.js and implements
                        token-based authentication using JWT.
                      </li>
                      <li>
                        Develop features for image upload and document upload
                        (PDF).
                      </li>
                      <li>
                        Implement the generation and download of QR Codes and
                        integrate with cloud storage services like Imagekit.io.
                      </li>
                      <li>
                        Practice sending emails through a Node.js application
                        using Nodemailer.
                      </li>
                      <li>
                        Deploy the Express.js application using Railway.app.
                      </li>
                      <li>
                        Create API documentation using swagger-ui-express.
                      </li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <p className="mb-5">Digital Talent Scholarship x Binar Academy</p>
            </div>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
          </li>
          <li>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start md:text-end ">
              <time className="font-mono italic">Jun 2023 - Aug 2023 </time>
              <div className="text-lg font-black">
                <HoverCard>
                  <HoverCardTrigger className="hover:underline hover:underline-offset-4">
                    IT Support
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[470px]">
                    <ul className="list-disc text-sm text-start mx-3">
                      <li>Dasar-Dasar Dukungan Teknis</li>
                      <li>Seluk Beluk Jaringan Komputer</li>
                      <li>
                        Sistem Operasi dan Anda: Menjadi Pengguna yang Berdaya
                      </li>
                      <li>Administrasi Sistem dan Layanan Infrastruktur TI</li>
                      <li>
                        Keamanan IT: Pertahanan terhadap Kejahatan Digital
                      </li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <p className="mb-5">Digital Talent Scholarship x Coursera</p>
            </div>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
          </li>
          <li>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end ">
              <time className="font-mono italic">Mar 2023 - Apr 2023</time>
              <div className="text-lg font-black">
                <HoverCard>
                  <HoverCardTrigger className="hover:underline-offset-4 hover:underline">
                    Intro to Front-end Web Developer
                  </HoverCardTrigger>
                  <HoverCardContent className="w-[500px]">
                    <ul className="list-disc mx-3 text-sm">
                      <li>
                        Learning the Basics of HTML, CSS, JavaScript, and Git
                      </li>
                      <li>
                        Creating a Modern and Responsive Web Page based on a
                        pre-determined theme with team members within 3 days
                      </li>
                      <li>
                        Developing a Calculator Application using JavaScript
                        within 3 days
                      </li>
                    </ul>
                  </HoverCardContent>
                </HoverCard>
              </div>
              <p>Digital Talent Scholarship x Progate</p>
            </div>
            <hr className="bg-gradient-to-br from-purple-500 to-orange-600" />
          </li>
        </ul>
      </div>
    </>
  );
};

export default Training;
