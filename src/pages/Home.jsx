import Container from "../styled/Container";
import Header from "../components/Header";
import ClientGrid from "../components/ClientGrid";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getClients } from "../store/slices/clients";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClients());
  }, [dispatch]);

  return (
    <>
      <Header />
      <Container padding="16px 16px 200px 16px">
        <ClientGrid />
      </Container>
    </>
  );
}
