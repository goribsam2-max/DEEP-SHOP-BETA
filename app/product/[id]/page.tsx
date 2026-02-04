import { notFound } from "next/navigation";
import { products } from "../../../lib/data";

interface ProductPageProps {
  params: { id: string };
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    notFound();
  }

  return (
    <section className="section">
      <div className="container grid-2">
        <div className="fade-up">
          <span className="badge">{product.badge}</span>
          <h3>{product.name}</h3>
          <p className="section-sub">ফ্যাশন লাইফস্টাইলের জন্য প্রিমিয়াম কোয়ালিটি।</p>
          <h2>{product.price}</h2>
          <ul>
            <li>ক্যাশ অন ডেলিভারি</li>
            <li>৩ দিনের রিটার্ন</li>
            <li>ডোরস্টেপ ডেলিভারি</li>
          </ul>
        </div>
        <div className="card fade-up">
          <h4>অর্ডার ইনফো</h4>
          <p>স্টক: উপলব্ধ</p>
          <div className="actions">
            <button className="btn primary" type="button">
              কার্টে যোগ করুন
            </button>
            <button className="btn ghost" type="button">
              উইশলিস্টে রাখুন
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
