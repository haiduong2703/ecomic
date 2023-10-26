import axiosClient from './axiosClient';

const END_POINT = {
    PRODUCTS: "Products",
}

export const getProductAPI = () => {
    return axiosClient.get(`https://localhost:44396/api/${END_POINT.PRODUCTS}`);
}
export const getProductBySlug = (slug) => {
    return axiosClient.get(`https://localhost:44396/api/${END_POINT.PRODUCTS}/slug?slug=${slug}`);
}