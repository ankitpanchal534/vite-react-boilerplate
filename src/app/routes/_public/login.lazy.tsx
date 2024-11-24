import Header from "@/app/pages/landing-page/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import useSimpleForm from "@/hooks/use-simple-form"; // Using the existing useSimpleForm hook
import { useLoginUser } from "@/hooks/use-user";
import {
  createLazyFileRoute,
  Link,
  redirect,
  useParams,
} from "@tanstack/react-router";
import { motion } from "framer-motion";
import { FcGoogle } from "react-icons/fc";
import { GrLinkedin } from "react-icons/gr";
import { z } from "zod"; // For validation
import "./css/login.css";
import checkLogin from "@/hoc/checkLogin";

export const Route = createLazyFileRoute("/_public/login")({
  component: checkLogin(LoginComponent),
});

const schema = z.object({
  emailId: z.string().trim().email("Invalid email address"),
  password: z
    .string()
    .trim()
    .min(8, "Password should have min length of 8 letters."),
});

function LoginComponent() {
  const { values, handleFocus, errors, validate, handleChange, setValues } =
    useSimpleForm([], schema, {
      emailId: "",
      password: "",
    });
  const mutation = useLoginUser();
  const params = useParams({
    select: (params: { redirect?: string }) => {
      return {
        redirect: params.redirect,
      };
    },
    from: "/_public/login",
  });

  const handleLogin = async () => {
    const { success, data } = validate();
    if (!success) return;
    await mutation.mutateAsync(data);
    setValues({
      emailId: "",
      password: "",
    });
    redirect({
      to: params.redirect ?? "/dashboard",
      replace: true,
    });
  };

  return (
    <>
      <Header />
      <div className="min-h-screen items-center justify-center bg-background grid grid-cols-1 md:grid-cols-2">
        <div className="flex justify-center items-center">
          <div className="w-full m-auto h-full max-w-lg sm:border rounded-xl py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 h-fit "
            >
              <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-6 ">
                Sign In
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
              <form className="space-y-6">
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
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  isLoading={mutation.isPending}
                  type="button"
                  onClick={handleLogin}
                >
                  Log In
                </Button>
              </form>
              <p className="mt-4 text-center text-sm text-muted-foreground">
                Don't have an account?{" "}
                <Link to="/sign-up" className="text-primary hover:underline">
                  Sign Up
                </Link>
              </p>
            </motion.div>
          </div>
        </div>
        <div className="bg-accent h-full w-full hidden md:block">
          <img
            src="./images/login-home2.jpg"
            alt="Login Background"
            className="object-cover h-full w-full max-h-dvh opacity-85 rounded-s-xl"
          />
        </div>
      </div>
    </>
  );
}
