import { Box, Typography } from '@mui/material'
import React from 'react'
import Layout from '../components/Layout'

const SoilAnalysis = () => {
    return (
        <Layout>
            <Box bgcolor="#fff" borderRadius="5px" padding="20px">
                <Typography color="success.main" fontWeight="bold" variant="h6">Soil Analysis</Typography>
            </Box>
        </Layout >
    )
}

export default SoilAnalysis
