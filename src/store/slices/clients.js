import { createSelector, createSlice } from "@reduxjs/toolkit";
import { fetchClients } from "../../services/clientsService";
import paginator from "../../utils/paginator";

export const clientSlice = createSlice({
  name: "clients",
  initialState: {
    data: [],
    page: 1,
    pageSize: 20,
    totalPages: 1,
    loading: false,
  },
  reducers: {
    setClients: (state, action) => {
      state.data = action.payload?.data || state.data;
      state.page = action.payload?.page || state.page;
      state.pageSize = action.payload?.pageSize || state.pageSize;
      state.totalPages = action.payload?.totalPages || state.totalPages;
    },
    toggleLoading: (state, action) => {
      state.loading = action.payload ?? !state.loading;
    },
  },
});

export const { setClients, toggleLoading } = clientSlice.actions;

export const getClients =
  (page = 1, pageSize = 20, org = null, codeNumber = null) =>
  (dispatch) => {
    
    //Представим что у нас запрос может принимать параметры для фильтрации.
    //Мог бы сделать и хранение полного спика и локальный поиск.
    //Но решил сделать так, локальный поиск после запроса. Для имитации запроса на сервер с параметрами

    dispatch(toggleLoading());
    fetchClients()
      .then((res) => {
        if (org && codeNumber) {
          res.data = res.data.filter((client) => {
            return (
              org &&
              client?.organization
                ?.toLowerCase()
                ?.includes(org.toLowerCase()) &&
              codeNumber &&
              client?.codeNumber?.includes(codeNumber)
            );
          });
        } else if (org) {
          res.data = res.data.filter((client) => {
            return (
              org &&
              client?.organization?.toLowerCase()?.includes(org.toLowerCase())
            );
          });
        } else if (codeNumber) {
          res.data = res.data.filter((client) => {
            return codeNumber && client?.codeNumber?.includes(codeNumber);
          });
        }
        dispatch(setClients(paginator(res.data, page, pageSize)));
        dispatch(toggleLoading());
      })
      .catch((err) => {
        dispatch(toggleLoading());
        console.log("fetchClients error", err);
      });
  };

export const clientsWithPaginSelector = createSelector(
  [(state) => state.clients],
  (clients) => {
    return {
      page: clients.page,
      pageSize: clients.pageSize,
      totalPages: clients.totalPages,
      count: clients.data.length,
      data: clients.data,
    };
  }
);

export default clientSlice.reducer;
