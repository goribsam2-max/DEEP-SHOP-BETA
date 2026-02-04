"use client";

import { useState } from "react";
import { storage } from "../../../lib/storage";

export default function AdminNotificationsPage() {
  const [title, setTitle] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [message, setMessage] = useState("");

  const uploadImage = async (file: File) => {
    const apiKey = process.env.NEXT_PUBLIC_IMGBB_API_KEY;
    if (!apiKey) {
      setMessage("ImgBB API key নেই। .env এ NEXT_PUBLIC_IMGBB_API_KEY দিন।");
      return;
    }
    const formData = new FormData();
    formData.append("image", file);
    const response = await fetch(`https://api.imgbb.com/1/upload?key=${apiKey}`, {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data?.data?.url) {
      setImageUrl(data.data.url as string);
      setMessage("ইমেজ আপলোড সফল!");
    }
  };

  const saveBroadcast = () => {
    if (!title || !imageUrl) {
      setMessage("টাইটেল এবং ইমেজ দিন।");
      return;
    }
    const broadcasts = storage.getBroadcasts();
    broadcasts.unshift({ id: `NTF-${Date.now()}`, title, image: imageUrl });
    storage.saveBroadcasts(broadcasts);
    setTitle("");
    setImageUrl("");
    setMessage("ব্রডকাস্ট পাঠানো হয়েছে।");
  };

  return (
    <section className="section">
      <div className="container grid-2">
        <div>
          <h3>ব্রডকাস্ট নোটিফিকেশন</h3>
          <p className="section-sub">ইমেজ সহ গ্লোবাল নোটিফিকেশন পাঠান।</p>
          <form className="form" onSubmit={(event) => event.preventDefault()}>
            <div>
              <label htmlFor="title">শিরোনাম</label>
              <input id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div>
              <label htmlFor="image">ইমেজ আপলোড</label>
              <input
                id="image"
                type="file"
                accept="image/*"
                onChange={(e) => e.target.files?.[0] && uploadImage(e.target.files[0])}
              />
            </div>
            {imageUrl ? <img src={imageUrl} alt="Preview" /> : null}
            {message ? <p>{message}</p> : null}
            <button className="btn primary" type="button" onClick={saveBroadcast}>
              ব্রডকাস্ট পাঠান
            </button>
          </form>
        </div>
        <div className="card">
          <h4>নোটিফিকেশন প্রিভিউ</h4>
          <p>ইমেজ লিংক: {imageUrl || "--"}</p>
          <p>ইমেজ আপলোড হলে স্বয়ংক্রিয়ভাবে প্রিভিউ দেখাবে।</p>
        </div>
      </div>
    </section>
  );
}
