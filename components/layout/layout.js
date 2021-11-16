import Header from "../header/header"
import Sidebar from "../sidebar/sidebar"
import {Row, Col} from 'react-bootstrap'

export default function Layout({ children, title }) {
  return (
    <>
      <Row>
        <Col md="2">
          {/* <Sidebar /> */}
        </Col>
        <Col md="10">
          <Header title={title} />
          <div>{children}</div>
        </Col>
      </Row>

    </>
  )
}