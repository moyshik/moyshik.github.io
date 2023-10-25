import React, {
  PropsWithChildren, useEffect, useState,
} from 'react'
import Head from 'next/head'
import { Container } from 'react-bootstrap'
import Sidebar, { SidebarOverlay } from '@layout/AdminLayout/Sidebar/Sidebar'
import Header from '@layout/AdminLayout/Header/Header'

export default function AdminLayout({ children }: PropsWithChildren) {
  const [isShowSidebar, setIsShowSidebar] = useState(false)
  const [isShowSidebarMd, setIsShowSidebarMd] = useState(true)

  const toggleIsShowSidebar = () => {
    setIsShowSidebar(!isShowSidebar)
  }

  const toggleIsShowSidebarMd = () => {
    const newValue = !isShowSidebarMd
    localStorage.setItem('isShowSidebarMd', newValue ? 'true' : 'false')
    setIsShowSidebarMd(newValue)
  }

  useEffect(() => {
    if (localStorage.getItem('isShowSidebarMd')) {
      setIsShowSidebarMd(localStorage.getItem('isShowSidebarMd') === 'true')
    }
  }, [setIsShowSidebarMd])

  return (
    <>
      <Head>
        <title>Oyshik</title>
        <meta name="description" content="Stealer of ur mom" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Sidebar isShow={isShowSidebar} isShowMd={isShowSidebarMd} />

      <div className="wrapper ass d-flex flex-column min-vh-100 bg-light">
        <Header toggleSidebar={toggleIsShowSidebar} toggleSidebarMd={toggleIsShowSidebarMd} />
        <div className="body flex-grow-1 px-sm-2">
          <Container>
            {children}
          </Container>
        </div>
      </div>

      <SidebarOverlay isShowSidebar={isShowSidebar} toggleSidebar={toggleIsShowSidebar} />
    </>
  )
}