import {defineStore} from 'pinia'

const startDate = new Date()
const endDate = new Date()
endDate.setDate(startDate.getDate() + 1)

const userMainStore = defineStore('main', {
    state: () => ({
        startDate: startDate,
        endDate: endDate
    }),
    action: {}
})
export default userMainStore