<template>
    <div>
        <loading-view :loading="loadingAll">
            <div class="flex">
                <div class="w-1/4">
                    <h3 class="flex-no-shrink text-90 font-normal text-2xl mb-3">Resource Tree</h3>
                    <ul class="resource-tree">
                        <tree-item
                            :model-class="config.model"
                            :model-id="resourceId"
                            :current-node-id="currentNode && currentNode.id"
                            @selected="getDetails"
                            @loading="loadingAll = true"
                            @loading-finished="loadingAll = false"
                        ></tree-item>
                    </ul>
                </div>
                <div class="w-3/4">
                    <loading-view :loading="loadingDetails">
                        <div v-if="currentNode">
                            <h3 class="flex-no-shrink text-90 font-normal text-2xl mb-3">Details: {{
                                    currentNode.title
                                }}</h3>
                            <node-detail :item="currentNode" :fields="this.config.detail_fields" :labels="this.labels"></node-detail>
<!--                            <div class="card p-3">-->
<!--                                <pre>{{ currentNode }}</pre>-->
<!--                            </div>-->
                        </div>
                    </loading-view>
                </div>
            </div>
        </loading-view>
    </div>
</template>

<script>
import TreeItem from "./TreeItem";
import NodeDetail from "./NodeDetail";
export default {
    components: {NodeDetail, TreeItem},
    props: ['resourceName', 'resourceId', 'panel'],

    data() {
        return {
            treeNodes: null,
            currentNode: null,
            config: this.panel.fields[0],
            loadingAll: false,
            loadingDetails: false,
            labels: null
        }
    },

    methods: {
        getDetails(id) {
            this.loadingDetails = true;
            Nova.request().get(`/nova-api/${this.resourceName}/${id}`)
                .then(res => {
                    this.parseDetails(res.data)
                }).catch(err => {
                    this.$router.replace('/404')
                }).finally(() => this.loadingDetails = false);
        },
        parseDetails(data) {
            this.currentNode = {};
            this.labels = {};
            data.resource.fields.forEach(field => {
                if(this.config.detail_fields.includes(field.attribute)) {
                    this.currentNode[field.attribute] = field.value;
                    this.labels[field.attribute] = field.name;
                }
            });

            this.currentNode.data = data;
        }
    }
}
</script>
