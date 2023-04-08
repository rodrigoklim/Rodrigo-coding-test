<template>
     <div class="space-y-5 px-6">
        <div class="relative flex items-start" v-for="(standard, index) in standards" :key="index">
            <div class="flex h-6 items-center">
                <input
                    :id="index"
                    v-model="checked[index]"
                    name="comments"
                    type="checkbox"
                    class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    @click="selectStandard(standard, $event.target.checked)"
                />
            </div>
            <div class="ml-3 text-sm leading-6">
                <label :for="index" class="font-bold text-gray-900 cursor-pointer">{{ standard.code }}</label>
                <p class="text-gray-500">{{ standard.description }}</p>
            </div>
        </div>
     </div>
</template>

<script>
    import { mapState } from 'vuex'

    export default {
        props: ['standards'],
        data() {
            return {
                checked: []
            }
        },
        computed: {
            ...mapState({
                checkedStandards: state => state.standards.items
            }),
        },
        methods: {
            selectStandard(standard, value){
                if (value) {
                    this.addStandard(standard)
                } else {
                    this.removeStandard(standard)
                }
            },
            addStandard (standard) {
                this.$store.dispatch('standards/addItemToStandards', standard)
            },

            removeStandard (standard) {
                this.$store.dispatch('standards/removeItemFromStandards', standard)
            }
        },
        watch: {
            checkedStandards: function (val) {
                if (!val.length) {
                    this.checked = []
                }
            }
        }
    }
</script>
