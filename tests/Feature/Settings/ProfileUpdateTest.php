<?php

use App\Models\User;

test('profile page is displayed', function () {
    User::factory()->create();

    $response = $this->get(route('profile.edit'));

    $response->assertOk();
});

test('profile information can be updated', function () {
    User::factory()->create();

    $response = $this->patch(route('profile.update'), [
        'name' => 'Test User',
        'email' => 'test@example.com',
    ]);

    $response
        ->assertSessionHasNoErrors()
        ->assertRedirect(route('profile.edit'));

    $user = User::first();

    expect($user->name)->toBe('Test User');
    expect($user->email)->toBe('test@example.com');
});
