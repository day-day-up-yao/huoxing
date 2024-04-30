import React, { use } from 'react';
import { useTranslation } from 'react-i18next';

import './index.scss';
import { useIsDark } from 'src/utils/hooks/use-is-dark';

const icon = '/images/icon/icon-not-found.png';
const iconlight = '/images/icon/notsearch-light.png';

const SearchNotFound = () => {
  const { t } = useTranslation();
  const isDark = useIsDark();

  return (
    <div className="search-detail-not-found-box">
      <div className="search-detail-not-found-wrap">
        <img className="search-detail-not-found-img" src={isDark ? icon : iconlight} alt="" />
        {t('search_not_found')}
      </div>
    </div>
  );
};

export default SearchNotFound;
