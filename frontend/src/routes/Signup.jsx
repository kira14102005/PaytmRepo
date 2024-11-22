import { Inputbox } from '../component/Input';
import { Heading } from '../component/Heading';
import { Subheading } from '../component/Subheading';
import { SubmitButton } from '../component/Submit';
import { Linker } from '../component/Linker';

export function Signup() {
  return (
    <div className="w-screen h-screen flex justify-center items-center">
      <div className="shadow-xl h-11/12 grid grid-cols-1 w-1/2 justify-center items-center p-2">
        <Heading title={"Signup"} />
        <Subheading p={"Don't have an account? Create one"} />
        <Inputbox label={"Email"} placeholder={"example22@gmail.com"} />
        <Inputbox label={"First Name"} placeholder={"Johnyy"} />
        <Inputbox label={"Last Name"} placeholder={"Depp"} />
        <Inputbox label={"Password"} placeholder={"Minimum 6 characters"} />
        <SubmitButton a={"Signup"} />
        <Linker tgt="/login" body="Already have an account? Login" />
      </div>
    </div>
  );
}
