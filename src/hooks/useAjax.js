import axios from 'axios'
import { useAuth } from "./useAuth";
import { matchSorter } from "match-sorter";

// Define the base URL
const Axios = axios.create({
    // baseURL: 'http://localhost:10888/api/v1/',
    baseURL: 'https://film-backend.kankinken9.repl.co/api/v1/',
});



export async function getFilms(query) {
    // get All films
    let { data } = await Axios.get("articles");
    // console.log(data);
    if (!data) data = [];
    if (query) {
        data = matchSorter(data, query, { keys: ["title"] });
    }
    return data ?? null;
}

export async function registerUser(user) {
    // Sending the user registration request
    const register = await Axios.post('users', {
        email: user.email,
        username: user.username,
        password: user.password,
        role: "client",
    });

    return register;
}

export async function loginUser(user) {
    const login = await Axios.post('users/login', {}, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return login.data;
}

export async function filmAdd(film, id, user) {
    // Sending the film create request
    const data = await Axios.post('articles', {
        title: film.title,
        allText: film.allText,
        summary: film.summary,
        imageurl: film.imageurl,
        stated: "pending",
        authorID: id,
    }, {
        auth: {
            username: user.username,
            password: user.password
        }
    });

    return data;
}


export async function getFilm(id) {
    let film = await Axios.get(`articles/${id}`);
    return film.data ?? null;
}


export async function filmEdit(filmid, film, id, user) {
    // Sending the film update request
    const data = await Axios.put(`articles/${filmid}`, {
        title: film.title,
        allText: film.allText,
        summary: film.summary,
        imageurl: film.imageurl,
        stated: film.stated,
        authorID: id,
    }, {
        auth: {
            username: user.username,
            password: user.password
        }
    });

    return data;
}


export async function filmDelete(filmid, user) {
    console.log("filmid", user);
    // Sending the film delete request
    const data = await Axios.delete(`articles/${filmid}`, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return data;
}


export async function bookingAdd(filmid, userid, user, bookingdata) {
    // Sending the booking create request
    const data = await Axios.post(`booking`, {
        articlesid: filmid,
        authorid: userid,
        description: bookingdata.description,
        stated: "new",

    }, {
        auth: {
            username: user.username,
            password: user.password
        }
    });

    return data;
}



export async function getBooking(user) {
    let list = await Axios.get(`booking/u/${user.id}`, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    // console.log(list.data);
    // if (!list.data) list = [];
    // if (query) {
    //     list = matchSorter(list, query, { keys: ["atitle"] });
    // }

    // list = matchSorter(list, "F", { keys: ["atitle"] });
    // console.log("lisr", list);
    return list ?? null;
}

export async function getAllBooking(user) {
    let list = await Axios.get(`booking`, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return list ?? null;
}



export async function updateApplication(id, user, state) {
    // Sending the film update request
    const data = await Axios.put(`booking/${id}`, {
        stated: state,
    }, {
        auth: {
            username: user.username,
            password: user.password
        }
    });

    return data;
}






export async function getMessage(user) {
    let data = await Axios.get(`message/u/${user.id}`, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return data ?? null;
}


export async function getAllMessage(user) {
    const data = await Axios.get(`message`, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    // console.log(data);
    return data ?? null;
}

export async function messageAdd(user, msgdata) {
    // Sending the booking create request
    const data = await Axios.post(`message`, {
        usera: user.id,
        msg: msgdata.msg,
    }, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return data;
}
export async function imageAdd(user, image) {
    // Sending the booking create request
    const data = await Axios.post(`images`, {
        image: image,
    }, {
        auth: {
            username: user.username,
            password: user.password
        }
    });
    return data;
}


