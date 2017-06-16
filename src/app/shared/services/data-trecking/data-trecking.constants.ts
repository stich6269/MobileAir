export const SENSORS_SETUP:ISensorsSetup = {
    co2: {
        to: 700,
        toMuch: 'В помещении обнаружен повышенный уровень СО2б пожалуйста, проветрите помещение.'
    },
    temperature: {
        from: 22,
        to: 26,
        toMuch: 'В помещении превышено значение оптимальной температуры, включите кондиционер или проетрите помещение',
        toLess: 'Температура слишком низнкая для комфортного пребывания в помещении, поджалуйста, включите обогрев.'
    },
    light: {
        from: 2000,
        to: 40000,
        toMuch: 'В помещении превышено значение оптимальной температуры, включите кондиционер или проетрите помещение',
        toLess: 'Температура слишком низнкая для комфортного пребывания в помещении, поджалуйста, включите обогрев.'
    },
    humidity: {
        from: 22,
        to: 45
    },
    voc: {
        from: 4000
    },
    ultraviolet: {
        to: 350
    },
    slavel: {
        to: 65
    },
    sdensity: {
        to: 25
    },
    pressure: {
        from: 470,
        to: 530
    }
};


export interface ISensorsSetup {
    co2:IParams;
    voc:IParams;
    temperature:IParams;
    humidity:IParams;
    ultraviolet:IParams;
    light:IParams;
    pressure:IParams;
    slavel:IParams;
    sdensity:IParams;
}

export interface IParams {
    from?:number;
    to?:number;
    toMuch?:string;
    toLess?:string;
}

export interface ISensorAlert {
    current: number;
    average: number;
    min: number;
    max: number;
    optimal: number;
    displayText: string;
}