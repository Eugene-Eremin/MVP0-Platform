import { ref, computed, watch } from 'vue'
import { defineStore } from 'pinia'

export const useOptionsStore = defineStore('optionsStore', () => {



    const selectedOrCreate = ref(true)

    const setSelectedOrCreate = () => {
        selectedOrCreate.value = !selectedOrCreate.value
    }





    return {
        selectedOrCreate,
        setSelectedOrCreate




    }
})