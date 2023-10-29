import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  Card,
} from 'react-bootstrap'
import { AdminLayout } from '@layout'
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons"
import Link from 'next/link'

const Home = () => (
  <AdminLayout>
    <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />
    <div className="row row0 flex flex-row flex-nowrap gap-4 w-full">
      <div 
        className="col-sm-12 col-lg-12 rounded-lg bg-fixed bg-cover bg-no-repeat shadow-md shadow-indigo-50/50 basis-full"  
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3')"}}>
        <Card className="bg-transparent border-none">
          <Card.Body>
            <br/>
            <br/>
            <h1 className='font-sans text-3xl tracking-wide text-left font-medium'>
              Mahmud Oyshik
            </h1>
            <br/>
            <br/>
            <br/>
            <h3 className='text-2xl tracking-wide text-left font-sans font-medium'>
              MBBS at Bangladesh Medical College | Debater | Digital Art
            </h3>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              I am Oyshik, a second-year MBBS student at Bangladesh Medical College, where I am passionately pursuing my dream of becoming a medical professional. My journey in the field of medicine began with a deep-rooted fascination for human biology and a strong desire to make a positive impact on people&apos;s lives. As an MBBS student, I am engaged in a rigorous academic curriculum, which includes a comprehensive study of anatomy, physiology, pharmacology, and clinical skills. This educational journey has not only broadened my horizons but has also instilled in me a sense of responsibility and compassion for patient care.
            </p>
          </Card.Body>
          <br/>
        </Card>
      </div>
    </div>
    <br/>
    <div className="row row1">
      
      <Link href="https://www.instagram.com/oii.seek/" target="_blank" className="rounded-lg bg-red-400 basis-1/5">
      <div>
        <Card className="ann bg-transparent border-none">
          <Card.Body>
            <h3 className='font-sans text-3xl tracking-wide text-left font-medium text-gray-100'>
            <FontAwesomeIcon icon={faInstagram}/>   Instagram
            </h3>
          </Card.Body>
        </Card>
      </div>
      </Link>

      <Link href="https://www.facebook.com/mahmud.oyshik/" target="_blank" className="rounded-lg bg-teal-400 basis-1/5">
      <div>
        <Card className="ann bg-transparent border-none">
          <Card.Body>
            <h3 className='font-sans text-3xl tracking-wide text-left font-medium text-gray-100'>
            <FontAwesomeIcon icon={faFacebook}/>   Facebook
            </h3>
          </Card.Body>
        </Card>
      </div>
      </Link>

      <Link href="https://github.com/moyshik7" target="_blank" className="rounded-lg bg-orange-400 basis-1/5">
      <div>
        <Card className="ann bg-transparent border-none">
          <Card.Body>
            <h3 className='font-sans text-3xl tracking-wide text-left font-medium text-gray-100'>
              <FontAwesomeIcon icon={faGithub}/>   Github
            </h3>
          </Card.Body>
        </Card>
      </div>
      </Link>

      <Link href="https://www.linkedin.com/in/moyshik" target="_blank" className="rounded-lg bg-indigo-400 basis-1/5">
      <div>
        <Card className="ann bg-transparent border-none">
          <Card.Body>
            <h3 className='font-sans text-3xl tracking-wide text-left font-medium text-gray-100'>
            <FontAwesomeIcon icon={faLinkedin}/>   Linkedin
            </h3>
          </Card.Body>
        </Card>
      </div>
      </Link>

      <Link 
        href="https://discord.com/users/584309117380853770"
        target="_blank" 
        className="rounded-lg basis-1/5 bg-cover bg-no-repeat shadow-md"
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')"}}
      >
      <div>
        <Card className="ann bg-transparent border-none">
          <Card.Body>
            <h3 className='font-sans text-3xl tracking-wide text-left font-medium text-gray-500'>
            <FontAwesomeIcon icon={faDiscord}/>   Discord
            </h3>
          </Card.Body>
        </Card>
      </div>
      </Link>
    </div>

    <br/>
    <br/>
    <br/>

    <div className="row row0 flex flex-row flex-nowrap gap-4 w-full">
      <div 
        className="col-sm-12 col-lg-12 rounded-lg bg-fixed bg-cover bg-no-repeat shadow-md shadow-indigo-50/50 basis-full"  
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3')"}}>
        <Card className="bg-transparent border-none">
          <Card.Body>
            <br/>
            <br/>
            <br/>
            <h3 className='text-xl tracking-wide text-left font-sans font-semibold text-gray-800'>
              Contact: <Link href="tel:+8801790137029" className="text-blue-900 font-extrabold">01790137029</Link>
            </h3>
            <br/>
            <br/>
            <br/>
            <h3 className='text-xl tracking-wide text-left font-sans font-semibold text-gray-800'>
              Email: <Link href="mailto:moyshik7@gmail.com" className="text-blue-900 font-extrabold">moyshik7@gmail.com</Link>
            </h3>
            <br/>
            <br/>
          </Card.Body>
          <br/>
        </Card>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="row row0 flex flex-row flex-nowrap gap-4 w-full">
      <div 
        className="col-sm-12 col-lg-12 rounded-lg bg-cover bg-fixed bg-no-repeat shadow-md shadow-indigo-50/50 basis-full"  
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')"}}>
        <Card className="bg-transparent border-none">
          <Card.Body>
            <br/>
            <br/>
            <h3 className='text-xl tracking-wide text-left font-sans font-semibold text-gray-800'>
              Career Goals
            </h3>
            <br/>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              My career aspirations extend beyond the realm of medicine. While I am dedicated to my medical studies, I am also deeply immersed in the world of technology. As a coder proficient in TypeScript, Rust, and Dart, I aspire to bridge the gap between the medical and technological fields. My vision is to leverage cutting-edge technology to enhance medical diagnostics, treatment, and healthcare delivery. I believe that the fusion of medicine and technology has the potential to revolutionize healthcare, making it more efficient, accessible, and patient-centric.
            </p>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              In addition to my medical and tech pursuits, I am an avid debater with a keen interest in public speaking and critical thinking. Debating has honed my communication skills and allowed me to engage in intellectual discourse on a wide range of topics. I am proud to have achieved several accolades in this domain and continue to be an active participant in debates, where I aim to promote thoughtful discussions and informed decision-making.
            </p>
            <br/>
            <br/>
          </Card.Body>
          <br/>
        </Card>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="row row0 flex flex-row flex-nowrap gap-4 w-full">
      <div 
        className="col-sm-12 col-lg-12 rounded-lg bg-cover bg-fixed bg-no-repeat shadow-md shadow-indigo-50/50 basis-full"  
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')"}}>
        <Card className="bg-transparent border-none">
          <Card.Body>
            <br/>
            <br/>
            <h3 className='text-xl tracking-wide text-left font-sans font-semibold text-gray-800'>
              Personal Interests
            </h3>
            <br/>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              Beyond my academic and career-related endeavors, I am an enthusiastic digital artist. I find solace and self-expression in creating art digitally, and I am constantly exploring new ways to blend art and technology. My digital art ranges from intricate designs to abstract concepts, and I view it as a creative outlet that complements my scientific and analytical pursuits. The interplay between art and technology continues to be a source of inspiration and innovation for me.
            </p>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              In my free time, I am deeply passionate about training AI models. I find joy in experimenting with AI algorithms, exploring their potential, and contributing to the ever-evolving field of artificial intelligence. This hobby allows me to stay at the forefront of technological advancements while satisfying my curiosity for the limitless possibilities of AI.
            </p>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              I believe that a holistic approach to life is essential, and my diverse interests in medicine, technology, debating, digital art, and AI training reflect my commitment to personal and professional growth. My journey is an ongoing quest to merge these passions, create innovative solutions, and ultimately make a positive impact on the world.
            </p>
            <br/>
            <br/>
          </Card.Body>
          <br/>
        </Card>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <div className="row row0 flex flex-row flex-nowrap gap-4 w-full">
      <div 
        className="col-sm-12 col-lg-12 rounded-lg bg-cover bg-fixed bg-no-repeat shadow-md shadow-indigo-50/50 basis-full"  
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3')"}}>
        <Card className="bg-transparent border-none">
          <Card.Body>
            <br/>
            <br/>
            <h3 className='text-2xl tracking-wide text-left font-sans font-semibold text-black'>
              My MBBS Journey
            </h3>
            <br/>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              Education is not the filling of a pail but the lighting of a fire. - W.B. Yeats
            </p>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              The journey I embarked upon as an MBBS student at Bangladesh Medical College has been nothing short of illuminating. It was not merely a decision to pursue a degree; it was an unwavering commitment to understanding the intricate workings of the human body, unraveling the mysteries of life, and ultimately, making a meaningful impact on the well-being of individuals.
            </p>
            <br/>
            <h4 className='text-xl tracking-wide text-left font-sans font-semibold text-black'>
              The MBBS Program:
            </h4>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              My enrollment in the Bachelor of Medicine and Bachelor of Surgery (MBBS) program at Bangladesh Medical College has been a transformative experience. The program is an arduous but rewarding path that includes comprehensive coursework in anatomy, physiology, pharmacology, pathology, and clinical skills. It demands unwavering dedication and an insatiable thirst for knowledge.
            </p>
            <br/>
            <h4 className='text-xl tracking-wide text-left font-sans font-semibold text-black'>
              My Journey in the Medical Field:
            </h4>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              My journey in the medical field started long before I stepped into the hallowed halls of my medical college. It began with a fascination for biology and a deep-seated desire to contribute to the betterment of human health. Throughout my educational path, I have maintained a commitment to excellence, continuous learning, and the highest ethical standards.
            </p>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              In addition to academic pursuits, I have actively participated in community health initiatives, outreach programs, and medical research. These experiences have reinforced my belief in the importance of preventive medicine, health promotion, and ensuring access to healthcare for all.
            </p>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              As I progress through my MBBS program, I remain motivated by the countless opportunities and challenges that lie ahead. I aspire to become a well-rounded medical professional who not only diagnoses and treats but also advocates for healthcare innovation, equity, and the holistic well-being of patients.
            </p>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              My medical journey is not just a degree; it&apos;s a lifelong commitment to improving the quality of life for individuals and communities. With each day, I&apos;m inspired to continue my quest to make a lasting impact through the amalgamation of medicine, technology, and creativity.
            </p>
            <br/>
            <p className='text-lg tracking-wide text-left font-sans font-medium text-gray-500'>
              Thank you for joining me on this incredible journey, and I look forward to sharing the evolving chapters of my medical career with you.
            </p>
            <br/>
            <br/>
          </Card.Body>
          <br/>
        </Card>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>
  </AdminLayout>
)

export default Home
