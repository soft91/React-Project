import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SaveIcon from '@material-ui/icons/Save';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="title"
            label="제목을 입력하세요."
            type="email"
            fullWidth
          />
          <TextareaAutosize style = {{width:'100%'}} aria-label="minimum height" rows={3} placeholder="내용을 입력하세요." />
        </DialogContent>
        <DialogActions>
            <Button variant = "contained" color = "primary" onClick={handleClose} startIcon={<SaveIcon />}>
                저장
            </Button>
            <Button variant = "contained" color = "secondary" onClick={handleClose}>
                취소
            </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}