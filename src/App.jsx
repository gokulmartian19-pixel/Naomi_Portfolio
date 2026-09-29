import { useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import HeroSection from './components/HeroSection'
import ServicesSection from './components/ServicesSection'
import AboutSection from './components/AboutSection'
import FooterSection from './components/FooterSection'
import ContactButton from './components/ContactButton'
import ContactDrawer from './components/ContactDrawer'
import { aboutFacts, budgetOptions, contactServices, services } from './data/portfolioData'

function App() {
  const rootRef = useRef(null)
  const [currentFactIndex, setCurrentFactIndex] = useState(0)
  const [isDrawerOpen, setDrawerOpen] = useState(false)
  const [selectedServices, setSelectedServices] = useState([])
  const [selectedBudget, setSelectedBudget] = useState('')
  const [timeLabel, setTimeLabel] = useState('01:16 AM')
  const [isSubmitted, setSubmitted] = useState(false)

  useEffect(() => {
    const factTimer = setInterval(() => {
      setCurrentFactIndex((prev) => (prev + 1) % aboutFacts.length)
    }, 5000)

    return () => clearInterval(factTimer)
  }, [])

  useEffect(() => {
    const tickClock = () => {
      const now = new Date()
      let hours = now.getHours()
      const minutes = String(now.getMinutes()).padStart(2, '0')
      const ampm = hours >= 12 ? 'PM' : 'AM'
      hours = hours % 12
      hours = hours ? String(hours).padStart(2, '0') : '12'
      setTimeLabel(`${hours}:${minutes} ${ampm}`)
    }

    tickClock()
    const timer = setInterval(tickClock, 1000)
    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const hero = document.querySelector('.hero-section')
    const heroObserver = hero
      ? new IntersectionObserver(([entry]) => {
          if (entry.isIntersecting) {
            hero.classList.add('is-visible')
            heroObserver.disconnect()
          }
        }, { threshold: 0.1 })
      : null

    if (hero && heroObserver) {
      heroObserver.observe(hero)
    }

    const serviceCards = document.querySelectorAll('.service-card')
    const serviceCardObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      })
    }, { threshold: 0.1, rootMargin: '0px 0px -8% 0px' })

    serviceCards.forEach((card) => serviceCardObserver.observe(card))

    return () => {
      heroObserver?.disconnect()
      serviceCardObserver.disconnect()
    }
  }, [])

  const currentFact = useMemo(() => aboutFacts[currentFactIndex], [currentFactIndex])

  const toggleService = (item) => {
    setSelectedServices((prev) =>
      prev.includes(item) ? prev.filter((entry) => entry !== item) : [...prev, item],
    )
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
      setDrawerOpen(false)
      setSelectedServices([])
      setSelectedBudget('')
      event.target.reset()
    }, 1800)
  }

  return (
    <>
      <main ref={rootRef}>
        <HeroSection />
        <ServicesSection services={services} />
        <AboutSection currentFact={currentFact} />
        <FooterSection timeLabel={timeLabel} onOpenContact={() => setDrawerOpen(true)} />
      </main>

      <ContactButton onOpenContact={() => setDrawerOpen(true)} />

      <ContactDrawer
        isDrawerOpen={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        selectedServices={selectedServices}
        selectedBudget={selectedBudget}
        isSubmitted={isSubmitted}
        onToggleService={toggleService}
        onSelectBudget={setSelectedBudget}
        onSubmit={handleSubmit}
      />
    </>
  )
}

export default App
