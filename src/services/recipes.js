// import { apiClient } from "./config";



import { apiClient } from "./config";

// ✅ Add new recipe (as a chef)
// export const apiAddRecipe = async (payload) =>
//   apiClient.post("recipe", payload);

export const apiAddRecipe = async (formData) => {
  const token = localStorage.getItem("accessToken");

  return axios.post(
    "https://recipe-api-1-8gsb.onrender.com/api/v1/recipe",
    formData,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};



// ✅ Get all public recipes
export const apiGetAllRecipes = async (filterType, filter) => {
  return apiClient.get(
    `/recipes?filterType=${filterType}&filter=${filter}&sort=createdAt&order=desc`,
    {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
      },
    }
  );
};

// ✅ Get my recipes as a chef
export const apiGetMyRecipes = async () =>
  apiClient.get("/allrecipes/chef", {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
    },
  });

// ✅ Update a specific recipe (mine)
export const apiUpdateRecipe = async (id, payload) =>
  apiClient.put(`/allrecipes/chef/${id}`, payload, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
    },
  });

// ✅ Get public recipe by ID
export const apiGetRecipebyId = async (id) =>
  apiClient.get(`/allrecipes/${id}`);

// ✅ Get my own recipe by ID
export const apiGetChefrecipebyId = async (id) =>
  apiClient.get(`/allrecipes/chef/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
    },
  });

// ✅ Delete my recipe
export const apiDeleteChefRecipebyId = async (id) =>
  apiClient.delete(`/allrecipes/chef/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem("accesstoken")}`,
    },
  });
