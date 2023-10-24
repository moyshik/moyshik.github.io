import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconDefinition } from '@fortawesome/free-regular-svg-icons'
import { faDroplet, faGauge, faPencil } from '@fortawesome/free-solid-svg-icons'
import {
  faGithub,
  faFacebook,
  faLinkedin,
  faInstagram,
  faDiscord
} from "@fortawesome/free-brands-svg-icons"
import React, { PropsWithChildren } from 'react'
import { Nav } from 'react-bootstrap'
import Link from 'next/link'

type SidebarNavItemProps = {
  href: string;
  icon?: IconDefinition;
} & PropsWithChildren

const SidebarNavItem = (props: SidebarNavItemProps) => {
  const {
    icon,
    children,
    href,
  } = props

  return (
    <Nav.Item>
      <Link href={href} passHref legacyBehavior>
        <Nav.Link className="px-3 py-2 d-flex align-items-center">
          {icon ? <FontAwesomeIcon className="nav-icon ms-n3" icon={icon} />
            : <span className="nav-icon ms-n3" />}
          {children}
        </Nav.Link>
      </Link>
    </Nav.Item>
  )
}

const SidebarNavTitle = (props: PropsWithChildren) => {
  const { children } = props

  return (
    <li className="nav-title px-3 py-2 mt-3 text-uppercase fw-bold">{children}</li>
  )
}

export default function SidebarNav() {
  return (
    <ul className="list-unstyled">
      <SidebarNavItem icon={faGauge} href="/">
        Dashboard
      </SidebarNavItem>
      <SidebarNavTitle>About Me</SidebarNavTitle>
      <SidebarNavItem icon={faDroplet} href="#">Education</SidebarNavItem>
      <SidebarNavItem icon={faPencil} href="#">Projects</SidebarNavItem>

      <SidebarNavTitle>Social Media</SidebarNavTitle>

      <SidebarNavItem icon={faFacebook} href="#">Facebook</SidebarNavItem>
      <SidebarNavItem icon={faInstagram} href="#">Instagram</SidebarNavItem>
      <SidebarNavItem icon={faLinkedin} href="#">Linkedin</SidebarNavItem>
      <SidebarNavItem icon={faGithub} href="#">Github</SidebarNavItem>
      <SidebarNavItem icon={faDiscord} href="#">Discord</SidebarNavItem>
    </ul>
  )
}
