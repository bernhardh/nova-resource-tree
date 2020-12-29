<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Tool API Routes
|--------------------------------------------------------------------------
|
| Here is where you may register API routes for your tool. These routes
| are loaded by the ServiceProvider of your tool. You're free to add
| as many additional routes to this file as your tool may require.
|
*/

//Route::get('/tree/{resourceName}/{resourceId?}', function(\Laravel\Nova\Http\Requests\NovaRequest $request, string $resourceName, ?int $resourceId = null) {
//    dd($request);
//});


Route::get('/tree', function(\Laravel\Nova\Http\Requests\NovaRequest $request) {
    $modelName = "\\" . $request->get('model');
    $conf = config('nova-resource-tree.columns');
    $seletColumns = ['id', $conf["name"], $conf["sorder"], $conf["active"], $conf['parent_id']];
    $query = $modelName::query()
        ->select($seletColumns)
        ->orderBy(config('nova-resource-tree.columns.sorder'))
        ->with([config('nova-resource-tree.columns.children') => function($query) use($seletColumns) {
            $query
                ->select($seletColumns)
                ->withCount(config('nova-resource-tree.columns.children'))
                ->orderBy(config('nova-resource-tree.columns.sorder'), 'ASC');
        }]);

    if($id = $request->get("id")) {
        $query = $query->where('id', $id);
    }
    else {
         // TODO: get first without an child
    }
    $model = $query->first();

    return $model;
});
