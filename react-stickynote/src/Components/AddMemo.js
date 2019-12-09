import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import SaveIcon from '@material-ui/icons/Save';
import axios from 'axios';

export default class AddMemo extends React.Component {
  constructor(props){
    super(props);

    this.addMemo = this.addMemo.bind(this);
  }

  // 메모내용 DB 추가
  addMemo(){
    axios.post('http://localhost:4000/add', {
      title : document.getElementById('title').value,
      content : document.getElementById('content').value
    })
      .then(response => {
        console.log(response.data);
        this.props.close();
       }).catch(err => {
        console.error('fetch failed', err);
      });
  }

  render(){
    return (
      <div>
        <Dialog open={this.props.open} aria-labelledby="form-dialog-title">
          <DialogContent>
            <TextField
              autoFocus
              margin="dense"
              id="title"
              label="제목을 입력하세요."
              type="email"
              fullWidth
            />
            <TextareaAutosize id = "content" style = {{width:'100%'}} aria-label="minimum height" rows={10} placeholder="내용을 입력하세요." />
          </DialogContent>
          <DialogActions>
              <Button variant = "contained" color = "primary" onClick={this.addMemo} startIcon={<SaveIcon />}>
                  저장
              </Button>
              <Button variant = "contained" color = "secondary" onClick={this.props.close}>
                  취소
              </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}