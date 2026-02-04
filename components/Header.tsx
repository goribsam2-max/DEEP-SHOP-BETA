import Link from "next/link";

const navLinks = [
  { href: "/marketplace", label: "মার্কেটপ্লেস" },
  { href: "/features", label: "ফিচার" },
  { href: "/sellers", label: "সেলার" },
  { href: "/pricing", label: "প্রাইসিং" },
  { href: "/support", label: "সাপোর্ট" },
  { href: "/cart", label: "কার্ট" },
  { href: "/wishlist", label: "উইশলিস্ট" },
];

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <div className="brand">
          <h1>Bangla Bazar</h1>
          <span>বাংলাদেশের মাল্টি-সেলার মার্কেটপ্লেস</span>
        </div>
        <nav className="nav">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href}>
              {link.label}
            </Link>
          ))}
          <div className="nav-actions">
            <Link href="/auth/login">লগইন</Link>
            <Link className="button" href="/admin/login">
              অ্যাডমিন প্যানেল
            </Link>
          </div>
        </nav>
      </div>
    </header>
  );
}
