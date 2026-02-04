import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <h4>Bangla Bazar</h4>
          <p>বাংলাদেশের সবচেয়ে বড় লোকাল ইকমার্স কমিউনিটি।</p>
        </div>
        <div>
          <h4>দ্রুত লিংক</h4>
          <ul>
            <li>
              <Link href="/marketplace">পণ্য ক্যাটালগ</Link>
            </li>
            <li>
              <Link href="/sellers">সেলার অনবোর্ডিং</Link>
            </li>
            <li>
              <Link href="/support">হেল্প সেন্টার</Link>
            </li>
          </ul>
        </div>
        <div>
          <h4>যোগাযোগ</h4>
          <ul>
            <li>📞 ১৬২৩৪</li>
            <li>📧 support@banglabazar.bd</li>
            <li>📍 ঢাকা, বাংলাদেশ</li>
          </ul>
        </div>
      </div>
      <small>© ২০২৪ Bangla Bazar. সর্বস্বত্ব সংরক্ষিত।</small>
    </footer>
  );
}
