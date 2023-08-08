import { Input, InputProps } from '@mui/joy';
import styled from '@mui/joy/styles/styled';
import { PropsWithChildren } from 'react';
import { WookSizeType } from '@/config/type/common.type';

export interface WookInputProps extends InputProps {
  width?: WookSizeType;
  height?: WookSizeType;
}

const WookInput: React.FC<PropsWithChildren<WookInputProps>> = (props) => {
  const { children } = props;

  return <CustomInputStyle {...props}>{children}</CustomInputStyle>;
};
export default WookInput;

const CustomInputStyle = styled(Input) <WookInputProps>`
`;
