'use client';

import React, { ReactNode } from 'react';

import Header from './header';
import Footer from './footer';

import './index.scss';

const LayoutMain = ({ children }: { children: ReactNode }) => (
  <div className="app-container" id="root">
    <Header />
    <div className="layout-content-pc" key="layoutContent">
      <div className="pc-center">
        <div className="center-right">{children}</div>
      </div>
    </div>
    <Footer />
  </div>
);

export default LayoutMain;
