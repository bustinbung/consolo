export const convertDate = function(date: Date) {
    const offset = date.getTimezoneOffset();
    const adjustedDate = new Date(date.getTime() - (offset*60*1000));

    return adjustedDate.toISOString().substring(0, 10);
}