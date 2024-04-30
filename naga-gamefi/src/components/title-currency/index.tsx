import React, { useEffect, useState, useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Avatar, Box, Typography, Stack } from '@mui/material';
import AvatarGroup, { avatarGroupClasses } from '@mui/material/AvatarGroup';
// import { Box } from '@mui/material';
// import { AvatarGroup, Avatar, Button } from 'rsuite';

// import ethicon from '../../public/imgs/icon/ether.png'
// import avaicon from '../../public/imgs/icon/avalen.png'
// import bnbicon from '../../public/imgs/icon/bnbchain.png'
// import { chainlist, newaddchainlist } from '../../public/js/public'

import './index.scss';

const NewShowChain = (chainiconlist: any, isHomeBanner: boolean) => (
  <Box
    sx={{
      ml: isHomeBanner ? '0' : '8px',
    }}
  >
    <Stack direction="row" alignItems="center" gap="6px">
      <AvatarGroup
        // sx={{
        //   width: '20px',
        //   height: '20px',
        // }}
        // variant="rounded"
        sx={{
          [`& .${avatarGroupClasses.avatar}`]: {
            width: '20px',
            height: '20px',
            '&:first-of-type': {
              color: '',
              bgcolor: 'transparent',
            },
          },
        }}
        max={5}
        renderSurplus={(surplus: any) => (
          <div
            style={{
              width: '100%',
              height: '100%',
              background: '#fff',
              textAlign: 'center',
              lineHeight: '1.3',
              zIndex: 10,
            }}
          >
            ...
          </div>
        )}
      >
        {chainiconlist.map((item: any, index: any) =>
          item?.showName !== 'Other' || item.name !== 'Other' ? (
            <Avatar
              sx={{
                width: '20px',
                height: '20px',
                border: 'none !important',
                bgcolor: 'transparent',
                zIndex: index,
              }}
              alt={`img${index}`}
              // style={{
              //   background: 'transparent',
              // }}
              src={item.iconUrl}
              key={index}
            />
          ) : (
            ''
          )
        )}
      </AvatarGroup>
      {chainiconlist?.length === 1 && isHomeBanner && chainiconlist[0]?.showName !== 'Other' && (
        <Typography variant="caption">{chainiconlist[0]?.showName}</Typography>
      )}
    </Stack>
  </Box>
);

export default (props: any) => {
  const { title, size, chain, istask, isHomeBanner, isnewshow, librarydata } = props;
  // size的值 big 字号24  medium 字号20 small 字号12 only 18
  const [chainiconlist, setChainiconlist] = useState<any>([]);
  useEffect(() => {
    const getchain = [];
    const allchainlist = librarydata?.chainPojoList;
    if (chain) {
      const allchain = chain?.split(',');
      // eslint-disable-next-line no-plusplus
      for (let i = 0; i < allchain.length; i++) {
        // eslint-disable-next-line no-plusplus
        for (let j = 0; j < allchainlist?.length; j++) {
          if (
            allchain[i].toLowerCase() === allchainlist[j].name.toLowerCase() ||
            allchain[i].toLowerCase() === allchainlist[j].showName.toLowerCase()
          ) {
            getchain.push(allchainlist[j]);
          }
        }
      }
    }
    setChainiconlist(getchain);
  }, [chain, librarydata?.chainPojoList]);

  const oldChainDom = useMemo(
    () => (
      <div className="title-curreny">
        {title && <div className={`title-curreny-text-${size}`}>{title}</div>}
        <div className={`title-curreny-list-${size}`}>
          {chainiconlist.length > 0
            ? chainiconlist.map((item: any, index: number) => (
                <div style={{ display: 'flex' }} key={index}>
                  <img src={item.iconUrl} alt="" />
                  {isHomeBanner && chainiconlist.length === 1 ? <p>{item.showName}</p> : ''}
                </div>
              ))
            : chain &&
              (istask || isHomeBanner ? '' : <img src="/images/icon/othericon.png" alt="" />)}
        </div>
      </div>
    ),
    [chain, chainiconlist, isHomeBanner, istask, size, title]
  );
  return isnewshow ? NewShowChain(chainiconlist, isHomeBanner) : oldChainDom;
};
