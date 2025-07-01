
import React from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { Problems } from '@/components/Problems';
import { Solution } from '@/components/Solution';
import { Benefits } from '@/components/Benefits';
import { PricingPlans } from '@/components/PricingPlans';
import { SocialProof } from '@/components/SocialProof';
import { FinalCTA } from '@/components/FinalCTA';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <div className="pt-16"> {/* Add padding-top to account for fixed header */}
        <Hero />
        <Problems />
        <div id="como-funciona">
          <Solution />
        </div>
        <div id="beneficios">
          <Benefits />
        </div>
        <div id="planos">
          <PricingPlans />
        </div>
        <SocialProof />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
};

export default Index;
