"use client";

import { ShoppingBag } from "lucide-react";
import { useCart } from "~/contexts/cart-context";

export function Cart() {
  const { items } = useCart();

  return (
    <div className="flex items-center gap-2">
      <ShoppingBag className="h-5 w-5" />
      <span className="text-sm"> Cart ({items.length})</span>
    </div>
  );
}
