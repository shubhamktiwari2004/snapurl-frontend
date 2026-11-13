
import { apiRequest } from "./api";

export const loginUser = async (email, password) => {
    const params = new URLSearchParams();

    params.append("email", email);
    params.append("password", password);

    return apiRequest("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        },
        body: params
    });
};
