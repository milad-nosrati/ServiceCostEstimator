import React, { useState } from 'react';
import { Container, Col, Button } from 'react-bootstrap';
import { Check } from 'react-bootstrap-icons';

import FormContext from './contexts';
import HeaderComponent from './Components/HeaderComponent';
import TimeComponent from './Components/TimeComponent';
import DateandClock from './Components/DateandClock'
import HumanComponent from './Components/HumanComponent';
import Footer from './Components/Footer';
function App() {

  const [womanCunt, setWomanCunt] = useState(0)
  const [manCount, setManCount] = useState(0)
  const [stateClok, setStateClok] = useState(0)

  const handelClock = value => setStateClok(value)
  const handelPlusWoman = () => setWomanCunt(womanCunt + 1)
  const handelminesWoman = () => setWomanCunt(womanCunt - 1)
  const handelPusMan = () => setManCount(manCount + 1)
  const handelMinesMan = () => setManCount(manCount - 1)

  return (
    <FormContext.Provider
      value={{
        womanCunt,
        manCount,
        stateClok,
        handelPlusWoman,
        handelminesWoman,
        handelPusMan,
        handelMinesMan,
        handelClock,
      }}
    >
      <Container fluid>
        <header>
          <HeaderComponent />
        </header>
        <section>
          <TimeComponent />
          <Col className='mt-5 mb-3'>
            <h2>تاریخ و زمان مورد نیاز حضور نیرو</h2>
          </Col>
          <DateandClock />
          <Col className='d-flex mt-5 ' >
            <h4>جنسیت و تعداد خدمه ها</h4>
            <p className='mr-auto text-secondary' >چند نفر تمیزکار نیاز دارید؟</p>
          </Col>
          <HumanComponent />
          <Button className=' mb-4 p-4 boxItems' size="lg" block variant="info" >
           <Check className='mr-4' size={16} />  ثبت سفارش
          </Button>
        </section>
        <Footer />
      </Container>
    </FormContext.Provider>
  );
}

export default App;
