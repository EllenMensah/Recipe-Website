import { apiClient } from "./config";


export const apiSignup = async (payload) => {
  return apiClient.post("/users/register", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const apiLogin = async (payload) =>
  apiClient.post("/users/login", payload, {
    headers: {
      "Content-Type": "application/json",
    },
  });


export const apiGetAuthenticatedUser = async () => apiClient.get("/users/me");

  // resetting password
//   export const apiForgotPassword = async(payload) =>
//     apiClient.patch("/users/forgot-password", payload, {
//       headers: {
//         "content-type" : "application/json"
//       },
//     });

    // export const apiResetPassword = async(payload) =>
    //   apiClient.patch("/users/reset-password", payload, {
    //     headers: {
    //       "content-type" : "application/json"
    //     },
    //   });

