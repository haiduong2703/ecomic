import React, { useEffect, useState } from "react";

import Helmet from "../components/Helmet";
import Section, { SectionBody, SectionTitle } from "../components/Section";
import Grid from "../components/Grid";
import ProductCard from "../components/ProductCard";
import productData from "../assets/fake-data/products";
import ProductView from "../components/ProductView";
import { getProductAPI } from "../api/product";

const Product = (props) => {
  const product = productData.getProductBySlug(props.match.params.slug);
  const [relatedProducts, setRelatedProducts] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    var list = await getProductAPI();
    const newProducts = list.map(async (apiProduct, index) => {
      const image01 = new Image();
      image01.src = `../assets/images/products/${apiProduct.image01}`;
      await image01.decode();

      const image02 = new Image();
      image02.src = `../assets/images/products/${apiProduct.image02}`;
      await image02.decode();
      return {
        title: apiProduct.title,
        price: apiProduct.price,
        image01: image01.src,
        image02: image02.src,
        categorySlug: apiProduct.categorySlug,
        colors: apiProduct.colors,
        slug: apiProduct.slug,
        size: apiProduct.size,
        description: apiProduct.description,
      };
    });
    setRelatedProducts(newProducts);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [product]);

  return (
    <Helmet title={product.title}>
      <Section>
        <SectionBody>
          <ProductView product={product} />
        </SectionBody>
      </Section>
      <Section>
        <SectionTitle>Khám phá thêm</SectionTitle>
        <SectionBody>
          <Grid col={4} mdCol={2} smCol={1} gap={20}>
            {relatedProducts.map((item, index) => (
              <ProductCard
                key={index}
                img01={item.image01}
                img02={item.image02}
                name={item.title}
                price={Number(item.price)}
                slug={item.slug}
              />
            ))}
          </Grid>
        </SectionBody>
      </Section>
    </Helmet>
  );
};

export default Product;
