// 创建一个observe事件
const observe = {
    list: [],
    subscribe(callback) {
        this.list.push(callback)
    },

    dispatch(data) {
        console.log(data)
        this.list.forEach(item => {
            item(data)
        })
    }
}

export default observe
