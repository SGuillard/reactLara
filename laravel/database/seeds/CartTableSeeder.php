<?php

use App\Cart;
use App\Product;
use App\User;
use Illuminate\Database\Seeder;

class CartTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $user = new User();
        $product = new Product();
        factory(App\Cart::class, 10)->make()->each(function ($cart) use ($user, $product) {
            $cart->user_id = $user->all()->random()->id;
            $cart->product_id = $product->all()->random()->id;
            $cart->save();
        });
    }
}
