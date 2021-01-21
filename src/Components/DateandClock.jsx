import React, { useState, memo } from 'react'
import { Col, Modal, Row, Form, Button } from 'react-bootstrap'
import { ChevronDown, Calendar3, Clock, CheckCircle } from 'react-bootstrap-icons';
import { MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import { TimePicker } from "@material-ui/pickers";


const DateandClock = () => {

    const [modalShow, setModalShow] = useState(false);
    const [selectedDay, setSelectedDay] = useState('');
    const [selectedDate, handleDateChange] = useState(new Date());
    const [dateSeleced, setDateSeleced] = useState('')

    const weekday = ["یک شنبه", "دوشنبه", "سه شنبه", "چهار شنبه", "پنج شنبه", "جمعه", "شنبه",]

    let arryTime = [
        {
            weeky: weekday[new Date().getDay()],
            year: MiladotoShamsi()[0],
            month: MiladotoShamsi()[1],
            day: MiladotoShamsi()[2]
        },
        {
            weeky: weekday[(new Date().getDay() + 1) % 7 ],
            year: MiladotoShamsi()[0],
            month: MiladotoShamsi()[1],
            day: MiladotoShamsi()[2] + 1 === 32 ? 1 : MiladotoShamsi()[2] + 1
        },
        {
            weeky: weekday[(new Date().getDay() + 2) % 7 ],
            year: MiladotoShamsi()[0],
            month: MiladotoShamsi()[1],
            day: MiladotoShamsi()[2] + 2 === 33 ? 2 : MiladotoShamsi()[2] + 2
        },
        {
            weeky: weekday[(new Date().getDay() + 3) % 7 ],
            year: MiladotoShamsi()[0],
            month: MiladotoShamsi()[1],
            day: MiladotoShamsi()[2] + 3 === 33 ? 3 : MiladotoShamsi()[2] + 3
        },

    ]

    const handelDate = e => { if (e.target.checked) setSelectedDay(e.target.value) }


    const handelSunbmitModal = () => {
        setModalShow(false)
        setDateSeleced(`${selectedDay} ${selectedDate.getHours()}:${selectedDate.getMinutes()}`)

    }


    return (
        <>
            <Col className='d-flex bg-white boxItems boxDateandClock p-4' onClick={() => setModalShow(true)}  >
                <Calendar3 className="Iconcalenda" size={16} />
                <p className='text-center' >{dateSeleced ? dateSeleced : 'انتخاب تاریخ و زمان'}</p>
                <ChevronDown className="text-secondary" size={16} />
            </Col>

            <Modal
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
                show={modalShow}
                onHide={() => setModalShow(false)}
            >
                <Modal.Header closeButton></Modal.Header>
                <Modal.Body>
                    <Col className='d-flex' >
                        <Clock size={16} className='timeCoustomColor ml-1' />
                        <h5> ثبت زمان و تاریخ سرویس</h5>
                    </Col>
                    <Col className='mt-3 mb-3' md={12} sm={12} xs={12}  >
                        <Row>
                            {
                                arryTime.map((item, index) => (
                                    <Col key={`${item.weeky}_${index}`} md={3} sm={3} xs={3} className='text-center fixboxitem' >
                                        <Form.Check>
                                            <Form.Check.Input className="d-none" type='radio'
                                                name='setdate'
                                                onClick={handelDate}
                                                id={`date_three_${item.day}`}
                                                value={`${item.year}-${item.month}-${item.day}`}
                                            />
                                            <Form.Check.Label className={
                                                selectedDay === `${item.year}-${item.month}-${item.day}` ? ' p-3 m-1 dateModal dateModalactive' : 'p-3 m-1 dateModal'
                                            } htmlFor={`date_three_${item.day}`} >
                                                <p>
                                                    {item.weeky}<br />
                                                    <b>{item.day}</b>
                                                </p>
                                            </Form.Check.Label>
                                        </Form.Check>
                                    </Col>

                                ))
                            }
                        </Row>
                    </Col>
                    <MuiPickersUtilsProvider utils={DateFnsUtils}>
                        <TimePicker
                            variant="info"
                            className='boxItems mt-5 text-dark p-3 btnSetClolck   d-flex justify-content-center flex-center'
                            clearable
                            ampm={false}
                            value={selectedDate}
                            onChange={handleDateChange}
                        />
                    </MuiPickersUtilsProvider>

                    <Button variant="info" onClick={handelSunbmitModal} className='p-3 mt-3 mb-2 boxItems' block>تایید زمان  <CheckCircle size={16} className='mr-3' /></Button>

                </Modal.Body>
            </Modal>

        </>
    )
}

export default memo(DateandClock)





function MiladotoShamsi() {


    function gregorian_to_jalali(gy, gm, gd) {
        var g_d_m, jy, jm, jd, gy2, days;
        g_d_m = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
        if (gy > 1600) {
            jy = 979;
            gy -= 1600;
        } else {
            jy = 0;
            gy -= 621;
        }
        gy2 = (gm > 2) ? (gy + 1) : gy;
        days = (365 * gy) + (parseInt((gy2 + 3) / 4)) - (parseInt((gy2 + 99) / 100)) + (parseInt((gy2 + 399) / 400)) - 80 + gd + g_d_m[gm - 1];
        jy += 33 * (parseInt(days / 12053));
        days %= 12053;
        jy += 4 * (parseInt(days / 1461));
        days %= 1461;
        if (days > 365) {
            jy += parseInt((days - 1) / 365);
            days = (days - 1) % 365;
        }
        jm = (days < 186) ? 1 + parseInt(days / 31) : 7 + parseInt((days - 186) / 30);
        jd = 1 + ((days < 186) ? (days % 31) : ((days - 186) % 30));
        return [jy, jm, jd];
    }

    let newDate = new Date()
    let finalDate = gregorian_to_jalali(newDate.getFullYear(), newDate.getMonth() + 1, newDate.getDate());

    return (finalDate)
}