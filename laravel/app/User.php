<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    public function carts()
    {
        return $this->hasMany('App\Cart');
    }
}
