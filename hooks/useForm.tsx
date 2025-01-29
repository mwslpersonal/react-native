export type Form = {
  name: string;
  address: string;
  age: number;
};

export default () => {
  return {
    signUpUser: (props: Form) => {
      console.log("signing user up", props);
    },
  };
};
