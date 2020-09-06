import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    backgroundColor:"#37474f",
    color:"white",
    padding:"10px"
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)"
  },
  title: {
    fontSize: 14,
    fontWeight:"bold"
  },
  pos: {
    marginBottom: 12
  }
});
const Post = (props) => {
  const { id, userId, title,body } = props.post;
  const classes = useStyles();
  return (
    <Box my={3} width="95%" bgcolor="pink" ml={3}>
    <Card className={classes.root}>
      <CardContent>
        <Typography
          className={classes.title}
          gutterBottom
        >
          <h4>Post id is:{id}</h4>
        </Typography>
        <Typography variant="h5" component="h2"></Typography>
        <Typography className={classes.pos} color="#f57c00">
          <h4>User id is:{userId}</h4>
        </Typography>
        <Typography variant="body2" component="p">
            {title}
          <br />
          <br/>
          {body}
        </Typography>
      </CardContent>
      <CardActions >
         <Link to={`/post/${id}`}>
           <Button size="small"  variant="contained" color="primary" >see more</Button>
          </Link>
      </CardActions>
    </Card>
    </Box>
  );
};
export default Post;