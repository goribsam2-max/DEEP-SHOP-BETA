"use client";

import { useState } from "react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [adminId, setAdminId] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    if (!adminId || !password) {
      setMessage("অ্যাডমিন আইডি এবং পাসওয়ার্ড দিন।");
      return;
    }
    setMessage("অ্যাডমিন যাচাই সম্পন্ন! ড্যাশবোর্ড প্রস্তুত।");
  };

  return (
    <section className="auth-shell">
      <div className="auth-card">
        <h3>অ্যাডমিন লগইন</h3>
        <p className="section-sub">পাওয়ারফুল কন্ট্রোল প্যানেলের জন্য নিরাপদ লগইন।</p>
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="adminId">অ্যাডমিন আইডি</label>
            <input
              id="adminId"
              value={adminId}
              onChange={(event) => setAdminId(event.target.value)}
              placeholder="ADMIN-001"
            />
          </div>
          <div>
            <label htmlFor="adminPass">পাসওয়ার্ড</label>
            <input
              id="adminPass"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="********"
            />
          </div>
          {message ? <p>{message}</p> : null}
          <button className="btn primary" type="button" onClick={handleLogin}>
            লগইন করুন
          </button>
        </form>
        <p style={{ marginTop: "16px" }}>
          অ্যাডমিন ড্যাশবোর্ডে যেতে <Link href="/admin">এখানে ক্লিক করুন</Link>
        </p>
      </div>
    </section>
  );
}
