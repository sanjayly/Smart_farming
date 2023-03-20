import { Box, Button, Icon, MenuItem, Paper, Select, Typography } from '@mui/material'
import React, { useState } from 'react'
import Layout from '../components/Layout'
import PhotoIcon from '@mui/icons-material/Photo'
import axios from 'axios'

const plants = ['Tomato', 'Potato', 'Apple', 'Banana', 'Cherry', 'Arecanut']

const DiseaseDetection = () => {

    const [selectedPlant, setSelectedPlant] = useState( "0" )
    const [image, setImage] = useState( null )
    const [url, setUrl] = useState( null )
    const [isProcessing, setIsProcessing] = useState( false )

    const setImagePreview = ( e ) => {
        setUrl( URL.createObjectURL( e.target.files[0] ) )
    }

    const submit = async ( e ) => {
        e.preventDefault()
        setIsProcessing( true )
        const formData = new FormData()
        formData.append( 'plant', selectedPlant.toLowerCase() )
        formData.append( 'file', image )
        try {
            const res = await axios.post( 'http://localhost:7000/disease_detection', formData, {
                headers: {
                    'Content-Type': ''
                }
            } )
            console.log( res.data )
        } catch ( e ) {
            console.log( e.message )
        } finally {
            setIsProcessing( false )
        }
    }

    return (
        <Layout>
            <Box bgcolor="#fff" padding="20px" borderRadius="5px">
                <Typography marginBottom="20px" color="success.main" fontWeight="bold" variant="h6">Disease detection</Typography>
                <form onSubmit={submit} method="post">
                    <Select fullWidth sx={{ marginBottom: "20px" }} onChange={( e ) => setSelectedPlant( e.target.value )} value={selectedPlant} required>
                        <MenuItem value="0" >Select plant type</MenuItem>
                        {plants && plants.map( plant => (
                            <MenuItem value={plant} key={plant}>{plant}</MenuItem>
                        ) )}
                    </Select>
                    {!url && <Box border="2px dashed rgba(0,0,0,0.3)" position="relative" bgcolor="#fff" padding="20px">
                        <input onChange={e => { setImage( e.target.files[0] ); setImagePreview( e ) }} type="file" style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", opacity: 0 }} name='plant-image' required />
                        <Box color="#666" display="flex" gap="5px" flexDirection="column" alignItems="center" justifyContent="center">
                            <Typography variant='h5'>Upload plant leaf photo here.</Typography>
                            <Icon sx={{ height: "50px", width: "50px", display: "flex", alignItems: "center", justifyContent: "center" }}>
                                <PhotoIcon sx={{ fontSize: "40px" }} />
                            </Icon>
                            <span style={{ fontSize: "14px" }}>Drag and drop</span>
                            <span style={{ fontSize: "14px" }}>or click here to upload.</span>
                        </Box>
                    </Box>}
                    {url && <Paper sx={{ marginTop: "20px", display: "flex", justifyContent: "center", padding: "10px" }}>
                        <img width="100%" src={url} style={{ maxWidth: "400px", border: "5px solid rgba(0,0,0,0.2)" }} alt="" />
                    </Paper>}
                    {url && <Button onClick={() => { setUrl( null ); setImage( null ) }} disableElevation variant='contained' sx={{ display: "block", background: "darkgreen", marginTop: "20px", textTransform: "capitalize", "&:hover": { background: "darkgreen" } }}>Change image</Button>}
                    <Button disabled={isProcessing} type='submit' disableElevation variant='contained' sx={{ background: "darkgreen", marginTop: "20px", textTransform: "capitalize", "&:hover": { background: "darkgreen" } }}>Submit</Button>
                </form>
            </Box>
        </Layout >
    )
}

export default DiseaseDetection
