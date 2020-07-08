import React from "react";
import { Link } from "react-router-dom";
import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    makeStyles
} from "@material-ui/core";
import { MoreVert } from "@material-ui/icons";
const useStyles = makeStyles(theme => ({
    iconbtn: { color: "#fff" }
}));
function Home() {
    const classes = useStyles();
    return (
        <div>
            <AppBar position="static">
                <Toolbar variant="dense">
                    <Typography variant="h6" style={{ flex: 1 }}>
                        Laravel React Starter
                    </Typography>
                    <IconButton>
                        <MoreVert className={classes.iconbtn} />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </div>
    );
}

export default Home;
