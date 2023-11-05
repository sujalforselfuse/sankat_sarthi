import React, { useState, useRef, useEffect } from "react";
import { useContext } from "react";
import { useLocation } from "react-router-dom";
import noteContext from "../../context/noteContext";
import logo from "../../Images/sarthi_logo.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();

  const { fetchData, name, login } = useContext(noteContext);

  const sidebarRef = useRef(null);
  const history=useNavigate();

  useEffect(() => {
    fetchData();

    if ("geolocation" in navigator) {
      // Use the Geolocation API to get the user's coordinates
      navigator.geolocation.getCurrentPosition((position) => {
        const { latitude, longitude } = position.coords;
        console.log(latitude, longitude);
        // Call a function to get the city from coordinates
        /* getCurrentCityFromCoordinates(latitude, longitude); */

        const accessToken =
          "pk.eyJ1Ijoic3VqYWxmb3JzZWxmdXNlIiwiYSI6ImNsb2s3NjdqaDF2YWgybHJ3Yzg4ZG1mejAifQ.TIc4BIVkUfLPqLs1m_AxHw";

        const apiUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${longitude},${latitude}.json?access_token=${accessToken}`;

        fetch(apiUrl)
          .then((response) => response.json())
          .then((data) => {
            const cityFeature = data.features.find((feature) =>
              feature.place_type.includes("place")
            );
            if (cityFeature) {
              const city = cityFeature.text;
              localStorage.setItem("city", city.toLowerCase());
            } else {
              console.log("City not found");
            }
          })
          .catch((error) => {
            console.error("Error converting coordinates to city", error);
          });
      });
    } else {
      console.error("Geolocation is not supported by your browser.");
    }
  }, []);

  const handleOpenRazorpay = (data) => {
    const options = {
      key: "rzp_test_iCO3kPkwJRQi3L",
      amount: Number(data.amount),
      currency: data.currency,
      order_id: data.id,
      name: "Sankalp Sarthi",
      description: "get all alerts",
      handler: async function (response) {
        try {
          console.log("verifying");
          const data = await fetch(
            `https://mechback.onrender.com/api/payment/verify`,
            {
              method: "POST",

              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ response }),
            }
          );
          const json = await data.json();

          if (json.success) {
            
          } else {
            alert("fail");
          }
        } catch (error) {
          console.log(error);
        }
      },
    };

    const rzp = new window.Razorpay(options);
    rzp.open();
  };

  const handlePayment = async (amount) => {
    const response = await fetch(`http://localhost:8000/api/payment/orders`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ amount }),
    });
    const json = await response.json();

    if (json.success) {
      alert("redirecting to payment page");

      handleOpenRazorpay(json.data);
    } else {
      alert("fail");
    }
  };

  return (
    <div className="px-3 sm:px-6 md:px-14 lg:px-12 xl:px-28 2xl:px-[10rem]">
      <nav className="">
        <div className="border-b-2 border-black flex flex-wrap justify-between items-center mx-auto max-w-screen-xl py-4 md:p-4">
          <a href="/" className="flex items-center">
            {/* Logo */}

            <img src={logo} className="h-16 md:h-20" alt="Logo" />

            {/* Name of the website */}

            <div className="flex sm:flex-row flex-col gap-x-2 uppercase text-green-600">
              <span className="text-2xl md:text-3xl font-black whitespace-nowrap">
                Sankat
              </span>

              <span className="text-2xl md:text-3xl font-black whitespace-nowrap">
                Sarthi
              </span>
            </div>
          </a>

          <div className="flex items-center">
            {/* Login button */}

            <a
              href={"/login"}
              className="lg:px-6 px-3 py-1 2xl:py-2 relative rounded group 2xl:text-2xl text-lg font-medium text-black flex items-center justify-center"
            >
              <span className="absolute top-0 left-0 w-full h-full rounded opacity-50 filter blur-sm bg-gradient-to-br from-green-300 to-green-400"></span>

              <span className="h-full w-full inset-0 absolute mt-0.5 ml-0.5 bg-gradient-to-br filter group-active:opacity-0 rounded opacity-50 from-green-400 to-green-300"></span>

              <span className="absolute inset-0 w-full h-full transition-all duration-200 ease-out rounded shadow-xl bg-gradient-to-br filter group-active:opacity-0 group-hover:blur-sm from-green-400 to-green-300"></span>

              <span className="absolute inset-0 w-full h-full transition duration-200 ease-out rounded bg-gradient-to-br to-green-400 from-green-300"></span>

              <span className="relative capitalize">
                {login ? "Hi " + name.split(" ")[0] : "Login"}
              </span>
            </a>
          </div>
        </div>
      </nav>

      <nav className="">
        <div className="max-w-screen-xl md:px-4 py-3 mx-auto">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row font-medium gap-x-2 md:gap-x-0 mt-0 md:mr-6 md:space-x-8 text-sm">
              <li>
                <a
                  href="/"
                  className={`nav-link ${
                    location.pathname === "/"
                      ? "text-green-500 before:w-full"
                      : "text-gray-900"
                  }`}
                >
                  HOME
                </a>
              </li>

              <li>
                <a
                  href="/works"
                  className={`nav-link ${
                    location.pathname === "#works"
                      ? "text-green-500 before:w-full"
                      : "text-gray-900"
                  }`}
                >
                  HOW IT WORKS
                </a>
              </li>

              <li>
                <a
                  href=" "
                  className={`nav-link ${
                    location.pathname === "#services"
                      ? "text-green-500 before:w-full"
                      : "text-gray-900"
                  }`}
                >
                  SERVICES
                </a>
              </li>

              <li>
                <button
                  onClick={() => handlePayment(100)}
                  className={`nav-link ${
                    location.pathname === "#reasons"
                      ? "text-green-500 before:w-full"
                      : "text-gray-900"
                  }`}
                >
                  DONATE
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
