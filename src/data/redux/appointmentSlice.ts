import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import IStore from "../models/store.model";
import ICustomer, { IRegisterCustomer, toCustomer, toRegisterCustomer } from "../models/customer.model";
import IBreed from "../models/breed.model";
import IPet from "../models/pet.model";
import upperAllFirst from "../../util/upperAllFirst";
import _ from "lodash";
import IUser from "../models/user.model";

export interface RootSlice {
  groomingShop: IStore | null;
  apptTime: string | null;
  apptDate: Date | null;
  customer: ICustomer | null;
  registerCustomer: IRegisterCustomer | null;
  breeds?: IBreed[];
  totalPetCount: number;
  currentPetCount: number;
  service: any[];
  showLoginModal: boolean;
  user: IUser | null;
  auth: boolean;
}

const initialState: RootSlice = {
  totalPetCount: 1,
  currentPetCount: 1,
  groomingShop: null,
  apptTime: null,
  apptDate: new Date(),
  customer: null,
  registerCustomer: null,
  breeds: [],
  service: ['trim'],
  showLoginModal: false,
  user: null,
  auth: false,
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setStore: (state, action: PayloadAction<IStore>) => {
      state.groomingShop = action.payload;
    },

    setApptTime: (state, action: PayloadAction<string>) => {
      state.apptTime = action.payload;
    },

    setApptDate: (state, action: PayloadAction<Date>) => {
      state.apptDate = action.payload;
      state.apptTime = null;
    },

    setCustomer: (state, action: PayloadAction<Partial<ICustomer>>) => {
      state.customer = { ...toCustomer(action.payload), pet: state.customer?.pet ?? [] };
    },

    setRegisterCustomer: (state, action: PayloadAction<Partial<IRegisterCustomer>>) => {
      state.registerCustomer = { 
        ...toRegisterCustomer({...state.registerCustomer, ...action.payload}), 
        pet: state.registerCustomer?.pet ?? [] 
      };
    },

    addPet: (state, action: PayloadAction<IPet>) => {
      if(state.customer) {
        state.customer.pet = [...state.customer.pet, action.payload];
      }
    },
    setPet: (state, action: PayloadAction<IPet | null>) => {
      if(state.customer) {
        if(action.payload) {
          state.customer.pet = [action.payload];
        } else {
          state.customer.pet = [];
        }
      }
    },
    setRegisterPet: (state, action: PayloadAction<Partial<IPet>[]>) => {
      if(state.registerCustomer && action.payload) {
        state.registerCustomer.pet = action.payload;
      }
    },

    editPet: (state, action: PayloadAction<{pet: IPet, index: number}>) => {
      if(state.customer) {
        state.customer.pet[action.payload.index] = action.payload.pet;
      }
    },

    setTotalPetCount: (state, action: PayloadAction<number>) => {
      state.totalPetCount = action.payload;
    },

    setCurrentPetCount: (state, action: PayloadAction<number>) => {
      state.currentPetCount = action.payload;
    },

    setBreeds: (state, action: PayloadAction<IBreed[]>) => {
      action.payload = _.cloneDeep(action.payload).map((i)=> {
        i.name = upperAllFirst(i.name);
        return i;
      });
      state.breeds = action.payload;
    },

    setLoginModal: (state, action: PayloadAction<boolean>) => {
      state.showLoginModal = action.payload;
    },

    setAuth: (state, action: PayloadAction<boolean>) => {
      state.auth = action.payload;
    },

    setUser: (state, action: PayloadAction<IUser>)=> {
      state.user = action.payload;
    },

    clearAppoitnmentState: (state) => {
      state.totalPetCount = 1;
      state.currentPetCount = 1;
      state.apptTime = null;
      state.apptDate = new Date();
      state.customer = null;
      state.registerCustomer = null;
      state.service = ['trim'];
    }
  },
  extraReducers() {
    // builder.addCase(getGroomingStore.fulfilled, (state, action) => {
    //   state.groomingShop = action.payload;
    // });
    // builder.addCase(getBreeds.fulfilled, (state, action) => {
    //   state.breeds = action.payload ?? [];
    // });
    
  },
});

export default appointmentSlice.reducer;
export const { 
  setStore, 
  setApptTime, 
  setApptDate, 
  setCustomer, 
  setRegisterCustomer,
  setPet,
  addPet,
  setRegisterPet,
  editPet,
  setTotalPetCount, 
  setCurrentPetCount, 
  setBreeds,
  setLoginModal,
  setAuth,
  setUser,
  clearAppoitnmentState
} = appointmentSlice.actions;
