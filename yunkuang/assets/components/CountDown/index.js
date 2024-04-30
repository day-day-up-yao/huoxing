import React, { useEffect } from 'react'

import countDown from './countDown'

export default ({ eleIdName, timestamp, level }) => {
    const times = new Date(timestamp)
    const timesObj = {
        year: times.getFullYear(),
        month: times.getMonth() + 1,
        day: times.getDate(),
        hours: times.getHours(),
        minutes: times.getMinutes(),
        seconds: times.getSeconds()
    }
    useEffect(() => {
        countDown(`#${eleIdName}`, {
            year: timesObj.year, // required
            month: timesObj.month, // required
            day: timesObj.day, // required
            hours: timesObj.hours, // Default is 0 [0-23] integer
            minutes: timesObj.minutes, // Default is 0 [0-59] integer
            seconds: timesObj.seconds, // Default is 0 [0-59] integer
            level: level,
            words: { // words displayed into the countdown
                days: ':',
                hours: ':',
                minutes: ':',
                seconds: '',
                pluralLetter: ''
            },
            plural: true, // use plurals
            inline: false, // set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
            inlineClass: 'mclouds-countdown-inline', // inline css span class in case of inline = true
            // in case of inline set to false
            enableUtc: false, // Use UTC as default
            onEnd: function () { return false }, // Callback on countdown end, put your own function here
            refresh: 1000, // default refresh every 1s
            sectionClass: 'mclouds-section', // section css class
            amountClass: 'mclouds-amount', // amount css class
            wordClass: 'mclouds-word', // word css class
            zeroPad: true,
            countUp: false
        })
    }, [])
    return <div id={eleIdName} className="countdown-item" />
}
