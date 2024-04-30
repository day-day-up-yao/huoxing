import { Avatar, Box, Card, Stack, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';
import dayjs from 'dayjs';
import ShareList from 'src/components/share-list';
import { formattingNum } from 'src/utils/public';
import { GREY } from 'src/theme/palette-step-colors';
import { oneLineTextOverflow } from 'src/utils/styles';
import { usePathname } from 'src/routes/hooks/use-pathname';
import { Link } from 'src/components/link';
import SvgIcon from 'src/components/svg-icon';
import GamePriceBox from 'src/components/game-price-box';
import { useIsDark } from 'src/utils/hooks/use-is-dark';
import { launchpadNavData } from './navigation';
import './public.scss';

export const LaunchpadItem = ({
  data,
  isLittleSize, // 小尺寸样式 首页用到
}: {
  data: LaunchpadListItem;
  isLittleSize?: boolean;
}) => {
  const pathname = usePathname({ pure: true });

  const isDark = useIsDark();

  const { t } = useTranslation();
  const {
    status,
    itemNum,
    brief,
    category,
    coverUrl,
    name,
    iconUrl,
    chain,
    chainName,
    chainIcon,
    twitter,
    telegram,
    discord,
    website,
    itemPrice,
    totalRaise,
    startTime,
    endTime,
    platform,
    platformIcon,
    itemUnit,
    priceUnit,
    jumpUrl,
  } = data;

  return (
    <Link href={jumpUrl} target="_blank" rel="noreferrer" className="launchpad-item-card">
      <Card
        sx={({ palette }) => ({
          background: isDark ? palette.background.neutral : palette.background.default,
        })}
        className="card-shadow"
      >
        <Box
          height={isLittleSize ? '141px' : '192px'}
          position="relative"
          paddingBottom="16px"
          sx={{ marginBottom: '8px', boxSizing: 'content-box' }}
        >
          <Box height="100%" overflow="hidden">
            <Box
              className="launchpad-item-card-cover"
              height="100%"
              overflow="hidden"
              sx={({ palette }) => ({
                background: coverUrl ? `url(${coverUrl}) center` : palette.background.paper,
                backgroundSize: '100% auto',
              })}
            />
          </Box>
          {!isLittleSize && (
            <Box
              sx={({ palette }) => ({
                position: 'absolute',
                bottom: 0,
                right: '24px',
                height: '50px',
                width: '50px',
                borderRadius: '6px',
                padding: '3px',
                background: palette.background.paper,
                overflow: 'hidden',
              })}
            >
              <Avatar
                src={iconUrl}
                variant="square"
                sx={{
                  height: '100%',
                  width: '100%',
                  borderRadius: '6px',
                  overflow: 'hidden',
                }}
              />
            </Box>
          )}

          {startTime && endTime ? (
            startTime === -1 ? (
              <Typography
                variant={isLittleSize ? 'h4' : 'h3'}
                sx={{ color: isDark ? GREY[800] : GREY[100], lineHeight: '1.1' }}
              >
                {/* TBA */}
              </Typography>
            ) : (
              <Stack
                alignItems="center"
                justifyContent="center"
                sx={{
                  padding: '8px 0 0 0',
                  position: 'absolute',
                  left: '8px',
                  top: '8px',
                  background: GREY[0],
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: '-20px',
                    left: 0,
                    width: 0,
                    height: 0,
                    borderLeft: '35px solid transparent',
                    borderRight: '35px solid transparent',
                    borderTop: `20px solid ${GREY[0]}`,
                  },
                  ...(isLittleSize
                    ? {
                        height: '70px',
                        width: '70px',
                      }
                    : {
                        height: '90px',
                        width: '70px',
                      }),
                }}
              >
                {!isLittleSize && (
                  <Typography
                    variant="subtitle2"
                    sx={{ color: GREY[800], textTransform: 'capitalize' }}
                  >
                    {status === 2 ? 'Start' : 'Ended'}
                  </Typography>
                )}
                <Typography variant="h3" sx={{ color: GREY[800], lineHeight: '1.2' }}>
                  {status === 2
                    ? dayjs(startTime * 1000).format('DD')
                    : dayjs(endTime * 1000).format('DD')}
                  {/* {dayjs(startTime * 1000).format('DD')} */}
                </Typography>
                <Typography
                  variant="subtitle1"
                  sx={{
                    color: GREY[500],
                    textTransform: 'uppercase',
                    fontWeight: 'normal',
                  }}
                >
                  {status === 2
                    ? dayjs(startTime * 1000).format('MMM')
                    : dayjs(endTime * 1000).format('MMM')}
                </Typography>
              </Stack>
            )
          ) : null}
        </Box>

        <Box padding="0 20px 16px">
          <Stack flexDirection="row" marginBottom="12px" alignItems="center">
            <Typography
              variant="h5"
              sx={{
                fontWeight: 'bold',
                paddingRight: '8px',
                display: 'block',
                maxWidth: 'calc(100% - 32px)',
                ...oneLineTextOverflow,
              }}
            >
              {name}
            </Typography>
            {chain && <Avatar src={chainIcon} sx={{ width: '20px', height: '20px' }} />}
          </Stack>

          <Stack
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            marginBottom="16px"
          >
            {!isLittleSize && (
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  opacity: '0.7',
                  '& svg': {
                    height: '20px !important;',
                    width: '20px !important;',
                  },
                }}
              >
                <ShareList
                  iconStyle={{ marginRight: '8px' }}
                  linkitem={{ tw: twitter, te: telegram, di: discord, we: website }}
                />
              </Box>
            )}

            <Stack flexDirection="row" alignItems="center">
              <Avatar
                src={platformIcon}
                sx={({ palette }) => ({
                  width: '20px',
                  height: '20px',
                  marginRight: '6px',
                  border: `1px solid ${palette.background.neutral}`,
                })}
              />
              <Typography
                variant="subtitle2"
                sx={{ fontWeight: 'normal', textTransform: 'capitalize', fontSize: '14px' }}
              >
                {platform}
              </Typography>
            </Stack>
          </Stack>

          <Stack flexDirection="row" alignItems="center">
            <Stack flexDirection="row" alignItems="center" marginRight="16px">
              <Stack height="20px" width="20px" alignContent="center" marginRight="6px">
                {/* <img src="/images/svg/price.svg" alt={t('ranking_token_price')} /> */}
                <SvgIcon name="price" />
              </Stack>
              <Typography
                variant="subtitle1"
                fontSize="14px"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                {itemPrice === 0 ? (
                  'FREE'
                ) : itemPrice === -1 ? (
                  'TBA'
                ) : itemPrice ? (
                  <>
                    <GamePriceBox price={itemPrice} fontWeight="bold" fontSize="14px" />
                    {/* {itemPrice} */}
                    <Typography
                      sx={{
                        textTransform: 'uppercase',
                        fontSize: '14px',
                        marginLeft: '4px',
                        fontWeight: 'bold',
                      }}
                    >
                      {priceUnit}
                    </Typography>
                  </>
                ) : (
                  '--'
                )}
              </Typography>
            </Stack>
            <Stack flexDirection="row" alignItems="center">
              <Stack height="20px" width="20px" alignContent="center" marginRight="6px">
                {/* <img src="/images/svg/total.svg" alt={t('ranking_total-raise')} /> */}
                <SvgIcon name="total" />
              </Stack>
              <Typography
                variant="subtitle1"
                fontSize="14px"
                sx={{ display: 'flex', alignItems: 'center' }}
              >
                {itemNum === -1 ? (
                  'TBA'
                ) : itemNum === -2 ? (
                  <Typography fontSize="24px" lineHeight="8px" marginTop="3px">
                    ∞
                  </Typography>
                ) : itemNum ? (
                  <>
                    {pathname === launchpadNavData[0].path && !itemUnit ? '$' : ''}
                    {Number(itemNum) < 0.001
                      ? `${formattingNum(itemNum, false, 5)}`
                      : `${formattingNum(itemNum, false, 3)}`}
                    {itemUnit && (
                      <Typography
                        sx={{
                          textTransform: 'uppercase',
                          fontSize: '14px',
                          fontWeight: 'bold',
                          marginLeft: '4px',
                        }}
                      >
                        {itemUnit}
                      </Typography>
                    )}
                  </>
                ) : (
                  '--'
                )}
              </Typography>
            </Stack>
          </Stack>
        </Box>
      </Card>
    </Link>
  );
};
