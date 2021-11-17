import { createSlice } from "@reduxjs/toolkit";

export const todoSlice = createSlice({
  name: "TodoApp",
  initialState: {
    id:23,
    value:"Mango",
    color:"Yellow",
    statusVal:"IsPending",
    temp:[{
      id:23,
      value:"Mango",
      color:"yellow",
      statusVal:"IsPending",
    }],
  },
  reducers: {
    add: (state, action) => {
       // let newVal = action?.payload;
      let{id,value,color,statusVal,key}=action?.payload;
      let data={
        id,value,color,statusVal,key
      }
      let ar3=[];
      ar3=[...state.temp,data]
      state.temp=ar3;

      // state.value = action.payload;
      // let value = state?.temp;
      //  console.log(data);
    },
    del: (state, action) => {
      let ar1 = [...state.temp];
      let key = action.payload
      ar1 = state.temp;
      ar1.splice(key, 1)
      state.temp = ar1;
    },
    edit: (state, action) => {
     const {a,key}=action.payload;
     console.log(key);
     console.log(state.temp[key].value);
     state.temp[key].value=a;
    },
    statusFinder:(state,action)=> {
      const {a, key, color} = action.payload;
      state.temp[key].statusVal = a;
      if (state.temp[key].statusVal === "Cancelled")
        state.temp[key].color = "red";
      else if (state.temp[key].statusVal === "Done")
        state.temp[key].color = "green";
      else if (state.temp[key].statusVal === "IsPending")
        state.temp[key].color = "yellow";

    }
  }
})
export const {add, del, edit,statusFinder} = todoSlice.actions;
export default todoSlice.reducer;
