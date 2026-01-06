

// import { Minus, Plus, Star } from 'lucide-react'
// import React, { useState } from 'react'
// import ProductList from '../components/ProductList'

// const SingleProductPage = () => {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);

//   const productImages = [
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_7.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/26df2b6e7c7963dca72095b3916d4031/p/r/product_megastore_14_3.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_6.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_5.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_4.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_2.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/26df2b6e7c7963dca72095b3916d4031/p/r/product_megastore_14_3.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_6.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_5.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_4.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_2.jpg",
//   ];

//   const handleQuantityChange = (type) => {
//     if (type === 'increment') {
//       setQuantity(quantity + 1);
//     } else if (type === 'decrement' && quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   return (
//     <div className='bg-[#f7f7f7] flex flex-col items-center justify-center px-20 py-10 gap-10'>

    //     {/* image container */}
    //   <div className='w-full bg-white h-140 flex flex-row p-12'>
    //     <div className='basis-4/7 flex gap-4 justify-center items-center'>
    //         {/* left list image */}
    //         <div className='flex flex-col h-110 overflow-scroll no-scrollbar gap-2 items-center justify-center'>

    //             {productImages.map((image, index) => (
    //               <div 
    //                 key={index}
    //                 onClick={() => setSelectedImage(index)}
    //                 className={`h-[70px] w-[70px] bg-white cursor-pointer transition-all ${
    //                   selectedImage === index ? 'ring-2 ring-black' : 'hover:ring-2 hover:ring-gray-300'
    //                 }`}
    //               >
    //                 <img src={image} alt={`Product view ${index + 1}`} className='w-full h-full object-cover' />
    //               </div>
    //             ))}
                
    //         </div>
    //         {/* main image */}
    //         <div className='basis-4/5'>
    //             <img className='object-cover h-110' src={productImages[selectedImage]} alt="Main product view" />
    //         </div>
    //     </div>

    //     <div className='basis-3/7 p-12 flex flex-col gap-4'>

    //         {/* 1st row */}
    //         <div className='flex items-center justify-between'>
    //             <h1 className='text-xl font-bold'>The Gathered Drape Trench</h1>
    //             <div className='border border-[#f1f1f1] p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50'>
    //                 <Star size={15} />
    //             </div>
    //         </div>

    //         {/* 2nd row */}
    //         <div className='flex items-center justify-between'>
    //             <h1 className='font-medium'>PGK 48.00</h1>
    //             <div className='flex items-center gap-3'>
    //                 {/* 5 stars */}
    //                 <div className='flex gap-2'>
    //                     <Star color='#f1f1f1' fill='#f1f1f1' size={10} />
    //                     <Star color='#f1f1f1' fill='#f1f1f1' size={10} />
    //                     <Star color='#f1f1f1' fill='#f1f1f1' size={10} />
    //                     <Star color='#f1f1f1' fill='#f1f1f1' size={10} />
    //                     <Star color='#f1f1f1' fill='#f1f1f1' size={10} />
    //                 </div>

    //                 {/* Review */}
    //                 <p> ( 1 Review) </p>
    //             </div>
    //         </div>

    //         {/* 3rd row */}
    //         <div>
    //             <p>Featuring an elevated neckline, billowy sleeves, and cinched cuffs, the Smocked Funnel-neck Top looks good tucked in or out. The best part? It's made of 100% organic cotton and pairs perfectly with our Way-High denim.</p>
    //         </div>

    //         {/* 4th row */}
    //         <div className='flex gap-2'>
    //             <div className='flex bg-[#f1f1f1] w-25 items-center justify-around py-2'>
    //                 <button onClick={() => handleQuantityChange('decrement')} className='cursor-pointer hover:opacity-70'>
    //                   <Minus />
    //                 </button>
    //                 <p className='text-[15px] font-bold'>{quantity}</p>
    //                 <button onClick={() => handleQuantityChange('increment')} className='cursor-pointer hover:opacity-70'>
    //                   <Plus />
    //                 </button>
    //             </div>

    //             <div className='border basis-3/4 flex justify-center items-center cursor-pointer hover:bg-gray-50'>
    //                 Add to Cart
    //             </div>
    //         </div>

    //         {/* 5th row */}
    //         <div className='flex items-center justify-center bg-black text-[#f1f1f1] py-2 cursor-pointer hover:bg-gray-800'>
    //             Buy It Now
    //         </div>
    //     </div>
    //   </div>

//       {/* Details Section */}
//       <div className='bg-white w-full px-8 py-8'>

//         {/* Tab headings */}
//         <div className='flex gap-12 text-lg border-b border-gray-200'>
//             <h3 className='font-semibold text-black border-b-2 border-black pb-4'>Details</h3>
//             <h3 className='text-gray-400 pb-4'>More Information</h3>
//             <h3 className='text-gray-400 pb-4'>Reviews (1)</h3>
//             <h3 className='text-gray-400 pb-4'>About Brand</h3>
//             <h3 className='text-gray-400 pb-4'>Shipping and Returns</h3>
//         </div>

//         {/* Display area */}
//         <div className='text-gray-600 mt-8 flex flex-col gap-6 text-base leading-relaxed'>
//             <p>Like your favorite chunky sweater, but for your head. The Organic Cotton Chunky Beanie features an extra-thick knit, a cuffed brim, and a snug, unisex fit. The best part? It's made of 100% organic cotton with a touch of stretch, which makes it comfy, cozy, and as warm as can be.</p>
            
