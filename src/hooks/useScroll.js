import {onMounted, onUnmounted, ref} from 'vue'
import {throttle} from 'underscore'


const clientHeight = ref(0)
const scrollTop = ref(0)
const scrollHeight = ref(0)
const isReachBottom = ref(false)
export default function useScroll(elRef) {
    let el = window
    const callBack = throttle(() => {
        if (el === window) {
            clientHeight.value = document.documentElement.clientHeight
            scrollTop.value = document.documentElement.scrollTop
            scrollHeight.value = document.documentElement.scrollHeight
        } else {
            clientHeight.value = el.clientHeight
            scrollTop.value = el.scrollTop
            scrollHeight.value = el.scrollHeight
        }

        if (clientHeight.value * 1 + scrollTop.value * 1 >= scrollHeight.value) {
            isReachBottom.value = true
        }
    }, 100)
    onMounted(() => {
        if (elRef) el = elRef.value
        el.addEventListener('scroll', callBack)
    })
    onUnmounted(() => {
        el.removeEventListener('scroll', callBack)
        scrollTop.value=0
    })
    return {clientHeight, scrollTop, scrollHeight, isReachBottom}
}