import { createStyles, Fab, makeStyles, Typography } from "@material-ui/core";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import AddItemModal from "../components/AddItemModal";
import AppTodoList from "../components/AppTodoList";
import { getTodos } from "../store/actions";

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      maxWidth: 900,
      marginLeft: "auto",
      marginRight: "auto",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      alignContent: "center",
    },
    link:{
      textDecoration:"none"
    },
    button: {
      height:"fit-content",
      width: "100px",
      margin: "50px",


    },
  })
);

export default function Monitor() {
  let classes = useStyles();
  let dispatch = useDispatch();
  let todosList = useSelector((state) => Object.values(state.todos.todos));

  // Fetch tasks
  useEffect(() => {
    dispatch(getTodos());
  }, [dispatch]);

  // Hold state for if new item modal is open
  let [addItemModal, setAddItemModal] = useState(false);

  return (
    <div className={classes.root}>
      {todosList.length === 0 && (
        <Typography variant="h6">Como funcionamos monitor + form</Typography>
      )}
      <AppTodoList todosList={todosList} />
      <div className={classes.list} >
        
       
        <Fab color="primary" variant="extended" size="medium" className={classes.button}>
           <Link className={classes.link2} to='/quero-ser-monitor'>Quero ser monitor!</Link>
        </Fab>
        
      </div>

      {addItemModal && <AddItemModal onClose={() => setAddItemModal(false)} />}
    </div>
  );
}
