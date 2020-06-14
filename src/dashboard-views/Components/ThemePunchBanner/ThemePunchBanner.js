import React from 'react'
import PropTypes from 'prop-types'
// banner of the page
const ThemePunchBanner = props => {
    return (
        <div id="dajy" className="fullscreen-container mtslide sliderbg fixed">
            <div className="fullscreenbanner">
                <ul>
                    <li data-transition="fade" data-slotamount={1} data-masterspeed={300}> 										
                        <img src="images/slider/zakynthos.jpg" alt />
                        <div className="tp-caption scrolleffect sft" data-x="center" data-y={120} data-speed={1000} data-start={800} data-easing="easeOutExpo">
                        <div className="sboxpurple textcenter">
                            <span className="lato size28 slim caps white">Greece</span><br /><br /><br />
                            <span className="lato size100 slim caps white">Zakynthos</span><br />
                            <span className="lato size20 normal caps white">from</span><br /><br />
                            <span className="lato size48 slim uppercase yellow">$	</span><br />
                        </div>
                        </div>	
                    </li>
                    <li data-transition="fade" data-slotamount={1} data-masterspeed={300}> 										
                        <img src="images/slider/santorini.jpg" alt />
                        <div className="tp-caption scrolleffect sft" data-x="center" data-y={120} data-speed={1000} data-start={800} data-easing="easeOutExpo">
                            <div className="sboxpurple textcenter">
                                <span className="lato size28 slim caps white">Greece</span><br /><br /><br />
                                <span className="lato size100 slim caps white">Santorini</span><br />
                                <span className="lato size20 normal caps white">from</span><br /><br />
                                <span className="lato size48 slim uppercase yellow">$1500</span><br />
                            </div>
                        </div>	
                    </li>
                    <li data-transition="fade" data-slotamount={1} data-masterspeed={300}> 										
                        <img src="images/slider/rome.jpg" alt />
                        <div className="tp-caption scrolleffect sft" data-x="center" data-y={120} data-speed={1000} data-start={800} data-easing="easeOutExpo">
                            <div className="sboxpurple textcenter">
                                <span className="lato size28 slim caps white">Italy</span><br /><br /><br />
                                <span className="lato size100 slim caps white">Rome</span><br />
                                <span className="lato size20 normal caps white">from</span><br /><br />
                                <span className="lato size48 slim uppercase yellow">$1500</span><br />
                            </div>
                        </div>	
                    </li>	
                    <li data-transition="fade" data-slotamount={1} data-masterspeed={300}> 										
                        <img src="images/slider/paris.jpg" alt />
                        <div className="tp-caption scrolleffect sft" data-x="center" data-y={120} data-speed={1000} data-start={800} data-easing="easeOutExpo">
                            <div className="sboxpurple textcenter">
                                <span className="lato size28 slim caps white">France</span><br /><br /><br />
                                <span className="lato size100 slim caps white">Paris</span><br />
                                <span className="lato size20 normal caps white">from</span><br /><br />
                                <span className="lato size48 slim uppercase yellow">$1500</span><br />
                            </div>
                        </div>	
                    </li>	
                </ul>
            <div className="tp-bannertimer none"></div>
            </div>
        </div>
    )
}

ThemePunchBanner.propTypes = {

}

export default ThemePunchBanner;
