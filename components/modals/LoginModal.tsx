"use client";

import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { login } from "@/store/userSlice";
import { useDispatch } from "react-redux";

const LoginSchema = z.object({
  username: z.string().min(4, "Username must be at least 4 characters."),
  password: z
    .string()
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[^A-Za-z0-9]).+$/,
      "Password must contain at least one letter, one number, and one special character."
    ),
});

type LoginValues = z.infer<typeof LoginSchema>;

type LoginModalProps = {
  open: boolean;
  onClose: () => void;
  onLogin: (user: { username: string }) => void;
};

export default function LoginModal({ open, onClose }: LoginModalProps) {
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  function onSubmit(values: LoginValues) {
    dispatch(login({ username: values.username }));
    localStorage.setItem(
      "username",
      JSON.stringify({ username: values.username })
    );
    onClose();
  }

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogTitle className="text-lg font-semibold">Login</DialogTitle>
      <DialogContent className="max-w-sm">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Username</label>
            <Input {...register("username")} placeholder="John Smith" />
            {errors.username && (
              <p className="text-red-500 text-sm">{errors.username.message}</p>
            )}
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm font-medium">Password</label>
            <Input
              type="password"
              {...register("password")}
              placeholder="••••••••"
            />
            {errors.password && (
              <p className="text-red-500 text-sm">{errors.password.message}</p>
            )}
          </div>
          <DialogFooter>
            <Button type="submit" className="w-full">
              Login
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
