import './App.css'
import './style.css'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Faq from './components/Faq'
import Footer from './components/Footer'
import { Helmet } from 'react-helmet'

function App() {
  return (
    <>
      <Helmet>
        {/* Title and Description */}
        <title>Kolabbb - Where Artists and Creatives Collaborate</title>
        <meta name="description" content="Join the Kolabbb waitlist and get early access to a platform for creatives and music artists." />
        <meta name="keywords" content="Waitlist, Creatives, Music, Collaboration, Kolabbb, playlist, pitching, Nigerian music industry, artist" />

        {/* Open Graph (OG) Tags */}
        <meta property="og:title" content="Kolabbb - Artists and Creatives Collaboration" />
        <meta property="og:description" content="Join the Kolabbb waitlist and collaborate with the best creatives in the music industry." />
        <meta property="og:image" content="https://kolabbb.com/og-image.jpg" />
        <meta property="og:url" content="https://kolabbb.com" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Kolabbb" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" /> {/* Large image Twitter card */}
        <meta name="twitter:title" content="Kolabbb - Artists and Creatives Collaboration" />
        <meta name="twitter:description" content="Join the Kolabbb waitlist and collaborate with the best creatives in the music industry." />
        <meta name="twitter:image" content="https://kolabbb.com/og-image.jpg" />
        <meta name="twitter:site" content="@Kolabbb" />

        {/* Canonical Link (helps with SEO) */}
        <link rel='canonical' href='https://kolabbb.com/waitlist' />
      </Helmet>

      <Navbar />
      <Home />
      <Faq />
      <Footer />
    </>
  )

}

export default App
