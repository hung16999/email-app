import { ComponentType } from "react";
import { Messages } from "../components/Messages";
import { Contacts } from "../components/Contacts";
import { Preferences } from "../components/Preferences";

export interface TypeRoute {
  path: string;
  exact: boolean;
  name: string;
  Component: ComponentType;
}

export const routesMain: TypeRoute[] = [
  {
    path: "/messages",
    exact: false,
    name: "Messages",
    Component: Messages,
  },
  {
    path: "/contacts",
    exact: false,
    name: "Contacts",
    Component: Contacts,
  },
  {
    path: "/preferences",
    exact: false,
    name: "Preferences",
    Component: Preferences,
  },
];
