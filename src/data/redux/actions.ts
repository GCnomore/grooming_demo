import { createAsyncThunk } from "@reduxjs/toolkit";
// import { getAllBreeds } from "../../service/services";
// import { fetchStore } from "../../service/client";

// import tryCatch from "../../util/tryCatch";
// import IBreed from "../models/breed.model";
// import upperAllFirst from "../../util/upperAllFirst";
import { RootSlice } from "./appointmentSlice";

// export const getGroomingStore = createAsyncThunk(
//   "store/getStore",
//   async (storeId: string) => {
//     const [error, res] = await tryCatch(fetchStore, storeId);
//     if (error) {
//       console.log(error);
//     } else {
//       return res.data.data;
//     }
//   }
// );

// export const getBreeds = createAsyncThunk(
//   "breed/getBreeds",
//   async (_, { dispatch }) => {
//     const [error, res] = await tryCatch(getAllBreeds);

//     if (error) {
//       console.log(error);
//     } else {
//       const breeds: IBreed[] = res.data.data.map((item: IBreed)=> {
//         item = {
//           ...item,
//           name: upperAllFirst(item.name),
//         };
//         return item;
//       });
//       dispatch(setBreeds(breeds));
//       return breeds;
//     }
//   }
// );

export const createAppointment = createAsyncThunk(
  'appointment/create',
  async (_, { getState }) => {
    const state = getState() as RootSlice;
    console.log(state)
  }
);