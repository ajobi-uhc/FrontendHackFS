
import React,{useState,useEffect, Component} from 'react'

import {makeStyles} from '@material-ui/core/styles';
import { Button, FormControl,Grid,TextField,Select,MenuItem, Container } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import AddIcon from'@material-ui/icons/Add'

import { Typography } from '@material-ui/core';
import Add from '@material-ui/icons/Add';

const useStyles = makeStyles((theme)=>({}))

class Form2 extends Component {
    continue = e => {
        e.preventDefault();
        this.props.goNextPage();
      };

    onemore = e =>{
        this.setState({count : this.state.count + 1})
    }
    constructor() {
        super();
        this.state = {
            count: 1,
          disabled: false
        };
      }
render(){
    const {values, handleChange} = this.props
    
    return(
<form  className = "else"  noValidate autoComplete="off">
        <div className = "formpt1" >
               <div className = "filler"></div>
                    <Typography gutterBottom variant="h4" className = "mainTitle">Submit a paper</Typography>
            
                    <Container className = "titleContainer1" >
                      
            <Typography className = "Typography" variant = "h6">
                Who worked on this paper with you?
            </Typography>
            {this.state.count >= 1 && <TextField margin = "dense" id="filled-basic" label="Author 1" variant="filled" value = {values.author} className = "textfield" onChange = {handleChange("author")}  />}
            {this.state.count >= 2 &&  <TextField  margin = "dense" id="filled-basic" label="Author 2" variant="filled" value = {values.author} className = "textfield" onChange = {handleChange("author")}  />}
           {this.state.count >= 3 && <TextField    margin = "dense" id="filled-basic" label="Author 3" variant="filled" value = {values.author} className = "textfield" onChange = {handleChange("author")}  />}
             {this.state.count >= 4 && <TextField  margin = "dense" id="filled-basic" label="Author 4" variant="filled" value = {values.author} className = "textfield" onChange = {handleChange("author")}  />} 
              {this.state.count >= 5 && <TextField  margin = "dense" id="filled-basic" label="Author 5" variant="filled" value = {values.author} className = "textfield" onChange = {handleChange("author")}  />}
              
              {/* <div className = "helperDiv1">
        <Typography>Fill in the full name of the authors</Typography>
              </div> */}
             
              </Container>
        
        
              <Container className = "titleContainer3">
              <Typography className = "Typography" variant = "h6">
               Specify the validator tip (ETH)
            </Typography>
              <TextField  margin = "dense" id = "outlined-basic" label="Validator tip" variant="filled" defaultValue = {values.validatorTip} className = "textfield" onChange = {handleChange("validatorTip")}  />
              {/* <TextField margin = "dense" id = "outlined-basic" label="Validator tip" variant="filled" value = {Subject} className = "textfield" onChange = {handleInputChangeSubject}  />
              <TextField margin = "dense" id = "outlined-basic" label="Validator tip" variant="filled" value = {Subject} className = "textfield" onChange = {handleInputChangeSubject}  /> */}

              <AddIcon onClick = {this.onemore} fontSize = "large" className = "addicon"></AddIcon>
              
              <div className = "helperDiv1">
        <Typography gutterBottom variant="h8">Please enter a number between 0 and 1<br></br>
            Default is 0.2
        </Typography>
              </div>
              </Container>
              <Button
         
         label="Submit"
         onClick={this.continue}
       >
         Continue
       </Button>
                  
                   
                
             </div>
            </form>     

    )
}
}

//     const [formopen, setFormOpen] = useState(false)
// let [count, setCount] = useState(1)
//     const classes = useStyles()
//     // const [values,setValues] = useState(initialFValues);
//     const [namevalue, setNameValue] = useState('');
//     const [Titlevalue1,setTitlevalue1] = useState('');
//     const [Titlevalue2,setTitlevalue2] = useState('')
//     const [Titlevalue3,setTitlevalue3] = useState('')
//     const [Titlevalue4,setTitlevalue4] = useState('')
//     const [Titlevalue5,setTitlevalue5] = useState('')
//     const [Subject,setSubjectValue] = useState('')
//     const [Citations,setCitationsValue] = useState('')
//     // const [Date,setDateValue] = useState('')
//     const [Tip,setTip] = useState('')


//     function formSubmitHandler(event){
//      event.preventDefault()
   
       
      
//     }
    
//     function handleInputChangeName(event){
//        setNameValue(event.target.value)
 
//     }
//     function handleInputChangeTitle1(event){
//         setTitlevalue1(event.target.value)
  
//      }
//      function handleInputChangeTitle2(event){
//         setTitlevalue2(event.target.value)
  
//      }
//      function handleInputChangeTitle3(event){
//         setTitlevalue3(event.target.value)
  
//      }
//      function handleInputChangeTitle4(event){
//         setTitlevalue4(event.target.value)
  
//      }
//      function handleInputChangeTitle5(event){
//         setTitlevalue5(event.target.value)
  
//      }
//      function handleInputChangeSubject(event){
//         setSubjectValue(event.target.value)
  
//      }
//      function handleInputChangeCitations(event){
//         setCitationsValue(event.target.value)
  
//      }
//     //  function handleInputChangeDate(event){
//     //     setDateValue(event.target.value)
  
//     //  }
//      function handleInputChangeTip(event){
//         setTip(event.target.value)
  
//      }
   
// function weclicked(){
  
//  setCount(count++)

// }

//     return (
        
//     )

// }

export default Form2
