'use client'
import { useState, useEffect, use } from "react";
import { RadioGroup, RadioGroupItem } from "@/app/components/ui/radio-group";
import { Label } from "@/app/components/ui/label";
import {Slider} from "@/app/components/ui/slider";
import Bike from "@/app/components/Bike";
import { Radio } from "lucide-react";

const BikeCategories = ({bikes}) => {
    const [category, setCategory] = useState('all');
    const [filteredBikes, setFilteredBikes] = useState([]);
    const [price, setPrice] = useState(900);

    useEffect(() => {
        const filtered = bikes.filter((bike) => {
        const categoryMatch = category === 'all' ? true : bike.categories[0].name.toLowerCase() === category;
        const priceMatch = bike.price <= price;
        return categoryMatch && priceMatch;
    });
    setFilteredBikes(filtered);
    }, [category, price, bikes]);


  return (
    <section className='min-h-[1200px] py-10'>
        <div className="container mxauto">
            <div className='flex flex-col'>
                <aside className='w-full p-4 mb-8 xl:w-[300px]  xl:h-[84vh] xl:fixed'>
                    <RadioGroup defaultValue='all' className="flex flex-col gap-6 mb-12">
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='all' id='all' onClick={() => setCategory('all')}/>
                            <label htmlFor='all'>All</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='road' id='road'  onClick={() => setCategory('road')}/>
                            <label htmlFor='road'>Road</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='professional' id='professional' onClick={() => setCategory('professional')}/>
                            <label htmlFor='professional'>Professional</label>
                        </div>
                        <div className='flex items-center space-x-2'>
                            <RadioGroupItem value='extreme' id='extreme' onClick={() => setCategory('extreme')}/>
                            <label htmlFor='extreme'>Extreme</label>
                        </div>
                    </RadioGroup>
                    <div className="max-w-56">
                        <div className='text-lg mb-4 font-medium'>
                            Max Price :{' '} <span className='text-accent font-semibold ml-2'>{price} €</span>
                            <span className='ml-2'>
                                {filteredBikes.length > 1 ? `${filteredBikes.length} items` : 
                                filteredBikes.length === 0 ? `${filteredBikes.length} items` : `${filteredBikes.length} item`}
                            </span>
                        </div>
                        <Slider defaultValue={[900]} max={1000} step={1} onValueChange={(value) => setPrice(value)}/>
                    </div>
                </aside>
                <div className='w-fullxl:w-[1050px] ml-auto'>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-[30px]'>
                        {filteredBikes.map((bike, index) => {
                            return (
                                <Bike bike={bike} key={index} />
                            )
                        })}
                    </div>
                </div>
            </div>
        </div>

    </section>
  )
}

export default BikeCategories