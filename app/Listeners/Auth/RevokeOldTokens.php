<?php

namespace App\Listeners\Auth;

use Carbon\Carbon;
use Laravel\Passport\Events\AccessTokenCreated;
use Illuminate\Queue\InteractsWithQueue;
use Illuminate\Contracts\Queue\ShouldQueue;
use Laravel\Passport\Token;

class RevokeOldTokens
{
    /**
     * Handle the event.
     *
     * @param  AccessTokenCreated  $event
     * @return void
     */
    public function handle(AccessTokenCreated $event)
    {
        Token::where('id', '!=', $event->tokenId)
            ->where('user_id', $event->userId)
            ->where('client_id', $event->clientId)
            ->where('expires_at', '<', Carbon::now())
            ->orWhere('revoked', true)
            ->delete();
    }
}