//             <p>This beanie is certified organic from seed to cap. The Global Organic Textile Standard (GOTS) certification takes over a year to account for every step of production—from the processing of certified organic fiber into yarn to dyehouses, mills, factories, and printers.</p>

//             <ul className='flex flex-col gap-3 mt-2'>
//                 <li className='flex items-start'>
//                     <span className='mr-2'>•</span>
//                     <span>SModel is 6′1″ Wearing size M</span>
//                 </li>
//                 <li className='flex items-start'>
//                     <span className='mr-2'>•</span>
//                     <span>Slim fit</span>
//                 </li>
//                 <li className='flex items-start'>
//                     <span className='mr-2'>•</span>
//                     <span>100% cotton</span>
//                 </li>
//                 <li className='flex items-start'>
//                     <span className='mr-2'>•</span>
//                     <span>Machine wash cold, gentle cycle, lay flat to dry</span>
//                 </li>
//                 <li className='flex items-start'>
//                     <span className='mr-2'>•</span>
//                     <span>Two button-closure flap pockets</span>
//                 </li>
//             </ul>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className='bg-white w-full'>
//           <div className='p-5'>
//               <h1 className='text-[1.5rem]'><strong>Related Products</strong></h1>
//               <p className='text-[#666666]'>Check items to add to cart</p>
//           </div>

//           <div className='flex overflow-scroll'>
//             <ProductList />
//             <ProductList />
//             <ProductList />
//             <ProductList />
//             <ProductList />
//             <ProductList />
//           </div>
//       </div>

//       {/* Related Products */}
//       <div className='bg-white w-full'>
//           <div className='p-5'>
//               <h1 className='text-[1.5rem]'><strong>You might also like!</strong></h1>
//           </div>

//           <div className='flex overflow-scroll'>
//             <ProductList />
//             <ProductList />
//             <ProductList />
//             <ProductList />
//             <ProductList />
//             <ProductList />
//           </div>
//       </div>
//     </div>
//   )
// }

// export default SingleProductPage













// import { Minus, Plus, Star } from 'lucide-react'
// import React, { useEffect, useRef, useState } from 'react'
// import ProductList from '../components/ProductList';
// import axios from 'axios';
// import { useLocation, useParams } from 'react-router-dom';
// import parse from 'html-react-parser';
// import { GoogleGenAI } from "@google/genai";



// const SingleProductPage = () => {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [productData, setProductData] = useState();
//   const [activeTab, setActiveTab] = useState(0);
//   const [aiResponse, setAIResponse] = useState()

//   const location = useLocation();
//   const ai = new GoogleGenAI({apiKey: 'AIzaSyBEwBOB2k9oJt6kzjkAfyy0f5iWttonaC4'});

//   const responseFromAI = async (productResponse) => {
//   if(!aiResponse) {
//     try {
//     const response = await ai.models.generateContent({
//       model: "gemini-2.5-flash",
//       systemInstruction: "You are an expert e-commerce copywriter. Your goal is to write persuasive, SEO-friendly product descriptions.",
//       contents: [
//         {
//           role: "user",
//           parts: [
//             { 
//               text: `Write a high-quality product description based on these details: ${productResponse?.description}` 
//             }
//           ],
//         },
//       ],
//     });
//     // console.log("res", response.candidates[0].content.parts[0].text);
//     console.log(response.text)
//     setAIResponse(response.text)
//   } catch (error) {
//     console.error("Error generating content:", error);
//   }
//   }
// };


//   const {productCode} = location.state

//   // useEffect(() => {
//   //   responseFromAI()
//   // }, [])
  
  
//   useEffect(() => {
//     fetchProductDetails(productCode)
//   }, [location, productCode])

//   const fetchProductDetails = async(product_code) => {
//     try {
//       const response = await axios.post(
//       "http://192.168.101.182:8002/api/method/custom.api.get_webitem_details.get_webitem_details",   {
//         item_code: product_code, 
//       },
//        {
//   headers: {
//     'Content-Type': 'application/json',
//     'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//   }
// }
   
//     );

//     console.log("response", response)
//     setProductData(response.data.message)
//     responseFromAI(response.data.message)
//     } catch (error) {
      
//     }
    
//   }
  


//   const productImages = [
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_7.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/26df2b6e7c7963dca72095b3916d4031/p/r/product_megastore_14_3.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_6.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_5.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_4.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_2.jpg",
//   ];

//   const handleQuantityChange = (type) => {
//     if (type === 'increment') {
//       setQuantity(quantity + 1);

//       console.log("QUantity.....", quantity)
//     } else if (type === 'decrement' && quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };


//     const handleAddToCart = async () => {
//         try {
//             console.log("add to cart called")
//             const { data } = await axios.post('http://192.168.101.182:8002/api/method/webshop.webshop.shopping_cart.cart.update_cart', {
//                 item_code: "Sodium potassium",
//                 qty: quantity
//             }, {
//                 headers: {
//                     "Content-Type": "application/json",
//                     "Accept": "application/json",
//                     'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//                 }
//             }
//             )

//             console.log("add to cart called", data)

//         } catch (error) {

//         }
//     }


