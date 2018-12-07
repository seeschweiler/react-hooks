import React from 'react'
import Typography from '@material-ui/core/Typography'

const Footer = () => {
    return(
        <div style={{position: 'fixed', bottom: '0', paddingTop: '10px', paddingBottom: '10px', width: '100%', textAlign: 'center', backgroundColor: 'white'}}>
            <Typography>
            &copy; <a href="http://codingthesmartway.com" target="_blank" rel="noopener noreferrer">CodingTheSmartWay.com</a> | <a href="http://codingthesmartway.com/imprint" target="_blank" rel="noopener noreferrer">Imprint</a> | <a href="http://codingthesmartway.com/data-privacy-statement/" target="_blank" rel="noopener noreferrer">Data Privacy Statement</a> | <a href="http://codingthesmartway.com/affiliate-disclaimer/" target="_blank" rel="noopener noreferrer">Affiliate Disclaimer</a>
            </Typography>
        </div>
    )
}

export default Footer;