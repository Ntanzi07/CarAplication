import { CarProps, FilterProps } from "@/types";
import cars from "../data/car.json";

export async function fatchCars(filters: FilterProps) {
  const { manufacturer, year, model, limit, fuel } = filters;

  const result = await cars.filter((car) => 
    car.make.toLowerCase().includes(manufacturer.toLowerCase()) &&
    car.model.toLowerCase().includes(model.toLowerCase()) &&
    year ? car.year === year : true &&
    car.fuel_type.toLowerCase().includes(fuel.toLowerCase())
  ).slice(0, limit);

  return result;
}


export const calculateCarRent = (city_mpg: number, year: number) => {
  const basePricePerDay = 50; // Base rental price per day in dollars
  const mileageFactor = 0.1; // Additional rate per mile driven
  const ageFactor = 0.05; // Additional rate per year of vehicle age

  // Calculate additional rate based on mileage and age
  const mileageRate = city_mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  // Calculate total rental rate per day
  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', 'img');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);
  url.searchParams.append('paintId', `3U5`);
  //url.searchParams.append('paintdescription', `Emotional Red metallic`);



  return `${url}`;
}

export const updateSearchParams = (type: string, value: string) => {

  const searchParams = new URLSearchParams(window.location.search);

  if(value)
    searchParams.set(type, value);
  else
    searchParams.delete(type);

  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;
  
  return newPathname;
}