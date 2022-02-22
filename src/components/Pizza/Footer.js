import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Container, Col, Row, ListGroup} from 'react-bootstrap';



export default function Footer() {
	return (
		<Container fluid as='footer' className="text-white px-0 footer mt-auto  bg-light">
		<Container fluid className="orange p-4  mb-0 ">

			<Container className='w-75' >
				<Row>
					<Col lg={4} xs={12}>
						<h5 >Company Bio</h5>
						<p>We are a team of college students working on this project like it's our
							full time job. Any amount would help support and continue development on this project and is greatly
							appreciated.</p>
					</Col>
					<Col lg={4} sm={6} xs={12}>
						<h5 className='w-50' >Settings</h5>
						<ListGroup >
							<ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/getting-started/rfs/" target='_blank'>
								Link 1
							</ListGroup.Item>
							<ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
								Link 2
							</ListGroup.Item>

							<ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50 ' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
								Link 3
							</ListGroup.Item>

							<ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
								Link 4
							</ListGroup.Item>
						</ListGroup>

					</Col>
					<Col lg={4} sm={6} xs={12}>
						<h5 className='w-50' >Connect</h5>
						<ListGroup>
							<ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50 ' action href="https://getbootstrap.com/docs/5.0/getting-started/rfs/" target='_blank'>
								Link 1
							</ListGroup.Item>
							<ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
								Link 2
							</ListGroup.Item>

							<ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50 ' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
								Link 3
							</ListGroup.Item>

							<ListGroup.Item className='bg-transparent m-0 p-0 border-0 text-white w-50' action href="https://getbootstrap.com/docs/5.0/customize/color/" target='_blank'>
								Link 4
							</ListGroup.Item>
						</ListGroup>
					</Col>
				</Row>
			</Container>

		</Container>
		<Container fluid className="footer-copyright" >
			<Container className='w-75' >
				<Col className="f-text"> Made by <a href="http://materializecss.com">Materialize</a>
				</Col>
			</Container>
		</Container>

	</Container>
	)
}
