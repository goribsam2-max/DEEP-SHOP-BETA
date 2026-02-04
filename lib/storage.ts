export type PaymentMethod = "COD" | "BKASH" | "NAGAD";

export interface OrderItem {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

export interface OrderData {
  id: string;
  items: OrderItem[];
  total: number;
  deliveryCharge: number;
  paymentMethod: PaymentMethod;
  paymentNumber?: string;
  trxId?: string;
  customerName: string;
  customerPhone: string;
  customerAddress: string;
  status: "Pending" | "Processing" | "Shipped" | "Delivered";
  createdAt: string;
  ip?: string;
  device?: string;
  deviceModel?: string;
}

export interface UserData {
  id: string;
  name: string;
  phone: string;
  email?: string;
  status: "Active" | "Banned";
}

export interface SiteSettings {
  name: string;
  location: string;
  paymentMethods: {
    cod: boolean;
    bkash: boolean;
    nagad: boolean;
  };
  codCharge: number;
  paymentNumber: string;
}

const defaultSettings: SiteSettings = {
  name: "Vibe Gadgets",
  location: "Dagonbuiyan, Feni, Bangladesh",
  paymentMethods: { cod: true, bkash: true, nagad: true },
  codCharge: 300,
  paymentNumber: "01778953114",
};

const read = <T>(key: string, fallback: T): T => {
  if (typeof window === "undefined") return fallback;
  const raw = window.localStorage.getItem(key);
  if (!raw) return fallback;
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
};

const write = (key: string, value: unknown) => {
  if (typeof window === "undefined") return;
  window.localStorage.setItem(key, JSON.stringify(value));
};

export const storage = {
  getSettings: () => read<SiteSettings>("siteSettings", defaultSettings),
  saveSettings: (settings: SiteSettings) => write("siteSettings", settings),
  getOrders: () => read<OrderData[]>("orders", []),
  saveOrders: (orders: OrderData[]) => write("orders", orders),
  getUsers: () => read<UserData[]>("users", []),
  saveUsers: (users: UserData[]) => write("users", users),
  getCart: () => read<OrderItem[]>("cart", []),
  saveCart: (cart: OrderItem[]) => write("cart", cart),
  getBroadcasts: () => read<Array<{ id: string; title: string; image: string }>>("broadcasts", []),
  saveBroadcasts: (items: Array<{ id: string; title: string; image: string }>) =>
    write("broadcasts", items),
};
