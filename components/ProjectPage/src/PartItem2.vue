<script setup>
import PartItemNull from "~~/components/ProjectPage/src/PartItemNull.vue"
import FunctionBottom from "~~/components/ProjectPage/src/FunctionBottom.vue"


defineProps({
    img: String,
})

</script>

<template>

    <PartItemNull>
        <template #title>
            <slot name="title" />
        </template>
        <div class="flex justify-between h-44">
            <div>
                <img :v-if="img != ''" :src="img" />
                <div :v-if="img === ''" class="aspect-square h-full bg-gray-300 rounded-full border-2 border-black">
                </div>
            </div>
            <di class="mb-14 w-4/5 flex items-center h-full">
                <div>
                    <div class="mb-1 font-bold text-xl">
                        <slot name="name" /> (
                        <slot name="year" />)
                    </div>
                    <div class="">
                        <slot name="word" />
                    </div>
                    <div class="text-right">

                        <FunctionBottom @function="$emit('function')">
                            <slot name="bottom" />
                        </FunctionBottom>
                    </div>
                </div>
            </di>
        </div>
    </PartItemNull>
</template>