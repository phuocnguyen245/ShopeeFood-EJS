const express = require('express')
const newsRoute = express.Router()
const axios = require('axios')

newsRoute.get('', async (req, res) => {
    try {
        const resCategories = await axios.get("http://localhost:3000/categoryJsons");
        const resShops = await axios.get("http://localhost:3000/shopJsons")
        const shopee = {
            categories: resCategories.data,
            shops: resShops.data
        };
        const getShops = shopee.shops.map((shopJson) => shopJson);
        //get category of shop === category id
        const getCateByShop = shopee.categories.filter((categoryJson) => {
            return getShops.some((shop) => {
                return shop.category === categoryJson.id;
            });
        });
        const shopeeValue = {
            shopValue: getShops,
            categoryValue: getCateByShop,
        };
        res.render('home', { shop: shopeeValue });         
    } catch (error) {
        console.log(error);
    }
})
module.exports = newsRoute