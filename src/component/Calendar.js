import React, { useState } from 'react'
import { View } from 'react-native-animatable';
import { Calendar, LocaleConfig } from 'react-native-calendars';
const CalendarComponent = () => {
    const [selected, setSelected]=useState('')
  return (
    <View>
     <Calendar
         onDayPress={day => {
            setSelected(day.dateString);
          }}
          markedDates={{
            [selected]: {selected: true, disableTouchEvent: true, selectedDotColor: 'orange'}
          }}
     />
    </View>
  )
}

export default CalendarComponent