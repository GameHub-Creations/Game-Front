import { addMessage, changeMessage, clickButton, clickCard, state } from "./state";

import { rerenderEntireTree } from "./render";

rerenderEntireTree(state, clickButton, clickCard, addMessage, changeMessage);
