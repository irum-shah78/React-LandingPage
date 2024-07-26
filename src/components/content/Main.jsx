import "./Main.css";
import lambs from "../../assets/images/lambs-circle.svg";
import arrow from "../../assets/icons/Arrow 1.svg";
import heroImg from "../../assets/images/hero img.svg";
import aboutImage1 from "../../assets/images/aboustus-img1.svg";
import Arrow2 from "../../assets/icons/Arrow.svg";
import aboutImage2 from "../../assets/images/aboutus-img2.svg";

const Main = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="px-4 md:px-10 py-4" style={{ background: "#232020" }}>
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center justify-center mb-4 md:mb-0">
            <img src={lambs} alt="lamb" className="text-center" />
          </div>
          <div className="text-white mx-4 md:mx-16 order-0">
            <div>
              <p className="text-4xl font-semibold">Premium</p>
              <h1 className="text-6xl mt-4 tracking-wider horizontal">
                Meat Distribution
              </h1>
              <p className="tracking-wider horizontal text-5xl mt-4 font-bold">
                For Restaurants
              </p>
              <p className="mt-4">
                Order the finest meat from trusted suppliers easily and
                efficiently.
              </p>
            </div>
            <div className="mt-4 flex items-center">
              <button className="browse-btn px-5 py-3 text-sm rounded-3xl">
                Browse Products
              </button>
              <div className="rounded-full border border-white text-white h-10 w-10 flex items-center justify-center ms-2">
                <img src={arrow} alt="arrow" className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="order-1 md:ml-16 mt-4 md:mt-0">
            <img src={heroImg} alt="hero-img" />
          </div>
        </div>

        <div className="custom-shape-divider-bottom-1721979208">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </section>

      {/* About Us Section */}
      <section className="px-4 py-4 md:px-10 md:py-8 mt-16">
        <div className="flex flex-col lg:flex-row items-center justify-around">
          <div className="gap-3 text-center lg:text-left lg:max-w-lg">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black">
              About Us
            </h2>
            <p className="text-sm mt-4 md:text-base">
              Welcome to Meat Distribution Platform, your trusted partner in
              premium meat
              <br className="hidden lg:block" />
              supply. We connect top-quality meat suppliers with restaurants
              across Canada,
              <br className="hidden lg:block" />
              ensuring you receive the finest products to serve your customers.
            </p>

            <p className="text-xl md:text-2xl font-bold mt-4">What We Offer</p>
            <p className="mt-4 text-sm md:text-base">
              <span className="font-semibold">Premium Quality: </span>We partner
              with the best suppliers to offer you the highest
              <br className="hidden lg:block" />
              quality meat products.
            </p>
            <p className="mt-4 text-sm md:text-base">
              <span className="font-semibold">Wide Selection: </span>Our platform
              features a diverse range of meats, including
              <br className="hidden lg:block" />
              chicken, beef, mutton, and more, along with various cuts to meet
              your specific
              <br className="hidden lg:block" />
              needs.
            </p>
            <p className="mt-4 text-sm md:text-base">
              <span className="font-semibold">Reliable Delivery: </span>Our
              suppliers ensure timely and dependable delivery, so
              <br className="hidden lg:block" />
              you never have to worry about running out of stock.
            </p>
            <p className="mt-4 text-sm md:text-base">
              <span className="font-semibold">User-Friendly Platform: </span>Our
              easy-to-use interface allows you to browse,
              <br className="hidden lg:block" />
              order, and track your meat supplies effortlessly.
            </p>
            <div className="mt-4 flex justify-center lg:justify-start items-center">
              <button className="browse-btn px-5 py-3 text-sm rounded-3xl text-white">
                Learn More
              </button>
              <div className="rounded-full border border-black text-white h-10 w-10 flex items-center justify-center ml-2">
                <img src={Arrow2} alt="arrow" className="h-6 w-6" />
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center mt-8 lg:mt-0">
            <div className="relative">
              <img
                src={aboutImage2}
                alt="img-2"
                className="object-cover max-w-xs lg:max-w-sm"
              />
              <img
                src={aboutImage1}
                alt="img"
                className="object-cover absolute top-10 right-1/4 transform translate-x-1/4 lg:right-56 max-w-xs lg:max-w-sm"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Work Section */}
      <section>
        <div className="custom-shape-divider-top-1721985080">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
        <div className="px-4 md:px-10 pb-6" style={{ background: "#232020" }}>
          <div className="flex items-center justify-center">
            <p className="text-2xl md:text-4xl font-bold text-white">
              How It Works
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center mb-4 gap-4">
            <div className="border border-[#E74040] rounded-bl-[45px] rounded-tr-[45px] h-48 w-64 mt-6 flex-shrink-0">
              <div className="flex items-center justify-between mt-4 px-3">
                <div className="circle rounded-full w-10 h-10"></div>
                <p className="text-white font-semibold text-lg">O1</p>
              </div>
              <p className="text-white text-sm mt-24 ms-4">
                Create an account to get started.
              </p>
            </div>
            <div className="border border-[#E74040] rounded-bl-[45px] rounded-tr-[45px] h-48 w-64 mt-6 flex-shrink-0">
              <div className="flex items-center justify-between mt-4 px-3">
                <div className="circle rounded-full w-10 h-10"></div>
                <p className="text-white font-semibold text-lg">O2</p>
              </div>
              <div className="mt-8">
                <p className="text-white font-semibold text-lg">
                  Browse and select products.
                </p>
                <p className="text-white text-sm">
                  Explore a wide range of quality meat
                  <br />
                  products
                </p>
              </div>
            </div>
            <div className="border border-[#E74040] rounded-bl-[45px] rounded-tr-[45px] h-48 w-64 mt-6 flex-shrink-0">
              <div className="flex items-center justify-between mt-4 px-3">
                <div className="circle rounded-full w-10 h-10"></div>
                <p className="text-white font-semibold text-lg">O3</p>
              </div>
              <p className="text-white text-sm mt-20 ms-4">
                Add products to your cart and checkout.
              </p>
            </div>
            <div className="border border-[#E74040] rounded-bl-[45px] rounded-tr-[45px] h-48 w-64 mt-6 flex-shrink-0">
              <div className="flex items-center justify-between mt-4 px-3">
                <div className="circle rounded-full w-10 h-10"></div>
                <p className="text-white font-semibold text-lg">O4</p>
              </div>
              <p className="text-white text-sm mt-20 ms-4">
                Receive updates on your order status.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Main;
