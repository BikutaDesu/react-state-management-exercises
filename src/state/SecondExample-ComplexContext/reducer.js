export const initialState = {
  user: {
    name: "Shinji",
    email: "shinji.parademeatasanar@teste.com",
  },
  job: "",
}

export const stateReducer = (state, action) => {
  switch(action.type) {
    case 'CHANGE_NAME':
      return {
        ...state,
        user:{
          ...state.user,
          name: action.payload,
        }
      }
    case 'CHANGE_JOB':
      return {
        ...state,
        job: action.payload
      }
    default:
      return initialState;
  }
}