//     const tabs = [
//     {
//       name: "Product Details",
//       component: productData?.website_specifications[0]?.description,
//     },
//     {
//       name: "More Information",
//       component: productData?.website_specifications[1]?.description,
//     },
//     {
//       name: "AI Generated Description",
//       component: aiResponse,
//     },
  
//   ];

//    const ActiveTabComponent = tabs[activeTab].component;

 

//   return (
//     <div className='bg-[#f7f7f7] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-6 sm:py-10 gap-6 sm:gap-10'>

//              {/* image container */}
// <div className="w-full bg-white h-auto flex flex-col md:flex-row p-4 md:p-12 gap-6">

//   <div className="basis-full md:basis-4/7 flex flex-col md:flex-row gap-4 justify-center items-center">
    
//     {/* left list image */}
//     <div className="flex md:flex-col h-auto md:h-110 overflow-x-scroll md:overflow-y-scroll no-scrollbar gap-2 items-center justify-center w-full md:w-auto">
//       {productImages.map((image, index) => (
//         <div
//           key={index}
//           onClick={() => setSelectedImage(index)}
//           className={`h-[60px] w-[60px] md:h-[70px] md:w-[70px] bg-white cursor-pointer transition-all ${
//             selectedImage === index ? "ring-2 ring-black" : "hover:ring-2 hover:ring-gray-300"
//           }`}
//         >
//           <img
//             src={image}
//             alt={`Product view ${index + 1}`}
//             className="w-full h-full object-cover"
//           />
//         </div>
//       ))}
//     </div>

//     {/* main image */}
//     <div className="basis-full md:basis-4/5 w-full flex justify-center">
//       <img
//         className=" object-contain md:object-cover h-[280px] md:h-110 w-full md:w-auto"
//         // src={productImages[selectedImage]}
//         src={`http://192.168.101.182:8002${productData?.thumbnail}`}
//         alt="Main product view"
//       />
//     </div>

//   </div>

//   {/* Right side */}
//   <div className="basis-full md:basis-3/7 px-2 md:px-12 flex flex-col gap-4">

//     {/* 1st row */}
//     <div className="flex items-center justify-between">
//       <h1 className="text-lg md:text-xl font-bold">{productData?.item_name}</h1>
//       <div className="border border-[#f1f1f1] p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50">
//         <Star size={15} />
//       </div>
//     </div>

//     {/* 2nd row */}
//     <div className="flex items-center justify-between">
//       <h1 className="font-medium text-[16px] md:text-[18px]">PGK 48.00</h1>
//       <div className="flex items-center gap-3">
//         <div className="flex gap-1 md:gap-2">
//           <Star color="#FFDE21" fill="#FFDE21" size={15} />
//           <Star color="#FFDE21" fill="#FFDE21" size={15} />
//           <Star color="#FFDE21" fill="#FFDE21" size={15} />
//           <Star color="#f1f1f1" fill="#f1f1f1" size={15} />
//           <Star color="#f1f1f1" fill="#f1f1f1" size={15} />
//         </div>
//         <p>(1 Review)</p>
//       </div>
//     </div>

//     {/* 3rd row */}
//     <p className="text-sm md:text-base">
//       Featuring an elevated neckline, billowy sleeves, and cinched cuffs, the Smocked Funnel-neck Top looks good tucked in or out. The best part? It's made of 100% organic cotton and pairs perfectly with our Way-High denim.
//     </p>

//     {/* 4th row */}
//     <div className="flex gap-2">
//       <div className="flex bg-[#f1f1f1] w-28 items-center justify-around py-2">
//         <button onClick={() => handleQuantityChange("decrement")} className="cursor-pointer hover:opacity-70">
//           <Minus />
//         </button>
//         <p className="text-[15px] font-bold">{quantity}</p>
//         <button onClick={() => handleQuantityChange("increment")} className="cursor-pointer hover:opacity-70">
//           <Plus />
//         </button>
//       </div>

//       <div onClick={handleAddToCart} className="border basis-full md:basis-3/4 flex justify-center items-center cursor-pointer hover:bg-gray-50">
//         Add to Cart
//       </div>
//     </div>

//     {/* 5th row */}
//     <div className="flex items-center justify-center bg-black text-[#f1f1f1] py-2 cursor-pointer hover:bg-gray-800">
//       Buy It Now
//     </div>
//   </div>
// </div>


//       {/* Details Section */}
//       <div className='bg-white w-full px-4 sm:px-8 py-6 sm:py-8'>
//         {/* Tab headings */}
//         <div className='flex gap-4 sm:gap-8 lg:gap-12 text-sm sm:text-base lg:text-lg border-b border-gray-200 overflow-x-auto no-scrollbar'>
//           {/* <h3 className='font-semibold text-black border-b-2 border-black pb-3 sm:pb-4 whitespace-nowrap'>Details</h3>
//           <h3 className='text-gray-400 pb-3 sm:pb-4 whitespace-nowrap'>More Information</h3>
//           <h3 className='text-gray-400 pb-3 sm:pb-4 whitespace-nowrap'>Reviews (1)</h3>
//           <h3 className='text-gray-400 pb-3 sm:pb-4 whitespace-nowrap'>About Brand</h3>
//           <h3 className='text-gray-400 pb-3 sm:pb-4 whitespace-nowrap hidden sm:block'>Shipping and Returns</h3> */}

