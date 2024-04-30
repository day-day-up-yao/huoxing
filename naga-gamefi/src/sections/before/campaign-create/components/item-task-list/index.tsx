import React, { ChangeEvent, forwardRef, useCallback, useMemo, useState } from 'react';
import { verticalListSortingStrategy } from '@dnd-kit/sortable';
import classNames from 'classnames';
import { Checkbox, CircularProgress, FormControlLabel, Stack } from '@mui/material';
import { nanoid } from 'nanoid';
import { toast } from 'src/components/toast';
import { DataItem, Sortable } from 'src/utils/dnd-kit/sortable';
import SvgIcon from 'src/components/svg-icon';
import { nagaDiscordInviteLink, nagaTwitterAccount } from 'src/config-global';
import { discordLogin } from 'src/utils/public';
import { sleep } from 'src/utils/sleep';
import CampaignCreateItemTaskItem from './task-items';
import TaskItemDelete from '../../popover/task-item-delete';
import './index.scss';
import {
  checkDiscordError1,
  checkDiscordError2,
  useCheckBindDiscord,
} from './task-items/task-item-join-discord';

const twitterTasksNumberLimit = 10;

const CampaignCreateItemTaskList = forwardRef((props: any, ref) => {
  const { data, t, value = [], onChange: fieldOnChange, popover, onPopoverChange } = props;

  // 当前任务列表
  const [tasks, setTasks] = useState(value);

  const [inclueNagaTasks, setInclueNagaTasks] = useState(false);
  const [discordChecking, setDiscordChecking] = useState(false);
  const [discordGuildName, setDiscordGuildName] = useState<string | null>(null);

  const twitterTasksNumber = useMemo(() => {
    const num = tasks.reduce(
      (task: number, item: DataItem) =>
        item.taskType === 1 || item.taskType === 2 || item.taskType === 3 || item.taskType === 4
          ? task + 1
          : task,
      0
    );
    return inclueNagaTasks ? num + 1 : num;
  }, [inclueNagaTasks, tasks]);

  // 更改 任务面板
  const handleChangeTasks = useCallback(
    async (
      nextTasks: any,
      args?: { includeNagaTasks?: boolean; discordGuildName?: string; afterOnChange?: any }
    ) => {
      setTasks(nextTasks);

      await sleep();
      const lastTasks =
        args?.includeNagaTasks || inclueNagaTasks
          ? [
              ...nextTasks,
              {
                taskType: 1,
                param1: nagaTwitterAccount,
              },
              {
                taskType: 5,
                param1: nagaDiscordInviteLink,
                param2: args?.discordGuildName || discordGuildName,
              },
            ]
          : nextTasks;

      const removeItemIdTasks = lastTasks.reduce((newArr: DataItem[], item: DataItem) => {
        const { id, ...rest } = item;
        return [...newArr, rest];
      }, []);
      await sleep();

      fieldOnChange(removeItemIdTasks);

      if (args?.afterOnChange) {
        await sleep();
        args.afterOnChange();
      }
    },
    [discordGuildName, fieldOnChange, inclueNagaTasks]
  );

  // 任务参数输入
  const handleInputChange = (valueIn: any, args?: { afterOnChange?: any }) => {
    const nextTasks = [...tasks];
    const index = nextTasks.findIndex((item) => item.id === valueIn.id);
    nextTasks[index] = valueIn;
    handleChangeTasks(nextTasks, { afterOnChange: args?.afterOnChange });
  };

  // 删除任务 功能移动到二级弹窗
  // const handleMinus = (index) => {
  //     handleChangeTasks(tasks.filter((item) => item.index !== index))
  // }

  // 二级弹窗开启
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onBtnDeleteShow = (id: any) => {
    onPopoverChange({ deletePop: true, deleteId: id });
  };

  // 二级弹窗关闭
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onBtnDeletClose = () => {
    onPopoverChange({ deletePop: false, deleteId: undefined });
  };

  // 点击确定按钮事件
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const onBtnDeletOK = () => {
    const id = popover.deleteId;
    handleChangeTasks(tasks.filter((item: any) => item.id !== id));
    onPopoverChange({ deletePop: false, deleteId: undefined });
  };

  // 任务类型模板-----平台
  const [currentPlatform, setCurrentPlatform] = useState(data[0]);
  const taskPlatformsDom = useMemo(
    () =>
      data.map((item: any) => (
        <div
          className={classNames('campaign-create-tasks-templates-item', {
            active: currentPlatform.type === item.type,
          })}
          onClick={async () => {
            setCurrentPlatform(item);
          }}
          key={item.type}
        >
          <img className="campaign-create-tasks-templates-item-icon" src={item.icon} alt="" />
          <span
            className="campaign-create-tasks-templates-item-label"
            style={{ textTransform: 'capitalize' }}
          >
            {t(item.platform)}
          </span>
        </div>
      )),
    [currentPlatform.type, data, t]
  );

  // 任务类型模板---添加按钮
  const taskTemplatesDom = useMemo(
    () =>
      currentPlatform.tasks.map((item: any) => (
        <div
          className="campaign-create-tasks-templates-item"
          onClick={() => {
            if (
              (item.type === 1 || item.type === 2 || item.type === 3 || item.type === 4) &&
              twitterTasksNumber >= twitterTasksNumberLimit
            ) {
              toast.error(t('campaign_create_twitter_task_limit'));
              return;
            }
            handleChangeTasks(
              tasks.concat([{ id: nanoid(), taskType: item.type, taskId: item.id }])
            );
          }}
          key={item.id}
        >
          <div style={{ height: '26px', width: '26px' }}>
            <SvgIcon
              className="campaign-create-tasks-templates-item-icon"
              style={{ marginRight: '0' }}
              name="task-add"
            />
          </div>
          <span className="campaign-create-tasks-templates-item-label">{t(item.label)}</span>
        </div>
      )),
    [currentPlatform.tasks, handleChangeTasks, t, tasks, twitterTasksNumber]
  );

  // 任务模板标题
  const taskListNo = useMemo(
    () =>
      !(tasks && tasks.length > 0) ? (
        <div className="campaign-create-tasks-list-no">
          {t('campaign_create_tasks_add_task_no')}
        </div>
      ) : undefined,
    [t, tasks]
  );

  // const taskListDom = useMemo(
  //   () =>
  //     tasks.map((item: any, index: any) => (
  //       <CampaignCreateItemTaskItem
  //         item={item}
  //         data={data}
  //         handleInputChange={handleInputChange}
  //         // onMinusClick={() => handleMinus(item.index)}
  //         onMinusClick={() => onBtnDeleteShow(item.index)}
  //         rowIndex={index}
  //         key={index}
  //         t={t}
  //       />
  //     )),
  //   [tasks, data, handleInputChange, t, onBtnDeleteShow]
  // );

  // 任务模板--可拖拽
  const taskListDomDrag = (
    <Sortable
      handle
      itemCount={50}
      strategy={verticalListSortingStrategy}
      items={tasks}
      reorderItems={(items, activeIndex, overIndex) => setTasks(items)}
      renderItemContent={({ value, handleProps }) => (
        <CampaignCreateItemTaskItem
          handleProps={handleProps}
          item={value}
          data={data}
          handleInputChange={handleInputChange}
          // onMinusClick={() => handleMinus(item.index)}
          onMinusClick={() => onBtnDeleteShow(value.id)}
          rowIndex={tasks.findIndex((item: DataItem) => item.id === value.id)}
          key={value.id}
          t={t}
        />
      )}
    />
  );

  // 是否包含naga社区任务
  const checkBindDiscord = useCheckBindDiscord();
  const includeNagaTaskHandler = useCallback(
    async (event: ChangeEvent<HTMLInputElement>) => {
      const { checked } = event.target;
      let discordGuildNameInner;

      if (checked && twitterTasksNumber >= twitterTasksNumberLimit) {
        toast.error(t('campaign_create_twitter_task_limit'));
        return;
      }

      if (checked && !discordGuildName) {
        setDiscordChecking(true);
        const info = await checkBindDiscord(nagaDiscordInviteLink).catch((error) => {
          toast.error(error.message || 'Check bind discord failed');
        });
        setDiscordChecking(false);
        if (!info) return;
        if (info.res) {
          const { res } = info;
          if (res.code === 0) {
            discordGuildNameInner = res.data.guildName;
            setDiscordGuildName(res.data.guildName);
          } else if (res.code === -1) {
            toast.error(t(checkDiscordError2));
            return;
          } else if (res.code === -402) {
            window.localStorage.removeItem('taskdetail');
            window.localStorage.setItem('againcode', res.code);
            discordLogin();
            return;
          } else {
            toast.error(t(checkDiscordError1));
            return;
          }
        }
      }

      handleChangeTasks([...tasks], {
        includeNagaTasks: checked,
        discordGuildName: discordGuildNameInner,
      });
      setInclueNagaTasks(checked);
    },
    [checkBindDiscord, discordGuildName, handleChangeTasks, t, tasks, twitterTasksNumber]
  );

  // 任务删除弹窗
  const popoverTaskItemDelete = useMemo(
    () =>
      popover.deletePop ? (
        <TaskItemDelete
          onBtnCancelClick={() => onBtnDeletClose()}
          onBtnDeleteClick={() => onBtnDeletOK()}
          t={t}
        />
      ) : undefined,
    [popover.deletePop, t, onBtnDeletClose, onBtnDeletOK]
  );

  return (
    <div className="campaign-create-item-tasks" ref={ref as any}>
      <div className="campaign-create-tasks-title">{t('campaign_create_tasks_task_platforms')}</div>
      <div className="campaign-create-tasks-templates-content">{taskPlatformsDom}</div>
      <div className="campaign-create-tasks-title">{t('campaign_create_tasks_task_templates')}</div>
      <div className="campaign-create-tasks-templates-content">{taskTemplatesDom}</div>
      <div className="campaign-create-tasks-title">{t('campaign_create_tasks_add_task')}</div>
      {taskListNo}
      <div className="campaign-create-item-task-list">
        {taskListDomDrag}
        <FormControlLabel
          control={
            <Stack direction="row" alignItems="center" position="relative">
              {discordChecking && (
                <CircularProgress
                  style={{
                    width: '30px',
                    height: '30px',
                    position: 'absolute',
                    left: '3px',
                    top: '3px',
                  }}
                />
              )}
              <Checkbox checked={inclueNagaTasks} onChange={includeNagaTaskHandler} />
            </Stack>
          }
          label={t('campaign_create_task_include_naga')}
        />
        {/* {taskListDom} */}
      </div>
      {popoverTaskItemDelete}
    </div>
  );
});

export default CampaignCreateItemTaskList;
