import React from "react";
import MainNavigation from "../components/MainNavigation";

const ErrorPage = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <h1 className="text-4xl font-semibold">An error occured!</h1>
        <p className="text-base font-normal mt-5">
          We could not find this page!
        </p>
      </main>
    </>
  );
};

export default ErrorPage;
