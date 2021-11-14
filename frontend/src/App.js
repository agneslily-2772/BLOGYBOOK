import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grid } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {AiFillPlusSquare} from 'react-icons/ai';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { getPosts } from './actions/actions';
import useStyles from './styles';
import memories from './images/book.png';
import styled  from 'styled-components';
import Modal from 'react-modal';
const ButtonContainer = styled.div`
  display: flex;
  font-size: 50px;
  position: absolute;
  top: 50px;
  right: 50px;
  cursor: pointer;
`
const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};
const App = () => {
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();
  const classes = useStyles();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }
  useEffect(() => {
    dispatch(getPosts());
  }, [currentId, dispatch]);
  return (
    <Container maxWidth="lg">
      <AppBar className={classes.appBar} position="static" color="inherit">
        <Typography className={classes.heading} variant="h2" align="center">BLOGYBOOK</Typography>
        <img className={classes.image} src={memories} alt="icon" height="60"/>
      </AppBar>
        <Container>
          <Grid container justify="space-between" alignItems="stretch" spacing={3}>
              <Posts setCurrentId={setCurrentId} /> 
              <ButtonContainer onClick={openModal}><AiFillPlusSquare></AiFillPlusSquare></ButtonContainer>                  
                <Modal isOpen={modalIsOpen} style={customStyles} onRequestClose={closeModal}>
        <Form currentId={currentId} setCurrentId={setCurrentId}/></Modal>
          </Grid>
        </Container>
    </Container>
  );
};
export default App;
