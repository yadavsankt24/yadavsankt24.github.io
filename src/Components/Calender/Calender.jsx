import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import "../Calender/Calender.css"
// import TooltipWrapper from 'react-tooltip'


export const Calender = () => {
    const selectLastHalfYear=(contribution)=>{
        const currentYear=new Date().getFullYear();
        const currentMonth=new Date().getMonth();
        const showMonths=6;

        return contribution.filter((day)=>{
            const date=new Date(day.date);
            const monthOfDay=date.getMonth();

            return (
                date.getFullYear()===currentYear && monthOfDay>currentMonth-showMonths &&
                monthOfDay<=currentMonth
            )
        })
    }
  return (
    <div className="calender" data-aos="fade-up"
    data-aos-offset="-50"
    data-aos-delay="50"
    data-aos-duration="1000"
    data-aos-easing="ease-in-out"
    data-aos-mirror="true"
    data-aos-once="false"
    data-aos-anchor-placement="top-center">
          <h1> Github Calender</h1>
          <div className='calenderChild'>
        <GitHubCalendar 
         username="yadavsankt24" 
         transformData={selectLastHalfYear}
         blockSize={20}
         fontSize={15} 
         blockRadius={2} 
         >
         {/* <TooltipWrapper delayShow={20} html/> */}
       </GitHubCalendar>
       </div>
    </div>
  )
}

export default Calender