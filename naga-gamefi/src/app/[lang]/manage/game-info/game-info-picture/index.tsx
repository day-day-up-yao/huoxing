import React, { useContext, useMemo } from 'react';
import { FormControlLabel, Stack, Switch, Typography } from '@mui/material';

import { RHFEditor, RHFTextField, RHFUpload } from 'src/components/hook-form';
import Image from 'src/components/image/image';
import { Context } from '../context';
import GameInfoBtn from '../game-info-btn';

export default () => {
  const {
    t,
    handleCoverDrop,
    handleIconDrop,
    isUseLocalVideo,
    handleChangeVideoUrl,
    handleVideoUrlDrop,
    // handleVideoUrlRemoveFile,
    // handleVideoUrlRemoveAllFiles,
    handleVideoCoverDrop,
    // handleVideoCoverRemoveFile,
    // handleVideoCoverRemoveAllFiles,
    handlePicDrop,
    handlePicRemoveFile,
    handlePicRemoveAllFiles,
  } = useContext(Context);

  const readerVideoUrl = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Stack direction="row" justifyContent="space-between">
          <Typography variant="subtitle2">{t('manage_game_info_picture_video_url')}</Typography>
          <FormControlLabel
            control={<Switch checked={isUseLocalVideo} onChange={handleChangeVideoUrl} />}
            label={t('manage_game_info_picture_video_switch')}
            labelPlacement="start"
          />
        </Stack>
        {isUseLocalVideo ? (
          <RHFUpload
            // multiple
            // thumbnail
            name="videoUrl"
            onDrop={handleVideoUrlDrop}
            // onRemove={handleVideoUrlRemoveFile}
            // onRemoveAll={handleVideoUrlRemoveAllFiles}
            accept={{ 'video/*': [] }}
            isVideo
            sx={{ minHeight: '380px' }}
          />
        ) : (
          <Stack gap="16px">
            <RHFTextField name="videoUrl_1" />
            {/* <RHFTextField name="videoUrl_2" />
            <RHFTextField name="videoUrl_3" /> */}
          </Stack>
        )}
      </Stack>
    ),
    [
      handleChangeVideoUrl,
      handleVideoUrlDrop,
      //   handleVideoUrlRemoveAllFiles,
      //   handleVideoUrlRemoveFile,
      isUseLocalVideo,
      t,
    ]
  );

  const readerVideoCover = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_picture_video_cover')}</Typography>
        <RHFUpload
          //   multiple
          //   thumbnail
          name="videoCover"
          onDrop={handleVideoCoverDrop}
          //   onRemove={handleVideoCoverRemoveFile}
          //   onRemoveAll={handleVideoCoverRemoveAllFiles}
        />
      </Stack>
    ),
    [
      handleVideoCoverDrop,
      //   handleVideoCoverRemoveFile,
      //   handleVideoCoverRemoveAllFiles,
      t,
    ]
  );

  const readerPictures = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_picture_pic')}</Typography>
        <RHFUpload
          multiple
          thumbnail
          name="picUrl"
          onDrop={handlePicDrop}
          onRemove={handlePicRemoveFile}
          onRemoveAll={handlePicRemoveAllFiles}
        />
      </Stack>
    ),
    [handlePicDrop, handlePicRemoveAllFiles, handlePicRemoveFile, t]
  );

  const readerCover = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_picture_corver')}</Typography>
        <RHFUpload
          name="coverUrl"
          onDrop={handleCoverDrop}
          sx={{
            width: '220px',
            height: '220px',
          }}
        />
      </Stack>
    ),
    [handleCoverDrop, t]
  );

  const readerIcon = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_picture_icon')}</Typography>
        <RHFUpload
          name="iconUrl"
          onDrop={handleIconDrop}
          sx={{
            width: '170px',
            height: '170px',
          }}
        />
      </Stack>
    ),
    [handleIconDrop, t]
  );

  const readerGameDesc = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_picture_introduction')}</Typography>
        <RHFEditor simple name="gameDesc" sx={{ height: '300px' }} />
      </Stack>
    ),
    [t]
  );

  const readerGameDescCN = useMemo(
    () => (
      <Stack spacing={1.5}>
        <Typography variant="subtitle2">{t('manage_game_info_picture_introduction_cn')}</Typography>
        <RHFEditor simple name="gameDescCN" sx={{ height: '300px' }} />
      </Stack>
    ),
    [t]
  );

  return (
    <Stack gap="32px">
      {readerVideoUrl}
      {readerVideoCover}
      {readerPictures}
      {readerCover}
      {readerIcon}
      {readerGameDesc}
      {readerGameDescCN}
      <GameInfoBtn />
    </Stack>
  );
};
