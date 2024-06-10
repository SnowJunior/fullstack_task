import { Button, ButtonProps } from "@mui/material";
import { purple } from "@mui/material/colors";
import { styled } from "@mui/material/styles";

export const AssignButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: '#5ACCCC',
  '&:hover': {
    backgroundColor: '#4AA088',
  },
}));

export const RemoveButton = styled(Button)<ButtonProps>(() => ({
  color: 'red',
  backgroundColor: '#FFE6DC',
  '&:hover': {
    backgroundColor: '#F76434',
    color: 'white'
  },
}));