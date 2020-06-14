import React from 'react'
import PropTypes from 'prop-types'

const ContentTheme = props => {
    return (
        <div className="container">
            <div className="container pagecontainer offset-0">	
                {/* FILTERS */}
                <div className="col-md-3 filters offset-0">
                {/* TOP TIP */}
                <div className="filtertip">
                    <div className="padding20">
                    <p className="size13"><span className="size18 bold counthotel">53</span> Hotels starting at</p>
                    <p className="size30 bold">$<span className="countprice" /></p>
                    <p className="size13">Narrow results or <a href="#">view all</a></p>
                    </div>
                    <div className="tip-arrow" />
                </div>
                <div className="bookfilters hpadding20">
                    <div className="w50percent">
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios1" defaultValue="option1" defaultChecked />
                        <span className="hotel-ico" /> Hotels
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios2" defaultValue="option2" />
                        <span className="flight-ico" /> Flights
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios3" defaultValue="option3" />
                        <span className="suitcase-ico" /> Vacations
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios4" defaultValue="option4" />
                        <span className="car-ico" /> Cars
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios" id="optionsRadios5" defaultValue="option5" />
                        <span className="cruise-ico" />Cruises
                        </label>
                    </div>
                    </div>
                    <div className="w50percentlast">
                        <p className="cstyle08">Packages:</p>
                        <div className="radio">
                            <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios6" defaultValue="option6" />
                            Flight+Hotel+Car
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios7" defaultValue="option7" />
                            Flight+Hotel
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios8" defaultValue="option8" />
                            Flight+Car
                            </label>
                        </div>
                        <div className="radio">
                            <label>
                            <input type="radio" name="optionsRadios" id="optionsRadios9" defaultValue="option9" />
                            Hotel+Car
                            </label>
                        </div>
                    </div>	
                    <div className="clearfix" /><br />
                    {/* HOTELS TAB */}
                    <div className="hotelstab2 none">
                        <span className="opensans size13">Where do you want to go?</span>
                        <input type="text" className="form-control" placeholder="Greece" />
                        <div className="clearfix pbottom15" />
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                                <span className="opensans size13">Check in date</span>
                                <input type="text" className="form-control mySelectCalendar" id="datepicker" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                        <div className="w50percentlast">
                            <div className="wh90percent textleft right">
                                <span className="opensans size13">Check in date</span>
                                <input type="text" className="form-control mySelectCalendar" id="datepicker2" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                    <div className="clearfix pbottom15" />
                    <div className="room1">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                                <span className="opensans size13"><b>ROOM 1</b></span><br />
                                <div className="addroom1 block"><a onClick="addroom2()" className="grey cpointer">+ Add room</a></div>
                            </div>
                        </div>
                        <div className="w50percentlast">	
                            <div className="wh90percent textleft right ohidden">
                                <div className="w50percent">
                                    <div className="wh90percent textleft left">
                                        <span className="opensans size13">Adult</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option>1</option>
                                        <option selected>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>							
                                <div className="w50percentlast">
                                    <div className="wh90percent textleft right ohidden">
                                        <span className="opensans size13">Child</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option>0</option>
                                        <option selected>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="room2 none">
                        <div className="clearfix" /><div className="line1" />
                            <div className="w50percent">
                                <div className="wh90percent textleft">
                                    <span className="opensans size13"><b>ROOM 2</b></span><br />
                                    <div className="addroom2 block grey"><a onClick="addroom3()" className="grey cpointer">+ Add room</a> | <a onClick="removeroom2()" className="orange cpointer"><img src="images/delete.png" alt="delete" /></a></div>
                                </div>
                            </div>
                        <div className="w50percentlast">	
                            <div className="wh90percent textleft right">
                                <div className="w50percent">
                                    <div className="wh90percent textleft left">
                                        <span className="opensans size13">Adult</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option>1</option>
                                        <option>2</option>
                                        <option selected>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>							
                                <div className="w50percentlast">
                                    <div className="wh90percent textleft right">
                                        <span className="opensans size13">Child</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option selected>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>		
                    <div className="room3 none">
                        <div className="clearfix" /><div className="line1" />
                            <div className="w50percent">
                                <div className="wh90percent textleft">
                                    <span className="opensans size13"><b>ROOM 3</b></span><br />
                                    <div className="addroom3 block grey"><a onClick="addroom3()" className="grey cpointer">+ Add room</a> | <a onClick="removeroom3()" className="orange cpointer"><img src="images/delete.png" alt="delete" /></a></div>
                                </div>
                            </div>
                        <div className="w50percentlast">	
                        <div className="wh90percent textleft right">
                            <div className="w50percent">
                                <div className="wh90percent textleft left">
                                    <span className="opensans size13">Adult</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>							
                            <div className="w50percentlast">
                                <div className="wh90percent textleft right">
                                    <span className="opensans size13">Child</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div><div className="clearfix" />
                    <button type="submit" className="btn-search3">Search</button>
                    </div>
                    <div className="flightstab2 none">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                            <span className="opensans size13">Flying from</span>
                            <input type="text" className="form-control" placeholder="City or airport" />
                            </div>
                        </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">To</span>
                            <input type="text" className="form-control" placeholder="City or airport" />
                        </div>
                    </div>
                    <div className="clearfix pbottom15" />
                    <div className="w50percent">
                        <div className="wh90percent textleft">
                            <span className="opensans size13">Departing</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker3" placeholder="mm/dd/yyyy" />
                        </div>
                    </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">Returning</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker4" placeholder="mm/dd/yyyy" />
                        </div>
                    </div>
                    <div className="clearfix pbottom15" />
                    <div className="room1">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                                <span className="opensans size13">Adult</span>
                                <select className="form-control mySelectBoxClass">
                                <option>1</option>
                                <option selected>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div className="w50percentlast">	
                            <div className="wh90percent textleft right">
                                <span className="opensans size13">Child</span>
                                <select className="form-control mySelectBoxClass">
                                <option>0</option>
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                        </div>
                    </div><div className="clearfix" />
                    <button type="submit" className="btn-search3">Search</button>
                    </div>
                    <div className="vacationstab2 none">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                            <span className="opensans size13">Flying from</span>
                            <input type="text" className="form-control" placeholder="City or airport" />
                            </div>
                        </div>
                        <div className="w50percentlast">
                            <div className="wh90percent textleft right">
                            <span className="opensans size13"><b>To</b></span>
                            <input type="text" className="form-control" placeholder="City or airport" />
                            </div>
                        </div>
                    <div className="clearfix pbottom15" />
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                            <span className="opensans size13">Check in date</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker7" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                        <div className="w50percentlast">
                            <div className="wh90percent textleft right">
                            <span className="opensans size13">Check in date</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker8" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                    <div className="clearfix pbottom15" />
                    <div className="room1">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                                <span className="opensans size13"><b>ROOM 1</b></span><br />
                                <div className="addroom1 block"><a onClick="addroom2()" className="grey cpointer">+ Add room</a></div>
                            </div>
                        </div>
                        <div className="w50percentlast">	
                        <div className="wh90percent textleft right">
                            <div className="w50percent">
                                <div className="wh90percent textleft left">
                                    <span className="opensans size13">Adult</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option>1</option>
                                    <option selected>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>							
                            <div className="w50percentlast">
                                <div className="wh90percent textleft right">
                                    <span className="opensans size13">Child</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option>0</option>
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="room2 none">
                        <div className="clearfix" /><div className="line1" />
                            <div className="w50percent">
                                <div className="wh90percent textleft">
                                    <span className="opensans size13"><b>ROOM 2</b></span><br />
                                    <div className="addroom2 block grey"><a onClick="addroom3()" className="grey cpointer">+ Add room</a> | <a onClick="removeroom2()" className="orange cpointer"><img src="images/delete.png" alt="delete" /></a></div>
                                </div>
                            </div>
                        <div className="w50percentlast">	
                        <div className="wh90percent textleft right">
                            <div className="w50percent">
                                <div className="wh90percent textleft left">
                                    <span className="opensans size13">Adult</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option>1</option>
                                    <option>2</option>
                                    <option selected>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>							
                            <div className="w50percentlast">
                                <div className="wh90percent textleft right">
                                    <span className="opensans size13">Child</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>		
                    <div className="room3 none">
                        <div className="clearfix" /><div className="line1" />
                            <div className="w50percent">
                                <div className="wh90percent textleft">
                                    <span className="opensans size13"><b>ROOM 3</b></span><br />
                                    <div className="addroom3 block grey"><a onClick="addroom3()" className="grey cpointer">+ Add room</a> | <a onClick="removeroom3()" className="orange cpointer"><img src="images/delete.png" alt="delete" /></a></div>
                                </div>
                            </div>
                        <div className="w50percentlast">	
                        <div className="wh90percent textleft right">
                            <div className="w50percent">
                                <div className="wh90percent textleft left">
                                    <span className="opensans size13">Adult</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>							
                            <div className="w50percentlast">
                                <div className="wh90percent textleft right">
                                    <span className="opensans size13">Child</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div><div className="clearfix" />
                        <button type="submit" className="btn-search3">Search</button>
                    </div>
                    {/* END OF VACATIONS TAB */}
                    {/* CARS TAB */}
                    <div className="carstab2 none">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                            <span className="opensans size13">Picking up</span>
                            <input type="text" className="form-control" placeholder="Airport, address" />
                            </div>
                        </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">Dropping off</span>
                            <input type="text" className="form-control" placeholder="Airport, address" />
                        </div>
                    </div>
                    <div className="clearfix pbottom15" />
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                            <span className="opensans size13">Pick up date</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker5" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">Hour</span>
                            <select className="form-control mySelectBoxClass">
                                <option>12:00 AM</option>
                                <option>12:30 AM</option>
                                <option>01:00 AM</option>
                                <option>01:30 AM</option>
                                <option>02:00 AM</option>
                                <option>02:30 AM</option>
                                <option>03:00 AM</option>
                                <option>03:30 AM</option>
                                <option>04:00 AM</option>
                                <option>04:30 AM</option>
                                <option>05:00 AM</option>
                                <option>05:30 AM</option>
                                <option>06:00 AM</option>
                                <option>06:30 AM</option>
                                <option>07:00 AM</option>
                                <option>07:30 AM</option>
                                <option>08:00 AM</option>
                                <option>08:30 AM</option>
                                <option>09:00 AM</option>
                                <option>09:30 AM</option>
                                <option>10:00 AM</option>
                                <option selected>10:30 AM</option>
                                <option>11:00 AM</option>
                                <option>11:30 AM</option>
                                <option>12:00 PM</option>
                                <option>12:30 PM</option>								  
                                <option>01:00 PM</option>
                                <option>01:30 PM</option>
                                <option>02:00 PM</option>
                                <option>02:30 PM</option>
                                <option>03:00 PM</option>
                                <option>03:30 PM</option>
                                <option>04:00 PM</option>
                                <option>04:30 PM</option>
                                <option>05:00 PM</option>
                                <option>05:30 PM</option>
                                <option>06:00 PM</option>
                                <option>06:30 PM</option>
                                <option>07:00 PM</option>
                                <option>07:30 PM</option>
                                <option>08:00 PM</option>
                                <option>08:30 PM</option>
                                <option>09:00 PM</option>
                                <option>09:30 PM</option>
                                <option>10:00 PM</option>
                                <option>10:30 PM</option>
                                <option>11:00 PM</option>
                                <option>11:30 PM</option>								  
                            </select>
                        </div>
                    </div>
                    <div className="clearfix pbottom15" />
                    <div className="room1">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                                <span className="opensans size13">Drop off date</span>
                                <input type="text" className="form-control mySelectCalendar" id="datepicker6" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                        <div className="w50percentlast">	
                            <div className="wh90percent textleft right">
                                <span className="opensans size13">Hour</span>
                                <select className="form-control mySelectBoxClass">
                                <option>12:00 AM</option>
                                <option>12:30 AM</option>
                                <option>01:00 AM</option>
                                <option>01:30 AM</option>
                                <option>02:00 AM</option>
                                <option>02:30 AM</option>
                                <option>03:00 AM</option>
                                <option>03:30 AM</option>
                                <option>04:00 AM</option>
                                <option>04:30 AM</option>
                                <option>05:00 AM</option>
                                <option>05:30 AM</option>
                                <option>06:00 AM</option>
                                <option>06:30 AM</option>
                                <option>07:00 AM</option>
                                <option>07:30 AM</option>
                                <option>08:00 AM</option>
                                <option>08:30 AM</option>
                                <option>09:00 AM</option>
                                <option>09:30 AM</option>
                                <option>10:00 AM</option>
                                <option selected>10:30 AM</option>
                                <option>11:00 AM</option>
                                <option>11:30 AM</option>
                                <option>12:00 PM</option>
                                <option>12:30 PM</option>								  
                                <option>01:00 PM</option>
                                <option>01:30 PM</option>
                                <option>02:00 PM</option>
                                <option>02:30 PM</option>
                                <option>03:00 PM</option>
                                <option>03:30 PM</option>
                                <option>04:00 PM</option>
                                <option>04:30 PM</option>
                                <option>05:00 PM</option>
                                <option>05:30 PM</option>
                                <option>06:00 PM</option>
                                <option>06:30 PM</option>
                                <option>07:00 PM</option>
                                <option>07:30 PM</option>
                                <option>08:00 PM</option>
                                <option>08:30 PM</option>
                                <option>09:00 PM</option>
                                <option>09:30 PM</option>
                                <option>10:00 PM</option>
                                <option>10:30 PM</option>
                                <option>11:00 PM</option>
                                <option>11:30 PM</option>		
                                </select>
                            </div>
                        </div>
                    </div><div className="clearfix" />
                        <button type="submit" className="btn-search3">Search</button>
                    </div>
               
                    <div className="cruisestab2 none">
                        <div className="fullwidth">
                            <span className="opensans size13">Going to</span>
                            <select className="form-control mySelectBoxClass">
                            <option selected>Show all</option>
                            <optgroup label="Most Popular">
                                <option>Caribbean</option>
                                <option>Bahamas</option>
                                <option>Mexico</option>
                                <option>Alaska</option>
                                <option>Europe</option>
                                <option>Bermuda</option>
                                <option>Hawaii</option>
                            </optgroup>
                            <optgroup label="Other Destinations">
                                <option>Africa</option>
                                <option>Arctic/Antartctic</option>
                                <option>Asia</option>
                                <option>Australia/New Zealand</option>
                                <option>Central America</option>
                                <option>Cruise to Nowhere</option>
                                <option>Galapagos</option>
                                <option>Greenland/Iceland</option>
                                <option>Middle East</option>
                                <option>Pacific Coastal</option>
                                <option>Panama Canal</option>
                                <option>South Africa</option>
                                <option>South Pacific</option>
                                <option>Tahiti</option>
                                <option>Transatlantic</option>
                                <option>World Cruises</option>
                            </optgroup>
                            </select>
                            <div className="clearfix pbottom15" />
                            <span className="opensans size13">Departure</span>
                            <select className="form-control mySelectBoxClass">
                            <option selected>Show all</option>
                            <option>October 2013</option>
                            <option>November 2013</option>
                            <option>December 2013</option>
                            <option>January 2014</option>
                            <option>February 2014</option>
                            <option>March 2014</option>
                            <option>April 2014</option>
                            <option>May 2014</option>
                            <option>June 2014</option>
                            <option>July 2014</option>
                            <option>August 2014</option>
                            <option>September 2014</option>
                            <option>October 2014</option>
                            <option>November 2014</option>
                            <option>December 2014</option>
                            </select>
                        </div><div className="clearfix" />
                        <button type="submit" className="btn-search3">Search</button>
                    </div>
                    {/* END OF CRUISE TAB */}					
                    {/* FLIGHT+HOTEL+CAR TAB */}					
                    <div className="flighthotelcartab2 none">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                            <span className="opensans size13">Flying from</span>
                            <input type="text" className="form-control" placeholder="City or airport" />
                            </div>
                        </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                        <span className="opensans size13">To</span>
                        <input type="text" className="form-control" placeholder="City or airport" />
                        </div>
                    </div>
                    <div className="clearfix pbottom15" />
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                            <span className="opensans size13">Departing</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker13" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                        <div className="w50percentlast">
                            <div className="wh90percent textleft right">
                            <span className="opensans size13">Returning</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker14" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                    <div className="clearfix pbottom15" />
                    <div className="room1">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                                <span className="opensans size13"><b>ROOM 1</b></span><br />
                                <div className="addroom1 block"><a onClick="addroom2()" className="grey cpointer">+ Add room</a></div>
                            </div>
                        </div>
                        <div className="w50percentlast">	
                            <div className="wh90percent textleft right ohidden">
                                <div className="w50percent">
                                    <div className="wh90percent textleft left">
                                        <span className="opensans size13">Adult</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option>1</option>
                                        <option selected>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>							
                                <div className="w50percentlast">
                                    <div className="wh90percent textleft right ohidden">
                                        <span className="opensans size13">Child</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option>0</option>
                                        <option selected>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="room2 none">
                        <div className="clearfix" /><div className="line1" />
                            <div className="w50percent">
                                <div className="wh90percent textleft">
                                    <span className="opensans size13"><b>ROOM 2</b></span><br />
                                    <div className="addroom2 block grey"><a onClick="addroom3()" className="grey cpointer">+ Add room</a> | <a onClick="removeroom2()" className="orange cpointer"><img src="images/delete.png" alt="delete" /></a></div>
                                </div>
                            </div>
                        <div className="w50percentlast">	
                        <div className="wh90percent textleft right">
                            <div className="w50percent">
                                <div className="wh90percent textleft left">
                                    <span className="opensans size13">Adult</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option>1</option>
                                    <option>2</option>
                                    <option selected>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>							
                            <div className="w50percentlast">
                                <div className="wh90percent textleft right">
                                    <span className="opensans size13">Child</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>		
                    <div className="room3 none">
                        <div className="clearfix" /><div className="line1" />
                            <div className="w50percent">
                                <div className="wh90percent textleft">
                                    <span className="opensans size13"><b>ROOM 3</b></span><br />
                                    <div className="addroom3 block grey"><a onClick="addroom3()" className="grey cpointer">+ Add room</a> | <a onClick="removeroom3()" className="orange cpointer"><img src="images/delete.png" alt="delete" /></a></div>
                                </div>
                            </div>
                        <div className="w50percentlast">	
                        <div className="wh90percent textleft right">
                            <div className="w50percent">
                                <div className="wh90percent textleft left">
                                    <span className="opensans size13">Adult</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>							
                            <div className="w50percentlast">
                                <div className="wh90percent textleft right">
                                    <span className="opensans size13">Child</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div><div className="clearfix" />
                    <div className="center size10 ca03">! An economy car will be added to your search. (You may change your car options later.)</div>							
                        <button type="submit" className="btn-search3">Search</button>
                    </div>
                					
                    <div className="flighthoteltab2 none">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                            <span className="opensans size13">Flying from</span>
                            <input type="text" className="form-control" placeholder="City or airport" />
                            </div>
                        </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">To</span>
                            <input type="text" className="form-control" placeholder="City or airport" />
                        </div>
                    </div>
                    <div className="clearfix pbottom15" />
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                            <span className="opensans size13">Departing</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker10" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">Returning</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker9" placeholder="mm/dd/yyyy" />
                        </div>
                    </div>
                    <div className="clearfix pbottom15" />
                    <div className="room1">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                                <span className="opensans size13"><b>ROOM 1</b></span><br />
                                <div className="addroom1 block"><a onClick="addroom2()" className="grey cpointer">+ Add room</a></div>
                            </div>
                        </div>
                        <div className="w50percentlast">	
                            <div className="wh90percent textleft right ohidden">
                                <div className="w50percent">
                                    <div className="wh90percent textleft left">
                                        <span className="opensans size13">Adult</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option>1</option>
                                        <option selected>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>							
                                <div className="w50percentlast">
                                    <div className="wh90percent textleft right ohidden">
                                        <span className="opensans size13">Child</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option>0</option>
                                        <option selected>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="room2 none">
                        <div className="clearfix" /><div className="line1" />
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                                <span className="opensans size13"><b>ROOM 2</b></span><br />
                                <div className="addroom2 block grey"><a onClick="addroom3()" className="grey cpointer">+ Add room</a> | <a onClick="removeroom2()" className="orange cpointer"><img src="images/delete.png" alt="delete" /></a></div>
                            </div>
                        </div>
                        <div className="w50percentlast">	
                            <div className="wh90percent textleft right">
                                <div className="w50percent">
                                    <div className="wh90percent textleft left">
                                        <span className="opensans size13">Adult</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option>1</option>
                                        <option>2</option>
                                        <option selected>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>							
                                <div className="w50percentlast">
                                    <div className="wh90percent textleft right">
                                        <span className="opensans size13">Child</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option selected>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>		
                    <div className="room3 none">
                        <div className="clearfix" /><div className="line1" />
                            <div className="w50percent">
                                <div className="wh90percent textleft">
                                    <span className="opensans size13"><b>ROOM 3</b></span><br />
                                    <div className="addroom3 block grey"><a onClick="addroom3()" className="grey cpointer">+ Add room</a> | <a onClick="removeroom3()" className="orange cpointer"><img src="images/delete.png" alt="delete" /></a></div>
                                </div>
                            </div>
                        <div className="w50percentlast">	
                            <div className="wh90percent textleft right">
                                <div className="w50percent">
                                    <div className="wh90percent textleft left">
                                        <span className="opensans size13">Adult</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option selected>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>							
                                <div className="w50percentlast">
                                    <div className="wh90percent textleft right">
                                        <span className="opensans size13">Child</span>
                                        <select className="form-control mySelectBoxClass">
                                        <option selected>0</option>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="clearfix" />
                        <button type="submit" className="btn-search3">Search</button>					
                    </div>
        				
                    <div className="flightcartab2 none">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                            <span className="opensans size13">Flying from</span>
                            <input type="text" className="form-control" placeholder="City or airport" />
                            </div>
                        </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">To</span>
                            <input type="text" className="form-control" placeholder="City or airport" />
                        </div>
                    </div>
                    <div className="clearfix pbottom15" />
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                                <span className="opensans size13">Departing</span>
                                <input type="text" className="form-control mySelectCalendar" id="datepicker11" placeholder="mm/dd/yyyy" />
                            </div>
                        </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">Returning</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker12" placeholder="mm/dd/yyyy" />
                        </div>
                    </div>
                    <div className="clearfix pbottom15" />
                        <div className="center size10 ca03">! An economy car will be added to your search. (You may change your car options later.)</div>
                        <div className="clearfix" />
                        <button type="submit" className="btn-search3">Search</button>										
                    </div>
             			
                    <div className="hotelcartab2 none">
                        <span className="opensans size13">Where do you want to go?</span>
                        <input type="text" className="form-control" placeholder="Greece" />
                    <div className="clearfix pbottom15" />
                    <div className="w50percent">
                        <div className="wh90percent textleft">
                        <span className="opensans size13">Check in date</span>
                        <input type="text" className="form-control mySelectCalendar" id="datepicker15" placeholder="mm/dd/yyyy" />
                        </div>
                    </div>
                    <div className="w50percentlast">
                        <div className="wh90percent textleft right">
                            <span className="opensans size13">Check in date</span>
                            <input type="text" className="form-control mySelectCalendar" id="datepicker16" placeholder="mm/dd/yyyy" />
                        </div>
                    </div>
                    <div className="clearfix pbottom15" />
                    <div className="room1">
                        <div className="w50percent">
                            <div className="wh90percent textleft">
                                <span className="opensans size13"><b>ROOM 1</b></span><br />
                                <div className="addroom1 block"><a onClick="addroom2()" className="grey cpointer">+ Add room</a></div>
                            </div>
                        </div>
                    <div className="w50percentlast">	
                        <div className="wh90percent textleft right ohidden">
                            <div className="w50percent">
                                <div className="wh90percent textleft left">
                                    <span className="opensans size13">Adult</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option>1</option>
                                    <option selected>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>							
                            <div className="w50percentlast">
                                <div className="wh90percent textleft right ohidden">
                                    <span className="opensans size13">Child</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option>0</option>
                                    <option selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className="room2 none">
                        <div className="clearfix" /><div className="line1" />
                            <div className="w50percent">
                                <div className="wh90percent textleft">
                                    <span className="opensans size13"><b>ROOM 2</b></span><br />
                                    <div className="addroom2 block grey"><a onClick="addroom3()" className="grey cpointer">+ Add room</a> | <a onClick="removeroom2()" className="orange cpointer"><img src="images/delete.png" alt="delete" /></a></div>
                                </div>
                            </div>
                        <div className="w50percentlast">	
                        <div className="wh90percent textleft right">
                            <div className="w50percent">
                                <div className="wh90percent textleft left">
                                    <span className="opensans size13">Adult</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option>1</option>
                                    <option>2</option>
                                    <option selected>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>							
                            <div className="w50percentlast">
                                <div className="wh90percent textleft right">
                                    <span className="opensans size13">Child</span>
                                    <select className="form-control mySelectBoxClass">
                                    <option selected>0</option>
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>		
                    <div className="room3 none">
                        <div className="clearfix" /><div className="line1" />
                        <div className="w50percent">
                        <div className="wh90percent textleft">
                            <span className="opensans size13"><b>ROOM 3</b></span><br />
                            <div className="addroom3 block grey"><a onClick="addroom3()" className="grey cpointer">+ Add room</a> | <a onClick="removeroom3()" className="orange cpointer"><img src="images/delete.png" alt="delete" /></a></div>
                        </div>
                        </div>
                        <div className="w50percentlast">	
                        <div className="wh90percent textleft right">
                            <div className="w50percent">
                            <div className="wh90percent textleft left">
                                <span className="opensans size13">Adult</span>
                                <select className="form-control mySelectBoxClass">
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                            </div>							
                            <div className="w50percentlast">
                            <div className="wh90percent textleft right">
                                <span className="opensans size13">Child</span>
                                <select className="form-control mySelectBoxClass">
                                <option selected>0</option>
                                <option>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                                </select>
                            </div>
                            </div>
                        </div>
                        </div>
                    </div><div className="clearfix" /><br />
                    <div className="center size10 ca03">! An economy car will be added to your search. (You may change your car options later.)</div>
                    <button type="submit" className="btn-search3">Search</button>						
                    </div>
                    {/* END OF HOTEL+CAR TAB */}	
                </div>
                {/* END OF BOOK FILTERS */}	
                <div className="line2" />
                <div className="padding20title"><h3 className="opensans dark">Filter by</h3></div>
                <div className="line2" />
                {/* Star ratings */}	
                <button type="button" className="collapsebtn" data-toggle="collapse" data-target="#collapse1">
                    Star rating <span className="collapsearrow" />
                </button>
                <div id="collapse1" className="collapse in">
                    <div className="hpadding20">
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" /><img src="images/filter-rating-5.png" className="imgpos1" alt /> 5 Stars
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" /><img src="images/filter-rating-4.png" className="imgpos1" alt /> 4 Stars
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" /><img src="images/filter-rating-3.png" className="imgpos1" alt /> 3 Stars
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" /><img src="images/filter-rating-2.png" className="imgpos1" alt /> 2 Stars
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" /><img src="images/filter-rating-1.png" className="imgpos1" alt /> 1 Star
                        </label>
                    </div>	
                    </div>
                    <div className="clearfix" />
                </div>
                {/* End of Star ratings */}	
                <div className="line2" />
                {/* Price range */}					
                <button type="button" className="collapsebtn" data-toggle="collapse" data-target="#collapse2">
                    Price range <span className="collapsearrow" />
                </button>
                <div id="collapse2" className="collapse in">
                    <div className="padding20">
                    <div className="layout-slider wh100percent">
                        <span className="cstyle09"><input id="Slider1" type="slider" name="price" defaultValue="400;700" /></span>
                    </div>
                    </div>
                </div>
                {/* End of Price range */}	
                <div className="line2" />
                {/* Acomodations */}		
                <button type="button" className="collapsebtn" data-toggle="collapse" data-target="#collapse3">
                    Acomodation type <span className="collapsearrow" />
                </button>				
                <div id="collapse3" className="collapse in">
                    <div className="hpadding20">
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios2" id="Acomodation1" defaultValue="option1" defaultChecked />
                        All
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios2" id="Acomodation2" defaultValue="option2" />
                        Hotel
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios2" id="Acomodation3" defaultValue="option3" />
                        Bed &amp; Breakfast
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios2" id="Acomodation4" defaultValue="option4" />
                        Apartment
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios2" id="Acomodation5" defaultValue="option5" />
                        Condo
                        </label>
                    </div>
                    <div className="radio">
                        <label>
                        <input type="radio" name="optionsRadios2" id="Acomodation6" defaultValue="option6" />
                        All-Inclusive Resort 
                        </label>
                    </div>
                    </div>	
                    <div className="clearfix" />					
                </div>
                {/* End of Acomodations */}
                <div className="line2" />
                {/* Hotel Preferences */}
                <button type="button" className="collapsebtn last" data-toggle="collapse" data-target="#collapse4">
                    Hotel Preferences <span className="collapsearrow" />
                </button>	
                <div id="collapse4" className="collapse in">
                    <div className="hpadding20">
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />High-speed Internet (41)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Air conditioning (52)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Swimming pool (55)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Childcare (12)
                        </label>
                    </div>
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Fitness equipment (49)
                        </label>
                    </div>	
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Free breakfast (14)
                        </label>
                    </div>	
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Free parking (11)
                        </label>
                    </div>	
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Hair dryer (48)
                        </label>
                    </div>	
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Pets allowed (16)
                        </label>
                    </div>	
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Restaurant in hotel (47)
                        </label>
                    </div>	
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Room service (38)
                        </label>
                    </div>	
                    <div className="checkbox">
                        <label>
                        <input type="checkbox" />Spa services on site (57) 
                        </label>
                    </div>	
                    </div>
                    <div className="clearfix" />						
                </div>	
                {/* End of Hotel Preferences */}
                <div className="line2" />
                <div className="clearfix" />
                <br />
                <br />
                <br />
                </div>
                {/* END OF FILTERS */}
                {/* LIST CONTENT*/}
                <div className="rightcontent col-md-9 offset-0">
                <div className="hpadding20">
                    {/* Top filters */}
                    <div className="topsortby">
                    <div className="col-md-4 offset-0">
                        <div className="left mt7"><b>Sort by:</b></div>
                        <div className="right wh70percent">
                        <select className="form-control mySelectBoxClass ">
                            <option selected>Guest rating</option>
                            <option>5 stars</option>
                            <option>4 stars</option>
                            <option>3 stars</option>
                            <option>2 stars</option>
                            <option>1 stars</option>
                        </select>
                        </div>
                    </div>			
                    <div className="col-md-4">
                        <div className="w50percent">
                        <div className="wh90percent">
                            <select className="form-control mySelectBoxClass ">
                            <option selected>Name</option>
                            <option>A to Z</option>
                            <option>Z to A</option>
                            </select>
                        </div>
                        </div>
                        <div className="w50percentlast">
                        <div className="wh90percent">
                            <select className="form-control mySelectBoxClass ">
                            <option selected>Price</option>
                            <option>Ascending</option>
                            <option>Descending</option>
                            </select>
                        </div>
                        </div>					
                    </div>
                    <div className="col-md-4 offset-0">
                        <button className="popularbtn left">Most Popular</button>
                        <div className="right">
                        <button className="gridbtn" onClick="window.open('list2.html','_self');">&nbsp;</button>
                        <button className="listbtn active">&nbsp;</button>
                        <button className="grid2btn" onClick="window.open('list3.html','_self');">&nbsp;</button>
                        </div>
                    </div>
                    </div>
                    {/* End of topfilters*/}
                </div>
                {/* End of padding */}
                <br /><br />
                <div className="clearfix" />
                <div className="itemscontainer offset-1">
                    <div className="offset-2">
                    <div className="col-md-4 offset-0">
                        <div className="listitem2">
                        <a href="images/items/item7.jpg" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="images/items/item7.jpg" alt /></a>
                        <div className="liover" />
                        <a className="fav-icon" href="#" />
                        <a className="book-icon" href="details.html" />
                        </div>
                    </div>
                    <div className="col-md-8 offset-0">
                        <div className="itemlabel3">
                        <div className="labelright">
                            <img src="images/filter-rating-5.png" width={60} alt /><br /><br /><br />
                            <img src="images/user-rating-5.png" width={60} alt /><br />
                            <span className="size11 grey">18 Reviews</span><br /><br />
                            <span className="green size18"><b>$36.00</b></span><br />
                            <span className="size11 grey">avg/night</span><br /><br /><br />
                            <form action="details.html">
                            <button className="bookbtn mt1" type="submit">Book</button>	
                            </form>			
                        </div>
                        <div className="labelleft2">			
                            <b>Mabely Grand Hotel</b><br /><br /><br />
                            <p className="grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.
                            Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br />
                            <ul className="hotelpreferences">
                            <li className="icohp-internet" />
                            <li className="icohp-air" />
                            <li className="icohp-pool" />
                            <li className="icohp-childcare" />
                            <li className="icohp-fitness" />
                            <li className="icohp-breakfast" />
                            <li className="icohp-parking" />
                            <li className="icohp-pets" />
                            <li className="icohp-spa" />
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="clearfix" />
                    <div className="offset-2"><hr className="featurette-divider3" /></div>
                    <div className="offset-2">
                    <div className="col-md-4 offset-0">
                        <div className="listitem2">
                        <a href="images/items/item11.jpg" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="images/items/item11.jpg" alt /></a>
                        <div className="liover" />
                        <a className="fav-icon" href="#" />
                        <a className="book-icon" href="details.html" />
                        </div>
                    </div>
                    <div className="col-md-8 offset-0">
                        <div className="itemlabel3">
                        <div className="labelright">
                            <img src="images/filter-rating-5.png" width={60} alt /><br /><br /><br />
                            <img src="images/user-rating-5.png" width={60} alt /><br />
                            <span className="size11 grey">18 Reviews</span><br /><br />
                            <span className="green size18"><b>$39.00</b></span><br />
                            <span className="size11 grey">avg/night</span><br /><br /><br />
                            <form action="details.html">
                            <button className="bookbtn mt1" type="submit">Book</button>	
                            </form>			
                        </div>
                        <div className="labelleft2">			
                            <b>Mabely Grand Hotel</b><br /><br /><br />
                            <p className="grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.
                            Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br />
                            <ul className="hotelpreferences">
                            <li className="icohp-hairdryer" />
                            <li className="icohp-garden" />
                            <li className="icohp-grill" />
                            <li className="icohp-kitchen" />
                            <li className="icohp-bar" />
                            <li className="icohp-living" />
                            <li className="icohp-tv" />
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="clearfix" />
                    <div className="offset-2"><hr className="featurette-divider3" /></div>
                    <div className="offset-2">
                    <div className="col-md-4 offset-0">
                        <div className="listitem2">
                        <a href="images/items/item1.jpg" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="images/items/item1.jpg" alt /></a>
                        <div className="liover" />
                        <a className="fav-icon" href="#" />
                        <a className="book-icon" href="details.html" />
                        </div>
                    </div>
                    <div className="col-md-8 offset-0">
                        <div className="itemlabel3">
                        <div className="labelright">
                            <img src="images/filter-rating-5.png" width={60} alt /><br /><br /><br />
                            <img src="images/user-rating-5.png" width={60} alt /><br />
                            <span className="size11 grey">18 Reviews</span><br /><br />
                            <span className="green size18"><b>$45.00</b></span><br />
                            <span className="size11 grey">avg/night</span><br /><br /><br />
                            <form action="details.html">
                            <button className="bookbtn mt1" type="submit">Book</button>	
                            </form>			
                        </div>
                        <div className="labelleft2">			
                            <b>Mabely Grand Hotel</b><br /><br /><br />
                            <p className="grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.
                            Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br />
                            <ul className="hotelpreferences">
                            <li className="icohp-fridge" />
                            <li className="icohp-microwave" />
                            <li className="icohp-washing" />
                            <li className="icohp-roomservice" />
                            <li className="icohp-safe" />
                            <li className="icohp-playground" />
                            <li className="icohp-conferenceroom" />
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="clearfix" />
                    <div className="offset-2"><hr className="featurette-divider3" /></div>
                    <div className="offset-2">
                    <div className="col-md-4 offset-0">
                        <div className="listitem2">
                        <a href="images/items/item5.jpg" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="images/items/item5.jpg" alt /></a>
                        <div className="liover" />
                        <a className="fav-icon" href="#" />
                        <a className="book-icon" href="details.html" />
                        </div>
                    </div>
                    <div className="col-md-8 offset-0">
                        <div className="itemlabel3">
                        <div className="labelright">
                            <img src="images/filter-rating-5.png" width={60} alt /><br /><br /><br />
                            <img src="images/user-rating-5.png" width={60} alt /><br />
                            <span className="size11 grey">18 Reviews</span><br /><br />
                            <span className="green size18"><b>$49.00</b></span><br />
                            <span className="size11 grey">avg/night</span><br /><br /><br />
                            <form action="details.html">
                            <button className="bookbtn mt1" type="submit">Book</button>	
                            </form>			
                        </div>
                        <div className="labelleft2">			
                            <b>Mabely Grand Hotel</b><br /><br /><br />
                            <p className="grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.
                            Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br />
                            <ul className="hotelpreferences">
                            <li className="icohp-internet" />
                            <li className="icohp-air" />
                            <li className="icohp-pool" />
                            <li className="icohp-childcare" />
                            <li className="icohp-fitness" />
                            <li className="icohp-breakfast" />
                            <li className="icohp-parking" />
                            <li className="icohp-pets" />
                            <li className="icohp-spa" />
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="clearfix" />
                    <div className="offset-2"><hr className="featurette-divider3" /></div>
                    <div className="offset-2">
                    <div className="col-md-4 offset-0">
                        <div className="listitem2">
                        <a href="images/items/item2.jpg" data-footer="A custom footer text" data-title="A random title" data-gallery="multiimages" data-toggle="lightbox"><img src="images/items/item2.jpg" alt /></a>
                        <div className="liover" />
                        <a className="fav-icon" href="#" />
                        <a className="book-icon" href="details.html" />
                        </div>
                    </div>
                    <div className="col-md-8 offset-0">
                        <div className="itemlabel3">
                        <div className="labelright">
                            <img src="images/filter-rating-5.png" width={60} alt /><br /><br /><br />
                            <img src="images/user-rating-5.png" width={60} alt /><br />
                            <span className="size11 grey">18 Reviews</span><br /><br />
                            <span className="green size18"><b>$49.00</b></span><br />
                            <span className="size11 grey">avg/night</span><br /><br /><br />
                            <form action="details.html">
                            <button className="bookbtn mt1" type="submit">Book</button>	
                            </form>									
                        </div>
                        <div className="labelleft2">			
                            <b>Mabely Grand Hotel</b><br /><br /><br />
                            <p className="grey">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum nec semper lectus. Suspendisse placerat enim mauris, eget lobortis nisi egestas et.
                            Donec elementum metus et mi aliquam eleifend. Suspendisse volutpat egestas rhoncus.</p><br />
                            <ul className="hotelpreferences">
                            <li className="icohp-fridge" />
                            <li className="icohp-microwave" />
                            <li className="icohp-washing" />
                            <li className="icohp-roomservice" />
                            <li className="icohp-safe" />
                            <li className="icohp-playground" />
                            <li className="icohp-conferenceroom" />
                            </ul>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="clearfix" />
                    <div className="offset-2"><hr className="featurette-divider3" /></div>
                </div>	
                {/* End of offset1*/}		
                <div className="hpadding20">
                    <ul className="pagination right paddingbtm20">
                    <li className="disabled"><a href="#">«</a></li>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                    <li><a href="#">4</a></li>
                    <li><a href="#">5</a></li>
                    <li><a href="#">»</a></li>
                    </ul>
                </div>
                </div>
            </div>
        </div>
    )
}

ContentTheme.propTypes = {

}

export default ContentTheme;
