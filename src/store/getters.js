const getters = {
    getCountAfter3(state) {  //传入state对象
        let result = state.count+3
        return result
    }
}

export default getters