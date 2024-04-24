import Link from "next/link";
import PopularBikeCarousel from "@/app/components/PopularBikeCarousel";

import {sanityClient} from "@/app/lib/sanity";

//get data
const getData = async () => {
    const query = `*[_type == 'product' && references(*[_type == 'category' && name == 'Popular']._id, categories)] {
        _id,
        name,
        description,
        images,
        price,
        price_id,
        "slug": slug.current,
        "categories": categories[]->{name}
    }`;	
    const data = await sanityClient.fetch(query);
    return data;
};

const PopularBikes = async () => {
    const bikes = await getData();
    return (
        <section className='py-24'>
            <div className="container mx-auto">
                <h2 className="text-center">Most Popular Bikes</h2>
                <p className="text-center mb-[30px]">
                    The World's Premium Brands In On Destination
                </p>
                <PopularBikeCarousel bikes={bikes}/>
                <Link href='/our-bikes'>
                    <button className="btn btn-accent mx-auto rounded-full">View All Bikes</button>
                </Link>
            </div>
        </section>
    );
};

export default PopularBikes;