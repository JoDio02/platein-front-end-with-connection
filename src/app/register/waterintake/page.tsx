"use client"
import { useState } from "react";
import Question from "../../../components/register/Question";
import { useRouter } from "next/navigation";
import { apiRequest } from "@/utils/api/ApiRequest";

const waterintake = () => {
    const [waterintake, setWaterIntake] = useState<string>("");
    const router = useRouter();

    const handleOptionSelect = async (value: string) => {
        setWaterIntake(value);
        await apiRequest({
          endpoint: "http://localhost:5000/api/register/Step10-waterintake",
          bodyData: { Waterintake: waterintake},
          router,
          successRoute: "/home",
        });
    };

    const handleBack = () => {
        router.push('/register/sleepingpatterns');
    };

  return (
    <div className= "flex center mt-10">
        <Question
        title="Daily Water Intake"
        description="How many glasses of water do you drink per day?"
        options={[
        {
            label: "0-4 glasses",
            value: "0-4 glasses",
            isSelected: waterintake === "0-4 glasses",
        },
        {
            label: "4-6 glasses",
            value: "4-6 glasses",
            isSelected: waterintake === "4-6 glasses",
        },
        {
            label: "6-8 glasses",
            value: "6-8 glasses",
            isSelected: waterintake === "6-8 glasses",
        },
        {
            label: "8+ glasses",
            value: "8+ glasses",
            isSelected: waterintake === "8+ glasses",
        },
      ]}
      onOptionSelect={handleOptionSelect} onBack={handleBack}/>
    </div>
  );
};

export default waterintake;