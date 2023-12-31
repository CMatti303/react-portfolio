import LogoTitle from '../../assets/images/logo-s.png'
import { Link } from 'react-router-dom'
import './index.scss'
import { useEffect, useState } from 'react'
import AnimatedLetters from '../AnimatedLetters'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['h', 'r', 'i', 's']
  const jobArray = [
    'w',
    'e',
    'b',
    ' ',
    'd',
    'e',
    'v',
    'e',
    'l',
    'o',
    'p',
    'e',
    'r',
    '.',
  ]

  useEffect(() => {
    return () => {
      setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 4000)
    }
  }, [])

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i,</span>
          <br />
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _15`}>'</span>
          <span className={`${letterClass} _16`}>m</span>
          <img src={LogoTitle} alt="developer"></img>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={nameArray}
            idx={17}
          />
          <br />
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={21}
          />
        </h1>
        <h2>Frontend Developer / Javascript Expert</h2>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
      </div>
    </div>
  )
}

export default Home
