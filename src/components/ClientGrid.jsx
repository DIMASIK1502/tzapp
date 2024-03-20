import { useDispatch, useSelector } from "react-redux";
import {
  clientsWithPaginSelector,
  getClients,
} from "../store/slices/clients";
import { useCallback } from "react";
import ClientCard from "./ClientCard";
import Grid from "../styled/Grid";
import Pagination from "../components/Pagination";
import LoaderDots from "./LoaderDots";
import Flex from "../styled/Flex";
const ClientGrid = () => {
  const dispatch = useDispatch();
  const { data, page, pageSize, totalPages, count } = useSelector(
    clientsWithPaginSelector
  );

  const loading = useSelector((state) => state.clients.loading);

  const showPagination = count > 0 && totalPages > 1;

  const renderItems = useCallback(
    () =>
      data.map((client) => (
        <ClientCard key={`${client.inn}${client.codeNumber}`} {...client} />
      )),
    [data]
  );

  const onPageChange = useCallback(
    (page) => {
      dispatch(getClients(page));
    },
    [dispatch]
  );

  const renderPagination = useCallback(
    () => (
      <Pagination
        page={page}
        pageSize={pageSize}
        totalPages={totalPages}
        onPageChange={onPageChange}
      />
    ),
    [page, pageSize, totalPages, onPageChange]
  );
  return (
    <div>
      <Flex
        justifyContent="space-between"
        alignItems="center"
        margin="0 0 16px 0"
        gap="16px"
      >
        <Flex alignItems="center">{showPagination && renderPagination()}</Flex>
        {loading && <LoaderDots />}
      </Flex>

      <Grid padding="0 0 16px 0">{renderItems()}</Grid>
      {showPagination && renderPagination()}
      {count === 0 && !loading ? <h2>Ничего не найдено</h2> : null}
    </div>
  );
};
export default ClientGrid;
