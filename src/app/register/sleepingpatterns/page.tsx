"use client"
import { useState } from "react";
import Question from "../../../components/register/Question";
import { useRouter } from "next/navigation";

const sleepingpatterns = () => {
    const [sleepingPattern, setSleepingPattern] = useState<string>("");;
    const router = useRouter();

    const handleOptionSelect = async (value: string) => {

    setSleepingPattern(value);

    try{

        const response = await fetch("http://localhost:5000/api/register/Step9-sleepingPattern",
          {
            method: "POST",
            credentials: "include",
            headers: { 
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(
              {
                sleepingPattern: value,
              }
            )
          }
        )   
        if(response.ok){
          console.log("Selected:", value);
          router.push('/register/waterintake');
        }else{
          const errorData = await response.json();
          alert(`Error: ${errorData.message}`);
        }
      }catch(error){
        console.error("Error:", error);
        alert("Failed to save sleeping pattern. Please try again.");
      }

    };

    const handleBack = () => {
        router.push('/register/sleepingPattern');
    };

  return (
    <div className= "flex center mt-10">
        <Question
        title="Sleeping Patterns"
        description="How would you describe how well you sleep?"
        options={[
        {
            label: "-5hours",
            value: "-5hours",
            isSelected: sleepingPattern === "-5hours",
        },
        {
            label: "5-6 hours",
            value: "5-6 hours",
            isSelected: sleepingPattern === "5-6 hours",
        },
        {
            label: "7-8 hours",
            value: "7-8 hours",
            isSelected: sleepingPattern === "7-8 hours",
        },
        {
            label: "+8hours",
            value: "+8hours",
            isSelected: sleepingPattern === "+8hours",
        },
      ]}
      onOptionSelect={handleOptionSelect} onBack={handleBack}/>
    </div>
  );
};

export default sleepingpatterns;