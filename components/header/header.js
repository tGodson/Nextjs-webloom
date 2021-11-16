import Link from 'next/link'
import {Container, Dropdown, FormControl} from 'react-bootstrap';
import { FiSearch } from 'react-icons/fi'
import { IoMdNotificationsOutline } from 'react-icons/io'
import Image from 'next/image'

export default function Header ({ title }) {
  // const searchboxRef = useRef()
  return (
      <Container fluid className="header-cont">
          <div className="header-wrapper">
              <h1 className="title">{title}</h1>
              <div className="header-end">
                  <div className="search-sec">
                      <FiSearch className="icon" />
                      <FormControl className="input-field" />
                  </div>
                  <Dropdown className="noti-sec">
                      <Dropdown.Toggle className="noti-toggle" variant="success" id="dropdown-basic">
                          <IoMdNotificationsOutline className="icon" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Notification 1</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Notification 2</Dropdown.Item>
                          <Dropdown.Item href="#/action-3">Notification 3</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
                  <Dropdown className="profile-sec">
                      <Dropdown.Toggle className="prof-toggle" variant="success" id="dropdown-basic">
                          <Image src='/../../public/images/defaultProfile.svg' height={20} width={20} className="prof-img" />
                      </Dropdown.Toggle>

                      <Dropdown.Menu>
                          <Dropdown.Item href="#/action-1">Profile</Dropdown.Item>
                          <Dropdown.Item href="#/action-2">Settings</Dropdown.Item>
                      </Dropdown.Menu>
                  </Dropdown>
              </div>
          </div>
      </Container>
  )
}