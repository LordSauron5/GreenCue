<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Home')->name('dashboard');

require __DIR__.'/settings.php';
