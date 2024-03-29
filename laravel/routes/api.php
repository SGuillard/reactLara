<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use App\User;
/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
Route::group([
    'middleware' => ['api', 'cors'],
], function ($router) {
    //Add you routes here, for example:
    Route::apiResource('products', 'ProductController');
    Route::apiResource('carts', 'CartController');
});
