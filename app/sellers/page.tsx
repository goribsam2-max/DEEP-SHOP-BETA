import Link from "next/link";
import { sellerTools } from "../../lib/data";

export default function SellersPage() {
  return (
    <section className="section">
      <div className="container grid-2">
        <div className="fade-up">
          <h3>সেলার অনবোর্ডিং এবং ব্র্যান্ড স্টুডিও</h3>
          <p className="section-sub">
            আপনার নিজস্ব ব্র্যান্ড, প্রাইসিং, কুপন, এবং গ্রাহক ম্যানেজ করুন এক প্ল্যাটফর্মে।
          </p>
          <ul>
            {sellerTools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
        <div className="card fade-up">
          <h4>ফ্রি স্টোর সেটআপ</h4>
          <p>অনবোর্ডিং স্পেশালিস্টের সাথে লাইভ সেশন বুক করুন।</p>
          <div className="actions">
            <Link className="btn primary" href="/support">
              সাপোর্টে কথা বলুন
            </Link>
            <Link className="btn ghost" href="/auth/register">
              রেজিস্টার করুন
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
