import * as Yup from 'yup';
import React, { createContext, useMemo, useEffect, useCallback, useState } from 'react';
import Cookies from 'js-cookie';
import { useTranslation } from 'react-i18next';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { cookiesName } from 'src/utils/public';
import { useLink } from 'src/components/link';
import { paths } from 'src/routes/paths';
import { updateGameProject, useGetAllGameData, useGetGameDetail } from 'src/fetchs/common';
import { uploadFile, uploadImage } from 'src/fetchs/upload';
import { toast } from 'src/components/toast';
import { useResponsive } from 'src/utils/hooks/use-responsive';

// ----------------------------------------------------------------------

// tab参数
const TABS = [
  {
    value: 'tab-1',
    label: 'manage_game_info_tab1',
  },
  {
    value: 'tab-2',
    label: 'manage_game_info_tab2',
  },
];

// ----------------------------------------------------------------------

export const Context = createContext({} as any);
export default (props: any) => {
  const { children } = props;
  const { t } = useTranslation();
  const { linkTo } = useLink();
  // 是否为PC端
  const smUp = useResponsive('up', 'sm');
  // 当前Tab
  const [currentTab, setCurrentTab] = useState(TABS[0].value);
  // 当前编辑信息
  const { trigger: triggerGameDetail, data: gameDetail } = useGetGameDetail();
  // 当前游戏库信息
  const { trigger: triggerAllGameData, data: allGameData } = useGetAllGameData();

  // 当没有关联游戏时，禁止编辑，跳转首页
  useEffect(() => {
    const id = Cookies.get(cookiesName.adminGameId);
    if (!id || id === 'null') {
      linkTo(paths.home);
    } else {
      triggerGameDetail({
        id: Number(id),
      });
      triggerAllGameData();
    }
  }, [linkTo, triggerAllGameData, triggerGameDetail]);

  // 切换tab事件
  const handleChangeTab = useCallback((event: React.SyntheticEvent, newValue: string) => {
    setCurrentTab(newValue);
  }, []);

  // 取消按钮事件
  const handleCancel = useCallback(() => {
    const id = Cookies.get(cookiesName.adminGameId);
    linkTo(`${paths.game}/${id}`);
  }, [linkTo]);

  // 全部数据 ———— 类型 Category
  const [allCategory, setAllCategory] = useState<{ value: string; label: string }[]>([]);
  useEffect(() => {
    const list: {
      value: string;
      label: string;
    }[] = [];
    if (allGameData) {
      allGameData?.categoryPojoList.map((item) => {
        const obj = {
          value: item.name,
          label: item.showName,
        };
        list.push(obj);
      });

      setAllCategory(list);
    }
  }, [allGameData]);
  // 默认数据 ———— 类型 Category
  const [defaultCategory, setDefaultCategory] = useState<string[]>([]);
  useEffect(() => {
    if (gameDetail && allGameData) {
      const allList = allGameData?.categoryPojoList || [];
      const defaultList = gameDetail?.category.split(',') || [];
      const list = [];
      for (let i = 0; i < allList.length; i += 1) {
        const allItem = allList[i];
        for (let j = 0; j < defaultList.length; j += 1) {
          const defaultItem = defaultList[j];
          if (allItem.name === defaultItem) {
            list.push(allItem.name);
            break;
          }
        }
      }

      setDefaultCategory(list);
    }
  }, [gameDetail, allGameData]);

  // 全部数据 ———— 链 Chain
  const [allChain, setAllChain] = useState<{ value: string; label: string; icon: string }[]>([]);
  useEffect(() => {
    const list: {
      value: string;
      label: string;
      icon: string;
    }[] = [];
    if (allGameData) {
      allGameData?.chainPojoList.map((item) => {
        const obj = {
          value: item.name,
          label: item.showName,
          icon: item.iconUrl,
        };
        list.push(obj);
      });

      setAllChain(list);
    }
  }, [allGameData]);
  // 默认数据 ———— 链 Chain
  const [defaultChain, setDefaultChain] = useState<string[]>([]);
  useEffect(() => {
    if (gameDetail && allGameData) {
      const allList = allGameData?.chainPojoList || [];
      const defaultList = gameDetail?.chain.split(',') || [];
      const list = [];
      for (let i = 0; i < allList.length; i += 1) {
        const allItem = allList[i];
        for (let j = 0; j < defaultList.length; j += 1) {
          const defaultItem = defaultList[j];
          if (
            allItem.name.toLowerCase() === defaultItem.toLowerCase() ||
            allItem.showName.toLowerCase() === defaultItem.toLowerCase()
          ) {
            list.push(allItem.name);
            break;
          }
        }
      }

      setDefaultChain(list);
    }
  }, [gameDetail, allGameData]);

  // 全部数据 ———— 平台 Platform
  const [allPlatform, setAllPlatform] = useState<{ value: string; label: string; icon: string }[]>(
    []
  );
  useEffect(() => {
    const list: {
      value: string;
      label: string;
      icon: string;
    }[] = [];
    if (allGameData) {
      allGameData?.platformPojoList.map((item) => {
        const obj = {
          value: item.name,
          label: item.showName,
          icon: item.name,
        };
        list.push(obj);
      });

      setAllPlatform(list);
    }
  }, [allGameData]);
  // 默认数据 ———— 平台 Platform
  const [defaultPlatform, setDefaultPlatform] = useState<string[]>([]);
  useEffect(() => {
    if (gameDetail && allGameData) {
      const allList = allGameData?.platformPojoList || [];
      const defaultList = gameDetail?.supportPlatform.split(',') || [];
      const list = [];
      for (let i = 0; i < allList.length; i += 1) {
        const allItem = allList[i];
        for (let j = 0; j < defaultList.length; j += 1) {
          const defaultItem = defaultList[j];
          if (allItem.name === defaultItem) {
            list.push(allItem.name);
            break;
          }
        }
      }

      setDefaultPlatform(list);
    }
  }, [gameDetail, allGameData]);

  // 默认数据 ———— 视频地址
  const [defaultVideoUrl, setDefaultVideoUrl] = useState<string[]>([]);
  // 默认数据 ———— 视频封面
  const [defaultVideoCover, setDefaultVideoCover] = useState<string[]>([]);
  useEffect(() => {
    if (gameDetail) {
      if (gameDetail?.videoUrl.includes('[') && gameDetail?.videoUrl !== '[]') {
        const list: { cover: string; video: string }[] = JSON.parse(gameDetail?.videoUrl);
        const vList: string[] = [];
        const cList: string[] = [];
        list.map((item) => {
          vList.push(item.video);
          cList.push(item.cover);
        });

        setDefaultVideoUrl(vList);
        setDefaultVideoCover(cList);
      }
    }
  }, [gameDetail]);

  // 是否本地上传视频
  const [isUseLocalVideo, setIsUseLocalVideo] = useState(false);
  // 更变视频上传显示
  const handleChangeVideoUrl = useCallback((event: React.ChangeEvent<HTMLInputElement>) => {
    setIsUseLocalVideo(event.target.checked);
  }, []);

  // 表单输入规则
  const Schema = Yup.object().shape({
    name: Yup.string().required(t('manage_game_info_basic_game_name_error')),
    brief: Yup.string().required(t('manage_game_info_basic_short_description_error')),
    devOrg: Yup.string().required(t('manage_game_info_basic_developer_error')),
    twitter: Yup.string().required(t('manage_game_info_basic_twitter_error')),
    // videoUrl: Yup.array().max(3, t('manage_game_info_picture_video_url_error')),
    // videoCover: Yup.array().max(3, t('manage_game_info_picture_video_cover_error')),
    picUrl: Yup.array()
      .min(1, t('manage_game_info_picture_pic_min'))
      .max(6, t('manage_game_info_picture_pic_max')),
    coverUrl: Yup.string().required(t('manage_game_info_picture_corver_error')),
    iconUrl: Yup.string().required(t('manage_game_info_picture_icon_error')),
    gameDesc: Yup.string().required(t('manage_game_info_picture_introduction_error')),
    // not required
    developStatus: Yup.string(),
    videoUrl: Yup.string(),
    videoCover: Yup.string(),
    chain: Yup.array(),
    supportPlatform: Yup.array(),
    category: Yup.array(),
    isFree: Yup.boolean(),
    videoUrl_1: Yup.string(),
    // videoUrl_2: Yup.string(),
    // videoUrl_3: Yup.string(),
  });

  // 表单基础参数
  const defaultValues = useMemo(
    () => ({
      name: gameDetail?.name || '',
      brief: gameDetail?.brief || '',
      briefCN: gameDetail?.briefCN || '',
      devOrg: gameDetail?.devOrg || '',
      developStatus: gameDetail?.developStatus || '',
      chain: defaultChain || [],
      supportPlatform: defaultPlatform || [],
      category: defaultCategory || [],
      website: gameDetail?.website || '',
      twitter: gameDetail?.twitter || '',
      discord: gameDetail?.discord || '',
      telegram: gameDetail?.telegram || '',
      isFree: gameDetail?.isFree ? true : false || false,
      //   videoUrl: defaultVideoUrl || [],
      videoUrl: defaultVideoUrl[0] || '',
      videoUrl_1: defaultVideoUrl[0] || '',
      //   videoUrl_2: defaultVideoUrl[1] || '',
      //   videoUrl_3: defaultVideoUrl[2] || '',
      //   videoCover: defaultVideoCover || [],
      videoCover: defaultVideoCover[0] || '',
      picUrl:
        gameDetail?.picUrl.includes('[') && gameDetail?.picUrl !== '[]'
          ? (JSON.parse(gameDetail?.picUrl) as Array<String>)
          : [] || [],
      adverUrl: gameDetail?.adverUrl || '',
      coverUrl: gameDetail?.coverUrl || '',
      iconUrl: gameDetail?.iconUrl || '',
      gameDesc: gameDetail?.gameDesc || '',
      gameDescCN: gameDetail?.gameDescCN || '',
    }),
    [
      defaultCategory,
      defaultChain,
      defaultPlatform,
      defaultVideoCover,
      defaultVideoUrl,
      gameDetail?.adverUrl,
      gameDetail?.brief,
      gameDetail?.briefCN,
      gameDetail?.coverUrl,
      gameDetail?.devOrg,
      gameDetail?.developStatus,
      gameDetail?.discord,
      gameDetail?.gameDesc,
      gameDetail?.gameDescCN,
      gameDetail?.iconUrl,
      gameDetail?.isFree,
      gameDetail?.name,
      gameDetail?.picUrl,
      gameDetail?.telegram,
      gameDetail?.twitter,
      gameDetail?.website,
    ]
  );

  // 表单参数设置
  const methods = useForm({
    resolver: yupResolver(Schema),
    defaultValues,
  });

  // 表单实例
  const {
    reset,
    setValue,
    handleSubmit,
    watch,
    formState: { isSubmitting },
  } = methods;
  const formValues = watch();

  // 更新初始值
  useEffect(() => {
    if (gameDetail) {
      reset(defaultValues);
    }
  }, [gameDetail, defaultValues, reset]);

  // 确定事件
  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();

      // 设置 游戏ID
      const id = Number(Cookies.get(cookiesName.adminGameId));

      // 设置 链
      let chain = '';
      if (data.chain && data.chain?.length > 0) {
        data.chain.map((item) => {
          chain += `${item},`;
        });
        chain = chain.slice(0, -1);
      }

      // 设置 平台
      let supportPlatform = '';
      if (data.supportPlatform && data.supportPlatform?.length > 0) {
        data.supportPlatform.map((item) => {
          supportPlatform += `${item},`;
        });
        supportPlatform = supportPlatform.slice(0, -1);
      }

      // 设置 标签
      let category = '';
      if (data.category && data.category?.length > 0) {
        data.category.map((item) => {
          category += `${item},`;
        });
        category = category.slice(0, -1);
      }

      // 设置 免费
      const isFree = data.isFree ? 1 : 0;

      // 设置 视频 多个
      //   const videoUrlObj = {
      //     videoUrl_1: '',
      //     videoUrl_2: '',
      //     videoUrl_3: '',
      //   };
      //   if (isUseLocalVideo) {
      //     if (data.videoUrl && data.videoUrl.length > 0) {
      //       for (let i = 0; i < data.videoUrl.length; i += 1) {
      //         const element = data.videoUrl[i];
      //         const key = `videoUrl_${i + 1}` as `videoUrl_${1 | 2 | 3}`;
      //         videoUrlObj[key] = element;
      //       }
      //     }
      //   } else {
      //     videoUrlObj.videoUrl_1 = data.videoUrl_1 || '';
      //     videoUrlObj.videoUrl_2 = data.videoUrl_2 || '';
      //     videoUrlObj.videoUrl_3 = data.videoUrl_3 || '';
      //   }
      //   const { videoUrl_1, videoUrl_2, videoUrl_3 } = videoUrlObj;

      // 设置 视频 单个
      let { videoUrl_1 } = data;
      if (isUseLocalVideo) {
        if (data.videoUrl) {
          videoUrl_1 = data.videoUrl;
        }
      }

      // 设置 视频封面
      //   const videoCoverObj = {
      //     videoCover_1: '',
      //     videoCover_2: '',
      //     videoCover_3: '',
      //   };
      //   if (data.videoCover && data.videoCover.length > 0) {
      //     for (let i = 0; i < data.videoCover.length; i += 1) {
      //       const element = data.videoCover[i];
      //       const key = `videoCover_${i + 1}` as `videoCover_${1 | 2 | 3}`;
      //       videoCoverObj[key] = element;
      //     }
      //   }
      //   const { videoCover_1, videoCover_2, videoCover_3 } = videoCoverObj;

      // 设置 视频封面 单个
      const videoCover_1 = data.videoCover;

      // 设置 宣传图
      const picUrlObj = {
        picUrl_1: '',
        picUrl_2: '',
        picUrl_3: '',
        picUrl_4: '',
        picUrl_5: '',
        picUrl_6: '',
      };
      if (data.picUrl && data.picUrl.length > 0) {
        for (let i = 0; i < data.picUrl.length; i += 1) {
          const element = data.picUrl[i];
          const key = `picUrl_${i + 1}` as `picUrl_${1 | 2 | 3 | 4 | 5 | 6}`;
          picUrlObj[key] = element;
        }
      }
      const { picUrl_1, picUrl_2, picUrl_3, picUrl_4, picUrl_5, picUrl_6 } = picUrlObj;

      // 设置 游戏详情 ———— 富文本转base64
      //   const gameDesc = data.gameDesc ? btoa(data.gameDesc) : '';

      const gameProject: GameProjectType = {
        ...data,
        id,
        chain,
        supportPlatform,
        category,
        isFree,
        videoUrl_1,
        videoCover_1,
        picUrl_1,
        picUrl_2,
        picUrl_3,
        picUrl_4,
        picUrl_5,
        picUrl_6,
      };

      console.info('最后传值', gameProject);
      await updateGameProject({ ...gameProject }).then((res) => {
        if (res.code === 0) {
          toast.success(t('manage_game_info_success'));
          setTimeout(() => {
            linkTo(`${paths.game}/${id}`);
          }, 2000);
        } else {
          toast.error(t('manage_game_info_error'));
        }
      });
    } catch (error) {
      toast.error(t('manage_game_info_error'));
      console.error(error);
    }
  });

  // 视频上传
  const handleVideoUrlDrop = useCallback(
    async (acceptedFiles: File[]) => {
      //   const files = formValues.videoUrl || [];

      //   const upload = acceptedFiles.map((file) => {
      //     const formData = new FormData();
      //     formData.append('uploadFile', file, file.name);
      //     return uploadFile(formData);
      //   });

      //   const newFiles: string[] = [];
      //   await Promise.all(upload).then((resList) => {
      //     resList.map((item) => {
      //       newFiles.push(item.data || '');
      //     });
      //     setValue('videoUrl', [...files, ...newFiles], { shouldValidate: true });
      //   });

      const newFile = acceptedFiles[0];
      const formData = new FormData();
      formData.append('uploadFile', newFile, newFile.name);
      await uploadFile(formData).then((res) => {
        if (res.code === 0 && res.data) {
          setValue('videoUrl', res.data, { shouldValidate: true });
        }
      });
    },
    [setValue]
  );

  // 视频地址 ———— 删除
  //   const handleVideoUrlRemoveFile = useCallback(
  //     (inputFile: File | string) => {
  //       const filtered =
  //         formValues.videoUrl &&
  //         formValues.videoUrl?.filter((file: string | File) => file !== inputFile);
  //       setValue('videoUrl', filtered);
  //     },
  //     [formValues.videoUrl, setValue]
  //   );

  // 视频地址 ———— 删除全部
  //   const handleVideoUrlRemoveAllFiles = useCallback(() => {
  //     setValue('videoUrl', []);
  //   }, [setValue]);

  // 视频封面 ———— 载入
  const handleVideoCoverDrop = useCallback(
    async (acceptedFiles: File[]) => {
      //   const files = formValues.videoCover || [];

      //   const upload = acceptedFiles.map((file) => {
      //     const formData = new FormData();
      //     formData.append('uploadFile', file, file.name);
      //     return uploadImage(formData);
      //   });

      //   const newFiles: string[] = [];
      //   await Promise.all(upload).then((resList) => {
      //     resList.map((item) => {
      //       newFiles.push(item.data || '');
      //     });
      //     setValue('videoCover', [...files, ...newFiles], { shouldValidate: true });
      //   });

      const newFile = acceptedFiles[0];
      const formData = new FormData();
      formData.append('uploadFile', newFile, newFile.name);
      await uploadImage(formData).then((res) => {
        if (res.code === 0 && res.data) {
          setValue('videoCover', res.data, { shouldValidate: true });
        }
      });
    },
    [setValue]
  );

  // 视频封面 ———— 删除
  //   const handleVideoCoverRemoveFile = useCallback(
  //     (inputFile: File | string) => {
  //       const filtered =
  //         formValues.videoCover &&
  //         formValues.videoCover?.filter((file: string | File) => file !== inputFile);
  //       setValue('videoCover', filtered);
  //     },
  //     [formValues.videoCover, setValue]
  //   );

  // 视频封面 ———— 删除全部
  //   const handleVideoCoverRemoveAllFiles = useCallback(() => {
  //     setValue('videoCover', []);
  //   }, [setValue]);

  // 宣传图 ———— 载入
  const handlePicDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const files = formValues.picUrl || [];

      const upload = acceptedFiles.map((file) => {
        const formData = new FormData();
        formData.append('uploadFile', file, file.name);
        return uploadImage(formData);
      });

      const newFiles: string[] = [];
      await Promise.all(upload).then((resList) => {
        resList.map((item) => {
          newFiles.push(item.data || '');
        });
        setValue('picUrl', [...files, ...newFiles], { shouldValidate: true });
      });
    },
    [formValues.picUrl, setValue]
  );

  // 宣传图 ———— 删除
  const handlePicRemoveFile = useCallback(
    (inputFile: File | string) => {
      const filtered =
        formValues.picUrl && formValues.picUrl?.filter((file: string | File) => file !== inputFile);
      setValue('picUrl', filtered);
    },
    [formValues.picUrl, setValue]
  );

  // 宣传图 ———— 删除全部
  const handlePicRemoveAllFiles = useCallback(() => {
    setValue('picUrl', []);
  }, [setValue]);

  // 封面图 ———— 载入
  const handleCoverDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const newFile = acceptedFiles[0];
      const formData = new FormData();
      formData.append('uploadFile', newFile, newFile.name);
      await uploadImage(formData).then((res) => {
        if (res.code === 0 && res.data) {
          setValue('coverUrl', res.data, { shouldValidate: true });
        }
      });
    },
    [setValue]
  );

  // 图标 ———— 载入
  const handleIconDrop = useCallback(
    async (acceptedFiles: File[]) => {
      const newFile = acceptedFiles[0];
      const formData = new FormData();
      formData.append('uploadFile', newFile, newFile.name);
      await uploadImage(formData).then((res) => {
        if (res.code === 0 && res.data) {
          setValue('iconUrl', res.data, { shouldValidate: true });
        }
      });
    },
    [setValue]
  );

  const values = useMemo(
    () => ({
      t,
      smUp,
      TABS,
      allChain,
      allCategory,
      allPlatform,
      currentTab,
      methods,
      formValues,
      isUseLocalVideo,
      isSubmitting,
      onSubmit,
      handleCoverDrop,
      handleIconDrop,
      handleChangeTab,
      handleCancel,
      handleChangeVideoUrl,
      handleVideoUrlDrop,
      //   handleVideoUrlRemoveFile,
      //   handleVideoUrlRemoveAllFiles,
      handleVideoCoverDrop,
      //   handleVideoCoverRemoveFile,
      //   handleVideoCoverRemoveAllFiles,
      handlePicDrop,
      handlePicRemoveFile,
      handlePicRemoveAllFiles,
    }),
    [
      t,
      smUp,
      allChain,
      allCategory,
      allPlatform,
      currentTab,
      methods,
      formValues,
      isUseLocalVideo,
      isSubmitting,
      onSubmit,
      handleCoverDrop,
      handleIconDrop,
      handleChangeTab,
      handleCancel,
      handleChangeVideoUrl,
      handleVideoUrlDrop,
      //   handleVideoUrlRemoveFile,
      //   handleVideoUrlRemoveAllFiles,
      handleVideoCoverDrop,
      //   handleVideoCoverRemoveFile,
      //   handleVideoCoverRemoveAllFiles,
      handlePicDrop,
      handlePicRemoveFile,
      handlePicRemoveAllFiles,
    ]
  );

  return <Context.Provider value={values}>{children}</Context.Provider>;
};
