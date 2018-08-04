<?php

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

use Illuminate\Support\Facades\DB;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('web_app_ui');
});

Route::get('/sensor-data', function () {
	$client = new GuzzleHttp\Client();

	$res = $client->request('GET', 'http://0.0.0.0:5000/');

	$body = $res->getBody();

    return $body;
});

Route::get('/log', function () {
	$log = DB::table('log')->limit(100)->get();

    return $log;
});