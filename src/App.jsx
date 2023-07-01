import "./App.css";
import { useForm } from "react-hook-form";

const App = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    alert("the submitted email adress is " + data.email);
  };

  return (
    <main className="font-josefin md:bg-My-Desaturated-Red/10 max-w-full md:min-h-screen">
      <div className="md:flex md:items-start md:justify-between md:max-w-[120rem] md:mx-auto">
        <section>
          {/* Logo */}
          <header className="wrapper my-8 md:mt-16">
            <a href="#">
              <img
                src="./images/logo.svg"
                alt="logo"
                className="w-28 md:w-36"
              />
            </a>
          </header>

          {/* Big Image */}
          <section className="">
            <img
              src="./images/hero-mobile.jpg"
              alt="hero mobile"
              className="block md:hidden w-full mx-auto"
            />
          </section>

          {/* Main content */}
          <article className="wrapper">
            <h1 className="text-[2.5rem] text-center uppercase tracking-[0.6rem] leading-[2.7rem] mt-16 mb-5 text-My-Dark-Grayish-red md:text-left md:text-6xl md:mt-32 md:leading-[4rem]">
              <span className="font-[300] block text-My-Desaturated-Red">
                We're
              </span>{" "}
              <span className="font-[600]">
                coming <br />
                soon
              </span>
            </h1>

            <p className="text-My-Desaturated-Red text-center md:text-left max-w-md">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>

            <form
              action="#"
              className="mt-10 relative"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="email"
                placeholder="Email Adress"
                className={`border-solid border-[1px] border-My-Desaturated-Red/50 w-full rounded-3xl px-5 py-3 placeholder:text-My-Desaturated-Red focus:outline-none md:bg-transparent caret-My-Desaturated-Red ${
                  errors.email && "border-My-Soft-Red border-2"
                }`}
                {...register("email", {
                  required: "Email field is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email format",
                  },
                })}
              />
              {errors.email && (
                <img
                  src={"./images/icon-error.svg"}
                  className="absolute top-3.5 right-24"
                  alt=""
                />
              )}

              {errors.email && (
                <p className="absolute bottom-0 left-5 top-16 text-sm text-My-Desaturated-Red">
                  {errors.email?.message}
                </p>
              )}
              <button
                type="submit"
                className="bg-My-Soft-Red/50 absolute top-0 right-0 bottom-0 rounded-3xl md:shadow-2xl shadow-My-Desaturated-Red"
              >
                <img
                  src="./images/icon-arrow.svg"
                  alt="arrow icon"
                  className="px-7 md:px-10 "
                />
              </button>
            </form>
          </article>
        </section>
        <img
          src="./images/hero-desktop.jpg"
          alt="hero desktop"
          className="hidden md:block h-auto object-cover"
        />
      </div>
    </main>
  );
};

export default App;
