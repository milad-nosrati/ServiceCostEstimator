import React, { useState, useContext } from 'react'
import { Row, Col, Form, InputGroup, FormControl } from 'react-bootstrap'
import { Pencil, Clock } from 'react-bootstrap-icons'

import FormContext from '../contexts'

const TimeComponent = () => {

    const { handelClock } = useContext(FormContext)

    const [valuechekBox, setvaluechekBox] = useState(null)
    const [errorInput, seterrorInput] = useState(null)

    const arrydata = [2, 3, 4, 5]


    const handelTime = e => {
        if (e.target.checked) {

            setvaluechekBox(e.target.value)

            const sumClock = e.target.value * 14000
            handelClock(sumClock)
        }
    }

    const patreonInput = new RegExp("[0-9]", "g")

    const handelCostumInput = e => {

        if (patreonInput.test(e.target.value)) {

            setvaluechekBox(e.target.value)

            const sumClock = parseInt(e.target.value) * 14000//مبلغ ساعتی که پیش فرض تعریف شده

            handelClock(sumClock)
            seterrorInput('')
        }
        else { e.target.value.length > 0 ? seterrorInput('فقط عدد و به انلگیسی قابل قبول است') : seterrorInput('') }
    }



    return (
        <Col className='mt-5 bg-white  pb-2 boxItems' md={12} sm={12} xs={12} >
            <Row className='boxItems'>
                <Col className='d-flex flex-wrap mt-3 mb-4' md={12} sm={12} xs={12} >
                    <Clock size={16} className='timeCoustomColor ml-1' />
                    <h3> مدت زمان سرویس مورد نیاز</h3>
                    <p className='mr-auto text-secondary' > مدت زمانی که به تمیزکار لازم دارید؟</p>
                </Col>
                <Col md={12} sm={12} xs={12} className='boxTime mb-5 ' >

                    <Row>
                        {
                            arrydata.map(item => (
                                <Col key={item.toString()} className='text-center fixboxitem' md={3} sm={3} xs={3} >
                                    <Form.Check>
                                        <Form.Check.Input className="d-none" type='radio' name='setsaat'
                                            onClick={handelTime} id={`three_${item}`} value={item} />
                                        <Form.Check.Label className={parseInt(valuechekBox) === item ? 'p-3 m-1 checkBoxAttive flex-nowrap' : 'p-3 m-1 flex-nowrap'} htmlFor={`three_${item}`} >{item} ساعت</Form.Check.Label>
                                    </Form.Check>
                                </Col>
                            ))
                        }
                    </Row>

                </Col>
            </Row>
            <Col className='d-flex flex-row mt-3' md={12} sm={12} xs={12} >
                <Col md={9} sm={9} xs={9} >
                    <InputGroup>
                        <InputGroup.Prepend>
                            <Pencil size={16} className='border-bottom' />
                        </InputGroup.Prepend>
                        <FormControl
                            className='inputTime '
                            onChange={handelCostumInput}
                            maxLength='5'
                            placeholder='اگر مدت زمان دیگریدر نظر دارید، وارد کنید'
                        />
                        <span className='errorinputTime' >{errorInput}</span>
                    </InputGroup>
                </Col>
                <Col md={3} sm={3} xs={3} >

                    <p className='text-center timeCoustomColor' >ساعت</p>
                </Col>
            </Col>

        </Col>
    )
}

export default TimeComponent