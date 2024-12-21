"use client"
import React from "react";
import Image from "next/image";
import {CirclePlus} from "lucide-react"


const AddMeal = () => {
    return (
        <div>
            <button className="btn btn-primary w-full border-indigo-200 flex items-center">
                <h1 className="">Add new meal</h1>
                <CirclePlus size={18}/>
            </button>
        </div>
    )
}

export default AddMeal;