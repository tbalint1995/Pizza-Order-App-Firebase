import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { MDBInput, MDBBtn } from 'mdb-react-ui-kit';
import { Col, Row, Container, Form, Table } from 'react-bootstrap'



export default function Shop() {

return (<> 



        <Container className='border border-dark shadow-lg py-4 rounded-3 mobile' id='index-banner' >
        <tbody id="tableProducts"></tbody>
        <Col as='h1' className="text-orange text-center p-2 mb-3">Kosár</Col>
            <Col className='d-flex'>
                <Form className="w-100">
                    <Row>
                        <Col className='my-2'>
                        
                        <Table striped bordered hover variant="dark">
  <thead>
    <tr>
      <th>Mennyiség</th>
      <th>Név</th>
      <th>Egységár</th>
      <th>Össz ár</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><MDBInput label='Menyiség' id='formWhite' type='number' min="1" max="100" contrast /></td>
      <td>Songoku</td>
      <td>2 200 Ft</td>
      <td>6 600 Ft</td>
    </tr>
   
    </tbody>
    <tfoot>
    <th colspan="4" className="p-3 pe-5 text-end">Összesen: 6 600 Ft</th>
    </tfoot>
</Table>  
                        
                        
                        </Col>
 
                    </Row>

                    <Col className='text-end ' lg={12} >

                    <MDBBtn outline color='info' type='submit' className='text-white  m-1' >Vissza</MDBBtn>

                        <MDBBtn outline color='success' type='submit' className='text-white m-1'>Vásárlás véglegesítése</MDBBtn>
                    </Col>

                </Form>
            </Col>
        </Container>


    </>)
};