//           {
//             tabs.map((tab, index) => {
//               return <h3
//               key={index}
//               onClick={() => setActiveTab(index)}
//                className={` pb-3 sm:pb-4 whitespace-nowrap cursor-pointer ${activeTab === index ? 'font-semibold text-black border-b-2 border-black' : 'text-gray-400'} `}>
//                 {tab.name}
//               </h3>
//             })
//           }
//         </div>

//         {/* Display area */}
//         <div className='text-gray-600 mt-6 sm:mt-8 flex flex-col gap-4 sm:gap-6 text-sm sm:text-base leading-relaxed'>
//           {/* <p>Like your favorite chunky sweater, but for your head. The Organic Cotton Chunky Beanie features an extra-thick knit, a cuffed brim, and a snug, unisex fit. The best part? It's made of 100% organic cotton with a touch of stretch, which makes it comfy, cozy, and as warm as can be.</p>
          
//           <p>This beanie is certified organic from seed to cap. The Global Organic Textile Standard (GOTS) certification takes over a year to account for every step of production—from the processing of certified organic fiber into yarn to dyehouses, mills, factories, and printers.</p>

//           <ul className='flex flex-col gap-2 sm:gap-3 mt-2'>
//             <li className='flex items-start'>
//               <span className='mr-2'>•</span>
//               <span>Model is 6′1″ Wearing size M</span>
//             </li>
//             <li className='flex items-start'>
//               <span className='mr-2'>•</span>
//               <span>Slim fit</span>
//             </li>
//             <li className='flex items-start'>
//               <span className='mr-2'>•</span>
//               <span>100% cotton</span>
//             </li>
//             <li className='flex items-start'>
//               <span className='mr-2'>•</span>
//               <span>Machine wash cold, gentle cycle, lay flat to dry</span>
//             </li>
//             <li className='flex items-start'>
//               <span className='mr-2'>•</span>
//               <span>Two button-closure flap pockets</span>
//             </li>
//           </ul> */}
//           {
//             parse(`${ActiveTabComponent}`)
//           }
//         </div>
//       </div>

      
//       {/* Related Products */}
//       <div className='bg-white w-full'>
//         <div className='p-4 sm:p-5'>
//           <h1 className='text-xl sm:text-[1.5rem]'><strong>Related Products</strong></h1>
//           <p className='text-[#666666] text-sm sm:text-base'>Check items to add to cart</p>
//         </div>

//         <div className='flex overflow-x-auto no-scrollbar pb-4 gap-3'>
//           {/* <ProductList />
//           <ProductList />
//           <ProductList />
//           <ProductList />
//           <ProductList />
//           <ProductList /> */}

//           {
//             productData?.recommended_items && productData?.recommended_items.map((item) => {
//              return <ProductList itemData={item} />
//             })
//           }
//         </div>
//       </div>

//       {/* You might also like */}
//       <div className='bg-white w-full'>
//         <div className='p-4 sm:p-5'>
//           <h1 className='text-xl sm:text-[1.5rem]'><strong>You might also like!</strong></h1>
//         </div>

//         <div className='flex overflow-x-auto no-scrollbar pb-4'>
//           <ProductList />
//           <ProductList />
//           <ProductList />
//           <ProductList />
//           <ProductList />
//           <ProductList />
//         </div>
//       </div>

//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default SingleProductPage






// import { Minus, Plus, Star } from 'lucide-react'
// import React, { useEffect, useState } from 'react'
// import ProductList from '../components/ProductList';
// import axios from 'axios';
// import { useLocation } from 'react-router-dom';
// import parse from 'html-react-parser';
// import { GoogleGenAI } from "@google/genai";
// import ReactMarkdown from 'react-markdown';

// const SingleProductPage = () => {
//   const [selectedImage, setSelectedImage] = useState(0);
//   const [quantity, setQuantity] = useState(1);
//   const [productData, setProductData] = useState();
//   const [activeTab, setActiveTab] = useState(0);
//   const [aiResponse, setAIResponse] = useState()

//   const location = useLocation();
//   const ai = new GoogleGenAI({apiKey: 'AIzaSyBEwBOB2k9oJt6kzjkAfyy0f5iWttonaC4'});

//   const responseFromAI = async (productResponse) => {
//     if(!aiResponse) {
//       try {
//         const response = await ai.models.generateContent({
//           model: "gemini-2.5-flash",
//           systemInstruction: "You are an expert e-commerce copywriter. Your goal is to write persuasive, SEO-friendly product descriptions.",
//           contents: [
//             {
//               role: "user",
//               parts: [
//                 { 
//                   text: `Write a high-quality product description based on these details: ${productResponse?.description}` 
//                 }
//               ],
//             },
//           ],
//         });
//         console.log(response.text)
//         setAIResponse(response.text)
//       } catch (error) {
//         console.error("Error generating content:", error);
//       }
//     }
//   };

//   const {productCode} = location.state
  
//   useEffect(() => {
//     fetchProductDetails(productCode)
//   }, [location, productCode])

//   const fetchProductDetails = async(product_code) => {
//     try {
//       const response = await axios.post(
//         "http://192.168.101.182:8002/api/method/custom.api.get_webitem_details.get_webitem_details",
//         {
//           item_code: product_code, 
//         },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//           }
//         }
//       );

