import { redirect } from "react-router";
import { store } from "~/store/store";
import type { Route } from "./+types/test";

export async function clientLoader() {
    const user = store.getState().auth.user;
    throw redirect(user ? "/home" : "/login");
}

export default function Test() {
    return null; // never renders
}
