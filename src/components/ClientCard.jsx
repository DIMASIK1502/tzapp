import React, { useCallback } from "react";
import Popover from "./Popover";
import Card from "../styled/Card";
import styled from "styled-components";
import Stack from "../styled/Stack";
import formatPrice from "../utils/formatPrice";
import dayjs from "dayjs";
import Wrap from "../styled/Warp";
import Flex from "../styled/Flex";

const Title = styled.h4`
  font-size: 22px;
  font-weight: bold;
  padding: 0;
  margin: 0;
  opacity: 0.75;
`;

const Price = styled.h5`
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 0.2px;
  padding: 0;
  margin: 0;
`;

const Organization = styled.h6`
  font-size: 16px;
  font-weight: bold;
  padding: 0;
  margin: 0;
`;

const Footer = styled.div`
  opacity: 0.5;
`;

const Inn = styled.h6`
  font-size: 14px;
  font-weight: bold;
  opacity: 0.5;
  padding: 0;
  margin: 0;
  text-transform: uppercase;
`;

const Tag = styled.div`
  font-size: 12px;
  color: white;
  padding: 8px 12px;
  background-color: #c5c7dc;
  border-radius: 20px;
  text-transform: uppercase;
`;
const GrayBox = styled.div`
  width: 100%;
  display: flex;
  min-height: 36px;
  padding: 12px 20px;
  font-size: 18px;
  background-color: #eaecf5;
  font-weight: bold;
  align-items: ${(props) => props.alignItems || "flex-start"};
`;
const TextElipsis = styled.div`
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ClientCard = ({
  inn = "",
  codeNumber = "",
  tags = [],
  user = {},
  date = "",
  status = "",
  organization,
  price = 0,
}) => {
  const renderContent = useCallback(() => {
    return (
      <Stack spacing="12px">
        <Wrap padding="0px 18px 18px 18px" spacing="12px">
          <Tag>{status}</Tag>
        </Wrap>
        <Wrap>
          <GrayBox alignItems="center">
            {user?.lastName} {user?.firstName.toUpperCase()[0]}.{" "}
            {user?.middleName.toUpperCase()[0]}.
          </GrayBox>
          <Wrap padding="18px" spacing="8px">
            {tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </Wrap>
          <Flex
            flexDirection="column"
            padding="8px 18px 18px 18px"
            width="100%"
            height="100%"
          >
            <Footer>
              <Wrap spacing="92px">
                <div>{codeNumber}</div>
                <div>от {dayjs(date).format("DD.MM.YYYY")}</div>
              </Wrap>
            </Footer>
          </Flex>
        </Wrap>
      </Stack>
    );
  }, [tags, status, user, date, codeNumber]);
  return (
    <Popover content={renderContent()}>
      <Card>
        <Stack spacing="12px">
          <Title>Проверить данные клиента</Title>
          <Price>{formatPrice(parseInt(price))} руб.</Price>
          <Organization>
            <Stack spacing="4px">
              <TextElipsis>{organization}</TextElipsis>
              <Inn>инн: {inn}</Inn>
            </Stack>
          </Organization>
          <Footer>
            <Wrap spacing="92px">
              <div>{codeNumber}</div>
              <div>от {dayjs(date).format("DD.MM.YYYY")}</div>
            </Wrap>
          </Footer>
        </Stack>
      </Card>
    </Popover>
  );
};

const ClientCardMemo = React.memo(ClientCard);

export default ClientCardMemo;
