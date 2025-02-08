
import Header from './components/Header'
import Section from './components/Section'
import SocialProofSection from './components/SocialProofSection';
import FeaturesSection from './components/FeaturesSection';
import TestimonialSection from './components/TestimonialSection';
import FAQSection from './components/FAQSection';
import BlogSection from './components/BlogSection';
import CTASection from './components/CTASection';
import FooterSection from './components/FooterSection';
import './App.css';

const App=()=>(
    <div className="App">
      <Header/>
      <Section/>
      <SocialProofSection/>
      <FeaturesSection/>
      <TestimonialSection/>
      <FAQSection/>
      <BlogSection/>
      <CTASection/>
      <FooterSection/>
    </div>
  )

export default App;
