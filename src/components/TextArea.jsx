import { TextareaAutosize as BaseTextareaAutosize } from '@mui/base/TextareaAutosize';
import { styled } from '@mui/system';

export default function Text() {
  const green = {
    100: '#C1E1A3',
    200: '#A6D18B',
    300: '#8BAB6D',
    400: '#6F864E',
    500: '#547130',
    600: '#445D22',
    700: '#314617',
    800: '#253A11',
    900: '#1A2E0B',
  };

  const grey = {
    100: '#EAEFF3',
    200: '#CED5DC',
    300: '#ABB3C4',
    400: '#8996AB',
    500: '#6C7B92',
    600: '#576278',
    700: '#434F63',
    800: '#333E50',
    900: '#242E3E',
  };


  const Textarea = styled(BaseTextareaAutosize)(
    ({ theme }) => `
    width: 320px;
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.5;
    padding: 12px;
    border-radius: 12px 12px 0 12px;
    color: ${theme.palette.mode === 'dark' ? grey[300] : grey[900]};
    background: ${theme.palette.mode === 'dark' ? grey[900] : '#fff'};
    border: 1px solid ${theme.palette.mode === 'dark' ? grey[700] : grey[200]};
    box-shadow: 0px 2px 2px ${theme.palette.mode === 'dark' ? grey[900] : grey[50]};
    resize: none;

    &:hover {
      border-color: ${green[400]};
    }

    &:focus {
      border-color: ${green[400]};
      box-shadow: 0 0 0 3px ${theme.palette.mode === 'dark' ? green[500] : green[200]};
    }

    // firefox
    &:focus-visible {
      outline: 0;
    }
  `,
  );

  return (
    <Textarea aria-label="minimum height" minRows={3} placeholder="Minimum 3 rows" />
  );
}