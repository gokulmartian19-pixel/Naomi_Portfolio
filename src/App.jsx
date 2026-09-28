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
    const headerItems = document.querySelectorAll('.hero-wordmark-inner, .hero-tagline-text, .hero-tagline-serif, .hero-star-inner')

    const revealHeader = () => {
      headerItems.forEach((item, index) => {
        item.style.transition = 'transform 1.2s cubic-bezier(0.22, 1, 0.36, 1), opacity 1s ease'
        item.style.opacity = '1'
        item.style.transform = 'translateY(0)'
        item.style.transitionDelay = `${index * 80}ms`
      })
    }

    const applyServiceStack = () => {
      const cards = [...document.querySelectorAll('.service-card')]
      const title = document.querySelector('#services-title')
      const isDesktop = window.innerWidth >= 768

      if (!isDesktop || !cards.length || !title) {
        return
      }

      const handleScroll = () => {
        const viewport = window.innerHeight
        const titleRect = title.getBoundingClientRect()
        const titleShift = Math.min(Math.max((viewport * 0.22 - titleRect.top) / 3, 0), 120)
        title.style.transform = `translateY(-${titleShift}px)`

        cards.forEach((card, index) => {
          const cardInner = card.querySelector('.service-card-inner')
          const rect = card.getBoundingClientRect()
          const progress = Math.min(Math.max((viewport * 0.28 - rect.top) / (viewport * 0.9), 0), 1)
          const lift = -(cards.length - index) * 18 * progress
          const scale = 0.82 + index * 0.045 + progress * 0.08
          const rotate = (index % 2 === 0 ? 1 : -1) * (1.5 + progress * 2.5)

          if (cardInner) {
            cardInner.style.transform = `translateY(${lift}vh) scale(${scale}) rotateZ(${rotate}deg)`
          }
        })
      }

      handleScroll()
      window.addEventListener('scroll', handleScroll, { passive: true })
      window.addEventListener('resize', handleScroll)

      return () => {
        window.removeEventListener('scroll', handleScroll)
        window.removeEventListener('resize', handleScroll)
      }
    }

    const timer = window.requestAnimationFrame(() => {
      revealHeader()
    })

    const cleanupStack = applyServiceStack()

    return () => {
      window.cancelAnimationFrame(timer)
      if (cleanupStack) cleanupStack()
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
