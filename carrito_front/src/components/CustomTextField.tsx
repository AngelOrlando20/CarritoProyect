import styled from "@emotion/styled";
import { OutlinedInputProps, TextField, TextFieldProps, alpha } from "@mui/material";

export const CustomTextField = styled((props: TextFieldProps) => (
  <TextField
    InputProps={{ disableUnderline: true } as Partial<OutlinedInputProps>}
    {...props}
  />
))(({ theme }: any) => ({
  '& .MuiFilledInput-root': {
    overflow: 'hidden',
    borderRadius: 4,
    backgroundColor: theme.palette.mode === 'light' ? 'blue' : 'green',
    border: '1px solid',
    borderColor: theme.palette.secondary.A100,
    transition: theme.transitions.create([
      'border-color',
      'background-color',
      'box-shadow',
    ]),
    '&.Mui-focused': {
      backgroundColor: 'transparent',
      boxShadow: `${alpha(theme.palette.secondary.A100, 0.25)} 0 0 0 2px`,
      borderColor: theme.palette.secondary.A100,
    },
  },
}));

