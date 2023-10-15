import React from "react";
import { BsArrowRight } from "react-icons/bs";
import loungeVactor from "../../assets/images/loungeVactor.png";
import Button from "../../shared/Button/Button";
import { Link } from "react-router-dom";
import useCollections from "../../Hooks/useCollections";
import ImgBaseUrl from "../../components/ImgBaseUrl/ImgBaseUrl";

const Collection = () => {
  const { collections } = useCollections();
  return (
    <section className="w-full py-10 md:py-20">
      <div>
      <div className="flex justify-between items-center">
        <div className="basis-2/3">
          <h1 className="text-2xl md:text-4xl font-semibold text-primary">
            Our Popular Collection
          </h1>
        </div>
        <Link
          to="/collections"
          className="flex items-center text-primary text-sm font-semibold cursor-pointer basis-1/3 justify-end text-end"
        >
          View All
          <BsArrowRight className="ms-2" />
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 mt-4 gap-4">
        {collections?.slice(0, 2).map((collection) => (
          <div
            key={collection?.category_id}
            className="block md:flex items-center justify-between bg-[#e2fafd] p-5 rounded-xl my-2"
          >
            <div className="relative">
              <img
                className="absolute h-14 w-48 bottom-36 right-12"
                src={loungeVactor}
                alt=""
              />
              <div className="text-center md:text-left mb-4 md:mb-4">
                <h6 className="text-primary text-2xl font-semibold">
                  {collection?.category_name}
                </h6>
                <p className="text-sm font-normal leading-6 py-3">
                  {collection?.category_desc}
                </p>
                <Link to={`/products/${collection?.category_id}`}>
                  <Button className="btn btn-primary rounded-full text-white hover:text-primary hover:bg-white capitalize">
                    Explore <BsArrowRight className="ms-2" />
                  </Button>
                </Link>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <div className="bg-[#A5E4EC] w-52 h-52 rounded-full flex justify-center items-center p-4">
                <img
                  className="img rounded-full w-44 h-44 object-cover"
                  src={ImgBaseUrl(collection?.category_pic)}
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>
    </section>
  );
};

export default Collection;
