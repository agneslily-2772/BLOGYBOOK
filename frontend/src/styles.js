import { makeStyles } from '@material-ui/core/styles';
export default makeStyles(() => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    border:'2px solid green',
  },
  heading: {
    color: '#b34151',
    fontFamily: 'cursive',
    fontWeight:'bold',
    
  },
  image: {
    marginLeft: '15px',
  },
}));
