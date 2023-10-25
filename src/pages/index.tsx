import type { NextPage } from 'next'
import {
  Card,
} from 'react-bootstrap'
import React from 'react'
import { AdminLayout } from '@layout'

const Home: NextPage = () => (
  <AdminLayout>
    <div className="row row flex flex-row flex-wrap">
      <div 
        className="col-sm-12 col-lg-12 rounded-lg bg-fixed bg-cover bg-no-repeat shadow-md shadow-indigo-50/50" 
        style={{backgroundImage: "url('https://images.unsplash.com/photo-1554629947-334ff61d85dc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=cover&w=1000&h=666&q=80')"}}>
        <Card className="bg-transparent border-none">
          <Card.Body>
            <h1 className='font-sans text-3xl tracking-wide text-left font-medium'>
              Mahmud Oyshik
            </h1>
            <br/>
            <br/>
            <br/>
            <h3 className='text-xl tracking-wide text-left font-sans font-medium'>
              MBBS at Bangladesh Medical College | Debater | Digital Art
            </h3>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
          </Card.Body>
          <br/>
        </Card>
      </div>
    </div>
    <br/>
    <div className="row flex flex-row flex-nowrap">
      <div 
        className="col-sm-12 col-lg-3 rounded-lg bg-fixed bg-cover bg-no-repeat basis-1/4 mx-1 bg-red-500">
        <Card className="bg-transparent border-none">
          <Card.Body>
            <h1 className='font-sans text-3xl tracking-wide text-left font-medium text-gray-100'>
              Instagram
            </h1>
          </Card.Body>
          <br/>
        </Card>
      </div>

      <div 
        className="col-sm-12 col-lg-3 rounded-lg bg-fixed bg-cover bg-no-repeat basis-1/4 mx-1 bg-teal-700">
        <Card className="bg-transparent border-none">
          <Card.Body>
            <h1 className='font-sans text-3xl tracking-wide text-left font-medium text-gray-100'>
              Facebook
            </h1>
          </Card.Body>
          <br/>
        </Card>
      </div>

      <div 
        className="col-sm-12 col-lg-3 rounded-lg bg-fixed bg-cover bg-no-repeat basis-1/4 mx-1 bg-orange-600">
        <Card className="bg-transparent border-none">
          <Card.Body>
            <h1 className='font-sans text-3xl tracking-wide text-left font-medium text-gray-100'>
              Github
            </h1>
          </Card.Body>
          <br/>
        </Card>
      </div>

      <div 
        className="col-sm-12 col-lg-3 rounded-lg bg-fixed bg-cover bg-no-repeat basis-1/4 mx-1 bg-indigo-700">
        <Card className="bg-transparent border-none">
          <Card.Body>
            <h1 className='font-sans text-3xl tracking-wide text-left font-medium text-gray-100'>
              Linkedin
            </h1>
          </Card.Body>
          <br/>
        </Card>
      </div>
    </div>
  </AdminLayout>
)

export default Home
