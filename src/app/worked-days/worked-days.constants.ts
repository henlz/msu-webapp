const weekDaysMap = {
  'monday': 'Monday',
  'tuesday': 'Tuesday',
  'wednesday': 'Wednesday',
  'thursday': 'Thursday',
  'friday': 'Friday',
  'saturday': 'Saturday',
  'sunday': 'Sunday'
};

const daysIndexes = Object.keys(weekDaysMap);
const daysFullnames = Object.keys(weekDaysMap).map(key => weekDaysMap[key]);

export {
  weekDaysMap,
  daysIndexes,
  daysFullnames
}
