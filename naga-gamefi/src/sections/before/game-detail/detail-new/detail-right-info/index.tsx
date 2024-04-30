import React from 'react';
import { Box } from '@mui/material';

import DetailTextBox from '../../components/detail-text-box';
import GameNFTCollectionDom from '../../game-nft-dom';
import GameInfoNew from '../../game-info-new';

export default () => (
  <Box>
    <DetailTextBox />
    <GameNFTCollectionDom />
    <GameInfoNew />
  </Box>
);
