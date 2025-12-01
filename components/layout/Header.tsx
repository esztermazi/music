"use client";

import { useState } from "react";
import Navbar from "../navbar/Navbar";
import { Button } from "../ui/button";
import LoginModal from "../modals/LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "@/store/store";
import { logout } from "@/store/userSlice";

export default function Header() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch<AppDispatch>();

  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full border-b bg-background">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <Navbar>
            {user ? (
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  onClick={() => {
                    dispatch(logout());
                    localStorage.removeItem("username");
                  }}
                >
                  Log out
                </Button>
              </div>
            ) : (
              <Button onClick={() => setOpen(true)}>Log in</Button>
            )}
          </Navbar>
        </div>
      </header>
      <LoginModal
        open={open}
        onClose={() => setOpen(false)}
        onLogin={() => {}}
      />
    </>
  );
}
