import * as React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Button from '@mui/material/Button';




const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: "90%",
  height: "90%",
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export default function InformationModal({children, id, thumbnail, title, description, events, comics, copyright}) {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);






  return (
    <div>
      <Button onClick={handleOpen}>
        {children}
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
              <div className='w-full h-full overflow-y-auto'>
              <div>
                <h1 className='font-bold'>Title</h1>
                <p className='text-center p-3 uppercase'>{title}</p>
              </div>
              <div>
               <h1 className='font-bold pt-3'>Description</h1> 
               <p className='text-left p-3'>{description}</p> 
               </div>
               <div>
                 <h1 className='font-bold pt-3'>Comic Series</h1>
                 <p className='text-center p-3'>{/* <li>{comics}</li> */}</p>
               </div>
               
              <div className='fixed text-center inset-x-0 bottom-0'>
               <h1>{copyright}</h1>
               </div>
               </div>
           
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}
