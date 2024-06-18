const addMessage = "Add-Message";
const changeMessage = "Change-Message";

export function gameReducer(state, action) {
   // Преобразователь state
  if (action.type === "Click-Button") {
    alert("click on button");
  } else if (action.type === "Click-Card") {
    alert("click on card");
  } else if (action.type === addMessage) {
    // Добавляет сообщение в диалог чата
    state.chat.dialogsData.push({
      name: "newUser",
      message: state.chat.inputMessageData,
    });
    state.chat.inputMessageData = "";
  } if (action.type === changeMessage) {
    // Записывает текст введенный в поле ввода
    state.chat.inputMessageData = action.newText;
  }
  return state;
}

export function addMessageActionCreator() {
   return {
     type: addMessage,
   };
 }
 
 export function changeMessageActionCreator(newText) {
   return {
     type: changeMessage, newText: newText
   };
 }