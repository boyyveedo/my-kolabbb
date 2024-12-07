
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
        <title>Kolabbb - Where Artists and Creatives Collaborate</title>
        <meta name="description" content="Join the Kolabbb waitlist and get early access to a platform for creatives and music artists." />
        <meta name="keywords" content="Waitlist, Creatives, Music, Collaboration, Kolabbb, playlist, pitching, Nigerian music industry, artist" />
        <meta property="og:title" content="Kolabbb -  Artists and Creatives Collaboration" />
        <meta property="og:description" content="Join the Kolabbb waitlist and collaborate with the best creatives in the music industry." />
        <meta property="og:image" content="https://kolabbb.com/og-image.jpg" />
        <meta property="og:url" content="https://kolabbb.com" />
        <link rel='canonical' href='/waitlist' />
      </Helmet>

      <Navbar />
      <Home />
      <Faq />
      <Footer />
    </>
  )
}

export default App
