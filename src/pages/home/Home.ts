import { onMounted, ref, reactive } from "vue";
import DateUtil from '../../utils/DateUtil'
import DailyCard from '../../components/DailyCard.vue'
import Daily from '../../model/Daily'

export default {
    components: { DailyCard },
    setup() {
        const todayDate = ref(DateUtil.format(new Date(), 'yyyy-MM-dd'))
        const lists = reactive({ val: [] })

        onMounted(() => {
            console.log('mounted')
            const test = new Daily()
            test.uuid = '00012'
            test.date = '2020-12-21'
            test.imgs = ['https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=149178651,3748444779&fm=26&gp=0.jpg']
            test.title = '美好的春天'
            const items: Daily[] = [test, test, test]
            lists.val = items as any
        })

        return {
            todayDate,
            lists
        }
    }
}