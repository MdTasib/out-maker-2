import React from "react";
import visa from "../../assets/icons/visa.png";
import paypal from "../../assets/icons/paypal.png";
import express from "../../assets/icons/express.png";
import mastercard from "../../assets/icons/mastercard.png";
import { useForm } from "react-hook-form";

const CardPayment = () => {
  // for payment
  const {
    register,
    getValues,
    formState: { errors },
  } = useForm();
  //   const onSubmit = (data) => console.log(data);
  //   console.log(errors);

  const handlePayNow = () => {
    const formData = getValues();
    console.log(formData);
  };
  return (
    <>
      <div className="overflow-x-auto">
        <table className="table border-2 border-primary">
          <tbody className="border-2 border-primary">
            {/* row 1 */}
            <tr className="border-2 border-primary">
              <td>
                <div className="flex flex-col md:flex-row md:justify-between">
                  {/* check box */}

                  
                    <p className="label-text ml-5">Credit card</p>
                 

                  <div className="flex gap-1 basis-1/2 justify-end">
                    <img
                      src={visa}
                      alt=""
                      className="w-[40px] object-contain h-full"
                    />
                    <img
                      src={express}
                      alt=""
                      className="w-[40px] object-contain h-full"
                    />
                    <img
                      src={paypal}
                      alt=""
                      className="w-[40px] object-contain h-full"
                    />
                    <img
                      src={mastercard}
                      alt=""
                      className="w-[40px] object-contain h-full"
                    />
                  </div>
                </div>
              </td>
            </tr>
            {/* row 2 */}
            <tr className="border-2 border-primary">
              <td>
                <form className="grid grid-cols-1 gap-5">
                  <input
                    type="text"
                    className="input input-bordered border-primary w-full focus:outline-none"
                    placeholder="Card Number"
                    {...register("cardNum", { required: true })}
                  />
                  <input
                    type="text"
                    className="input input-bordered border-primary w-full focus:outline-none"
                    placeholder="Name on the card"
                    {...register("cardName", { required: true })}
                  />
                  <div className="flex flex-col md:flex-row gap-3">
                    <input
                      type="datetime"
                      className="input input-bordered border-primary w-full focus:outline-none"
                      placeholder="Epiration Date ( MM/YY )"
                      {...register("exDate", { required: true })}
                    />
                    <input
                      type="number"
                      className="input input-bordered border-primary w-full focus:outline-none"
                      placeholder="Security Code"
                      {...register("code", { required: true })}
                    />
                  </div>
                   {/* for shipping address */}
                <div>
                  <h3 className="text-2xl font-semibold mb-4 mt-14">
                    Shipping Address
                  </h3>
                  <div className="grid grid-cols-2 gap-4">
                    <select
                      className="select select-bordered border-2 border-primary focus:outline-none w-full col-span-2"
                      name="country"
                    >
                      <option defaultValue="Australia">Australia</option>
                    </select>
                    <input
                      className="input input-bordered border-2 border-primary focus:outline-none w-full"
                      type="text"
                      placeholder="firstName"
                      name="firstName"
                      required
                    />
                    <input
                      className="input input-bordered border-2 border-primary focus:outline-none w-full"
                      type="text"
                      placeholder="lastName"
                      name="lastName"
                      required
                    />
                    <input
                      className="input input-bordered border-2 border-primary focus:outline-none w-full col-span-2"
                      type="text"
                      placeholder="address"
                      name="address"
                      required
                    />
                    <input
                      className="input input-bordered border-2 border-primary focus:outline-none w-full col-span-2"
                      type="text"
                      placeholder="apartment"
                      name="apartment"
                      required
                    />
                    <div className="col-span-2 flex flex-col lg:flex-row gap-4 w-full">
                      <input
                        className="input input-bordered border-2 border-primary focus:outline-none w-full"
                        type="text"
                        placeholder="city"
                        name="city"
                        required
                      />
                      <select
                        className="select select-bordered border-2 border-primary focus:outline-none w-full"
                        name="state"
                      >
                        <option defaultValue="Chittagong">Chittagong</option>
                      </select>
                      <input
                        className="input input-bordered border-2 border-primary focus:outline-none w-full"
                        type="number"
                        placeholder="zip"
                        name="zip"
                        required
                      />
                    </div>
                    <input
                      className="input input-bordered border-2 border-primary focus:outline-none w-full col-span-2"
                      type="number"
                      placeholder="phone"
                      name="phone"
                      required
                    />
                  </div>
                </div>
                </form>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CardPayment;
