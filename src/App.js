import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import ServicesPreview from './components/ServicesPreview';
import ProductsPreview from './components/ProductsPreview';
import NewsPreview from './components/NewsPreview';
import ContactPreview from './components/ContactPreview';
import AboutSection from './components/AboutSection';
import ProjectsPreview from './components/ProjectsPreview';
import ServicesPage from './components/ServicesPage';
import ProductsPage from './components/ProductsPage';
import NewsPage from './components/NewsPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
function Home() {
  return (
    <div>
      <section><AboutSection /></section>
      <section><ServicesPreview /></section>
      <section><ProjectsPreview /></section>
      <section><ProductsPreview /></section>
      <section><NewsPreview /></section>
      <section><ContactPreview /></section>
    </div>
  );
}


function App() {
  return (
    <>
      <Header />
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
