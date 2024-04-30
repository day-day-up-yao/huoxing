import React, { useContext, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { Box, Typography, Stack, Avatar, Button } from '@mui/material';
import { Uploader } from 'rsuite';
import Cookies from 'js-cookie';
import { HOST_API } from 'src/config-global';
import { ajaxSignature } from 'src/utils/public';
import { RHFTextField } from 'src/components/hook-form';
import { Context } from '../../context';

export default () => {
  const { accountinfo, fileInfo, getUserAvatar, username, getChangeUserName } = useContext(Context);
  const dispatch = useDispatch();
  return (
    <Box mb="30px">
      <Box>
        <Typography variant="body1" fontWeight="500">
          Avatar
        </Typography>
        <Stack direction="row" alignItems="center" mt="12px">
          <Avatar
            sx={{
              width: '80px',
              height: '80px',
              mr: '32px',
            }}
            src={fileInfo}
          />
          <Uploader
            // className="img-up-loader"
            name="uploadFile"
            action={`${HOST_API}/api/upload/uploadImage`}
            fileListVisible={false}
            // listType="picture"
            headers={{
              auToken: Cookies.get('auToken'),
              'Sign-Param': ajaxSignature(),
            }}
            onError={(err) => {
              console.log(err, 'ERR');
            }}
            // headers={{
            //     auToken: Cookies.get('auToken')
            // }}
            onUpload={(filter) => {
              console.log(filter);
            }}
            onSuccess={(res) => {
              if (res.code === 0) {
                dispatch.user.updateAvatar({
                  avatarUrl: res.data,
                });
                Cookies.set('avatarUrl', res.data);
                getUserAvatar(res.data);
                // window.location.reload();
              }
            }}
          >
            <Button
              sx={{
                padding: '12px 20px',
                border: '1px solid #393B40',
                fontWeight: '400',
              }}
            >
              Upload new picture
            </Button>
          </Uploader>
        </Stack>
      </Box>
      <Box mt="32px">
        <Typography variant="body1" fontWeight="500">
          Name
        </Typography>
        <input
          type="text"
          style={{
            marginTop: '12px',
            width: '100%',
            height: '54px',
            border: '1px solid #393B40',
            padding: '0 20px',
            background: 'var(--nage-main-bg)',
            borderRadius: '5px',
          }}
          value={username}
          onChange={(e) => {
            getChangeUserName(e.target.value);
          }}
        />
        <Typography variant="body2" mt="12px" color="text.secondary">
          It consists of 4-12 letters and numbers, the first one must be a letter
        </Typography>
        {/* <RHFTextField name="website" /> */}
      </Box>
    </Box>
  );
};
