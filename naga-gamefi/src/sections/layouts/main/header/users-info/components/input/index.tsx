import React, { useMemo, useState, useCallback, useEffect } from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import classNames from 'classnames';
import { useTranslation } from 'react-i18next';
import TextField, { TextFieldProps } from '@mui/material/TextField';
import { IconButton, InputAdornment } from '@mui/material';
import { isEmail, isPsd, isUsername } from 'src/utils/public/index';

import './index.scss';

const layoutInputProps = () =>
  ({
    name: `field_${Math.random()}`,
    variant: 'filled',
    sx: ({ palette }: any) => ({
      '&.MuiFormControl-root': {
        '.MuiInputBase-root': {
          height: '100%',
          borderRadius: '4px',
          backgroundColor: palette.background.default,
          input: {
            paddingTop: '0',
            paddingBottom: '0',
          },
        },
      },
    }),
  }) as TextFieldProps;

export default (props: any) => {
  const { t } = useTranslation();
  const {
    placeholder,
    issend,
    ispassword,
    inputid,
    getChangeValue,
    sendBtn,
    disabled,
    invalue,
    sendtime,
    CountDown,
    codeError,
  } = props;
  const [visible, setVisible] = useState(false);
  const [errorflag, setErrorflag] = useState(false);
  const [errordesc, serErrordesc] = useState('');
  const [sendtxt, setSendtxt] = useState(t('public_send'));
  // const [emailerror, setEmailerror] = useState(true)
  // const [inputcategory, setInputcategory] = useState('')

  useEffect(() => {
    setErrorflag(false);
    serErrordesc('');
  }, [ispassword]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleChange = () => {
    setVisible(!visible);
  };

  useEffect(() => {
    setErrorflag(codeError);
    serErrordesc(t('message_code_error'));
  }, [codeError, t]);

  // 请求email验证码60秒倒计时
  useEffect(() => {
    let time: any = null;
    if (sendtime) {
      let num = 60;
      setSendtxt(`${num}s`);
      time = setInterval(() => {
        if (num > 0) {
          // eslint-disable-next-line no-plusplus
          num--;
          setSendtxt(`${num}s`);
        } else {
          setSendtxt(t('public_send'));
          CountDown(false);
          clearInterval(time);
        }
      }, 1000);
    }
    return () => clearInterval(time);
  }, [CountDown, sendtime, t]);

  // input失焦事件
  const handleBlue = useCallback(
    (e: any) => {
      const inputtype = e.target.id;
      const inputvalue = e.target.value;
      if (inputtype === 'nickname') {
        if (!isUsername(inputvalue)) {
          setErrorflag(true);
          serErrordesc(t('message_nickname_rule'));
        } else {
          setErrorflag(false);
          serErrordesc('');
        }
      }
      if (inputtype === 'email') {
        if (!isEmail(inputvalue)) {
          // setEmailerror(true)
          setErrorflag(true);
          serErrordesc(t('message_email_rule'));
        } else {
          // setEmailerror(false)
          setErrorflag(false);
          serErrordesc('');
        }
      }
      if (inputtype === 'password') {
        if (!isPsd(inputvalue)) {
          setErrorflag(true);
          serErrordesc(t('message_password_rule'));
        } else {
          setErrorflag(false);
          serErrordesc('');
        }
      }
    },
    [t]
  );

  // input聚焦事件
  // const handleFocus = useCallback((e) => {
  //     const inputtype = e.target.id
  //     console.log(inputtype)
  //     setInputcategory(inputtype)
  //     // setErrorflag(false)
  // }, [])

  // 获取email验证码
  const getEmailcode = useCallback(async () => {
    if (!sendtime) {
      sendBtn();
    }
  }, [sendBtn, sendtime]);

  // 密码输入框
  const posswordInput = useMemo(
    () => (
      <TextField
        fullWidth
        type={visible ? 'text' : 'password'}
        className="all-input"
        placeholder={placeholder}
        onBlur={handleBlue}
        autoComplete="off"
        id={inputid}
        {...layoutInputProps()}
        onChange={(event) => {
          getChangeValue(event.target.value);
        }}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={handleChange} edge="end">
                {visible ? <VisibilityIcon /> : <VisibilityOffIcon />}
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    ),
    [visible, placeholder, handleBlue, inputid, handleChange, getChangeValue]
  );

  // 其他输入框
  const otherInput = useMemo(
    () => (
      <>
        <TextField
          fullWidth
          placeholder={placeholder}
          className="all-input"
          autoComplete="off"
          disabled={disabled}
          value={invalue}
          id={inputid}
          {...layoutInputProps()}
          onChange={(e) => {
            getChangeValue(e.target.value);
          }}
          onBlur={handleBlue}
          // onFocus={handleFocus}
        />
        {issend && (
          <div
            className={classNames('use-input-send', {
              'start-time': sendtime,
              'emailerror-sendbtn': sendtime === 0,
            })}
            onClick={getEmailcode}
          >
            {sendtxt}
          </div>
        )}
      </>
    ),
    [
      placeholder,
      disabled,
      invalue,
      inputid,
      handleBlue,
      issend,
      sendtime,
      getEmailcode,
      sendtxt,
      getChangeValue,
    ]
  );

  return (
    <div className="use-input">
      <div
        tabIndex={-1}
        className={classNames('use-input-con', { 'need-send': issend, 'error-border': errorflag })}
      >
        {ispassword ? posswordInput : otherInput}
      </div>
      {issend && <div id="logininit" />}
      {errorflag && <div className="input-error">{errordesc}</div>}
    </div>
  );
};
