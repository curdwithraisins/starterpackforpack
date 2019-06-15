/**
 * Some function to do your staff
 * @param value
 */
import { IStaff } from '@pack-types/index';

export function doStaff(staff: IStaff) {
    return staff.value * staff.value;
};