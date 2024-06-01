import { addMessage, clickButton, clickCard, newMessage, state } from "./state";

import { rerenderEntireTree } from "./render";

rerenderEntireTree(state, clickButton, clickCard, newMessage, addMessage);
