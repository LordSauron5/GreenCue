<?php

use Illuminate\Support\Facades\Route;

Route::inertia('/', 'Dashboard')->name('dashboard');

require __DIR__.'/settings.php';
