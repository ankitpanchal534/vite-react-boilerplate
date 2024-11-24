import Header from "@/app/pages/landing-page/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import checkLogin from "@/hoc/checkLogin";
import useSimpleForm from "@/hooks/use-simple-form";
import { useSignupUser } from "@/hooks/use-user";
import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import { z } from "zod";

export const Route = createFileRoute("/_public/sign-up")({
  component: checkLogin(RouteComponent),
});

function RouteComponent() {
  const { values, handleFocus, errors, validate, handleChange, reset } =
    useSimpleForm([], schema);
  const { mutateAsync, isPending } = useSignupUser();

  const handleSave = async () => {
    const { success, data } = validate();
    if (!success) return;
    await mutateAsync(data);
    reset();
  };
  return (
    <>
      <Header />
      <div className="min-h-screen items-center justify-center bg-background grid grid-cols-1 md:grid-cols-2">
        <div className="bg-accent h-full w-full hidden md:block ">
          <img
            src="./images/login-home.jpeg"
            alt="Login Background"
            className="object-cover h-full w-full max-h-dvh opacity-75 rounded-e-xl"
          />
        </div>
        <div className="flex justify-center items-center ">
          <div className="w-full m-auto h-full max-w-lg sm:border rounded-xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 h-fit "
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6 ">
                Create your page
              </h2>
              <div className="flex flex-col space-y-4">
                <Button variant={"outline"}>
                  <FcGoogle />
                  Continue with Google
                </Button>
                <Button variant={"outline"}>
                  <GrLinkedin className="text-blue-500" />
                  Continue with LinkedIn
                </Button>
              </div>

              <div className="my-4 text-center text-sm text-muted-foreground">
                or
              </div>
              <form className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-full">
                    <Label>First Name</Label>
                    <Input
                      type="text"
                      required
                      placeholder="Your First Name"
                      className="mt-2"
                      name="fname"
                      onFocus={handleFocus}
                      error={errors.fname}
                      onChange={handleChange}
                      value={values.fname}
                    />
                  </div>
                  <div className="w-full">
                    <Label>Last Name</Label>
                    <Input
                      type="text"
                      required
                      placeholder="Your Last Name"
                      className="mt-2"
                      name="lname"
                      onFocus={handleFocus}
                      error={errors.lname}
                      onChange={handleChange}
                      value={values.lname}
                    />
                  </div>
                </div>
                <div>
                  <Label>Email</Label>
                  <Input
                    type="email"
                    required
                    placeholder="you@example.com"
                    className="mt-2"
                    name="emailId"
                    onFocus={handleFocus}
                    error={errors.emailId}
                    onChange={handleChange}
                    value={values.emailId}
                  />
                </div>
                <div>
                  <Label>Password</Label>
                  <Input
                    type="password"
                    required
                    placeholder="Password"
                    className="mt-2"
                    name="password"
                    onFocus={handleFocus}
                    error={errors.password}
                    onChange={handleChange}
                    value={values.password}
                  />
                </div>
                <Button
                  isLoading={isPending}
                  type="button"
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={handleSave}
                >
                  Sign Up
                </Button>
              </form>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                By Signing up, you agree to our Terms of Use and Privacy Policy
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}

const schema = z.object({
  fname: z.string().trim().min(1, "Required"),
  lname: z.string().optional(),
  emailId: z.string().trim().email(),
  password: z
    .string()
    .trim()
    .min(8, "Password should have min length of 8 letters."),
});