//       console.log("response", response)
//       setProductData(response.data.message)
//       // responseFromAI(response.data.message)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const productImages = [
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_7.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/26df2b6e7c7963dca72095b3916d4031/p/r/product_megastore_14_3.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_6.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_5.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_4.jpg",
//     "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_2.jpg",
//   ];

//   const handleQuantityChange = (type) => {
//     if (type === 'increment') {
//       setQuantity(quantity + 1);
//       console.log("Quantity.....", quantity)
//     } else if (type === 'decrement' && quantity > 1) {
//       setQuantity(quantity - 1);
//     }
//   };

//   const handleAddToCart = async () => {
//     try {
//       console.log("add to cart called")
//       const { data } = await axios.post(
//         'http://192.168.101.182:8002/api/method/webshop.webshop.shopping_cart.cart.update_cart',
//         {
//           item_code: "Sodium potassium",
//           qty: quantity
//         },
//         {
//           headers: {
//             "Content-Type": "application/json",
//             "Accept": "application/json",
//             'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
//           }
//         }
//       )
//       console.log("add to cart called", data)
//     } catch (error) {
//       console.error(error)
//     }
//   }

//   const tabs = [
//     {
//       name: "Product Details",
//       component: productData?.website_specifications[0]?.description,
//       type: 'html'
//     },
//     {
//       name: "More Information",
//       component: productData?.website_specifications[1]?.description,
//       type: 'html'
//     },
//     {
//       name: "AI Generated Description",
//       component: productData?.web_long_description,
//       type: 'markdown'
//     },
//   ];

//   const ActiveTabComponent = tabs[activeTab].component;
//   const activeTabType = tabs[activeTab].type;

//   return (
//     <div className='bg-[#f7f7f7] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-6 sm:py-10 gap-6 sm:gap-10'>

//       {/* image container */}
//       <div className="w-full bg-white h-auto flex flex-col md:flex-row p-4 md:p-12 gap-6">

//         <div className="basis-full md:basis-4/7 flex flex-col md:flex-row gap-4 justify-center items-center">
          
//           {/* left list image */}
//           <div className="flex md:flex-col h-auto md:h-110 overflow-x-scroll md:overflow-y-scroll no-scrollbar gap-2 items-center justify-center w-full md:w-auto">
//             {productImages.map((image, index) => (
//               <div
//                 key={index}
//                 onClick={() => setSelectedImage(index)}
//                 className={`h-[60px] w-[60px] md:h-[70px] md:w-[70px] bg-white cursor-pointer transition-all ${
//                   selectedImage === index ? "ring-2 ring-black" : "hover:ring-2 hover:ring-gray-300"
//                 }`}
//               >
//                 <img
//                   src={image}
//                   alt={`Product view ${index + 1}`}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//             ))}
//           </div>

//           {/* main image */}
//           <div className="basis-full md:basis-4/5 w-full flex justify-center">
//             <img
//               className="object-contain md:object-cover h-[280px] md:h-110 w-full md:w-auto"
//               src={`http://192.168.101.182:8002${productData?.thumbnail}`}
//               alt="Main product view"
//             />
//           </div>

//         </div>

//         {/* Right side */}
//         <div className="basis-full md:basis-3/7 px-2 md:px-12 flex flex-col gap-4">

//           {/* 1st row */}
//           <div className="flex items-center justify-between">
//             <h1 className="text-lg md:text-xl font-bold">{productData?.item_name}</h1>
//             <div className="border border-[#f1f1f1] p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50">
//               <Star size={15} />
//             </div>
//           </div>

//           {/* 2nd row */}
//           <div className="flex items-center justify-between">
//             <h1 className="font-medium text-[16px] md:text-[18px]">PGK 48.00</h1>
//             <div className="flex items-center gap-3">
//               <div className="flex gap-1 md:gap-2">
//                 <Star color="#FFDE21" fill="#FFDE21" size={15} />
//                 <Star color="#FFDE21" fill="#FFDE21" size={15} />
//                 <Star color="#FFDE21" fill="#FFDE21" size={15} />
//                 <Star color="#f1f1f1" fill="#f1f1f1" size={15} />
//                 <Star color="#f1f1f1" fill="#f1f1f1" size={15} />
//               </div>
//               <p>(1 Review)</p>
//             </div>
//           </div>

//           {/* 3rd row */}
//           {/* <p className="text-sm md:text-base">
//             Featuring an elevated neckline, billowy sleeves, and cinched cuffs, the Smocked Funnel-neck Top looks good tucked in or out. The best part? It's made of 100% organic cotton and pairs perfectly with our Way-High denim.
//           </p> */}

//           <div>

//             <p className='text-sm md:text-base'>
//             Item Code: <span>{productData?.item_code}</span>
//           </p>

//             <p className='text-sm md:text-base'>
//             Item Id: <span>{productData?.name}</span>
//           </p>

//           </div>

//           {/* 4th row */}
//           <div className="flex gap-2">
//             <div className="flex bg-[#f1f1f1] w-28 items-center justify-around py-2">
//               <button onClick={() => handleQuantityChange("decrement")} className="cursor-pointer hover:opacity-70">
//                 <Minus />
//               </button>
//               <p className="text-[15px] font-bold">{quantity}</p>
//               <button onClick={() => handleQuantityChange("increment")} className="cursor-pointer hover:opacity-70">
//                 <Plus />
//               </button>
//             </div>

