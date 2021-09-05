import { onMounted, ref, reactive } from "vue"
import Taro, { eventCenter } from '@tarojs/taro'

export default {
    setup() {
        const jumpToHome = () => {
            Taro.switchTab({ url: '/pages/home/Home' })
        }

        return {
            jumpToHome
        }
    }
}