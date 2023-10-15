import React from "react";
import img1 from "../../assets/images/blog1.png";
import img2 from "../../assets/images/blog2.png";
import img3 from "../../assets/images/blog3.png";
import img4 from "../../assets/images/blog4.png";
import SingleBlog from "../../shared/Blog/SingleBlog";
import useCollections from "../../Hooks/useCollections";
import ImgBaseUrl from "../../components/ImgBaseUrl/ImgBaseUrl";
import useCategories from "../../Hooks/useCategories";
import { useLocation } from "react-router-dom";

const Blogs = () => {
  const { collections } = useCollections();
  const { categories} = useCategories()
  const location = useLocation()
  console.log(categories);
  console.log(location?.pathname);
  return (
    <section>
      <div className="text-center pt-10 md:pt-20">
        <h2 className="text-4xl font-semibold text-black">{location?.pathname === '/categories' ? "CATEGORIES" : "COLLECTIONS"}</h2>
        <h4 className="text-3xl font-medium text-[#002B5B] pt-2">OUTMAKER</h4>
        <p className="py-4 md:py-10 text-base font-light">
          Outmaker offers {collections?.length} {location?.pathname === '/categories' ? 'categories': 'collections' } of outdoor furniture with unic designs
          which will meet your special needs
        </p>
      </div>
      {
      location?.pathname === '/categories' ? 
      categories?.map((category, index) => (
        <SingleBlog
          key={category?.collection_id}
          contactPage={false}
          image={ImgBaseUrl(category?.collection_pic)}
          name={category?.collection_name}
          description={category?.collection_desc}
          id={category?.collection_id}
          category={true}
          className={index % 2 === 1 ? "order-last" : ""}
        />
      ))
      :
      collections?.map((collection, index) => (
        <SingleBlog
          key={collection?.category_id}
          contactPage={false}
          image={ImgBaseUrl(collection?.category_pic)}
          name={collection?.category_name}
          description={collection?.category_desc}
          id={collection?.category_id}
          className={index % 2 === 1 ? "order-last" : ""}
        />
      ))}

      {/* <SingleBlog
        contactPage={false}
        image={img1}
        name="KAMA"
        description="The cushioning concept revisited, tables with their ergonomic
					waist-high tops. An innovative and modular approach to outdoor
					furniture.Let's push the boundaries in order to make life more fun!"
      />
      <SingleBlog
        className="order-last"
        image={img2}
        name="EXTRADOS"
        description="Like an albatross floating in the azure… Dining sets with aerial and pure lines.Accessorize your table according to your desire by creating your own table runner.Design EGO Paris."
      />
      <SingleBlog
        image={img3}
        name="SUTRA"
        description="Sutra revisits the Kama collection with a graphic design and takes modularity a step further.By alternating wood and aluminum, Sutra plays with light and shadows.Design Studio 5.5"
      />
      <SingleBlog
        className="order-last"
        image={img4}
        name="MARUMI"
        description="Praising the roundness, Marumi invites you to softness and serenity.Design Thomas Sauvage"
      /> */}
    </section>
  );
};

export default Blogs;
