import React, { useEffect, useState } from "react";
// import styled from "styled-components";
import Label from "../components/label/Label";
import { useForm } from "react-hook-form";
import Input from "../components/input/Input";
import IconEyeClose from "../components/icon/IconEyeClose";
import Field from "../components/field/Field";
import IconEyeOpen from "../components/icon/IconEyeOpen";
import Button from "../components/button/Button";
// import LoadingSpinner from "../components/loading/LoadingSpinner";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth, db } from "../firebase/firebase-config";
import { NavLink, useNavigate } from "react-router-dom";
import { addDoc, collection } from "firebase/firestore";
import Header from "../components/Header/Header";
const schema = yup.object({
  fullname: yup.string().required("Please enter your fullname"),
  email: yup
    .string()
    .email("Please enter valid email address")
    .required("Please enter your email address"),
  password: yup
    .string()
    .min(8, "Your password must be at least 8 characters or greater")
    .required("Please enter your password"),
});

const SignUpPage = () => {
  const navigate = useNavigate();
  const {
    control,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
    watch,
    reset,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });
  const handleSignUp = async (values) => {
    if (!isValid) return;
    const user = await createUserWithEmailAndPassword(
      auth,
      values.email,
      values.password
    );
    // Sau khi tạo xong thì sẽ update ngay vào firebase : su dung updateProfile
    await updateProfile(auth.currentUser, {
      displayName: values.fullname,
    });
    // update trường vào firebase store
    const colRef = collection(db, "users");
    await addDoc(colRef, {
      fullname: values.fullname,
      email: values.email,
      password: values.password,
    });
    toast.success("Register successfully !!!");
    navigate("/");
    // return new Promise((resolve) => {
    //   setTimeout(() => {
    //     resolve();
    //   }, 5000);
    // });
  };
  const [togglePassword, setTogglePassword] = useState(false);
  useEffect(() => {
    const arrErrors = Object.values(errors);
    if (arrErrors.length > 0) {
      toast.error(arrErrors[0]?.message, {
        pauseOnHover: false,
        delay: 0,
      });
    }
  }, [errors]);
  useEffect(() => {
    document.title = " Register Page ";
  }, []);
  return (
    <>
      <Header></Header>
      <h1 className="text-center mt-12 text-lg text-green-600 font-medium uppercase">
        {" "}
        Đăng ký Sendo Shop{" "}
      </h1>
      <form
        onSubmit={handleSubmit(handleSignUp)}
        className="w-[1200px] h-full mx-auto mt-[30px]"
      >
        <Field>
          <Label htmlFor="fullname"> Fullname </Label>
          <Input
            // cho id vào nó sẽ tự focus
            type="text"
            name="fullname"
            placeholder="Enter your fullname"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="email"> Email address </Label>
          <Input
            // cho id vào nó sẽ tự focus
            type="email"
            name="email"
            placeholder="Enter your email"
            control={control}
          />
        </Field>
        <Field>
          <Label htmlFor="password"> Password </Label>
          <Input
            // cho id vào nó sẽ tự focus
            type={togglePassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            control={control}
          >
            {!togglePassword ? (
              <IconEyeClose
                onClick={() => setTogglePassword(true)}
              ></IconEyeClose>
            ) : (
              <IconEyeOpen
                onClick={() => setTogglePassword(false)}
              ></IconEyeOpen>
            )}
          </Input>
        </Field>
        <div className="have-account text-orange-800">
          {" "}
          You already have an account ?{" "}
          <NavLink to={"/sign-in"}>
            {" "}
            <strong> Login </strong>
          </NavLink>{" "}
        </div>
        <Button
          type="submit"
          style={{
            width: "100%",
            maxWidth: 300,
            margin: "0 auto",
            backgroundColor: "gray",
            marginTop: "30px",
          }}
          isLoading={isSubmitting}
          disabled={isSubmitting}
        >
          Sign Up
        </Button>
      </form>
    </>
  );
};
export default SignUpPage;
