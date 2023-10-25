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
    <div className="row row0 flex flex-row flex-nowrap gap-4 w-full">
      <div 
        className="col-sm-12 col-lg-12 rounded-lg bg-fixed bg-cover bg-no-repeat shadow-md shadow-indigo-50/50 basis-full"  
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1604079628040-94301bb21b91?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3')"}}>
        <Card className="bg-transparent border-none">
          <Card.Body>
            <h1 className='font-sans text-3xl tracking-wide text-left font-medium'>
              Mahmud Oyshik
            </h1>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <h3 className='text-xl tracking-wide text-left font-sans font-medium'>
              MBBS at Bangladesh Medical College | Debater | Digital Art
            </h3>
            <br/>
            <br/>
            <br/>
          </Card.Body>
          <br/>
        </Card>
      </div>
    </div>
    <br/>
    <div className="row row1">
      
      <Link href="https://www.instagram.com/oii.seek/" target="_blank" className="rounded-lg bg-red-600 basis-1/5">
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

      <Link href="https://www.facebook.com/mahmud.oyshik/" target="_blank" className="rounded-lg bg-teal-700 basis-1/5">
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

      <Link href="https://github.com/moyshik7" target="_blank" className="rounded-lg bg-orange-700 basis-1/5">
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

      <Link href="https://www.linkedin.com/in/moyshik" target="_blank" className="rounded-lg bg-indigo-800 basis-1/5">
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

      <Link href="https://discord.com/users/584309117380853770" target="_blank" className="rounded-lg bg-sky-900 basis-1/5">
      <div>
        <Card className="ann bg-transparent border-none">
          <Card.Body>
            <h3 className='font-sans text-3xl tracking-wide text-left font-medium text-gray-100'>
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
              Contact: <Link href="tel:+8801790137029">01790137029</Link>
            </h3>
            <br/>
            <br/>
            <br/>
            <h3 className='text-xl tracking-wide text-left font-sans font-semibold text-gray-800'>
              Email: <Link href="mailto:moyshik7@gmail.com">moyshik7@gmail.com</Link>
            </h3>
            <br/>
            <br/>
          </Card.Body>
          <br/>
        </Card>
      </div>
    </div>
    <br/>
  </AdminLayout>
)

export default Home
