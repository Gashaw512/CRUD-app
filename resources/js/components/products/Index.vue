
 <script setup>

 import { onMounted, ref } from 'vue';

 import { useRouter } from 'vue-router'

 const router= useRouter();

 let products=ref([ ]);

 onMounted(async()=>{
     getProducts();
 });

 const productNew=()=>{
     router.push('/product/new')
 }

 const getProducts= async ()=>{
     let reponse = await axios.get('/api/get_all_product');
     products.value=reponse.data.products;
     console.log('products', products.value);

     //Prints the required data at the given position
     console.log("ID  "+products.value[0].id)
     console.log("ID  "+products.value[3].name)
     console.log(products.value.length);
     products= products.value;
     console.log(products.length);
     console.log(products[1].name);

   for (let product in products){
      
         console.log(product.name)

   }

 }
 const ourImage=(img)=>{
     return '/upload'+img;
 }
 
 </script>



 <template>
    <div class="container">
     <div class="products__list table  my-3">
              
        <div class="customers__titlebar dflex justify-content-between align-items-center">
            <div class="customers__titlebar--item">
                <h1 class="my-1">Products</h1>
            </div>
            <div class="customers__titlebar--item">
                <button class="btn btn-secondary my-1" @click="productNew">
                    Add Product
                </button>
            </div>
        </div>

        <div class="table--heading mt-2 products__list__heading " style="padding-top: 20px;background:#FFF">
            <!-- <p class="table--heading--col1">&#32;</p> -->
            <p class="table--heading--col1">image</p>
            <p class="table--heading--col2">
                Product
            </p>
            <p class="table--heading--col4">Type</p>
            <p class="table--heading--col3">
                Inventory
            </p>
            <!-- <p class="table--heading--col5">&#32;</p> -->
            <p class="table--heading--col5">actions</p>
        </div>


<!-- v-if="products.length > 0 " -->
        <!-- product 1 -->
        <div class="table--items products__list__item" :v-for="(item,index) in products" :key="index"  v-if="products.length > 0" >
            <div class="products__list__item--imgWrapper">
                <!-- <img class="products__list__item--img" :src="ourImage(item.photo)"  style="height: 40px;" v-if="item.photo"> -->
            </div>
            <p class="table--items--col2">
               {{item.name}}
            </p>
            <p class="table--items--col2">
              {{itme.type}}
            </p>
            <p class="table--items--col3">
               {{item.quantity}}
            </p>     
        <div>     
                <button class="btn-icon btn-icon-success" >
                    <i class="fas fa-pencil-alt"></i>
                </button>
                <button class="btn-icon btn-icon-danger" >
                    <i class="far fa-trash-alt"></i>
                </button>
        </div>

        </div>
        <div  class="table--items products__list__item" v-else >
            <h1>Product Not Found</h1>
        </div>
        

    </div>
    </div>
</template>