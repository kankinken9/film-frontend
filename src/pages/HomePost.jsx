import {
  Outlet,
  NavLink,
  // Link,
  useLoaderData,
  Form,
  redirect,
  useNavigation,
  useSubmit,
} from "react-router-dom";
import { useEffect } from "react";
import { getFilms } from "../hooks/useAjax";
import HomePostCard from "./HomePostCard";

// export async function loader() {
//   const films = await getFilms();
//   return { films };
// }

export async function loader({ request }) {
  const url = new URL(request.url);
  const q = url.searchParams.get("q");
  const films = await getFilms(q);
  return { films, q };
}

export default function HomePost() {
  const { films, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  useEffect(() => {
    document.getElementById("q").value = q;
  }, [q]);

  return (
    <>
      <Form id="search-form" role="search">
        <label>Search : </label>
        <input
          id="q"
          className={searching ? "loading" : ""}
          aria-label="Search films"
          placeholder="Film Name"
          type="search"
          name="q"
          defaultValue={q}
          onChange={(event) => {
            // submit(event.currentTarget.form);
            const isFirstSearch = q == null;
            submit(event.currentTarget.form, {
              replace: !isFirstSearch,
            });
          }}
        />
        <div id="search-spinner" aria-hidden hidden={!searching} />
        <div className="sr-only" aria-live="polite"></div>
      </Form>

      {films.length ? (
        films.map((film, index) => (
          <div className="col-4 p-3" key={index}>
            {film.title ? <HomePostCard carddata={film} /> : <i>No Film</i>}
            {/* <HomePostCard carddata={film} /> */}
          </div>
        ))
      ) : (
        <p>No Film Finded</p>
      )}
    </>
  );
}
