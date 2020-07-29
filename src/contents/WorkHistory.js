import React, { Component } from 'react';
import WorkCard from '../components/WorkCard';

class WorkHistory extends Component {
    render() {
        return (
            <div className="condiv">
                <h1 className="subtopic">My Work History</h1>
                <WorkCard
                    company='Flatiron School'
                    title='Admissions Lead'
                    startDate='11/2018'
                    endDate='11/2019'
                    description={
                        'More than doubled revenue generated in the Washington DC market to become responsible for ~$1.2M quarterly.',
                        'Managed competing priorities of local campus and HQ, building bridges with local teams and forging stronger and more effective relationships.',
                        'Designed and implemented more streamlined admissions processes, cohort start management, and overall student experience.',
                        'Launched new markets and programs, advising on strategic marketing and events to include: Seattle, Denver, Chicago, Data Science, UX/UI Design, and veteran initiatives such as GI-Bill implementation and VET-TEC.'
                    }
                />


                
            </div>
        )
    }
}
    
export default WorkHistory