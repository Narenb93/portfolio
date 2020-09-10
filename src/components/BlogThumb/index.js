import React, {useEffect, useState} from 'react'
import { styled, makeStyles } from '@material-ui/core/styles';
import {Paper as MuiPaper, Button as MuiButton, Avatar, Container } from '@material-ui/core';
import OpenInNewIcon from '@material-ui/icons/OpenInNew';
import { Autorenew } from '@material-ui/icons';
import EllipsisText from "helpers/EllipsisText";

const Paper = styled(MuiPaper)({
    position: 'relative',
    width: 300,
    height: 300,
    background: 'white',
    borderRadius: '5px',    
    backgroundSize: 'cover'

})
const paperAfterStyles = makeStyles({
    root:{
        opacity: 0.1,
        width: 300,
        height: 300,
        position: 'absolute',
        borderRadius: 5,
        background: 'linear-gradient(0deg, rgba(255,255,255,0) 20%, rgba(0,0,0,0.6278886554621849) 38%)',
        transition: 'opacity 0.3s ease-in-out',
        '&:hover': {
            opacity: 1
        },
        zIndex: 1
    }    
})
const BlogCard = styled(Container)({
    width: 300,
    height: 300,
    padding: 0,
    margin: '10px 0px 10px 0px'
})

const Button = styled(MuiButton)({
    color: 'rgba(255, 255, 255, 0.87)'
})

const useStyles = makeStyles({
    footer:{
        position: 'absolute',
        bottom: 0,
        height: '30%',
        width: '100%'
    },
    title:{
        color: 'white',
        padding: '0px 10px 10px 20px',
        '& p': {
            margin: 0,
            maxWidth: '90%',
            overflow: 'hidden'
        },
        overflow: 'hidden',
        whiteSpace: 'nowrap',
        zIndex: 10000
    },
    actions: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 100,
        width: 'auto',
        padding: '8px 10px 0 20px',
    },
    user:{

    },
    open:{
        width: 30,
        height: 30,
        padding: '8px 10px 0 20px'
    }
})
const BlogThumb = (props) => {
    const classes = useStyles()
    const vignetteStyle = paperAfterStyles()
    return(
        <BlogCard>
            <div className={vignetteStyle.root}></div>
            <Paper style={{backgroundImage: 'linear-gradient(0deg, rgba(0,0,0,1) 10%, rgba(255,255,255,0) 40%), url('+ props.background +')'}}>            
                <div className={classes.footer}>
                    <div className={classes.title}>
                    <EllipsisText text={props.title} length={"35"} />                     
                    </div>
                    <div className={classes.actions}>
                        <div className={classes.user}>
                            <Avatar alt={props.authorName} src={props.authorImg} />
                        </div>
                        <div className={classes.open}>
                        <Button
                            startIcon={<OpenInNewIcon />}
                            href={props.url}
                        />                        
                        </div>
                    </div>
                </div>
            </Paper>
        </BlogCard>
    )
}

export default BlogThumb
