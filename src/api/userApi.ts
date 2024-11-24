import { ISignupBody, ILoginBody } from "@/hooks/use-user"; // Assuming ILoginBody is defined in the same file
import { client } from "./axios";

export class UserApi {
  static path = "/user";
  static path1 = "/api";

  public static async getUser() {
    const res = await client.get(this.path1 + "/profile");
    return res;
  }

  public static async create(body: ISignupBody) {
    const res = await client.post(this.path + "/signup", body);
    return res;
  }

  public static async login(body: ILoginBody | undefined) {
    // Implementing the login function
    const res = await client.post(this.path + "/login", body);
    // localStorage.setItem("token", );

    return res;
  }
}
