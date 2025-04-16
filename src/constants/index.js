import { Edit, FileIcon, House, PlusIcon, User } from "lucide-react";

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
      name: "Update Recipe",
      path: "/dashboard/updaterecipe",
      icon: FileIcon,
    },
    {
      name: "Chef Profile",
      path: "/dashboard/chefprofile",
      icon: User,
    },
    // {
    //   name: "Update Ad",
    //   path: "/dashboard/edit-ad/:id",
    //   icon: Edit,
    // },
  ],
};
