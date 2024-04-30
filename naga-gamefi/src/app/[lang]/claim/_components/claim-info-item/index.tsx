import React, { useMemo } from 'react';
import { Box, Button, Stack, Typography } from '@mui/material';

type ClaimInfoItemProps = {
  t: any;
  isPC: boolean;
  id: number; // 当前步骤 目前影响 状态图标
  isText?: boolean; // 是否为纯文本显示
  statusNum?: number; // 左侧状态图标类型 1.红色叹号 2.绿色对号
  title?: string; // 主要标题
  isTitleT?: boolean; // 是否用多语言组件 显示文本
  titleHref?: string; // 点击标题跳转链接
  titleClick?: () => void; // 标题点击
  titleChild?: React.JSX.Element; // 标题特殊内容
  titleSub?: string; // 次要标题
  btnText?: string; // 按钮文字
  onBtnClick?: () => void; // 按钮事件
};

const ClaimInfoItem = (props: ClaimInfoItemProps) => {
  const {
    t,
    id,
    isPC = true,
    isText = false,
    statusNum,
    title,
    isTitleT,
    titleHref,
    titleClick,
    titleChild,
    titleSub,
    btnText,
    onBtnClick,
  } = props;

  // 左侧图标
  const leftDom = useMemo(
    () =>
      !isText &&
      statusNum && (
        <Stack
          sx={
            isPC
              ? { width: '24px', height: '24px', mr: '16px' }
              : { width: '18px', height: '18px', mr: '10px' }
          }
        >
          <img
            src={`/images/activity/fight2023/claim/icon-claim-status-${statusNum}-${id}.webp`}
            alt=""
          />
        </Stack>
      ),
    [id, isPC, isText, statusNum]
  );

  // 标题内容
  const contentDom = useMemo(
    () => (
      <Stack direction="column" gap={isPC ? '16px' : '8px'} sx={{ flex: 1 }}>
        {titleSub && (
          <Typography
            sx={
              isPC
                ? {
                    fontSize: '16px',
                    color: '#B8B9C1',
                    lineHeight: '24px',
                  }
                : {
                    fontSize: '12px',
                    color: '#B8B9C1',
                    lineHeight: '18px',
                  }
            }
          >
            {t(titleSub)}
          </Typography>
        )}
        {title && (
          <Typography
            component={titleHref ? 'a' : 'p'}
            href={titleHref}
            target="_blank"
            onClick={() => {
              if (titleClick) {
                titleClick();
              }
            }}
            sx={
              isPC
                ? {
                    fontSize: '24px',
                    lineHeight: '28px',
                    color: '#FFFFFF',
                    textDecoration: titleHref || titleClick ? 'underline' : 'none',
                    cursor: titleClick ? 'pointer' : 'none',
                  }
                : {
                    fontSize: '14px',
                    lineHeight: '18px',
                    color: '#FFFFFF',
                    textDecoration: titleHref || titleClick ? 'underline' : 'none',
                    cursor: titleClick ? 'pointer' : 'none',
                  }
            }
          >
            {isTitleT ? t(title) : title}
          </Typography>
        )}
        {titleChild}
      </Stack>
    ),
    [isPC, isTitleT, t, title, titleChild, titleClick, titleHref, titleSub]
  );

  // 右侧按钮
  const rightDom = useMemo(
    () =>
      !isText &&
      btnText &&
      onBtnClick && (
        <Box sx={isPC ? { mt: '12px' } : { mt: '0' }}>
          <Button
            variant="contained"
            color="error"
            sx={
              isPC
                ? {
                    minWidth: '126px',
                    minHeight: '44px',
                    borderRadius: '5px',
                  }
                : {
                    minWidth: '70px',
                    minHeight: '28px',
                    borderRadius: '5px',
                    p: '6px 14px',
                    fontSize: '12px',
                    lineHeight: '16px',
                  }
            }
            onClick={() => onBtnClick()}
          >
            {t(btnText)}
          </Button>
        </Box>
      ),
    [btnText, isPC, isText, onBtnClick, t]
  );

  const itemDom = useMemo(
    () => (
      <Stack
        direction="row"
        alignItems="flex-start"
        justifyContent="space-between"
        sx={
          isPC
            ? {
                minHeight: '136px',
                width: '100%',
                borderBottom: '1px solid #4E4C6B',
                '&:last-of-type': {
                  borderBottom: 'none',
                },
                p: '36px 0',
              }
            : {
                minHeight: '80px',
                width: '100%',
                borderBottom: '1px solid #4E4C6B',
                '&:last-of-type': {
                  borderBottom: 'none',
                },
                p: '20px 0',
              }
        }
      >
        <Stack direction="row" alignItems="flex-start">
          {leftDom}
          {contentDom}
        </Stack>
        {rightDom}
      </Stack>
    ),
    [contentDom, isPC, leftDom, rightDom]
  );

  return itemDom;
};

export default ClaimInfoItem;
