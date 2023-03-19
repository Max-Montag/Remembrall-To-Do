interface State {
    notes: any[];
  }
  
  const initialState: State = {
    notes: [],
  };
  
  const notesReducer = (state = initialState, action: { type: string }): State => {
    switch (action.type) {
      default:
        return state;
    }
  };
  
  export default notesReducer;
  