import React from 'react';
import AddMeal from '@/components/meals/AddMeal';
import TestMealDataList from '@/testdata/TestMealDataList';

export default function Home() {
    return (
      <div className = "flex justify-center center w-full">
        <AddMeal/>
      </div>
    );
  }
