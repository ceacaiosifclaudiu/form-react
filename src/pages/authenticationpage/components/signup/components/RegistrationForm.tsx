import { yupResolver } from "@hookform/resolvers/yup";
import React from "react";
import { useForm } from "react-hook-form";
import Input from "../../../../../component/inputs/Input";
import Terms from "../../../../../component/inputs/Terms";
import { registerSchema } from "../../../../../schema/formSchema";
import OptionalInfo from "./OptionalInfo";
import PersonalDetails from "./PersonalDetails";
import Security from "./Security";

interface RegistrationFormProps {
    onSubmit: (data: any) => void;
}

const RegistrationForm: React.FC<RegistrationFormProps> = ({ onSubmit }) => {
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({
        resolver: yupResolver(registerSchema),
    });

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex--column--center form--inputs--gap">
                <PersonalDetails register={register} errors={errors} />
                <Input
                    formObject={register("email")}
                    message={errors?.email?.message?.toString()}
                    type="email"
                    placeholder="Email"
                />
                <Security register={register} errors={errors} />
                <OptionalInfo register={register} />
                <Terms register={register} errors={errors} />
            </div>
            <input type="submit" value="Create Account" />
        </form>
    );
};

export default RegistrationForm;