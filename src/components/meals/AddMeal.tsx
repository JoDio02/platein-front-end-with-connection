"use client"
import React from "react";
import Image from "next/image";
import {CirclePlus} from "lucide-react"


const AddMeal = () => {
    return (
        <div>
            <button className="btn btn-primary w-full">
                Add new meal
                <CirclePlus size={6}/>
            </button>
        </div>
    )
}

export default AddMeal;