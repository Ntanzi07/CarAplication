"use client"

import { useState } from "react"
import Image from "next/image"
import { CarProps } from "@/types"
import CustomButton from "./CustomButton"

interface CarCardsProps {
  car: CarProps;
}

const CarCard = ({car} : CarCardsProps ) => {
  const { city_mpg, year, make, model, transmission, drive} = car;
  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">
          {make} {model}
        </h2>
        <p>
          <span>
            Car Rent...
          </span>
        </p>
      </div>
    </div>
  )
}

export default CarCard