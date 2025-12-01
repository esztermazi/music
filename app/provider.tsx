"use client";

import { Provider } from "react-redux";
import { store } from "@/store/store";
import { useEffect } from "react";
import { login } from "@/store/userSlice";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    const saved = localStorage.getItem("username");
    if (saved) {
      const parsed = JSON.parse(saved);
      store.dispatch(login({ username: parsed.username }));
    }
  }, []);

  return <Provider store={store}>{children}</Provider>;
}
