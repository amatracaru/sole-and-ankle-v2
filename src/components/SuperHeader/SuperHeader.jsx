import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import SearchInput from '../SearchInput';
import UnstyledButton from '../UnstyledButton';
import Icon from '../Icon';

const SuperHeader = () => {
  return (
    <Wrapper>
      <MarketingMessage>
        Free shipping on domestic orders over $75!
      </MarketingMessage>
      <RightNav>
        <SearchInput />
        <HelpLink href="/help">Help</HelpLink>
        <ShoppingBag>
          <Icon id="shopping-bag" strokeWidth={1} />
        </ShoppingBag>
      </RightNav>
    </Wrapper>
  );
};

const ShoppingBag = styled(UnstyledButton)`
  align-self: flex-end;
`;

const Wrapper = styled.div`
  font-size: 0.875rem;
  color: ${COLORS.gray[300]};
  background-color: ${COLORS.gray[900]};
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 12px 32px;
`;

const RightNav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  gap: 24px;
`;

const MarketingMessage = styled.span`
  color: ${COLORS.white};
`;

const HelpLink = styled.a`
  color: inherit;
  text-decoration: none;
  outline-offset: 2px;

  &:not(:focus-visible) {
    outline: none;
  }
`;

export default SuperHeader;
