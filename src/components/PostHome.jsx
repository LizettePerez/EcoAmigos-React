/*import { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

export default function RecipeReviewCard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/post/lista")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los posts:", error);
      });
  }, [setPosts]);

  return (
    <div className="postContainer">
      {posts.map((post) => (
        <Card
          key={post.id}
          sx={{ maxWidth: 345, borderRadius: 5 }}
          className="cardContainer"
        >
          <CardHeader
            avatar={
              <Avatar
                alt="avatar"
                src={localStorage.getItem("profilePic")}
                aria-label="recipe"
              ></Avatar>
            }
            action={
              <div>
                <IconButton aria-label="settings" onClick={handleMenuClick}>
                  <MoreVertIcon />
                </IconButton>
              </div>
            }
            subheader={
              <Typography variant="body2">{post.postFechaCreado}</Typography>
            }
            title={localStorage.getItem("name")}
          />
          <CardContent>
            <Typography variant="body2" color="text.secondary">
              {post.postTexto}
            </Typography>
          </CardContent>
          <CardActions disableSpacing>
            <IconButton aria-label="add to favorites">
              <FavoriteBorderIcon />
            </IconButton>
          </CardActions>
        </Card>
      ))}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div
          className="menu-options"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Button
            style={{
              display: "flex",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#1b5e20",
            }}
            onClick={handleCloseMenu}
          >
            <EditIcon
              sx={{ fontSize: 18, margin: "0 2px 0 0", color: "#1b5e20" }}
            />
            Editar
          </Button>
          <Button
            style={{
              display: "flex",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#1b5e20",
            }}
            onClick={handleCloseMenu}
          >
            <DeleteForeverIcon
              sx={{ fontSize: 18, margin: "0 2px 0 0", color: "#1b5e20" }}
            />
            Borrar
          </Button>
        </div>
      </Popover>
    </div>
  );
}

function MenuItem({ text }) {
  return <div className="menu-item">{text}</div>;
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
};*/

import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import PropTypes from "prop-types";
import axios from "axios";
import EditIcon from "@mui/icons-material/Edit";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

// Nuevo componente para representar una tarjeta de post individual
function PostCard({ post, onLikeClick }) {
  const [isLiked, setIsLiked] = useState(false);

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    onLikeClick(post.id);
  };

  return (
    <Card
      key={post.id}
      sx={{ maxWidth: 345, borderRadius: 5 }}
      className="cardContainer"
    >
      <CardHeader
        avatar={
          <Avatar
            alt="avatar"
            src={localStorage.getItem("profilePic")}
            aria-label="recipe"
          ></Avatar>
        }
        action={
          <div>
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          </div>
        }
        subheader={
          <Typography variant="body2">{post.postFechaCreado}</Typography>
        }
        title={localStorage.getItem("name")}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {post.postTexto}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" onClick={handleLikeClick}>
          {isLiked ? <FavoriteIcon /> : <FavoriteBorderIcon />}
        </IconButton>
      </CardActions>
    </Card>
  );
}

export default function RecipeReviewCard() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [posts, setPosts] = useState([]);

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    axios
      .get("http://localhost:8080/post/lista")
      .then((response) => {
        setPosts(response.data);
      })
      .catch((error) => {
        console.error("Error al cargar los posts:", error);
      });
  }, []);

  const handleLikeClick = (postId) => {
    // Realiza aquí la solicitud Axios para registrar el "Me gusta" en la base de datos
    axios.post("http://localhost:8080/post/like/{id}", { postId });
  };

  return (
    <div className="postContainer">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} onLikeClick={handleLikeClick} />
      ))}
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleCloseMenu}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
      >
        <div
          className="menu-options"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Button
            style={{
              display: "flex",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#1b5e20",
            }}
            onClick={handleCloseMenu}
          >
            <EditIcon
              sx={{ fontSize: 18, margin: "0 2px 0 0", color: "#1b5e20" }}
            />
            Editar
          </Button>
          <Button
            style={{
              display: "flex",
              justifyContent: "flex-start",
              textTransform: "none",
              color: "#1b5e20",
            }}
            onClick={handleCloseMenu}
          >
            <DeleteForeverIcon
              sx={{ fontSize: 18, margin: "0 2px 0 0", color: "#1b5e20" }}
            />
            Borrar
          </Button>
        </div>
      </Popover>
    </div>
  );
}

function MenuItem({ text }) {
  return <div className="menu-item">{text}</div>;
}

MenuItem.propTypes = {
  text: PropTypes.string.isRequired,
};
