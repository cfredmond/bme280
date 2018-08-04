<?php

use GuzzleHttp\Exception\GuzzleException;
use GuzzleHttp\Client;

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
	// $res = $client->request('GET', 'https://api.github.com/user', [
	//    'auth' => ['cfredmond', 'Gaoy(12i']
	// ]);

	$res = $client->request('GET', 'http://0.0.0.0:5000/');

	// echo $res->getStatusCode();
	// "200"
	// echo $res->getHeader('content-type');
	// 'application/json; charset=utf8'
	echo $res->getBody();

    return 'sensor data';
});
