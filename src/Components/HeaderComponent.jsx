import React, { memo } from 'react'
import { Row, Col } from 'react-bootstrap'
import { CircleFill , Circle } from 'react-bootstrap-icons';

const HeaderComponent = () => {
    return (
        <Row className='headerRow' >
            <Col className='d-flex flex-row mt-3'  >
                <h1>درخواست تمیزکار</h1>
                <p className='mr-auto'  >
                    <Circle className='mr-1' size={7}/>
                    <Circle className='mr-1' size={7}/>
                    <CircleFill  className='mr-1' size={7} />
                    <CircleFill  className='mr-1' size={7} />                  
                </p>
            </Col>
        </Row>
    )
}

export default memo(HeaderComponent)