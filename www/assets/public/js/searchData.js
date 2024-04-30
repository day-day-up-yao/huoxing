
export default () => ({
    // 0:全部;1:新闻(标题、摘要和内容搜索); 2:快讯(标题和内容); 3:专栏作者; 4:专题(名称); 5:视频(名称) String
    // 搜索标签导航
    searchTabTypeEnum: {
        ALL: 0, // 综合
        EXCELLENTNEWS: 99, // 精选
        NEWS: 1, // 新闻
        FLASH: 2, // 快讯
        AUTHOR: 3 // 作者
    },
    // 搜索类别导航
    searchTabType: [
        { type: 0, label: '综合' },
        { type: 99, label: '精选' },
        { type: 1, label: '新闻' },
        { type: 2, label: '快讯' },
        { type: 3, label: '作者' }
    ],
    // 关键字颜色
    searchKeyColor: '#0A7FF2',
    // 搜索排序   按时间排序标识 asc：升序，desc：降序  无默认
    searchSortTypeEnum: {
        DEFAULT: 'default', // 默认
        DESC: 'desc', // 降序
        ASC: 'asc' // 升序
    },

    searchMTabType: [
        { type: 1, label: '新闻' },
        { type: 2, label: '快讯' },
        { type: 3, label: '行情' }
    ]
})
