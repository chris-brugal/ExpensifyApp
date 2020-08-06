import React from 'react';
import {shallow} from 'enzyme';
import {ExpenseListFilters} from '../../components/ExpenseListFilters';
import {filters, altFilters} from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(() => {
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(<ExpenseListFilters 
        filters={filters}
        setTextFilter={setTextFilter}
        sortByAmount={sortByAmount}
        sortByDate={sortByDate}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
    />)
});


test('Should render the expenst list filters correctly', () => {
    expect(wrapper).toMatchSnapshot();
});

test('Should render the expenst list filters with alt data correctly', () => {
    wrapper.setProps({filters: altFilters});
    expect(wrapper).toMatchSnapshot();
});


//should handle text change
test('should handle text changes', () => {
    const value = altFilters.text;
    wrapper.find('input').at(0).simulate('change', {
        target: { value }
    });
    expect(setTextFilter).toHaveBeenLastCalledWith(value)
});


//should sort by date
test('should sort by date', () => {
    const value = 'date'
    wrapper.find('select').at(0).simulate('change', {
        target: {value}
    });
    expect(sortByDate).toHaveBeenCalled();
});

//should sort by amount
test('should sort by amount', () => {
    const value = "amount";
    wrapper.find('select').at(0).simulate('change', {
        target: {value}
    });
    expect(sortByAmount).toHaveBeenCalled();
});

//should handle date changes
test('should handle date changes', () => {
    wrapper.find('DateRangePicker').prop('onDatesChange')({
        startDate: altFilters.startDate, 
        endDate: altFilters.endDate
    });
    expect(setStartDate).toHaveBeenLastCalledWith(altFilters.startDate);
    expect(setEndDate).toHaveBeenLastCalledWith(altFilters.endDate);
});

//should handle date focus changes
test('should handle date focused change', () => {
    const calendarFocused = 'endDate';
    wrapper.find('DateRangePicker').prop('onFocusChange')(calendarFocused);
    expect(wrapper.state('calendarFocused')).toBe(calendarFocused);
});






