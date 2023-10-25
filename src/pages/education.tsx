import type { NextPage } from 'next'
import {
  Card,
} from 'react-bootstrap'
import React from 'react'
import { AdminLayout } from '@layout'

const Home: NextPage = () => (
  <AdminLayout>
    <div className="row">
      <div className="col-sm-6 col-lg-3">
        <Card bg="primary" text="white" className="mb-4">
          <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              BMC
            </div>
          </Card.Body>
          <br/>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="info" text="white" className="mb-4">
        <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              er
            </div>
          </Card.Body>
          <br/>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="warning" text="white" className="mb-4">
        <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              Mayre
            </div>
          </Card.Body>
          <br/>
        </Card>
      </div>

      <div className="col-sm-6 col-lg-3">
        <Card bg="danger" text="white" className="mb-4">
        <Card.Body className="pb-0 d-flex justify-content-between align-items-start">
            <div>
              Sudi
            </div>
          </Card.Body>
          <br/>
        </Card>
      </div>
    </div>
  </AdminLayout>
)

export default Home
