<?php

namespace Bernhardh\NovaResourceTree;

use Laravel\Nova\ResourceTool;

class NovaResourceTree extends ResourceTool {

    public function __construct($label, $model) {
        parent::__construct($label);
        $this->withMeta([
            'model' => $model,
            'parent_id' => 'parent_id',
            'sorder' => 'order',
            'status' => 'is_active',
            'detail_fields' => ['id', 'title', 'sorder', 'status']
        ]);
    }


    /**
     * Get the displayable name of the resource tool.
     *
     * @return string
     */
    public function name() {
        return 'Nova Resource Tree';
    }


    /**
     * Get the component name for the resource tool.
     *
     * @return string
     */
    public function component() {
        return 'nova-resource-tree';
    }
}
