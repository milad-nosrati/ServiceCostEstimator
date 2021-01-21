import React, { useContext } from 'react'
import { Col, ProgressBar, Row, Button } from 'react-bootstrap'
import { ArrowRightCircleFill, ChevronLeft } from 'react-bootstrap-icons'

import FormContext from '../contexts'

const Footer = () => {

    const { womanCunt, manCount, stateClok } = useContext(FormContext)

    const sumHumna = womanCunt + manCount
    const priceFinal = sumHumna * stateClok


    return (
        <Row className='bg-white fixed-bottom' >
            <Col md={12} sm={12} xs={12} className='text-center p-3 flex-center d-flex justify-content-center'>
                <h6 className='ml-2' >جمع هزینه پرداختی</h6>{sumHumna > 0 ? <p><span className='ml-1'>{priceFinal}</span>تومان</p> : null}
            </Col>
            <Col >
                <ProgressBar className='progressFooter' variant="info" now={50} />
            </Col>
            <Col md={12} sm={12} xs={12} className='d-flex' >
                <Col className='d-flex justify-content-start'>
                    <Button variant="link" className="text-info" >
                        <ArrowRightCircleFill size={20} className='ml-2' />
                    پرداخت
                    </Button>
                </Col>
                <Col className='d-flex justify-content-end'>
                    <Button variant="link" className="text-secondary" >
                        ثبت آدرس
                        <ChevronLeft size={20} className='mr-2' />
                    </Button>
                </Col>
            </Col>
        </Row>
    )
}

export default Footer