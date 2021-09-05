import { onMounted, ref, reactive } from "vue";
import StateMode from '../../model/StateMode'

export default {
    setup() {
        const music = reactive({ val: new StateMode() })

        onMounted(() => {
            console.log(music.val)
        })

        const doSwitch = () => {
            music.val.changeMode()
        }

        const changeState = () => {
            music.val.setState(music.val.shufflePlay)
        }

        return {
            music,
            doSwitch,
            changeState
        }
    }
}