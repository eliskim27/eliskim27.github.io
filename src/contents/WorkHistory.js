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
                    description={[
                        'More than doubled revenue generated in the Washington DC market to become responsible for ~$1.2M quarterly.',
                        'Managed competing priorities of local campus and HQ, building bridges with local teams and forging stronger and more effective relationships.',
                        'Designed and implemented more streamlined admissions processes, cohort start management, and overall student experience.',
                        'Launched new markets and programs, advising on strategic marketing and events to include: Seattle, Denver, Chicago, Data Science, UX/UI Design, and veteran initiatives such as GI-Bill implementation and VET-TEC.'
                    ]}
                />
                <WorkCard
                    company='Samsung Electronics America'
                    title='Inside Sales Representative'
                    startDate='06/2016'
                    endDate='11/2018'
                    description={[
                        'Assumed responsibilities of Team Lead for Lead Development to include: delegating of daily incoming leads, reporting on Key Performance Indicators, and identifying inefficiencies for training purposes.',
                        'Member of cross-departmental QA Testing Team for newer enhancements in Salesforce ensuring that the enhancements function properly and are optimized for day-to-day use.',
                        'Leveraged internal network of technical product engineers and other resources to help close potential sales.'
                    ]}
                />
                <WorkCard
                    company='Army National Guard'
                    title='Military Police (31B)'
                    startDate='08/2012'
                    endDate='08/2018'
                    description={[
                        'Awarded the Army Commendation Medal and the Army Achievement Medal on two occasions.',
                        'Oversaw training of junior and senior soldiers on key skills and tasks.',
                        'Maintained active Security Clearance throughout service.'
                    ]}
                />
                <WorkCard
                    company='Flatiron School'
                    title='Admissions Lead'
                    startDate='11/2018'
                    endDate='11/2019'
                    description={[
                        'More than doubled revenue generated in the Washington DC market to become responsible for ~$1.2M quarterly.',
                        'Managed competing priorities of local campus and HQ, building bridges with local teams and forging stronger and more effective relationships.',
                        'Designed and implemented more streamlined admissions processes, cohort start management, and overall student experience.',
                        'Launched new markets and programs, advising on strategic marketing and events to include: Seattle, Denver, Chicago, Data Science, UX/UI Design, and veteran initiatives such as GI-Bill implementation and VET-TEC.'
                    ]}
                />


                
            </div>
        )
    }
}
    
export default WorkHistory