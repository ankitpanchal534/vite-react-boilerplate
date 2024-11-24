import { QueryOptions, useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "@tanstack/react-router";
import toast from "react-hot-toast";
import { UserApi } from "../api/userApi";

export interface ISignupBody {
  fname: string;
  lname?: string;
  emailId: string;
  password: string;
}
export interface ILoginBody {
  email: string;
  password: string;
}
export const useSignupUser = () => {
  const router = useRouter();
  return useMutation({
    mutationFn: async (userData: ISignupBody) => {
      const response = await UserApi.create(userData);
      return response.data;
    },
    onSuccess: (data) => {
      console.log("success", data);
      toast.success("Account created successfully");
      router.navigate({ to: "/login" });
    },
    onError: (error: any) => {
      console.log("error", error);
      toast.error(error.response.data.message || "Something went wrong");
    },
  });
};

export const useLoginUser = () => {
  return useMutation({
    mutationFn: async (userData: { emailId: string; password: string }) => {
      const response = await UserApi.login({
        email: userData.emailId,
        password: userData.password,
      }); // Assuming a login method exists

      return response.data;
    },
    onSuccess: async () => {
      toast.success("Logged in successfully");
      // Redirect or perform any other action on success
    },
    onError: (error: any) => {
      console.log("Login error", error);
      toast.error(error.response?.data?.message || "Something went wrong");
    },
  });
};
export const useUser = (options?: QueryOptions) => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: UserApi.getUser,
    ...options,
  });

  return {
    user: data,
    isLoading,
    error,
  };
};
