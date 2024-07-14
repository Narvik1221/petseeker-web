import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Pet } from "../index";
import { petsApi } from "../index";
import { PetState } from "../index";

const initialState: PetState = {
  pets: [],
  loading: false,
  error: null,
};

const petsSlice = createSlice({
  name: "pets",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addMatcher(petsApi.endpoints.getPets.matchPending, (state) => ({
      ...state,
      loading: true,
      error: null,
    }));
    builder.addMatcher(
      petsApi.endpoints.getPets.matchFulfilled,
      (state, action: PayloadAction<Pet[]>) => ({
        ...state,
        pets: action.payload,
        loading: false,
      })
    );
    builder.addMatcher(
      petsApi.endpoints.getPets.matchRejected,
      (state, action) => ({
        ...state,
        error: action.error.message || "Failed to fetch cards",
        loading: false,
      })
    );
  },
});

export default petsSlice.reducer;
