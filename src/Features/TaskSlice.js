import { createSlice } from "@reduxjs/toolkit";
export const TaskSlice = createSlice({
    name:'tasks',
    initialState:{
        task:{Title:'',descrip:'',due:''},
        List:[],
        edit:false,
        editID:null,
        Alert: {show:false,msg: "",type: ""},
        Active:'All'
    },
    reducers:{
        editList: (state,action)=>{
            const {due,Title,descrip} = action.payload
            const tasktodate = state.List.find((task)=>task.id === state.editID)
            if(tasktodate){
                tasktodate.Title = Title;
                tasktodate.descrip = descrip;
                tasktodate.due = due;
            }
            state.edit = false
            state.editID = null

        },
        newitem:(state,action)=>{
             const {id,due,Title,descrip} = action.payload
            state.List= [...state.List,{id: new Date().getTime().toString(),
            done:false,Title,descrip,due}]
            state.task = {Title:'',descrip:'',due:''}
            state.edit = false
            state.editID = null
        },
        deleteItem:(state,action)=>{
            const Taskid = action.payload
            state.List =state.List.filter((task)=>task.id !== Taskid) 
        },
        Startedit:(state,action)=>{
            const id = action.payload
             const specificItem = state.List.find((task) => task.id === id);
            state.task.Title = specificItem.Title
            state.task.descrip = specificItem.descrip
            state.task.due = specificItem.due
            state.edit = true;
            state.editID = id;
        },
        Markdone:(state,action)=>{
             const id = action.payload
            const item = state.List.find((task)=>task.id === id)
            if(item){
                item.done =true
            }
        },
        handleChange:(state,action)=>{
            const {field,value} = action.payload
            state.task[field] = value
        },
        SetAlert:(state,action)=>{
            const {show,msg,type} = action.payload
            state.Alert = {show,msg,type}
        },
       setActive:(state,action)=>{
        const id = action.payload
        state.Active = id
       }
       

      
    }
})
export const {Markdone,Startedit,deleteItem,newitem,editList,handleChange,SetAlert,setActive} = TaskSlice.actions

export default TaskSlice.reducer;