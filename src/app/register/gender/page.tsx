"use client";
import { useState } from "react";
import Image from "next/image";
import Question from "../../../components/register/Question";
import { useRouter } from "next/navigation";
import FemaleIcon from "@/assets/gender/gender_female.png";
import MaleIcon from "@/assets/gender/gender_male.png";

const Gender = () => {
    const [gender, setGender] = useState<string>("");
    const router = useRouter();

    const handleOptionSelect = async (value: string) => {
        setGender(value);
        console.log("Selected: ", value);

        try {
            const response = await fetch(`http://localhost:5000/api/register/Step2-gender`, {
                method: "POST",
                credentials: "include",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    gender: value
                })
            });

            if (response.ok) {
                console.log("Selected: ", value);
                router.push('/register/age');
            } else {
              const errorData = await response.json();
              alert(`Error: ${errorData.message}`);
            }
        }catch (error) {
          console.error("Error:", error);
          alert("Failed to save height. Please try again.");
        }
    };

    const handleBack = () => {
        router.push('/register');
    };

    return (
        <div className="flex center mt-10">
            <Question
                title="Let's Create Your Body Profile"
                description="Select your gender:"
                options={[
                    {
                        label: "Female",
                        value: "Female",
                        icon: <Image src={FemaleIcon} alt="Female" className="w-10 h-10" />,
                        isSelected: gender === "Female",
                    },
                    {
                        label: "Male",
                        value: "Male",
                        icon: <Image src={MaleIcon} alt="Male" className="w-10 h-10" />,
                        isSelected: gender === "Male",
                    }
                ]}
                onOptionSelect={handleOptionSelect}
                onBack={handleBack}
            />
        </div>
    );
};

export default Gender;
