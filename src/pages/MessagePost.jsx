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
import { getMessage, getAllMessage } from "../hooks/useAjax";
import { useAuth } from "../hooks/useAuth";
import { matchSorter } from "match-sorter";

export default function MessagePost() {
  const { user } = useAuth();
  // const { datas, q } = useLoaderData();
  const navigation = useNavigation();
  const submit = useSubmit();

  const [state, setState] = useState([]);

  useEffect(() => {
    if (user.role != "staff") {
      getMessage(user).then((data) => {
        setState(data.data);
      });
    } else {
      getAllMessage(user).then((data) => {
        // console.log(data.data);
        setState(data.data);
      });
    }
  }, [user]);

  // console.log(state);

  return (
    <>
      {state.length ? (
        state.map((data, index) => (
          <div className="row p-3" key={index}>
            <div className="col-6">
              {data.msg && data.userb == user.id ? (
                "people : " + data.msg
              ) : (
                <i> </i>
              )}
            </div>
            <div className="col-6">
              {data.msg && data.usera == user.id ? (
                "me : " + data.msg
              ) : (
                <i> </i>
              )}
            </div>
          </div>
        ))
      ) : (
        <p>No Message Finded</p>
      )}

      <NavLink to="/member/messageadd">New Message</NavLink>
    </>
  );
}
