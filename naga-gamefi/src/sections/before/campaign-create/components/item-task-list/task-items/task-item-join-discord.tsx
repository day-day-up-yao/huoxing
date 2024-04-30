import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Input, InputGroup } from 'rsuite';
import { useDispatch } from 'react-redux';

import './index.scss';

import dayjs from 'dayjs';
import { trim } from 'lodash';
import { discordLogin } from 'src/utils/public/index';
import { useInputProps } from '../../public';

export const checkDiscordError1 = 'campaign_create_tasks_task_list_join_discord_error';
export const checkDiscordError2 = 'campaign_create_tasks_task_list_join_discord_error2';
export const useCheckBindDiscord = () => {
  const dispatch = useDispatch();

  return useCallback(
    async (discordInviteLink: string) => {
      const url = trim(discordInviteLink);
      if (url === '') return;
      const code = url.split(
        /https:\/\/discord.gg\/|https:\/\/discord.com\/invite\/|https:\/\/discordapp.com\/invite\//
      );

      if (code && code.length === 2) {
        const res = await dispatch.quest.getDiscordInviteInfo({ inviteCode: code[1] });
        return { inviteCode: code[1], res };
      }
    },
    [dispatch.quest]
  );
};

const CampaignCreateItemTaskItemJoinDiscord = (props: any) => {
  const { item, data, t, handleInputChange } = props;
  const dispatch = useDispatch();
  const [infoName, setInfoName] = useState('');
  const [infoTime, setInfoTime] = useState('');
  const [infoError, setInfoError] = useState(0);

  const inputProps = useInputProps({ item, handleInputChange });

  const checkBindDiscord = useCheckBindDiscord();
  const timer = useRef<any>();
  useEffect(() => {
    setInfoError(0);
    setInfoName('');
    setInfoTime('');

    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(async () => {
      const url = trim(inputProps.value);
      if (url === '') return;
      const info = await checkBindDiscord(url).catch((error) => {
        setInfoError(1);
        setInfoName('');
        setInfoTime('');
        console.log('Discode Error', error);
      });

      if (info) {
        const { res } = info;
        if (res.code === 0) {
          setInfoName(res.data.guildName);
          if (res.data.expireAt) {
            setInfoTime(dayjs(res.data.expireAt).format('YYYY-MM-DD HH:mm:ss'));
          }

          handleInputChange({
            ...item,
            param1: inputProps.value,
            param2: res.data.guildName,
          });

          setInfoError(0);
        } else if (res.code === -1) {
          setInfoError(2);
          setInfoName('');
          setInfoTime('');
        } else if (res.code === -402) {
          window.localStorage.removeItem('taskdetail');
          window.localStorage.setItem('againcode', res.code);
          discordLogin();
        } else {
          setInfoError(1);
          setInfoName('');
          setInfoTime('');
        }
      } else {
        setInfoError(1);
        setInfoName('');
        setInfoTime('');
      }
    }, 1250);

    return () => {
      if (timer.current) clearTimeout(timer.current);
    };
  }, [checkBindDiscord, dispatch.quest, handleInputChange, inputProps.value, item]);

  return (
    <div className="campaign-create-item-task-item-content">
      <InputGroup className="input-group">
        <InputGroup.Addon className="input-group-add-left-first">{t(data?.text)}</InputGroup.Addon>
        <Input className="input" placeholder="https://" {...inputProps} />
      </InputGroup>
      {infoTime ? (
        <div className="item-warning">
          <span>{t('campaign_create_tasks_task_list_join_discord_time')}：</span>
          {infoTime}
        </div>
      ) : undefined}
      {infoName ? (
        <div className="item-title">
          {t('campaign_create_tasks_task_list_join_discord_name')}：{infoName}
        </div>
      ) : undefined}
      {infoError !== 0 ? (
        <div className="item-error">
          {t(infoError === 2 ? checkDiscordError2 : checkDiscordError1)}
        </div>
      ) : undefined}
    </div>
  );
};

export default CampaignCreateItemTaskItemJoinDiscord;
