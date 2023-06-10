import { Box, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'

const inputbox ={
    width:'250px', bgcolor:'grey',height:'35px',fontWeight:'300',fontSize:'18px'
}

const SoilAnalysis = () => {
    return (
        <Layout>
            <Box bgcolor="#fff" borderRadius="5px" padding="20px">
                <Typography color="success.main" fontWeight="bold" variant="h6">Soil Analysis</Typography>
                <form >
                    <Box bgcolor='whitesmoke' padding='20px' flexDirection='column' display='flex'>
                        
                    <label>Nitrogen (N)</label>
                    <input  style={inputbox} input='number'></input>                    
                    <label>Phosporas (P)</label>
                    <input style={inputbox} input='number'></input>
                    <label>Potassium (K)</label>
                    <input style={inputbox} input='number'></input>
                    <label>Temparature</label>
                    <input style={inputbox} input='number'></input>
                    <label>Humidity</label>
                    <input style={inputbox} input='number'></input>
                    <label>pH</label>
                    <input style={inputbox} input='number'></input>
                    <label>Rainfall</label>
                    <input style={inputbox} input='number'></input>
                    <button  type='submit' >Submit</button>
                    </Box>
                </form>
            </Box>
        </Layout >
    )
}

export default SoilAnalysis
