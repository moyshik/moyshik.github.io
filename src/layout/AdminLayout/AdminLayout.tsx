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

        <meta property="og:title" content="Oyshik" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://moyshik.github.io" />
        <meta property="og:image" content="https://moyshik.github.io/i/cover.webp" />
        <meta name="twitter:title" content="Stealer of ur mom"/>
        <meta name="twitter:description" content="Sup niggers?"/>
        <meta name="twitter:image" content="https://moyshik.github.io/i/cover.webp"/>
        <meta name="twitter:card" content="summary_large_image"/>
        <meta property="og:site_name" content="Oyshik"/>
        <meta name="twitter:image:alt" content="Oishik sobar mayre sude"/>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="57x57" href="/apple-icon-57x57.png"/>
        <link rel="apple-touch-icon" sizes="60x60" href="/apple-icon-60x60.png"/>
        <link rel="apple-touch-icon" sizes="72x72" href="/apple-icon-72x72.png"/>
        <link rel="apple-touch-icon" sizes="76x76" href="/apple-icon-76x76.png"/>
        <link rel="apple-touch-icon" sizes="114x114" href="/apple-icon-114x114.png"/>
        <link rel="apple-touch-icon" sizes="120x120" href="/apple-icon-120x120.png"/>
        <link rel="apple-touch-icon" sizes="144x144" href="/apple-icon-144x144.png"/>
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-icon-152x152.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-icon-180x180.png"/>
        <link rel="icon" type="image/png" sizes="192x192"  href="/android-icon-192x192.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="96x96" href="/favicon-96x96.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <meta name="msapplication-TileColor" content="#ff6f61"/>
        <meta name="msapplication-TileImage" content="/ms-icon-144x144.png"/>
        <meta name="theme-color" content="#ff6f61"/>
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