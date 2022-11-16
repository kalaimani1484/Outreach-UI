export class EventsData {
    id: string;
    eventId: string;
    eventName: string;
    eventMonth: string;
    description: string;
    eventDate: string;
    baseLocation: string;
    councilName: string;
    benificiaryName: string;
    status: string;
    category: string;
    venue: string;
    project: string;
    poCData: PoCData[];
    statisticData: StatisticData;
}

export class PoCData {
    employeeId: string;
    name: string;
    contact: string;
}

export class StatisticData {
    averageRate: number;
    volunteersCount: number;
    volunteerHours: number;
    travelHours: number;
    livesImpacted: number;
}
