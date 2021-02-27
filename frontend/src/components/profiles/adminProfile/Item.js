import React from 'react'
import { Box ,Button} from '@material-ui/core'



function Item (props) {
    var isClicked=true;
        return (
            <Box className='cards' style={{maxwidth: '18rem'}}>
                <Box className="cardContent">
                    <Box>
                        <p>Item Name: Abc</p>
                        <p>ID: x</p>
                    </Box>
                    <p>Requesting Date: dd-mm-yy</p>
                    <p>Due Date: dd-mm-yy</p>
                </Box>
                {isClicked===true?(<Box className='buttonAdmin'>
                    <Button variant="contained" color="primary">Approve</Button>
                    <Button variant="contained" color="primary">Deny</Button>    
                </Box>):null}
                
                <Box className="cardContent">
    
                    <p>Request Name: Abc</p>
                    <p>Email ID: abc@iitj</p>
                    <p>Contact NO.: 123456789</p>
                </Box>  
                
            </Box>
    
    
    
        );
    
  }
  


export default Item;
