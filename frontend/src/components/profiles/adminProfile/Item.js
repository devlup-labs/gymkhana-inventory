import React from 'react'
import { Box ,Button} from '@material-ui/core'



function Item (props) {
    var isClicked=true;
        return (
            <Box className='cards' style={{maxwidth: '18rem'}}>
                <Box className="cardContent">
                    <Box>
                        <p>Item Name: </p>
                        <p>ID: </p>
                    </Box>
                    <p>Requesting Date: </p>
                    <p>Due Date: </p>
                </Box>
                {isClicked===true?(<Box className='buttonAdmin'>
                    <Button variant="contained" color="primary">Approve</Button>
                    <Button variant="contained" color="primary">Deny</Button>    
                </Box>):null}
                
                <Box className="cardContent">
    
                    <p>Request Name: </p>
                    <p>Email ID: </p>
                    <p>Contact NO.: </p>
                </Box>  
                
            </Box>
    
    
    
        );
    
  }
  


export default Item;
