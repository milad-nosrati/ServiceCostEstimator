import React, { useContext } from 'react'

import { Row, Col, Button } from 'react-bootstrap'
import { PlusCircle, DashCircle } from 'react-bootstrap-icons'

import FormContext from '../contexts'

const HumanComponent = () => {
    const {
        womanCunt,
        manCount,
        handelPlusWoman,
        handelminesWoman,
        handelPusMan,
        handelMinesMan } = useContext(FormContext)

    return (
        <Row className='mb-2' >
            <Col className='bg-white d-flex  m-3  boxItems p-4' >
                <Button variant="link" onClick={handelPlusWoman} className="text-secondary" ><PlusCircle size={16} /></Button>
                <p className='m-auto' ><span className='ml-1' >{womanCunt}</span>تمیزکار خانم</p>
                <Button variant="link" onClick={handelminesWoman} disabled={womanCunt === 0 ? true : false} className="text-secondary" ><DashCircle size={16} /></Button>
            </Col>
            <Col className='bg-white d-flex m-3  boxItems p-4' >
                <Button variant="link" onClick={handelPusMan} className="text-secondary" ><PlusCircle size={16} /></Button>
                <p className='m-auto' ><span className='ml-1'>{manCount}</span>تمیزکار آقا</p>
                <Button variant="link" onClick={handelMinesMan} disabled={manCount === 0 ? true : false} className="text-secondary" ><DashCircle size={16} /></Button>
            </Col>
        </Row>
    )
}

export default HumanComponent