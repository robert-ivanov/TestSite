import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop'; // ✅ Import it

import AboutSection from './components/AboutSection';
import ServicesPreview from './components/ServicesPreview';
import ProjectsPreview from './components/ProjectsPreview';
import NewsPreview from './components/NewsPreview';

import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import ServicesPage from './components/ServicesPage';
import ProductsPage from './components/ProductsPage';
import NewsPage from './components/NewsPage';
import ContactPage from './components/ContactPage';

function Home() {
  return (
    <div>
      <section className="no-gap"><AboutSection /></section>
      <section className="no-gap"><ServicesPreview /></section>
      <section className="no-gap"><ProjectsPreview /></section>
      <section className="no-gap"><NewsPreview /></section>
    </div>
  );
}

function App() {
  return (
    <>
      <Header />
      <ScrollToTop /> {/* ✅ Add this here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/products" element={<ProductsPage />} />
        <Route path="/news" element={<NewsPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
