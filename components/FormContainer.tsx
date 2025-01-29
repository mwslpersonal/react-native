import useForm from "@/hooks/useForm";
import { FC } from "react";
import { Form } from "./Form";

export const FormContainer: FC = () => {
  const { signUpUser } = useForm();

  return <Form onSignUp={signUpUser} />;
};
