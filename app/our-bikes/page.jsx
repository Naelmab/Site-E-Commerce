import {sanityClient} from "@/app/lib/sanity";
import BikeCategories from "@/app/components/BikeCategories";

const getData = async () => {
    const query = `*[_type == 'product'] {
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
}

const OurBikes = async () => {
    const bikes = await getData();
    return (
        <div>
            <BikeCategories bikes={bikes}/>
        </div>
    )
}

export default OurBikes