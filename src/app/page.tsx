import CTASection from "../components/home/CTASection";
import EventsGrid from "../components/home/EventsGrid";
import Features from "../components/home/Features";
import Hero from "../components/home/Hero";
import Speakers from "../components/home/Speakers";
import Testimonials from "../components/home/Testimonials";
import WhyChoose from "../components/home/WhyChoose";

export default function Home() {
  return (
    <div>
      <Hero/>
      <Features/>
      <EventsGrid/>
      <WhyChoose/>
      <Speakers/>
      <Testimonials/>
      <CTASection/>
    </div>
  );
}