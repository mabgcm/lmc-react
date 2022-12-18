import React, { useState } from 'react';
import { I18nPropvider, LOCALES } from '../src/components/i18n';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Hero from './components/Hero/Hero';
import Nvbar from './components/Navbar/Nvbar';
import uk from '../src/img/uk.png';
import sp from '../src/img/sp.png';
import Home from './components/Home';
import Products from './components/products/Products';
import Product1 from '../src/components/products/Product1';
import Product2 from '../src/components/products/Product2';
import Product3 from '../src/components/products/Product3';
import Contact from './components/Contact';
import About from './components/About';


function App() {

  const [locale, setLocale] = useState(LOCALES.ENGLISH);

  return (
    <>
      <I18nPropvider locale={locale}>
        <div className="lang-bar">
          <div className="lang">
            <button onClick={() => setLocale(LOCALES.ENGLISH)}><img src={uk} alt="English" /></button>
            <button onClick={() => setLocale(LOCALES.SPANISH)}><img src={sp} alt="English" /></button>
          </div>
        </div>
        <Nvbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='hero' element={<Hero />} />
          <Route path='products' element={<Products />}>
            <Route index element={<Product1 />} />
            <Route path='product1' element={<Product1 />} />
            <Route path='product2' element={<Product2 />} />
            <Route path='product3' element={<Product3 />} />
          </Route>
          <Route path='contact' element={<Contact />} />
          <Route path='about' element={<About />} />
        </Routes>
      </I18nPropvider>
    </>

  );
}

export default App;
