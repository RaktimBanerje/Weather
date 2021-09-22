import React, { useState, useEffect } from 'react'

import './css/App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import './css/weather-icons.min.css'
import { Container, Row, Col } from 'react-bootstrap'

import CurrentConditions from './Component/CurrentConditions'
import TodayDetails from './Component/TodayDetails'
import HourlyWeatherModule from './Component/HourlyWeatherModule'

const App = ()=>{
  const [coords, setCoords] = useState( {lat: '', lon: ''} )
  const [weather, setWeather] = useState(null)

  useEffect(()=>getCoords(),[])

  useEffect(()=>{
    (async ()=>{
        if(coords.lat !== '' && coords.lon !== ''){
          const {lat, lon} = coords
          const unit = 'metric'
          const apiKey = 'fdaa2d3510968dd2eab5b8328b64944b'
          const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=${unit}&appid=${apiKey}`
          const res = await fetch(url)
          const data = await res.json()
          setWeather(data)
        }
      }
    )()
  }, [coords])  

  useEffect(()=>{
     console.log(weather)
  }, [weather])

  function getCoords(){
    if (navigator.geolocation) 
      navigator.geolocation.getCurrentPosition(position => setCoords({lat: position.coords.latitude, lon: position.coords.longitude })) 
    else
     alert("Sorry, your browser is too old.")
  }

  return( 
     <Container fluid>
       {
         weather?
          <React.Fragment>
            <Row className="align-items-center">
              <Col className="my-2" md={6}>
                <CurrentConditions {...weather.current} />
              </Col>
              <Col className="my-2" md={6}>
                <TodayDetails {...weather.current} />
              </Col>
            </Row>
            <Row>
              <Col className="my-2 offset-lg-1" lg={10}>
                <HourlyWeatherModule {...weather.hourly} />
              </Col>           
            </Row>      
          </React.Fragment>
          :
          <Row className="justify-content-center align-items-center" style={{height: '100vh'}}>
            <div className="spinner-border text-light" role="status" style={{width: '4rem', height: '4em'}}>
              <span className="visually-hidden">Loading...</span>
            </div>
          </Row>
       }
     </Container>
   )
}


export default App