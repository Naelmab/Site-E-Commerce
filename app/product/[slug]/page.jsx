import {sanityClient,urlFor} from '@/app/lib/sanity';
import Image from 'next/image';
import AddToCartBtn from '@/app/components/AddToCartBtn';
import Link from 'next/link';


import {Bike, Clock, Pakage, RefreshCw, ChevronLeft, PackageCheck} from 'lucide-react';

const getData = async (slug) => {
    const query = `*[_type == 'product' && slug.current == '${slug}'][0] {
        _id,
        images,
        price,
        price_id,
        name,
        description,
        "slug": slug.current,
        "categories": categories->{name}
    }`;
    const data = await sanityClient.fetch(query, {slug});
    return data;
};

const ProductDetails = async ({params}) => {
    const bike = await   getData(params.slug);
    return (
        <section className='pt-24 pb-32'>
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-14">
                    <div className="xl:flex-1 h-[460px] bg-primary/5 xl:w-[700px] xl:h-[540px] flex justify-center items-center">
                            <Image src={urlFor(bike.images[0]).url()} width={473} height={290} priority alt={bike.name}/>
                    </div>
                    <div className="w-full lg:w-1/2">
                        <Link href='/' className='flex items-center mb-5'>
                                <ChevronLeft size={20}/>
                                Back to Home
                        </Link>
                        <h1 className="text-3xl font-semibold">{bike.name}</h1>
                        <div className="flex items-center gap-5 mb-5">
                            <p className="text-accent font-semibold text-2xl">{bike.price}€</p>
                        </div>
                        <p className="text-gray-400 mb-5">{bike.description}</p>
                        <AddToCartBtn btnStyles='btn  btn-accent mb-5 rounded-full' text='Add to Cart'/>
                        <div className="flex items-center gap-5 mb-5">
                            <div className="flex items-center gap-2">
                                <Clock size={20} className='text-accent'/>
                                <p>Delivery in 3-5 Days</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <RefreshCw size={20} className='text-accent'/>
                                <p>30 Days Return</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <PackageCheck size={20} className='text-accent'/>
                                <p>Free Shipping</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ProductDetails