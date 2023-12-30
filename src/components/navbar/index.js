import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';


const Container=styled.div`
margin:0 10px;
margin-top:10px;`
const Div=styled.div`
text-align: center;
font-size: 50px;
font-family: "Exo 2";
font-weight: bolder;
padding: 20px;
color: white;
border-radius: 7px;
background-color: rgb(35, 39, 42);
@media only screen and (max-width: 600px){
    font-size: 40px;}
`
const Span=styled.span`
color:#7289da;`
const Navbar = () => {
  return (<Container>
   <Div><FontAwesomeIcon icon={faMagnifyingGlass} /> <Span>Discord</Span>-LookUp</Div>
</Container>  )
}

export default Navbar