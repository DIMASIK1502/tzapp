import { useDispatch } from "react-redux";
import { getClients } from "../store/slices/clients";

import Container from "../styled/Container";
import SearchInput from "./SearchInput";
import { useCallback, useState } from "react";
import Wrap from "../styled/Warp";

export const Header = () => {
  const [orgInput, setOrgValue] = useState("");
  const [numberInput, setNumberValue] = useState("");
  const dispatch = useDispatch();

  const onOrgSearch = useCallback(
    (value) => {
      setOrgValue(value);
      dispatch(getClients(1, 20, value, numberInput));
    },
    [numberInput, dispatch]
  );

  const onNumberSearch = useCallback(
    (value) => {
      setNumberValue(value);
      dispatch(getClients(1, 20, orgInput, value));
    },
    [dispatch, orgInput]
  );

  return (
    <Container padding="16px 16px 8px 16px">
      <Wrap spacing="16px">
        <SearchInput
          onChangeDebounce={onOrgSearch}
          placeholder="Поиск по наименованию клиента"
        />
        <SearchInput
          onChangeDebounce={onNumberSearch}
          placeholder="Поиск по номеру заявки"
        />
      </Wrap>
    </Container>
  );
};
export default Header;
