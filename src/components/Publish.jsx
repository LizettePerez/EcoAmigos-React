import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Text from './TextArea';

export default function TextArea() {

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader
        avatar={
          <Avatar src={localStorage.getItem("profilePic")} aria-label="recipe">
            R
          </Avatar>
        }
        subheader="September 14, 2016"
        title={localStorage.getItem("name")}
      />
      <CardContent>
        <Text />
      </CardContent>

    </Card>
  );
}