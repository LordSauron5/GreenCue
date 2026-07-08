<?php

test('dashboard can be visited', function () {
    $response = $this->get(route('dashboard'));

    $response->assertOk();
});
