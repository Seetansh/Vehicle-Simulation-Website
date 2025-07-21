import React from 'react'
import Map from '../components/Map'
import Clock from '../components/Clock'

export default function Home() {

    const vehicleDetails = [
        { title: 'Speed', value: '32 KPH' },
        { title: 'Distance covered', value: '100 KM' },
        { title: '', value: '32 KPH' },
        { title: 'Speed', value: '32 KPH' },
        { title: 'Speed', value: '32 KPH' }
    ]

    return (
        <div className='mapContainer'>
            <Map />
            <div className='overlay1'>
                <div className='overlay-content1'>
                    <h1 id='site-title'> SchoolBus2.0</h1>
                    <p><em>Vehicle Tracking Simulation App</em></p>
                </div>
            </div>
            <div className='overlay2'>
                <div className='overlay-content2'>
                    <h3 id='details-title'>Vehicle details</h3>
                    <Clock />
                    <div className='details-container'>
                        <div className='details-rows'>
                            {vehicleDetails.map((val, key) => {
                                return (
                                    <div className={'details-row'} key={key} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                        <span>{val.title}</span>
                                        <span>{val.value}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
