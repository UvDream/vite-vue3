/*
 * @Author: wangzhongjie
 * @Date: 2021-07-02 13:53:13
 * @LastEditors: wangzhongjie
 * @LastEditTime: 2021-07-02 17:05:24
 * @Description:日历类
 * @Email: UvDream@163.com
 */
export interface CalendarItem {
    day: number,
    current: boolean,
    type: string,
    selected: boolean,
    disabled: boolean
}
interface CalendarOptions {
    FirstDayOfWeek: number
}
type CalendarList = Array<CalendarItem>
class Calendar {
    private defaultOptions: CalendarOptions = {
        FirstDayOfWeek: 1
    }
    constructor(options?: CalendarOptions) {
        Object.assign(this.defaultOptions, options)
    }
    // 获取当前月份的日期组合
    getCalendarList(month: number, year: number): CalendarList {
        const nowDaysArray = this.getNowDaysList(month, year)
        const preDaysArray = this.getPrevDaysList(month, year)
        const nextDaysArray = this.getNextDaysList(month, year)
        return preDaysArray.concat(nowDaysArray, nextDaysArray)
    }
    //获取当前日历上个月占有的day list
    getPrevDaysList(month: number, year: number): CalendarList {
        const startIndex = this.weekStartIndex(month, year);
        let RemainWeek = startIndex - this.defaultOptions.FirstDayOfWeek
        if (this.defaultOptions.FirstDayOfWeek > startIndex) {
            RemainWeek = RemainWeek + 7
        }
        const prevStartDay = this.getMonthLastDate(year, month - 1) - RemainWeek
        const startToArray = new Array(RemainWeek).fill("").map((item, index) => {
            return {
                day: prevStartDay + index,
                type: 'prev',
                current: false,
                selected: false,
                disabled: false
            };
        });

        return startToArray;
    }
    //获取当前月份的day list
    getNowDaysList(month: number, year: number): CalendarList {
        let days = this.getMonthLastDate(year, month)
        const nowDays = new Array(days).fill("").map((item, index) => {
            item = index + 1;
            return {
                day: item,
                current: item == new Date().getDate(),
                type: 'now',
                selected: false,
                disabled: false
            };
        });
        return nowDays
    }
    // 获取当前与日历下个月占用的day list
    getNextDaysList(month: number, year: number): CalendarList {
        // 获取当前月最后一个的星期
        const endDayWeek = this.weekEndIndex(month, year)
        let RemainWeek = this.defaultOptions.FirstDayOfWeek - endDayWeek - 1
        if (endDayWeek >= this.defaultOptions.FirstDayOfWeek) {
            RemainWeek = RemainWeek + 7
        }
        const lastDays = new Array(RemainWeek).fill("").map((item, index) => {
            item = index + 1;
            return {
                day: item,
                type: 'now',
                current: false,
                selected: false,
                disabled: false
            };
        });
        return lastDays;
    }
    // 获取月份最后一天
    getMonthLastDate(month: number, year: number) {
        return new Date(year, month, 0).getDate()
    }
    // 获取当前月份1号开始的星期
    weekStartIndex(month: number, year: number) {
        const day = "01";
        month = month < 10 ? 0 + month : month;
        const time = year + "-" + month + "-" + day;
        return new Date(time).getDay()
    }
    // 获取当前月份最后一天星期
    weekEndIndex(month: number, year: number) {
        const day = this.getMonthLastDate(month, year)
        month = month < 10 ? 0 + month : month;
        const time = year + "-" + month + "-" + day;
        return new Date(time).getDay()
    }
}
export default Calendar;