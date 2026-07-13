<?php

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use App\Models\Book;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__.'/auth.php';


Route::get('/test', function () {
    return Inertia::render('Test');
})->name('test');


Route::get('/tictactoe', function () {
    return Inertia::render('Tictactoe');
})->name('tictactoe');


Route::get('/hello-teacher', function () {
    return Inertia::render('HelloTeacher');
})->name('hello-teacher');

//routes/web.php
Route::get('/circle', function () {
    return Inertia::render('Circle');
})->name('circle');

//routes/web.php
Route::get('/counter', function () {
    return Inertia::render('Counter');
})->name('counter');

//routes/web.php
Route::get('/infinite-scroll', function () {
    return Inertia::render('InfiniteScrollExample');
})->name('infinite-scroll');

//routes/web.php
Route::get('/list-manager', function () {
    return Inertia::render('ListManager');
})->name('list-manager');

//routes/web.php
Route::get('/infinite-scroll', function () {
    return Inertia::render('InfiniteScrollExample');
})->name('infinite-scroll');

Route::get('/font-size', function () {
    return Inertia::render('FontSize');
});

// routes/web.php
use App\Models\Product;
Route::get('/product', function () {
    $products = Product::all();
    return Inertia::render('ProductList', compact('products') );
})->name('product');

// routes/web.php
Route::get('/product-others', function () {
    return Inertia::render('ProductOthers');
})->name('product-others');

// 1. หน้าเว็บหลักสำหรับแสดงผลตาราง (http://localhost:8000/quiz4)
Route::get('/quiz4', function () {
    return Inertia::render('Quiz4');
});

// 2. เส้นทาง API สำหรับให้ React มาดึงข้อมูลไปใช้
Route::get('/api/books', function () {
    return response()->json(Book::all());
});