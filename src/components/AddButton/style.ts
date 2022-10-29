import styled from "styled-components/native"

export const AddButtonContainer = styled.TouchableOpacity`
  width: 40px;
  height: 40px;
  border-radius: 8px;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.aqua};
`
