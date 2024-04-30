import React from 'react';
import { useTranslation } from 'react-i18next';

import RenderCenter from 'src/components/before/render-center';
import AllQuantity from './all-quantity';
import LibraryCon from './library-con';
import GameContext from './context';

import './index.scss';

export default () => {
  const { t } = useTranslation();
  return (
    <GameContext>
      <RenderCenter
        children={
          <>
            <div className="h5-game-title">{t('public_gamelibrary')}</div>
            <AllQuantity />
            <LibraryCon />
          </>
        }
      />
    </GameContext>
  );
};
