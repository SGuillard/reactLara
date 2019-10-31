<?php

use Illuminate\Database\Seeder;

class ProductsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $productList = [
            ["name" => "Sledgehammer", "price" => 125.75],
            ["name" => "Axe", "price" => 190.50],
            ["name" => "Bandsaw", "price" => 562.131],
            ["name" => "Chisel", "price" => 12.9],
            ["name" => "Hacksaw", "price" => 18.45],
        ];

        foreach ($productList as $productToInsert) {
            $productModel = new App\Product();
            $productModel->name = $productToInsert['name'];
            $productModel->price = $productToInsert['price'];
            $productModel->save();
        }
    }
}
