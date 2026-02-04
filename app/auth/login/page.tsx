"use client";

import { useState } from "react";
import Link from "next/link";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = () => {
    if (!email || !password) {
      setMessage("সব ফিল্ড পূরণ করুন।");
      return;
    }
    setMessage("লগইন সফল! আপনার ড্যাশবোর্ডে নিয়ে যাচ্ছি।");
  };

  return (
    <section className="auth-shell">
      <div className="auth-card">
        <h3>লগইন</h3>
        <p className="section-sub">আপনার স্টাইলিশ শপিং জার্নি শুরু করুন।</p>
        <form className="form" onSubmit={(event) => event.preventDefault()}>
          <div>
            <label htmlFor="email">ইমেইল</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label htmlFor="password">পাসওয়ার্ড</label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="********"
            />
          </div>
          {message ? <p>{message}</p> : null}
          <button className="btn primary" type="button" onClick={handleSubmit}>
            লগইন করুন
          </button>
        </form>
        <p style={{ marginTop: "16px" }}>
          নতুন সদস্য? <Link href="/auth/register">রেজিস্টার করুন</Link>
        </p>
      </div>
    </section>
  );
}
