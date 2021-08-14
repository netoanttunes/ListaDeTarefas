import React, {useState} from 'react';
import _ from 'lodash';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import SendIcon from '@material-ui/icons/Send';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState(''); 
  
  const handleSetJobs = e => {
    e.preventDefault();
    if (novaTarefa !== ''){
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  }

  const handleChange = e => setNovaTarefa(e.target.value);

  const handleDelete = index => {
    const novasTarefas = _.remove(tarefas, (t, i) => {
      return i !== index;
    } )
    setTarefas(novasTarefas);
  } 

  return (  
     <div className="box">
       
       <h1>Lista de Tarefas</h1>
      
        <Paper elevation={3} className="paper">

          <form className="form" onSubmit={handleSetJobs}>
            
            <div className="input">
            <TextField               
              label="Tarefa" 
              variant="outlined"
              value={novaTarefa}
              onChange={handleChange}
              fullWidth="true"
            />          

            <Button 
              className="button"
              color="primary"
              type="submit"
              fontSize="large"
            >
              <SendIcon color="primary" fontSize="large" />
            </Button>
            </div>

          </form>

            <Table aria-label="customized table">
              <TableHead className='head'>
                <TableRow>
                  <TableCell><strong>TAREFAS</strong></TableCell>
                  <TableCell align="right"><strong>DELETAR</strong></TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {tarefas.map((tarefa, index) => (
                  <TableRow key={index}>
                    <TableCell>{tarefa}</TableCell>
                    <TableCell align="right">
                    <IconButton  color="primary" aria-label="upload picture" component="span">
                    <DeleteIcon
                        onClick={() => handleDelete(index)}                        
                        color="secondary"                       
                    />
                    </IconButton>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>

        </Paper>
    </div>
  );
}

export default App;
