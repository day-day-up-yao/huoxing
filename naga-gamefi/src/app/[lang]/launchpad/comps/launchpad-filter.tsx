import { Button, Stack } from '@mui/material';
import { useMemo } from 'react';
import { useTranslation } from 'react-i18next';

export enum LaunchpadStage {
  Upcoming = 'upcoming',
  Ended = 'ended',
}
const useFilterData = () => {
  const { t } = useTranslation();
  return useMemo(
    () => [
      {
        type: LaunchpadStage.Upcoming,
        name: t('launchpad-upcoming'),
      },
      {
        type: LaunchpadStage.Ended,
        name: t('launchpad-ended'),
      },
    ],
    [t]
  );
};

export default ({
  onClick,
  type = LaunchpadStage.Upcoming,
}: {
  onClick: (type: LaunchpadStage) => void | Promise<void>;
  type: LaunchpadStage;
}) => {
  const data = useFilterData();

  return (
    <Stack flexDirection="row" sx={{ paddingTop: '32px', paddingBottom: '24px' }}>
      {data.map((item, index) => {
        const isCur = item.type === type;
        return (
          <Button
            sx={{ marginRight: '12px', fontWeight: 'normal', textTransform: 'capitalize' }}
            variant={isCur ? 'contained' : 'soft'}
            color={isCur ? 'primary' : 'inherit'}
            key={item.type}
            onClick={() => {
              if (onClick) onClick(item.type);
            }}
          >
            {item.name}
          </Button>
        );
      })}
    </Stack>
  );
};
