"use client";

import { useEffect, useState } from "react";
import { UserData, storage } from "../../../lib/storage";

export default function AdminUsersPage() {
  const [users, setUsers] = useState<UserData[]>([]);

  useEffect(() => {
    setUsers(storage.getUsers());
  }, []);

  const toggleStatus = (id: string) => {
    const updated = users.map((user) =>
      user.id === id ? { ...user, status: user.status === "Active" ? "Banned" : "Active" } : user
    );
    setUsers(updated);
    storage.saveUsers(updated);
  };

  return (
    <section className="section">
      <div className="container">
        <h3>ইউজার লিস্ট</h3>
        <div className="cards">
          {users.map((user) => (
            <div key={user.id} className="card">
              <h4>{user.name}</h4>
              <p>ফোন: {user.phone}</p>
              <p>ইমেইল: {user.email}</p>
              <p>স্ট্যাটাস: {user.status}</p>
              <button className="btn ghost" type="button" onClick={() => toggleStatus(user.id)}>
                {user.status === "Active" ? "ব্যান" : "আনব্যান"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
