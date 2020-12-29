<template>
    <div class="card mb-6 py-3 px-6">
        <div class="flex border-b border-40 -mx-6 px-6" v-for="(field, index) in fields" :key="field.attribute" :class="index == fields.length - 1 && 'remove-bottom-border'">
            <div class="w-1/4 py-4"><h4 class="font-normal text-80">{{ labels[field] }}</h4></div>
            <div class="w-3/4 py-4 break-words"><p class="text-90">
                {{ item[field] }}
            </p></div>
        </div>
<!--        <div class="flex border-b border-40 -mx-6 px-6">-->
<!--            <div class="w-1/4 py-4"><h4 class="font-normal text-80">Title</h4></div>-->
<!--            <div class="w-3/4 py-4 break-words"><p class="text-90">-->
<!--                Home-->
<!--            </p></div>-->
<!--        </div>-->
<!--        <div class="flex border-b border-40 -mx-6 px-6">-->
<!--            <div class="w-1/4 py-4"><h4 class="font-normal text-80">Slug</h4></div>-->
<!--            <div class="w-3/4 py-4 break-words"><p class="text-90">-->
<!--                home-->
<!--            </p></div>-->
<!--        </div>-->
<!--        <div class="flex border-b border-40 -mx-6 px-6">-->
<!--            <div class="w-1/4 py-4"><h4 class="font-normal text-80">Parent</h4></div>-->
<!--            <div class="w-3/4 py-4 break-words"><p>—</p></div>-->
<!--        </div>-->
<!--        <div class="flex border-b border-40 -mx-6 px-6">-->
<!--            <div class="w-1/4 py-4"><h4 class="font-normal text-80">Sorder</h4></div>-->
<!--            <div class="w-3/4 py-4 break-words"><p>—</p></div>-->
<!--        </div>-->
<!--        <div class="flex border-b border-40 -mx-6 px-6 remove-bottom-border">-->
<!--            <div class="w-1/4 py-4"><h4 class="font-normal text-80">Status</h4></div>-->
<!--            <div class="w-3/4 py-4 break-words">-->
<!--                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"-->
<!--                     aria-labelledby="x-circle" role="presentation" class="fill-current text-danger">-->
<!--                    <path-->
<!--                        d="M4.93 19.07A10 10 0 1 1 19.07 4.93 10 10 0 0 1 4.93 19.07zm1.41-1.41A8 8 0 1 0 17.66 6.34 8 8 0 0 0 6.34 17.66zM13.41 12l1.42 1.41a1 1 0 1 1-1.42 1.42L12 13.4l-1.41 1.42a1 1 0 1 1-1.42-1.42L10.6 12l-1.42-1.41a1 1 0 1 1 1.42-1.42L12 10.6l1.41-1.42a1 1 0 1 1 1.42 1.42L13.4 12z"></path>-->
<!--                </svg>-->
<!--            </div>-->
<!--        </div>-->
    </div>
</template>

<script>
export default  {
    props: ['item', 'fields', 'labels']
}
</script>
