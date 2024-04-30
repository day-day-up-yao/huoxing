'use client';

import { Stack, Typography } from '@mui/material';
import { Theme, useTheme } from '@mui/system';
import { Link } from 'src/components/link';
import { usePathname } from 'src/routes/hooks';
import { paths } from 'src/routes/paths';

export const launchpadNavData = [
  {
    name: 'Token',
    path: paths.launchpad.root, // root路由默认代表Token
  },
  {
    name: 'NFT',
    path: paths.launchpad.nft,
  },
];

export default () => {
  const pathname = usePathname({ pure: true });
  const { palette } = useTheme<Theme>();

  return (
    <Stack flexDirection="row">
      {launchpadNavData.map((item) => {
        const isCur = pathname === item.path;
        return (
          <Typography
            variant="h4"
            key={item.name}
            sx={({ palette }) => ({
              fontWeight: isCur ? 'bold' : 'normal',
            })}
          >
            <Link
              style={{
                display: 'block',
                marginRight: '40px',
                padding: '8px 0',
                color: isCur ? palette.text.primary : palette.text.secondary,
                borderBottom: `3px solid ${isCur ? palette.primary.main : palette.background}`,
              }}
              href={item.path}
            >
              {item.name}
            </Link>
          </Typography>
        );
      })}
    </Stack>
  );
};
