import './App.css'
import { useEffect } from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import { ThemeProvider } from './contexts/ThemeContext'
import { getRouteByPath } from './config/routes'
import { updateSEO, pageSEOData } from './utils/seo'
import { initGA, trackPageView } from './utils/analytics'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop'
import ErrorBoundary from './components/ErrorBoundary'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ServicesPage from './pages/ServicesPage'
import ContactPage from './pages/ContactPage'
import BlogPage from './pages/BlogPage'
import CaseStudiesPage from './pages/CaseStudiesPage'
import PrivacyPolicyPage from './pages/PrivacyPolicyPage'
import TermsOfServicePage from './pages/TermsOfServicePage'
import NotFoundPage from './pages/NotFoundPage'

// Initialize Google Analytics on app load
initGA();

function App() {
  const location = useLocation()

  // Update SEO and title when route changes
  useEffect(() => {
    // Get current route path (remove leading slash)
    const path = location.pathname === '/' ? 'home' : location.pathname.slice(1)
    
    // Update document title
    const route = getRouteByPath(path)
    if (route) {
      document.title = route.title
    }

    // Update SEO meta tags
    const seoData = pageSEOData[path]
    if (seoData) {
      updateSEO(seoData)
    }

    // Track page view in Google Analytics
    trackPageView(location.pathname, route?.title)

    // Scroll to top on route change
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location])

  return (
    <ErrorBoundary>
      <ThemeProvider>
        <div className="app">
          <a href="#main-content" className="skip-link">
            Skip to main content
          </a>
          <Header />
          <main className="main-content" id="main-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/services" element={<ServicesPage />} />
              <Route path="/contact" element={<ContactPage />} />
              <Route path="/blog" element={<BlogPage />} />
              <Route path="/case-studies" element={<CaseStudiesPage />} />
              <Route path="/privacy" element={<PrivacyPolicyPage />} />
              <Route path="/terms" element={<TermsOfServicePage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </ThemeProvider>
    </ErrorBoundary>
  )
}

export default App
