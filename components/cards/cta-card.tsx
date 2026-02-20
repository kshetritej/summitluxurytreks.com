"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { FormErrorMessage } from "../atoms/form-error-message";

export default function CTACard() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
  });

  return (
    <section className="w-full rounded-lg bg-primary text-white p-6 md:p-8 mb-4 mt-12">
      <div className="space-y-4 flex flex-col md:flex-row w-full gap-8 justify-between">
        <div className="space-y-1">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Unlock exclusive Nepal travel deals and guides
          </h2>
          <p className="text-sm ">
            Spam-free. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex w-full max-w-md gap-2"
        >
          <Input
            {...register("email", { required: true })}
            placeholder="youremail@domain.com"
            className="h-11 placeholder:text-white"
          />
          <Button type="submit" size="lg" variant={'outline'} className="bg-transparent">
            Subscribe
          </Button>
        </form>

        {errors.email && (
          <FormErrorMessage message="Please enter a valid email address." />
        )}
      </div>
    </section>
  );
}

const onSubmit = async (data: { email: string }) => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_BASE_URL}/newsletter/subscribe`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email: data.email }),
    }
  );

  if (res.ok) {
    toast.success("Successfully subscribed to newsletter!");
  } else {
    const resData = await res.json();
    toast.error(resData.message || "Failed to subscribe to newsletter.");
  }
};
