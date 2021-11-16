import Link from 'next/link'
import Image from 'next/image'
import { Button, Container } from 'react-bootstrap'
import { RiHome4Line, RiTeamLine, RiBriefcase2Line, RiCalendarTodoLine, RiSettingsLine } from 'react-icons/ri'
import { AiOutlineStock } from 'react-icons/ai'
import { CgLogOut } from 'react-icons/cg'

const Sidebar = () => {

  return (
      <Container className="sidebar-cont">
          <div className="sidebar-wrapper">
              <nav className="main-nav">
                  <div className="logo-sec">
                      <Image priority src='/../../public/images/logo.svg' className="logo" height={50} width={50} alt="only1-logo" />
                  </div>
                  <RiHome4Line className="icon" /><Link className="nav-link" href="/" activeClassName="active-link"><a>Dashboard</a></Link>
                  <RiTeamLine className="icon" /><Link className="nav-link" href="/teams/team" activeClassName="active-link"><a>My Team</a></Link>
                  <RiBriefcase2Line className="icon" /><Link className="nav-link" href="#" activeClassName="active-link"><a>Task</a></Link>
                  <RiCalendarTodoLine className="icon" /><Link className="nav-link" href="#" activeClassName="active-link"><a>Calender</a></Link>
                  <AiOutlineStock className="icon" /><Link className="nav-link" href="#" activeClassName="active-link"><a>Report</a></Link>
                  <RiSettingsLine className="icon" /><Link className="nav-link" href="#" activeClassName="active-link"><a>Settings</a></Link>
              </nav>
              <div className="logout-sec">
                  <Button className="logout"><CgLogOut className="icon" /> Logout</Button>
              </div>
          </div>
      </Container>
  )
}

export default Sidebar