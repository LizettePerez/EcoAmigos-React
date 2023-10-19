import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Text from './TextArea';
import PostImg from "../assets/postimg.png";
import PostHome from "../components/PostHome";


export default function TextArea() {

  return (
    <div className="container">
      <img src={PostImg} alt="PostImg" />
      <div className='cardPost'>
        <Card sx={{ maxWidth: 345, borderRadius: 5 }}>
          <CardHeader sx={{ margin: '0 0 -10px 0' }}
            avatar={
              <Avatar src={localStorage.getItem("profilePic")} aria-label="recipe">
              </Avatar>
            }
            title={localStorage.getItem("name")}
          />
          <CardContent >
            <Text />
          </CardContent>

        </Card>
        <PostHome />
      </div>
    </div >
  );
}