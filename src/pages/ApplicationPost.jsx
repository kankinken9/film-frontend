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
import { useEffect, useState } from "react";
import { getAllBooking, getBooking } from "../hooks/useAjax";
import ApplicationPostCard from "./ApplicationPostCard";
import { useAuth } from "../hooks/useAuth";
import { matchSorter } from "match-sorter";

export default function ApplicationPost() {
  const { user } = useAuth();
  // const { books, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const searching =
    navigation.location &&
    new URLSearchParams(navigation.location.search).has("q");

  const initialState = {
    data: [],
    q: null,
  };

  const [state, setState] = useState(initialState);

  useEffect(() => {
    // document.getElementById("q").value = q;
    if (user.role != "staff") {
      getBooking(user).then((data) => {
        setState({ ...state, data: data.data });
      });
    } else {
      getAllBooking(user).then((data) => {
        setState({ ...state, data: data.data });
      });
    }
  }, [user]);

  // On change the Input Value (name, email, password)
  const onChangeValue = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Form id="search-form" role="search">
        <label>Search : </label>
        <input
          id="q"
          className={searching ? "loading" : ""}
          aria-label="Search books"
          placeholder="Film Name"
          type="search"
          name="q"
          defaultValue={state.q}
          // onChange={onChangeValue}
          onChange={(event) => {
            onChangeValue(event);
            const isFirstSearch = state.q == null;
            submit(event.currentTarget.form, {
              replace: !isFirstSearch,
            });
          }}
        />
        <div id="search-spinner" aria-hidden hidden={!searching} />
        <div className="sr-only" aria-live="polite"></div>
      </Form>
      {/* {console.log("s", SearchApplication(state.data, state.q))}
      {console.log(matchSorter(state.data, "F", { keys: ["atitle"] }))} */}
      {SearchApplication(state.data, state.q).length ? (
        SearchApplication(state.data, state.q).map((book, index) => (
          <div className="col-4 p-3" key={index}>
            {book.stated ? (
              <ApplicationPostCard carddata={book} />
            ) : (
              <i>No Film</i>
            )}
            {/* <HomePostCard carddata={book} /> */}
          </div>
        ))
      ) : (
        <p>No Film Finded</p>
      )}
    </>
  );
}

function SearchApplication(list, query) {
  if (!list) list = [];
  if (query) {
    list = matchSorter(list, query, { keys: ["atitle"] });
  }
  // {console.log(matchSorter(list, query, { keys: ["atitle"] }))}
  return list ?? null;
}
