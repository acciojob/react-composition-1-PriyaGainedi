import React, {useState} from "react";

const Tabs = ({tabs}) => {

    let [currentTab, setCurrentTab] = useState({});

    
    return (
        <div>
            {   
                tabs.map((tab)=>(
                    <li onClick={()=>{setCurrentTab(tab)}}>{tab.title}</li>
                ))
            }
            {currentTab && <p>{currentTab.content}</p>}
        </div>
    )

}

export default Tabs;