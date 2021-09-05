// 状态模式

// 定义一个state类
class State {
    _self: any
	constructor(self) {
		this._self = self
	}

	modeSwitch() {
		throw new Error('父类的modeSwitch方法必须被重写')
	}
}

// 单曲循环类
class SingleCycle extends State {
	modeSwitch() {
		console.log('现在是单曲循环， 切换到列表循环')
		this._self.setState(this._self.listCirculation)
	}
}

// 列表循环类
class ListCirculation extends State {
	modeSwitch() {
		console.log('现在是列表循环， 切换到顺序播放')
		this._self.setState(this._self.sequentialPlay)
	}
}

// 顺序播放
class SequentialPlay extends State {
	modeSwitch() {
		console.log('现在是顺序循环， 切换到随机播放')
		this._self.setState(this._self.shufflePlay)
	}
}

// 随机播放
class ShufflePlay extends State {
	modeSwitch() {
		console.log('现在是随机播放， 切换到单曲循环')
		this._self.setState(this._self.singleCycle)
	}
}

class StateMode {
    singleCycle: SingleCycle
    listCirculation: ListCirculation
    sequentialPlay: SequentialPlay
    shufflePlay: ShufflePlay
    currState: any

	constructor() {
		// 为每个状态都创建一个状态对象
		this.singleCycle = new SingleCycle(this)
		this.listCirculation = new ListCirculation(this)
		this.sequentialPlay = new SequentialPlay(this)
		this.shufflePlay = new ShufflePlay(this)
		// 定义初始状态 为 顺序播放
		this.currState = this.sequentialPlay
	}

	// 切换播放模式
	changeMode() {
		this.currState.modeSwitch()
	}

	// 下一次点击时的播放状态
	setState(newState) {
		this.currState = newState
	}
}

// 实例化音乐类
// let muisc = new StateMode()
// muisc.changeMode()

export default StateMode