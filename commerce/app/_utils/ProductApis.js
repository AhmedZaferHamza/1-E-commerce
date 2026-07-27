import axiosClient from "./axiosClient";

const getLatestProducts = () => axiosClient.get('/products?populate=*');

const getProductsByCategory = (category) => 
    axiosClient.get(`/products?filters[Category][$eq]=${category}&populate=*`);

export default {
    getLatestProducts,

};