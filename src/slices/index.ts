import { createSlice } from "@reduxjs/toolkit";
import { ICharacter, IEpisode } from "../types/character";
import { createThunk } from "../hooks";
import { getEpisodes, getCharacters, getFilterCharacters } from "../services";
import type { PayloadAction } from "@reduxjs/toolkit";

export type charactersState = {
  characters: ICharacter[];
  loading: boolean;
  filter: string;
  page: number;
  favourites: ICharacter[];
  episodes: IEpisode[];
  episodesNumber: number[];
};

const initialState: charactersState = {
  characters: [],
  loading: false,
  filter: "",
  page: 1,
  favourites: [],
  episodes: [],
  episodesNumber: [],
};

export const loadCharacters = createThunk<ICharacter[], void>(
  "characters/fetchCharacters",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { page } = state.characters;
    return getCharacters(page.toString());
  }
);

export const loadFilterCharacters = createThunk<ICharacter[], void>(
  "charactersConfilter/fetchFilterCharacters",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { page, filter } = state.characters;
    return getFilterCharacters({
      page: page.toString(),
      name: filter.toString(),
    });
  }
);

export const loadEpisodes = createThunk<IEpisode[], void>(
  "episodes/fetchEpisodes",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const { episodesNumber } = state.characters;
    return getEpisodes(episodesNumber);
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    nextPage: (state) => {
      state.page += 1;
    },
    prevPage: (state) => {
      state.page -= 1;
    },
    resetPage: (state) => {
      state.page = 1;
    },
    filter: (state, action: PayloadAction<string>) => {
      state.filter = action.payload;
    },
    resetfilter: (state) => {
      state.filter = "";
    },
    addFav: (state, action: PayloadAction<ICharacter>) => {
      state.favourites = [...state.favourites, action.payload];
    },
    deleteFav: (state, action: PayloadAction<ICharacter>) => {
      state.favourites = state.favourites.filter(
        (character) => character.id !== action.payload.id
      );
    },
    resetFav: (state) => {
      state.favourites = [];
    },
    getEpisodes: (state, action: PayloadAction<number[]>) => {
      state.episodesNumber = action.payload;
    },
    resetEpisodes: (state) => {
      state.episodesNumber = [];
      state.episodes = [];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(loadCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.loading = false;
    });
    builder.addCase(loadCharacters.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(loadFilterCharacters.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadFilterCharacters.fulfilled, (state, action) => {
      state.characters = action.payload;
      state.loading = false;
    });
    builder.addCase(loadFilterCharacters.rejected, (state, action) => {
      state.loading = false;
    });
    builder.addCase(loadEpisodes.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(loadEpisodes.fulfilled, (state, action) => {
      state.episodes = action.payload;
      state.loading = false;
    });
    builder.addCase(loadEpisodes.rejected, (state, action) => {
      state.loading = false;
    });
  },
});
