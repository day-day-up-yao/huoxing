import { Box, Stack, Avatar, Button, Typography } from '@mui/material';
import { useMemo, useContext, useCallback } from 'react';
import Cookies from 'js-cookie';

import { formatPublishTime } from 'src/utils/public';

import { Context } from '../../context';

export default () => {
  const {
    commentlistinfo,
    t,
    handleChangeValue,
    handleCancel,
    handleCommentSure,
    convalue,
    reviewbtn,
    handleReviewsFocus,
  } = useContext(Context);
  const writeDom = useMemo(
    () => (
      <Box>
        <Stack direction="row">
          <Avatar
            sx={{
              width: '52px',
              height: '52px',
            }}
            src={Cookies.get('avatarUrl') ? Cookies.get('avatarUrl') : ''}
          />
          <Box
            ml="20px"
            width="-webkit-fill-available"
            sx={{
              borderBottom: '1px solid #393B40',

              '&:hover': {
                borderBottom: '1px solid #9FACBF',
              },
            }}
          >
            <input
              style={{
                width: '100%',
                background: 'none',
                border: 'none',
                padding: '16px 0',
                color: 'var(--naga-font-hundred)',
              }}
              onFocus={handleReviewsFocus}
              value={convalue || ''}
              onChange={(e) => handleChangeValue(e.target.value)}
              placeholder="Add Reviews"
              type="text"
              name=""
              id=""
            />
          </Box>
        </Stack>
        <Stack direction="row" mt="16px" justifyContent="space-between">
          <Box />
          {reviewbtn && (
            <Stack direction="row" gap="10px">
              <Button onClick={handleCancel}>{t('public_cancal')}</Button>
              <Button
                sx={{
                  bgcolor: 'primary.main',
                  color: 'common.white',
                  '&:hover': {
                    bgcolor: 'primary.main',
                  },
                }}
                onClick={handleCommentSure}
              >
                {t('rate_popup_btn')}
              </Button>
            </Stack>
          )}
        </Stack>
      </Box>
    ),
    [handleReviewsFocus, convalue, reviewbtn, handleCancel, t, handleCommentSure, handleChangeValue]
  );

  const reviewsItemDom = useCallback(
    (info: any) => (
      <Box
        sx={{
          mt: '32px',
          borderTop: '1px solid',
          borderColor: 'background.border',
          pt: '32px',
        }}
      >
        <Stack direction="row" gap="20px">
          <Avatar
            sx={{
              width: '52px',
              height: '52px',
            }}
            src={info?.avatarUrl}
          />
          <Box>
            <Stack direction="row" alignItems="center">
              <Typography variant="body2" fontWeight="bold">
                {info?.name}
              </Typography>
              <Typography variant="body2" ml="18px" color="text.secondary">
                {formatPublishTime(t, info.publishTime * 1000)}
              </Typography>
            </Stack>
            {info?.isEdit && Number(info?.isEdit) === 1 ? (
              <Typography variant="caption" color="text.secondary">
                {t('rate_tag_edited')}
              </Typography>
            ) : undefined}

            <Typography variant="body2" color="text.secondary">
              {info?.content}
            </Typography>
          </Box>
        </Stack>
      </Box>
    ),
    [t]
  );

  return (
    <Box>
      {writeDom}
      {commentlistinfo?.inforList.length > 0 &&
        commentlistinfo?.inforList.map((item: any, index: any) => (
          <Box key={index}>{reviewsItemDom(item)}</Box>
        ))}
    </Box>
  );
};
