import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

type TRepository = {
  id: number;
  name: string;
};

type TRepositoryResponse = TRepository[];

export const repositoryApi = createApi({
  reducerPath: "repositoryApi",
  tagTypes: ["Repos"],
  baseQuery: fetchBaseQuery({
    baseUrl: "https://api.github.com/users/Luizkrlz",
  }),
  endpoints: (builder) => ({
    getAll: builder.query<TRepositoryResponse, void>({
      query: () => "repos",
    }),
  }),
});

export const { useGetAllQuery } = repositoryApi;
