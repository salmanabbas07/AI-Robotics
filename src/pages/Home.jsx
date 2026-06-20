import React from 'react';
import Hero from '../components/Hero/Hero';
import WorkshopDetails from '../components/WorkshopDetails/WorkshopDetails';
import LearningOutcomes from '../components/LearningOutcomes/LearningOutcomes';
import FAQ from '../components/FAQ/FAQ';
import RegistrationForm from '../components/RegistrationForm/RegistrationForm';
import Footer from '../components/Footer/Footer';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <Hero />
      <WorkshopDetails />
      <LearningOutcomes />
      <FAQ />
      <RegistrationForm />
      <Footer />
    </div>
  );
};

export default Home;
