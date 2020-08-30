import React from 'react';
import { Image } from 'react-bootstrap';

export default function TVFBAd() {
    let width = window.innerWidth
    if(width <= 450) {
        return(
            <><a href="https://tradingview.go2cloud.org/aff_c?offer_id=2&aff_id=21138&file_id=475" target="_blank" rel="noopener noreferrer"><Image alt="TradingView Ad 1" src="TVAds/tv-oilprice-mobile.png" fluid={true} style={{borderRadius: 5}} /></a></>
        )
    } 
    return(
        <><a href="https://tradingview.go2cloud.org/aff_c?offer_id=2&aff_id=21138&file_id=475" target="_blank" rel="noopener noreferrer"><Image alt="TradingView Ad 1" src="TVAds/20170321125951-TradingView_Facebook_1200_Label.png" fluid={true} style={{borderRadius: 5}} /></a><img alt="TradingView Pixel" src="https://tradingview.go2cloud.org/aff_i?offer_id=2&aff_id=21138" width="0" height="0" style={{position:"absolute",visibility:"hidden"}} border="0" /></>
    );
}
