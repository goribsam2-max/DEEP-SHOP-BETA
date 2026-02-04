"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import { useMemo, useState } from "react";
import { products } from "../../../lib/data";
import { storage } from "../../../lib/storage";

export default function ProductDetailsPage() {
  const params = useParams();
  const product = useMemo(
    () => products.find((item) => item.id === params?.id),
    [params?.id]
  );
  const [activeIndex, setActiveIndex] = useState(0);

  if (!product) {
    return (
      <section className="section">
        <div className="container">পণ্য পাওয়া যায়নি।</div>
      </section>
    );
  }

  const addToCart = () => {
    const cart = storage.getCart();
    const existing = cart.find((item) => item.productId === product.id);
    if (existing) {
      existing.quantity += 1;
    } else {
      cart.push({
        productId: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
        image: product.images[0],
      });
    }
    storage.saveCart([...cart]);
  };

  return (
    <section className="section">
      <div className="container grid-2">
        <div className="gallery fade-up">
          <img src={product.images[activeIndex]} alt={product.name} />
          <div className="thumbnail-row">
            {product.images.map((img, index) => (
              <img
                key={img}
                src={img}
                alt={`${product.name}-${index}`}
                className={`thumbnail ${index === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>
        <div className="card fade-up">
          <span className="badge">{product.badge}</span>
          <h3>{product.name}</h3>
          <p className="section-sub">{product.description}</p>
          <h2>৳ {product.price}</h2>
          <div className="actions">
            <button className="btn primary" type="button" onClick={addToCart}>
              কার্টে যোগ
            </button>
            <Link className="btn ghost" href="/checkout">
              এখনই কিনুন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