//             <div onClick={handleAddToCart} className="border basis-full md:basis-3/4 flex justify-center items-center cursor-pointer hover:bg-gray-50">
//               Add to Cart
//             </div>
//           </div>

//           {/* 5th row */}
//           <div className="flex items-center justify-center bg-black text-[#f1f1f1] py-2 cursor-pointer hover:bg-gray-800">
//             Buy It Now
//           </div>
//         </div>
//       </div>

//       {/* Details Section */}
//       <div className='bg-white w-full px-4 sm:px-8 py-6 sm:py-8'>
//         {/* Tab headings */}
//         <div className='flex gap-4 sm:gap-8 lg:gap-12 text-sm sm:text-base lg:text-lg border-b border-gray-200 overflow-x-auto no-scrollbar'>
//           {tabs.map((tab, index) => {
//             return <h3
//               key={index}
//               onClick={() => setActiveTab(index)}
//               className={`pb-3 sm:pb-4 whitespace-nowrap cursor-pointer ${activeTab === index ? 'font-semibold text-black border-b-2 border-black' : 'text-gray-400'}`}>
//               {tab.name}
//             </h3>
//           })}
//         </div>

//         {/* Display area with custom styling for markdown */}
//         <div className='text-gray-700 mt-6 sm:mt-8 text-sm sm:text-base leading-relaxed'>
//           {activeTabType === 'markdown' ? (
//             <div className="prose prose-sm sm:prose max-w-none">
//               <ReactMarkdown
//                 components={{
//                   h1: ({node, ...props}) => <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900" {...props} />,
//                   h2: ({node, ...props}) => <h2 className="text-xl sm:text-2xl font-bold mb-3 mt-6 text-gray-900" {...props} />,
//                   h3: ({node, ...props}) => <h3 className="text-lg sm:text-xl font-semibold mb-2 mt-4 text-gray-900" {...props} />,
//                   p: ({node, ...props}) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
//                   strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
//                   em: ({node, ...props}) => <em className="italic" {...props} />,
//                   ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
//                   ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
//                   li: ({node, ...props}) => <li className="text-gray-700 ml-2" {...props} />,
//                   hr: ({node, ...props}) => <hr className="my-6 border-gray-300" {...props} />,
//                 }}
//               >
//                 {ActiveTabComponent || ''}
//               </ReactMarkdown>
//             </div>
//           ) : (
//             parse(`${ActiveTabComponent || ''}`)
//           )}
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className='bg-white w-full'>
//         <div className='p-4 sm:p-5'>
//           <h1 className='text-xl sm:text-[1.5rem]'><strong>Related Products</strong></h1>
//           <p className='text-[#666666] text-sm sm:text-base'>Check items to add to cart</p>
//         </div>

//         <div className='flex overflow-x-auto no-scrollbar pb-4 gap-3'>
//           {productData?.recommended_items && productData?.recommended_items.map((item, index) => {
//             return <ProductList key={index} itemData={item} />
//           })}
//         </div>
//       </div>

//       {/* You might also like */}
//       <div className='bg-white w-full'>
//         <div className='p-4 sm:p-5'>
//           <h1 className='text-xl sm:text-[1.5rem]'><strong>You might also like!</strong></h1>
//         </div>

//         <div className='flex overflow-x-auto no-scrollbar pb-4'>
//           <ProductList />
//           <ProductList />
//           <ProductList />
//           <ProductList />
//           <ProductList />
//           <ProductList />
//         </div>
//       </div>

//       <style jsx>{`
//         .no-scrollbar::-webkit-scrollbar {
//           display: none;
//         }
//         .no-scrollbar {
//           -ms-overflow-style: none;
//           scrollbar-width: none;
//         }
//       `}</style>
//     </div>
//   )
// }

// export default SingleProductPage







