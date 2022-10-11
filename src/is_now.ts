export const ONE_MINUTE = 60 * 1000,
  ONE_HOUR = ONE_MINUTE * 60,
  ONE_DAY = ONE_HOUR * 24,
  ONE_WEEK = ONE_DAY * 7,
  ONE_MONTH = ONE_DAY * 30,
  ONE_YEAR = ONE_DAY * 365;

type ElapsedUnit = {
  yearAgo: string;
  monthAgo: string;
  weekAgo: string;
  dayAgo: string;
  hourAgo: string;
  minuteAgo: string;
  justBefore: string;

  yearLater: string;
  monthLater: string;
  weekLater: string;
  dayLater: string;
  hourLater: string;
  minuteLater: string;
  afterMoment: string;
}
export type ElapsedPredictArg = {
  diff: number;
  about: number;
  unit: string;
}
export type ElapsedPredict = (arg: ElapsedPredictArg) => string;

class IsNow {
  private standard_: Date;
  private standardLong: number;
  public unit: ElapsedUnit = {
    yearAgo: 'year ago',
    monthAgo: 'month ago',
    weekAgo: 'week ago',
    dayAgo: 'day ago',
    hourAgo: 'hour ago',
    minuteAgo: 'minute ago',
    justBefore: 'just before',

    yearLater: 'year later',
    monthLater: 'month later',
    weekLater: 'week later',
    dayLater: 'day later',
    hourLater: 'hour later',
    minuteLater: 'minute later',
    afterMoment: 'after a moment'
  };
  private predict_: ElapsedPredict = ({diff, about, unit}) => 
    Math.abs(diff) === about ? unit : `${about} ${unit}`
  ;

  constructor( standard: Date = new Date ){
    this.standard = standard;
    // this.standardLong = standard.getTime();
  }

  
  set predict( predict: ElapsedPredict ){
    this.predict_ = predict;
  }
  get predict(){
    return this.predict_;
  }

  set standard(standard: Date) {
    this.standard_ = standard
    this.standardLong = standard.getTime();
  }
  get standard() {
    return this.standard_;
  }

  about(dateOrMilliseconds: Date|number = new Date()): string {
    if( !((Number(dateOrMilliseconds) === dateOrMilliseconds) || dateOrMilliseconds instanceof Date)  )
      return undefined;

    const compare: number = 
      dateOrMilliseconds instanceof Date 
      ? dateOrMilliseconds.getTime()
      : dateOrMilliseconds
    ;
    const diff = compare - this.standardLong;
    if( diff < 1 ){

      const positiveDiff = Math.abs(diff);
      if(positiveDiff > ONE_YEAR)
        return this.predict({diff, about: Math.floor(positiveDiff / ONE_YEAR), unit: this.unit.yearAgo})
        // return `${Math.floor(diff / ONE_YEAR)} ${this.unit.yearAgo}`
      else if(positiveDiff > ONE_MONTH)
        return this.predict({diff, about: Math.floor(positiveDiff / ONE_MONTH), unit: this.unit.monthAgo})
        // return `${Math.floor(diff / ONE_MONTH)} ${this.unit.monthAgo}`
      else if(positiveDiff > ONE_WEEK)
        return this.predict({diff, about: Math.floor(positiveDiff / ONE_WEEK), unit: this.unit.weekAgo})
      // return `${Math.floor(diff / ONE_WEEK)} ${this.unit.weekAgo}`
      else if(positiveDiff > ONE_DAY)
        return this.predict({diff, about: Math.floor(positiveDiff / ONE_DAY), unit: this.unit.dayAgo})
        // return `${Math.floor(diff / ONE_DAY)} ${this.unit.dayAgo}`
      else if(positiveDiff > ONE_HOUR)
        return this.predict({diff, about: Math.floor(positiveDiff / ONE_HOUR), unit: this.unit.hourAgo})
        // return `${Math.floor(diff / ONE_HOUR)} ${this.unit.hourAgo}`
      else if(positiveDiff > ONE_MINUTE)
        return this.predict({diff, about: Math.floor(positiveDiff / ONE_MINUTE), unit: this.unit.minuteAgo})
        // return `${Math.floor(diff / ONE_MINUTE)} ${this.unit.minuteAgo}`
      else 
        return this.predict({diff, about: positiveDiff, unit: this.unit.justBefore})
        // return this.unit.justBefore
      
    }else{

      // diff = Math.abs(diff);
      
      if(diff > ONE_YEAR)
        return this.predict({diff, about: Math.floor(diff / ONE_YEAR), unit: this.unit.yearLater})
        // return `${Math.floor(diff / ONE_YEAR)} ${this.unit.yearLater}`
      else if(diff > ONE_MONTH)
        return this.predict({diff, about: Math.floor(diff / ONE_MONTH), unit: this.unit.monthLater})
        // return `${Math.floor(diff / ONE_MONTH)} ${this.unit.monthLater}`
      else if(diff > ONE_WEEK)
        return this.predict({diff, about: Math.floor(diff / ONE_WEEK), unit: this.unit.weekLater})
        // return `${Math.floor(diff / ONE_WEEK)} ${this.unit.weekLater}`
      else if(diff > ONE_DAY)
        return this.predict({diff, about: Math.floor(diff / ONE_DAY), unit: this.unit.dayLater})
        // return `${Math.floor(diff / ONE_DAY)} ${this.unit.dayLater}`
      else if(diff > ONE_HOUR)
        return this.predict({diff, about: Math.floor(diff / ONE_HOUR), unit: this.unit.hourLater})
        // return `${Math.floor(diff / ONE_HOUR)} ${this.unit.hourLater}`
      else if(diff > ONE_MINUTE)
        return this.predict({diff, about: Math.floor(diff / ONE_MINUTE), unit: this.unit.minuteLater})
        // return `${Math.floor(diff / ONE_MINUTE)} ${this.unit.minuteLater}`
      else 
        return this.predict({diff, about: diff, unit: this.unit.afterMoment})
        // return this.unit.afterMoment
      
    }
  }
}


export const isNow = new IsNow();

export const createIsNow = ( standard: Date = new Date() ) => new IsNow( standard );