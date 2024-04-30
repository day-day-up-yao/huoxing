'use client';

import Header from './header';
import GameCenter from './game-center';
import DetailContext from '../context';
import './index.scss';
import 'swiper/scss';
// import 'node_modules/swiper/modules/effect-fade.scss';
import 'node_modules/swiper/modules/pagination.scss';
import 'node_modules/swiper/modules/navigation.scss';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const DemoContent = () => (
  <DetailContext>
    <Header />
    <GameCenter />
  </DetailContext>
);

export default DemoContent;