import { Minus, Plus, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import ProductList from '../components/ProductList';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
import { GoogleGenAI } from "@google/genai";
import ReactMarkdown from 'react-markdown';
import ReviewSection from '../components/ReviewSection';
import EcommerceChatbot from '../components/EcommerceChatbot';

const SingleProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [productData, setProductData] = useState();
  const [activeTab, setActiveTab] = useState(0);
  const [aiResponse, setAIResponse] = useState()

  const location = useLocation();
  const ai = new GoogleGenAI({apiKey: 'AIzaSyBEwBOB2k9oJt6kzjkAfyy0f5iWttonaC4'});

  const responseFromAI = async (productResponse) => {
    if(!aiResponse) {
      try {
        const response = await ai.models.generateContent({
          model: "gemini-2.5-flash",
          systemInstruction: "You are an expert e-commerce copywriter. Your goal is to write persuasive, SEO-friendly product descriptions.",
          contents: [
            {
              role: "user",
              parts: [
                { 
                  text: `Write a high-quality product description based on these details: ${productResponse?.description}` 
                }
              ],
            },
          ],
        });
        console.log(response.text)
        setAIResponse(response.text)
      } catch (error) {
        console.error("Error generating content:", error);
      }
    }
  };

  const {productCode} = location.state
  
  useEffect(() => {
    fetchProductDetails(productCode)
  }, [location, productCode])

  const fetchProductDetails = async(product_code) => {
    try {
      const response = await axios.post(
        "http://192.168.101.182:8002/api/method/custom.api.get_webitem_details.get_webitem_details",
        {
          item_code: product_code, 
        },
        {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
          }
        }
      );

      console.log("response", response)
      setProductData(response.data.message)
      // responseFromAI(response.data.message)
    } catch (error) {
      console.error(error)
    }
  }

  const productImages = [
    "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_7.jpg",
    "https://minimog.nextsky.co/minimog/media/catalog/product/cache/26df2b6e7c7963dca72095b3916d4031/p/r/product_megastore_14_3.jpg",
    "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_6.jpg",
    "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_5.jpg",
    "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_4.jpg",
    "https://minimog.nextsky.co/minimog/media/catalog/product/cache/264f011371af053b04369f03ade3004b/p/r/product_megastore_14_2.jpg",
  ];

  const handleQuantityChange = (type) => {
    if (type === 'increment') {
      setQuantity(quantity + 1);
      console.log("Quantity.....", quantity)
    } else if (type === 'decrement' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = async () => {
    try {
      console.log("add to cart called")
      const { data } = await axios.post(
        'http://192.168.101.182:8002/api/method/webshop.webshop.shopping_cart.cart.update_cart',
        {
          item_code: productCode,
          qty: quantity
        },
        {
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
            'Authorization': 'token 1a5cfcab01776e5:63628feef82aa59'
          }
        }
      )
      console.log("add to cart called", data)
    } catch (error) {
      console.error(error)
    }
  }

  const tabs = [
    {
      name: "Product Details",
      component: productData?.website_specifications[0]?.description,
      type: 'html'
    },
    // {
    //   name: "Description",
    //   component: productData?.custom_ai_description,
    //   type: 'html'
    // },
    {
      name: "More Information",
      component: productData?.website_specifications[1]?.description,
      type: 'html'
    },
    // {
    //   name: "AI Generated Description",
    //   component: aiResponse,
    //   type: 'markdown'
    // },
  ];

  const ActiveTabComponent = tabs[activeTab].component;
  const activeTabType = tabs[activeTab].type;

  return (
    <div className='bg-[#f7f7f7] flex flex-col items-center justify-center px-4 sm:px-8 lg:px-20 py-6 sm:py-10 gap-6 sm:gap-10'>

      {/* image container */}
      <div className="w-full bg-white h-auto flex flex-col md:flex-row p-4 md:p-12 gap-6">

        <div className="basis-full md:basis-4/7 flex flex-col md:flex-row gap-4 justify-center items-center">
          
          {/* left list image */}
          <div className="flex md:flex-col h-auto md:h-110 overflow-x-scroll md:overflow-y-scroll no-scrollbar gap-2 items-center justify-center w-full md:w-auto">
            {productImages.map((image, index) => (
              <div
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`h-[60px] w-[60px] md:h-[70px] md:w-[70px] bg-white cursor-pointer transition-all ${
                  selectedImage === index ? "ring-2 ring-black" : "hover:ring-2 hover:ring-gray-300"
                }`}
              >
                <img
                  src={image}
                  alt={`Product view ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          {/* main image */}
          <div className="basis-full md:basis-4/5 w-full flex justify-center">
            <img
              className="object-contain md:object-cover h-[280px] md:h-110 w-full md:w-auto"
              src={`http://192.168.101.182:8002${productData?.thumbnail}`}
              alt="Main product view"
            />
          </div>

        </div>

        {/* Right side */}
        <div className="basis-full md:basis-3/7 px-2 md:px-12 flex flex-col gap-4">

          {/* 1st row */}
          <div className="flex items-center justify-between">
            <h1 className="text-lg md:text-xl font-bold">{productData?.item_name}</h1>
            <div className="border border-[#f1f1f1] p-2 rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-50">
              <Star size={15} />
            </div>
          </div>

          {/* 2nd row */}
          <div className="flex items-center justify-between">
            <h1 className="font-medium text-[16px] md:text-[18px]">PGK 48.00</h1>
            <div className="flex items-center gap-3">
              <div className="flex gap-1 md:gap-2">
                <Star color="#FFDE21" fill="#FFDE21" size={15} />
                <Star color="#FFDE21" fill="#FFDE21" size={15} />
                <Star color="#FFDE21" fill="#FFDE21" size={15} />
                <Star color="#f1f1f1" fill="#f1f1f1" size={15} />
                <Star color="#f1f1f1" fill="#f1f1f1" size={15} />
              </div>
              <p>(1 Review)</p>
            </div>
          </div>

          {/* 3rd row */}
          <p className="text-sm md:text-base font-noto ">
            {
              

            //   <div className="html-content prose prose-sm sm:prose max-w-none
            //   [&_p]:mb-4 [&_p]:text-gray-700 [&_p]:leading-relaxed
            //   [&_strong]:font-bold [&_strong]:text-gray-900
            //   [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4 [&_ul]:space-y-2
            //   [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mb-4 [&_ol]:space-y-2
            //   [&_li]:text-gray-700 [&_li]:ml-2
            //   [&_h1]:text-2xl [&_h1]:sm:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-gray-900
            //   [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-gray-900
            //   [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-gray-900
            //   [&_em]:italic
            //   [&_hr]:my-6 [&_hr]:border-gray-300">
            //   {parse(productData?.custom_ai_description || '')}
            // </div>

            productData?.custom_ai_description
            }
          </p>

          {/* 4th row */}
          <div className="flex gap-2">
            <div className="flex bg-[#f1f1f1] w-28 items-center justify-around py-2">
              <button onClick={() => handleQuantityChange("decrement")} className="cursor-pointer hover:opacity-70">
                <Minus />
              </button>
              <p className="text-[15px] font-bold">{quantity}</p>
              <button onClick={() => handleQuantityChange("increment")} className="cursor-pointer hover:opacity-70">
                <Plus />
              </button>
            </div>

            <div onClick={handleAddToCart} className="border basis-full md:basis-3/4 flex justify-center items-center cursor-pointer hover:bg-gray-50">
              Add to Cart
            </div>
          </div>

          {/* 5th row */}
          <div className="flex items-center justify-center bg-black text-[#f1f1f1] py-2 cursor-pointer hover:bg-gray-800">
            Buy It Now
          </div>
        </div>
      </div>

      <EcommerceChatbot item_code={productData?.name} item_name={productData?.item_name} item_group={productData?.item_group} description={productData?.description} />

      {/* Details Section */}
      <div className='bg-white w-full px-4 sm:px-8 py-6 sm:py-8'>
        {/* Tab headings */}
        <div className='flex gap-4 sm:gap-8 lg:gap-12 text-sm sm:text-base lg:text-lg border-b border-gray-200 overflow-x-auto no-scrollbar'>
          {tabs.map((tab, index) => {
            return <h3
              key={index}
              onClick={() => setActiveTab(index)}
              className={`pb-3 sm:pb-4 whitespace-nowrap cursor-pointer ${activeTab === index ? 'font-semibold text-black border-b-2 border-black' : 'text-gray-400'}`}>
              {tab.name}
            </h3>
          })}
        </div>

        {/* Display area with custom styling */}
        <div className='mt-6 sm:mt-8 text-sm sm:text-base leading-relaxed'>
          {activeTabType === 'markdown' ? (
            <div className="prose prose-sm sm:prose max-w-none">
              <ReactMarkdown
                components={{
                  h1: ({node, ...props}) => <h1 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900" {...props} />,
                  h2: ({node, ...props}) => <h2 className="text-xl sm:text-2xl font-bold mb-3 mt-6 text-gray-900" {...props} />,
                  h3: ({node, ...props}) => <h3 className="text-lg sm:text-xl font-semibold mb-2 mt-4 text-gray-900" {...props} />,
                  p: ({node, ...props}) => <p className="mb-4 text-gray-700 leading-relaxed" {...props} />,
                  strong: ({node, ...props}) => <strong className="font-bold text-gray-900" {...props} />,
                  em: ({node, ...props}) => <em className="italic" {...props} />,
                  ul: ({node, ...props}) => <ul className="list-disc list-inside mb-4 space-y-2" {...props} />,
                  ol: ({node, ...props}) => <ol className="list-decimal list-inside mb-4 space-y-2" {...props} />,
                  li: ({node, ...props}) => <li className="text-gray-700 ml-2" {...props} />,
                  hr: ({node, ...props}) => <hr className="my-6 border-gray-300" {...props} />,
                }}
              >
                {ActiveTabComponent || ''}
              </ReactMarkdown>
            </div>
          ) : (
            <div className="html-content prose prose-sm sm:prose max-w-none
              [&_p]:mb-4 [&_p]:text-gray-700 [&_p]:leading-relaxed
              [&_strong]:font-bold [&_strong]:text-gray-900
              [&_ul]:list-disc [&_ul]:list-inside [&_ul]:mb-4 [&_ul]:space-y-2
              [&_ol]:list-decimal [&_ol]:list-inside [&_ol]:mb-4 [&_ol]:space-y-2
              [&_li]:text-gray-700 [&_li]:ml-2
              [&_h1]:text-2xl [&_h1]:sm:text-3xl [&_h1]:font-bold [&_h1]:mb-4 [&_h1]:text-gray-900
              [&_h2]:text-xl [&_h2]:sm:text-2xl [&_h2]:font-bold [&_h2]:mb-3 [&_h2]:mt-6 [&_h2]:text-gray-900
              [&_h3]:text-lg [&_h3]:sm:text-xl [&_h3]:font-semibold [&_h3]:mb-2 [&_h3]:mt-4 [&_h3]:text-gray-900
              [&_em]:italic
              [&_hr]:my-6 [&_hr]:border-gray-300">
              {parse(ActiveTabComponent || '')}
            </div>
          )}
        </div>
      </div>

      {/* Related Products */}
      <div className='bg-white w-full'>
        <div className='p-4 sm:p-5'>
          <h1 className='text-xl sm:text-[1.5rem]'><strong>Related Products</strong></h1>
          <p className='text-[#666666] text-sm sm:text-base'>Check items to add to cart</p>
        </div>

        <div className='flex overflow-x-auto no-scrollbar pb-4 gap-3'>
          {productData?.recommended_items && productData?.recommended_items.map((item, index) => {
            return <ProductList key={index} itemData={item} />
          })}
        </div>
      </div>

      <ReviewSection webItemCode={productData?.name || productCode} />

      {/* You might also like */}
      <div className='bg-white w-full'>
        <div className='p-4 sm:p-5'>
          <h1 className='text-xl sm:text-[1.5rem]'><strong>You might also like!</strong></h1>
        </div>

        <div className='flex overflow-x-auto no-scrollbar pb-4'>
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
          <ProductList />
        </div>
      </div>

      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  )
}

export default SingleProductPage