import { Fragment } from "react";
import MainNavigation from "../components/MainNavigation";

export default function ErrorPage() {
  return (
    <Fragment>
      <MainNavigation />
      <main>
        <h1>An error ocurred!</h1>
        <p>Could not find this page!</p>
      </main>
    </Fragment>
  );
}
