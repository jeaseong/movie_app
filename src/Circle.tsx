import React, { useState } from 'react';
import styled from 'styled-components';

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  height: 200px;
  width: 200px;
  background-color: ${(props) => props.bgColor};
  border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}
function Circle({ bgColor, borderColor, text = 'default text' }: CircleProps) {
  // state는 타입을 변환할 일이 거의 없다.
  const [value, setValue] = useState<number | string>(0);

  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? 'white'}>
      {text}
    </Container>
  );
}

export default Circle;
