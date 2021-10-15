<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
   if($this->app->environment('production')) {
\URL::forceScheme('https');
}
