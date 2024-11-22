import axios from "axios";
// import { fetchProfileStart, fetchProfileSuccess, fetchProfileError } from "./profileSlice";
import { fetchProfileError, fetchProfileStart, fetchProfileSuccess } from "@/redux/profileSlice";

export const fetchUserProfile = () => async (dispatch) => {
  const token = localStorage.getItem("accesstoken");

  if (!token) {
    console.error("No access token found");
    return;
  }

  dispatch(fetchProfileStart());

  try {
    const response = await axios.get("https://hola-project.onrender.com/api/accounts/profile/", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    dispatch(fetchProfileSuccess(response.data));
  } catch (error) {
    console.error("Error fetching profile:", error);
    dispatch(fetchProfileError(error.message));
  }
};
