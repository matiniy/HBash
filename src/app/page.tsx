import React from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Listings from '@/components/Listings';
import ContactForm from '@/components/ContactForm';
import Credentials from '@/components/Credentials';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-deep-forest">
      <Navbar />
      <Hero />
      <About />
      <Listings />
      <ContactForm />
      <Credentials />
      <Footer />
    </main>
  );
}