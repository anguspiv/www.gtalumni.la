import React from 'react';
import styled from '@emotion/styled';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-bottom: 0.75rem;
`;

export function InputField(props) {
  return <Wrapper data-testid="input-field" {...props} />;
}

export default InputField;
