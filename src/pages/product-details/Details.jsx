import React, { useState,useEffect  } from "react";
import { BsArrowRight, BsPlus } from "react-icons/bs";
import Button from "../../shared/Button/Button";
import Description from "./Description";
import ImageSlider from "./ImageSlider";

const Details = ({ product, content, images }) => {
  const [activeTab, setActiveTab] = useState(0); // Use an index for the active tab

  // {title: '', description: ``},
  const tabs = [
    { title: 'Product installation', description: `an order amount exceeding AUD 3000 will enjoy free installation services. Otherwise, if installation services are required, an additional AUD 100 on-site installation service fee will be required.` },
    { title: 'Product packaging', description: `1、 Packaging materials:
    Our sofa is packaged with plywood, which is a sturdy and durable packaging material that can effectively protect the sofa from damage during transportation. The plywood has good shockproof performance, which can effectively reduce the shaking and vibration of goods during transportation, ensuring the safe delivery of goods.
    2、 Packaging method:
    Our sofas are packaged one unit at a time, and each sofa has an independent packaging box. This packaging method ensures that each sofa is adequately protected to avoid damage during transportation. At the same time, independent packaging boxes are also more convenient for the handling and storage of goods.
    3、 Packaging steps:
    Firstly, we will carefully clean and inspect the sofa to ensure that its quality and appearance meet the standards.
    Then, we place the sofa in a plywood packaging box to ensure that it is securely placed inside the box and will not slide or shake during transportation.
    Next, we will use shockproof materials to fill the surrounding and upper parts of the sofa to ensure that it will not be subjected to vibration and impact during transportation.
    Finally, we will seal the exterior of the packaging box with sturdy tape to ensure that the goods will not be opened or damaged during transportation.
    4、 Precautions:
    When handling and storing packaged sofas, please avoid heavy pressure, impact, or damp environments to avoid affecting the quality and safety of the sofa.
    When opening the packaging box, please pay attention to the use of tools and methods to avoid damage or scratches to the sofa.` },
    { title: 'Sustainability', description: `At Outmaker Furniture, we value the need for quality furniture and timeless furniture that doesn't harm the environment，our sustainable materials help us make the best comfortable, durable, and elegant timeless designs. We have a collection of the best sustainable Outdoor furniture. the motive of outmaker is to reduce waste and reuse materials. ` },
    {title: 'Durable materials (aluminum alloy products)', description: `Frame:aluminum alloy
    Fabric:Sunbrella
    Back cushion::Polypropylene fiber 
    Seat cushion::Layered Memory High Elasticity Sponge 
    Zipper:YKK 
    `},
    {title: 'Durable materials (rattan products)', description: `Frame:PE rattan，aluminum alloy
    Fabric:Sunbrella
    Back cushion::Polypropylene fiber 
    Seat cushion::Layered Memory High Elasticity Sponge 
    Zipper:YKK `},
    // {title: '', description: ``},
    // {title: '', description: ``},
    // {title: '', description: ``},
    // {title: '', description: ``},
    // {title: '', description: ``},
    // {title: '', description: ``},
  ];

  const handleTabClick = (index) => {
    setActiveTab(index);
  };
  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the page loads
  }, []);
  return (
    <section className="w-full p-4 md:p-10">
      <h4 className="text-primary text-2xl font-semibold uppercase">
        {tabs[activeTab].title}
      </h4>
      <ImageSlider images={images} />
      <div className="text-base font-normal text-[#666666] py-4 leading-loose">
        <nav className="pt-8">
          <ul className="block md:flex text-sm md:text-base text-primary font-normal text-center flex-wrap">
            {tabs.map((tab, index) => (
              <li
                key={index}
                className={`cursor-pointer ${
                  activeTab === index ? "bg-primary text-white" : "bg-gray-100 hover:text-white"
                } py-4 hover:bg-primary px-10 shadow shadow-[#CECECE] flex items-center`}
                onClick={() => handleTabClick(index)}
              >
                {tab.title}  <BsPlus className="ml-2" />
              </li>
            ))}
          </ul>
        </nav>

        {/* 内容部分 */}
        <div className="tab-content">
          <div className="tab-pane">
            {tabs[activeTab].description}
          </div>
        </div>

        <Description data={product?.p_l_description} />
      </div>

      <Button className="btn btn-primary rounded-full text-white hover:text-primary hover:bg-white font-normal">
        Cleaning Instructions <BsArrowRight className="ms-2" />
      </Button>

      <h5 className="text-xl font-semibold text-primary pt-8">
        THIS SET INCLUDES
      </h5>
      <ul className="list-disc block md:flex gap-10 text-primary pl-4 pt-1">
        <li>Right Arm</li>
        <li>Left Arm</li>
        <li>Armless Inserts</li>
        <li>90° or 45° Corner</li>
      </ul>
    </section>
  );
};

export default Details;
