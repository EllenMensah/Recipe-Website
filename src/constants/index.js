import { Edit, FileIcon, House, PlusIcon, Salad, User } from "lucide-react";

export default {
  NAVLINKS: [
    {
      name: "OverView",
      path: "/dashboard",
      icon: House,
    },
    {
      name: "Add Recipe",
      path: "/dashboard/addrecipe",
      icon: PlusIcon,
    },
    {
      name: "My Recipes",
      path: "/dashboard/myrecipes",
      icon: Salad,
    },
    {
      name: " Profile",
      path: "/dashboard/profile",
      icon: User,
    },
    // {
    //   name: "Update Ad",
    //   path: "/dashboard/edit-ad/:id",
    //   icon: Edit,
    // },
  ],
};
