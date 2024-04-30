import React, { useContext, useMemo } from 'react';
import {
  Box,
  Stack,
  Typography,
  Avatar,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
} from '@mui/material';
// import ImageIcon from '@mui/icons-material/Image';

import ShareList from 'src/components/before/share-list';

// eslint-disable-next-line import/extensions
import { Context } from '../../context.tsx';

export default () => {
  const { detail } = useContext(Context);

  // communition list
  const community = useMemo(
    () => (
      <ShareList
        size="smaller-icon"
        linkitem={{
          tw: detail?.twitter,
          me: detail?.medium,
          te: detail?.telegram,
          di: detail?.discord,
        }}
      />
    ),
    [detail?.discord, detail?.medium, detail?.telegram, detail?.twitter]
  );

  const tokenlist = useMemo(
    () => (
      <Box
        sx={{
          mt: 3,
          bgcolor: '#23252b',
          borderRadius: 0.5,
        }}
      >
        <List>
          <ListItem>
            <ListItemAvatar>
              <Avatar src="" />
            </ListItemAvatar>
            <ListItemText primary="Ethereum" />
          </ListItem>
        </List>
      </Box>
    ),
    []
  );

  return (
    <Box>
      <Stack>
        <Typography variant="h5">{detail.name}</Typography>
      </Stack>
      <Typography
        sx={{
          mt: 2,
          color: '#9FACBF',
        }}
        variant="body2"
      >
        {detail.brief}
      </Typography>
      {community}
      {/* {tokenlist} */}
    </Box>
  );
};
