import {onMounted, onUnmounted, ref} from 'vue'
import {throttle} from 'underscore'


const clientHeight = ref(0)
const scrollTop = ref(0)
const scrollHeight = ref(0)
const isReachBottom = ref(false)
export default function useScroll() {
    const callBack = throttle(() => {
        clientHeight.value = document.documentElement.clientHeight
        scrollTop.value = document.documentElement.scrollTop
        scrollHeight.value = document.documentElement.scrollHeight
        if (clientHeight.value * 1 + scrollTop.value * 1 >= scrollHeight.value) {
            isReachBottom.value = true
        }
    }, 100)
    onMounted(() => {
        window.addEventListener('scroll', callBack)
    })
    onUnmounted(() => {
        window.removeEventListener('scroll', callBack)
    })
    return {clientHeight, scrollTop, scrollHeight, isReachBottom}
}