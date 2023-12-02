function printSchedule(meetingsArr) {
    const schedule = new Object();

    meetingsArr.forEach((meetingInfo) => {
        const [dayOfWeek, personName] = meetingInfo.split(" ");

        if (schedule[dayOfWeek]) {
            console.log(`Conflict on ${dayOfWeek}!`);
        } else {
            schedule[dayOfWeek] = personName;
            console.log(`Scheduled for ${dayOfWeek}`);
        }
    });

    for (const meeting in schedule) {
        console.log(`${meeting} -> ${schedule[meeting]}`);
    }
}

printSchedule(["Monday Peter", "Wednesday Bill", "Monday Tim", "Friday Tim"]);
