<template>
    <li class="mt-1 mb-1">
        <div @click="onclick">
            <span v-if="hasChildren" class="collapse-icon pt-1 pb-1">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!isOpen">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width=2 d="M9 5l7 7-7 7" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="isOpen">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
            </span>

            <div class="label pt-1 pb-1 mr-2" :class="currentNodeId == treeNodes.id && 'active'">
                <span class="node-type">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="hasChildren">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" v-if="!hasChildren">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                </span>

                {{ treeNodes.title }}
            </div>
        </div>

        <ul v-if="hasChildren && isOpen" class="resource-tree resource-tree-child">
            <tree-item
                v-for="(child, index) in treeNodes.children"
                :key="index"
                :model-id="child.id"
                :model-class="modelClass"
                :current-node-id="currentNodeId"
                @selected="selected"
            ></tree-item>
        </ul>
    </li>
</template>

<script>
export default {
    name: 'tree-item',
    props: ['modelId', 'modelClass', 'currentNodeId'],
    data: function() {
        return {
            isOpen: false,
            loading: true,
            currentActive: null,
            treeNodes: {},
        };
    },
    mounted() {
        this.getNodes(this.modelClass, this.modelId);
    },
    computed: {
        hasChildren() {
            return this.treeNodes && this.treeNodes.children && this.treeNodes.children.length > 0;
        }
    },
    watch: {
        loading() {
            if(this.loading) this.$emit('loading', true)
            else this.$emit('loading-finished', true)
        }
    },
    methods: {
        onclick() {
            this.selected(this.treeNodes.id);
            this.toggle();
        },
        selected(id) {
            this.$emit('selected', id)
        },
        toggle() {
            if (this.hasChildren) {
                this.isOpen = !this.isOpen;
            }
        },
        getNodes(modelClass, id) {
            this.loading = true;
            Nova.request().get('/nova-vendor/nova-resource-tree/tree', {
                params: {
                    model: modelClass,
                    id: id
                }
            })
                .then(res => {
                    this.treeNodes = res.data;
                    this.loading = false;
                });
        }
    }
}
</script>
