import { DatePickerField } from '../ui/date-picker-field';
import { DateTimePickerFields } from '../ui/date-time-picker-fields';
import { TimePickerField } from '../ui/time-picker-field';

const DateTimePicker = {
  install(Vue) {
    Vue.registerElement('DatePickerField', () => DatePickerField, {
      model: {
        prop: 'date',
        event: 'dateChange'
      }
    });

    Vue.registerElement('TimePickerField', () => TimePickerField, {
      model: {
        prop: 'time',
        event: 'timeChange'
      }
    });

    Vue.registerElement('DateTimePickerFields', () => DateTimePickerFields, {
      model: {
        prop: 'date',
        event: 'dateChange'
      }
    });
  }
};
export default DateTimePicker;
