import React, { useContext, useMemo } from 'react';
import { InputAdornment, ListItemIcon, MenuItem, Stack, Typography } from '@mui/material';

import { RHFMultiSelect, RHFSelect, RHFSwitch, RHFTextField } from 'src/components/hook-form';
import { stauslist } from 'src/utils/public/datas';
import Image from 'src/components/image/image';
import { Context } from '../context';
import GameInfoBtn from '../game-info-btn';

export default () => {
  const { t, allChain, allCategory, allPlatform, formValues } = useContext(Context);

  // 游戏名称 Game Name (name) ———— 最大40字
  const readerGameName = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_game_name')}</Typography>
        <RHFTextField
          name="name"
          inputProps={{ maxLength: 40 }}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">{formValues.name.length}/40</InputAdornment>
            ),
          }}
        />
      </Stack>
    ),
    [formValues.name.length, t]
  );

  // 游戏一句话简介 Short Description (brief) ———— 最大200字
  const readerGameBrief = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_short_description')}</Typography>
        <RHFTextField
          name="brief"
          multiline
          rows={4}
          inputProps={{ maxLength: 200 }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                sx={{ position: 'absolute', right: '14px', bottom: '20px' }}
                position="end"
              >
                {formValues.brief.length}/200
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    ),
    [formValues.brief.length, t]
  );

  // 游戏一句话简介 Short Description (brief) ———— 最大200字
  const readerGameBriefCN = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">
          {t('manage_game_info_basic_short_description_cn')}
        </Typography>
        <RHFTextField
          name="briefCN"
          multiline
          rows={4}
          inputProps={{ maxLength: 200 }}
          InputProps={{
            endAdornment: (
              <InputAdornment
                sx={{ position: 'absolute', right: '14px', bottom: '20px' }}
                position="end"
              >
                {formValues.briefCN.length}/200
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    ),
    [formValues.briefCN.length, t]
  );

  // 开发公司 Developer (devOrg)
  const readerGameDevOrg = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_developer')}</Typography>
        <RHFTextField name="devOrg" />
      </Stack>
    ),
    [t]
  );

  // 游戏阶段 Status (developStatus)
  const readerGameStatus = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_status')}</Typography>
        <RHFSelect
          fullWidth
          name="developStatus"
          InputLabelProps={{ shrink: true }}
          PaperPropsSx={{ textTransform: 'capitalize', maxHeight: 'auto !important' }}
        >
          {stauslist.map((item, index) => (
            <MenuItem key={index} value={item.title}>
              <ListItemIcon sx={{ minWidth: 'auto' }}>
                <Image
                  src={item.icon}
                  alt={item.name}
                  sx={{
                    width: '20px',
                    height: '20px',
                  }}
                />
              </ListItemIcon>
              {item.name}
            </MenuItem>
          ))}
        </RHFSelect>
      </Stack>
    ),
    [t]
  );

  // 所属链 Chain (chain)
  const readerGameChain = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_chain')}</Typography>
        <RHFMultiSelect name="chain" chip options={allChain} />
      </Stack>
    ),
    [allChain, t]
  );

  // 平台 Platform (supportPlatform)
  const readerGamePlatform = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_platform')}</Typography>
        <RHFMultiSelect name="supportPlatform" chip options={allPlatform} />
      </Stack>
    ),
    [allPlatform, t]
  );

  // 分类标签 Genres (category)
  const readerGameGenres = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_genres')}</Typography>
        <RHFMultiSelect name="category" chip options={allCategory} />
      </Stack>
    ),
    [t, allCategory]
  );

  // 官网 Website
  const readerGameWebsite = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_website')}</Typography>
        <RHFTextField name="website" />
      </Stack>
    ),
    [t]
  );

  // Twitter
  const readerGameTwitter = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_twitter')}</Typography>
        <RHFTextField name="twitter" />
      </Stack>
    ),
    [t]
  );

  // Discord
  const readerGameDiscord = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_discord')}</Typography>
        <RHFTextField name="discord" />
      </Stack>
    ),
    [t]
  );

  // Telegram
  const readerGameTelegram = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_basic_telegram')}</Typography>
        <RHFTextField name="telegram" />
      </Stack>
    ),
    [t]
  );

  // 是否免费游戏
  const readerGameFree = useMemo(
    () => (
      <Stack spacing={1.5}>
        <RHFSwitch
          name="isFree"
          label={t('manage_game_info_basic_free')}
          labelPlacement="start"
          sx={{ ml: 0 }}
        />
      </Stack>
    ),
    [t]
  );

  return (
    <Stack gap="32px">
      {readerGameName}
      {readerGameBrief}
      {readerGameBriefCN}
      {readerGameDevOrg}
      {readerGameStatus}
      {readerGameChain}
      {readerGamePlatform}
      {readerGameGenres}
      {readerGameWebsite}
      {readerGameTwitter}
      {readerGameDiscord}
      {readerGameTelegram}
      {readerGameFree}
      <GameInfoBtn />
    </Stack>
  );
};
