"use server";

interface FormData {
  email: string;
  password: string;
}

export const signIn = async (formData: FormData) => {
  try {
    if (formData.email == "admin@admin.com" && formData.password == "admin")
      return {
        status: 200,
        message: "Signed in successfully!",
      };
    else
      return {
        status: 401,
        message: "Invalid credentials",
      };
  } catch (error) {
    return {
      status: 500,
      message: "Something went wrong while logging in! Try again later",
    };
  }
};
