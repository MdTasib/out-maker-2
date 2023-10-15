// UserInitialization.js

import React, { useEffect, useState } from "react";

// generate random Number
const generateRandomNumber = () => {
  return Math.floor(10000000 + Math.random() * 90000000);
};

const UserInitialization = () => {
  const [randomNumber, setRandomNumber] = useState(null);

  useEffect(() => {
    const storedUserCode = parseInt(localStorage.getItem("usercode"));

    if (storedUserCode) {
      fetch(
        `https://theoutmaker.com/public/api/user/get/code/${storedUserCode}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data !== 1) {
            const newUserCode = generateRandomNumber();
            fetch(
              `https://theoutmaker.com/public/api/user/set/code/${newUserCode}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then((res) => res.json())
              .then((data) => {
                if (data === 1) {
                  setRandomNumber(newUserCode);
                  localStorage.setItem("usercode", newUserCode.toString());
                } else {
                  const newRandomUserCode = generateRandomNumber();
                  fetch(
                    `https://theoutmaker.com/public/api/user/set/code/${newRandomUserCode}`,
                    {
                      method: "POST",
                      headers: {
                        "Content-Type": "application/json",
                      },
                    }
                  )
                    .then((res) => res.json())
                    .then((data) => {
                      if(data !== 1){
                        return
                      }
                    });
                }
              });
          }
        });
    } else {
      const newRandomNumber = generateRandomNumber();
      fetch(
        `https://theoutmaker.com/public/api/user/set/code/${newRandomNumber}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data === 1) {
            setRandomNumber(newRandomNumber);
            localStorage.setItem("usercode", newRandomNumber.toString());
          } else {
            const randomUserCode = generateRandomNumber();
            fetch(
              `https://theoutmaker.com/public/api/user/set/code/${randomUserCode}`,
              {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
              }
            )
              .then((res) => res.json())
              .then((data) => {
                console.log(data);
              });
          }
        });
    }
  }, []);

  return null; // This component doesn't render anything
};

export default UserInitialization;
