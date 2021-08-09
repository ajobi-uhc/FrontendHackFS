import React,{useState,useEffect, Component} from 'react'
import {Web3Storage} from 'web3.storage'
import {makeStyles} from '@material-ui/core/styles';
import axios from'axios'
import { Button, FormControl,Grid,TextField,Select,MenuItem, Container } from '@material-ui/core';
import { createTheme } from '@material-ui/core/styles';
import { lightGreen } from '@material-ui/core/colors';
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import styles from './formstyles.css'

import { Typography } from '@material-ui/core';
import Form1 from './Form1.js';
import Form2 from './Form2.js';
import Form3 from './Form3';
const useStyles = makeStyles((theme)=>({
  
      }))
    
    const API_TOKEN = 'your API token for web3.storage'
  
    async function makeFileObjects(input){
        const blob = new Blob([JSON.stringify(input)], {type : 'application/json'})
  
        const files = [
          new File(['contents-of-file-1'], 'plain-utf8.txt'),
          new File([blob], 'hello.json')
        ]
        return files
    }
    async function storeFiles(files) {
        const client = makeStorageClient()
        const cid = await client.put(files)
        console.log('stored files with cid:', cid)
        return cid
      }
   function uploadWeb3(){
       

        function getAccessToken(){
            return(API_TOKEN)
        }
        function makeStorageClient(){
            return new Web3Storage({token : getAccessToken()})
        }
         makeStorageClient()
      
       

    }   
  uploadWeb3()

class Uploadform extends Component{
   
 state ={
     step:1,
     title:"",
     subject:"",
     authors:[],
     validatorTip:"",
     papersCited:"",
     uploadedPaper:""

 }

  
handleFile = input =>{
    this.state.uploadedPaper = input
}
//  <input
//  type="file"
//  accept="image/*"
//  style={{ display: 'none' }}
//  id="contained-button-file"
// />
// <label htmlFor="contained-button-file">
//  <Button variant="contained" color="primary" component="span">
//    Upload
//  </Button>
// </label>
 goNextPage = ()=>{

    const {step} = this.state;
    this.setState({
        step:step+1
    })
}

handleChange = input =>e=>{
    this.setState({[input]:e.target.value})
}
 render(){

    const { step } = this.state;
    const { title,subject,authors,validatorTip,papersCited,uploadedPaper } = this.state;
    const values = {title,subject,authors,validatorTip,papersCited,uploadedPaper  };

    switch (step) {
      default:
        return <h1>User Forms not working. Enable Javascript!</h1>;
      case 1:
        return (
          <Form1
            goNextPage={this.goNextPage}
            handleChange={this.handleChange}
            values={values}
          />
         
        );
      case 2:
        return (
          <Form2
            goNextPage={this.goNextPage}
            
            handleChange={this.handleChange}
            values={values}
          />
        );
     case 3:
         return(
          <Form3
          goNextPage = {this.goNextPage}
          handleChange = {this.handleChange}
          handleFile = {this.handleFile}
          values = {values}
        />
         )
     case 4:
      console.log(values)
      makeFileObjects(values).then((files)=>{
          storeFiles(files)
      })
    }
  }
}
export default Uploadform

