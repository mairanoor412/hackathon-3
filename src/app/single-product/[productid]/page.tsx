
import SingleProductPage from "../single-product-page";




const SingleProduct = ({ params }: { params: { productid: string } }) => {
    // const query = ` *[_type=='product']{
    //         _id,
    //         title,
    //         price,
    //         "productImage": productImage.asset->url,
    //         tags[3],
    //         dicountPercentage,
    //         description,
    //         isNew,
    // }`

    // const data = await client.fetch(query);

   
    return (
        <div className="overflow-x-hidden bg-secondary">
           <SingleProductPage params={params}/>
        </div>
    )
}

export default SingleProduct




