import {
  GETNEWSDETAILS,
  GETRECOMMENDNEWS,
  GETRELATEDNEWS,
  GETFEATUREDETAILS,
  GETADIMPLANT,
  GETHOTNEWSVIDEO,
  GETMOREFEATURE
} from '../constants/news'

const initState = {
  featureDetails: {
      topic: {
          id: '',
          topicName: '',
          description: '',
          pcBackImage: '',
          mImgSrc: '',
          mBackImage: '',
          createTime: 0,
          tags: '',
          titleDisplayFlag: 0
      },
      topicContentList: {
          pageSize: 0,
          recordCount: 0,
          currentPage: 0,
          pageCount: 0,
          inforList: []
      }
  },
  relatedNewslist: {
      inforList: []
  },
  recommendNewsList: {
      inforList: []
  },
  adImplant: [],
  newsDetails: {
      current: {
          title: '',
          createdBy: '',
          author: '',
          publishTime: '',
          hotCounts: '',
          synopsis: '',
          content: '',
          tagsV2: ''
      },
      next: {
          coverPic: '',
          title: '',
          id: ''
      }
  },
  hotNewsVideo: []
}

export default (state = initState, action) => {
  switch (action.type) {
      case GETNEWSDETAILS:
          /** @desc 2020.8.13
           * PC内置微信浏览器使用chrome53，window.__INITIAL_STATE__ 会报错
           * 测试结果为：current.content引起
           * 此处对其进行特殊字符编码
           * 在组件/containers/Details/NewsContent使用时进行解码 decodeURIComponent
           */
          const current = action.data.current
          const newContent = encodeURIComponent(current.content)
          delete current.content
          current.content = newContent
          return { ...state, newsDetails: { current: current, next: current.next } }
      case GETRECOMMENDNEWS:
          return { ...state, recommendNewsList: action.data }
      case GETRELATEDNEWS:
          return { ...state, relatedNewslist: action.data }
      case GETFEATUREDETAILS:
          return { ...state, featureDetails: action.data }
      case GETMOREFEATURE:
          const inforList = action.data.topicContentList.inforList
          if (inforList.length !== 0) {
              const obj = action.data
              obj.topicContentList.inforList = state.featureDetails.topicContentList.inforList.concat(action.data.topicContentList.inforList)
              return { ...state, featureDetails: obj }
          } else {
              return state
          }
      case GETADIMPLANT:
          return { ...state, adImplant: action.data }
      case GETHOTNEWSVIDEO:
          return { ...state, hotNewsVideo: action.data }
      default:
          return state
  }
}
