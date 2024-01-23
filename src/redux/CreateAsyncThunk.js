// CreateAsyncThunk.js
import { createAsyncThunk } from "@reduxjs/toolkit";
import { Api } from "../api/Api";
import { getPeopleId, getPeopleImage } from "../services/getPeopleData";
import { useState } from "react";


export const getApi = createAsyncThunk(
    'main/getApi',
    async ({ page }, { rejectWithValue }) => {
        try {
            const res = await Api.getPeople(page);
            const peopleList = res.data.results.map(({ name, url }) => {
                const id = getPeopleId(url);
                const img = getPeopleImage(id);
                return { id, name, img };
            });

            return peopleList;


        } catch (error) {
            return rejectWithValue(error.message);
        }
    }
);