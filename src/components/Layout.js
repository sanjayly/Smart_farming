import { AppBar, Box, FormControl, InputLabel, MenuItem, Select, Typography } from '@mui/material'
import { useState } from 'react'
import logo from '../assets/logo.png'
import { languages } from '../utils'

const Layout = ( { children } ) => {

    const [language, setLanguage] = useState( localStorage.getItem( "googTrnasLangCode" ) ? localStorage.getItem( "googTrnasLangCode" ) : "en" )

    const changeLanguage = ( e ) => {
        setLanguage( e.target.value )
        localStorage.setItem( "googTrnasLangCode", e.target.value )
        const location = ( window.location.href ).split( "#" )[0]
        window.location = `${location}#googtrans(${e.target.value})`
        window.location.reload()
    }

    return (
        <>
            <AppBar sx={{ padding: "20px 150px", background: "#f1f1f1" }}>
                <Box display="flex" alignItems="center" gap="20px" justifyContent="space-between">
                    <Box display="flex" width="fit-content" alignItems="center" gap="20px">
                        <img src={logo} alt="Logo" width="30px" height="30px" />
                        <Typography variant='h5' color="success.main" fontWeight="bold" component="h1" >Plants disease detection and soil analysis</Typography>
                    </Box>
                    <Box sx={{ background: "#f1f1f1", padding: "10px" }} display="flex" alignItems="center" gap="20px">
                        <FormControl fullWidth>
                            <InputLabel>Select language:</InputLabel>
                            <Select onChange={changeLanguage} color='success' sx={{ height: "40px", width: "200px" }} value={language} label="Select language:">
                                {languages.map( lang => (
                                    <MenuItem key={lang.code} value={lang.code}>{lang.name}</MenuItem>
                                ) )}
                            </Select>
                        </FormControl>
                    </Box>
                </Box>
            </AppBar>
            <Box padding={language === "en" ? "120px 150px" : "80px 150px"} bgcolor="#f1f1f1" >
                {children}
            </Box></>
    )
}

export default Layout
