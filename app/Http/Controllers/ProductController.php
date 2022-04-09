<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Product;
use Image;

class ProductController extends Controller
{
  public function get_all_product(){
      $products=Product::all();
      return response()->json([
          'products'=>$products,
      ],200);
  }
  public function add_product(Request $request){
$product=new Product();
$product->name=$request->name;
$product->description=$request->description;
$product->quantity=$request->quantity;
$product->type=$request->type;
$product->price=$request->price;





if($request->photo !=''){
  $strpos=strpos($request->photo,";");
  $sub=substr($request->photo, 0, $strpos );
  $ex=explode('/', $sub)[1];
  $name=time().".".$ex;
  // $image=Image::make($request->photo)->resize(200, 200);
  $upload_path=public_path()."/upload/";
  // $image->save($upload_path.$name);
  $product->photo=$name;
}
else{
  $product->photo='image.png';
}
$product->photo=$name;
$product->save();

  }
}
