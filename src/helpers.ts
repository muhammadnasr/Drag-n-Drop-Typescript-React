import { COLUMN_WIDTH, GUTTER_SIZE } from './constants';

/**
 * Converts the width of a module from the number of columns to pixels. 
 * Note: We want the module to end just before a gutter in x direction (that's why we subtract gutter size).
 * @param {number} moduleW - The width of the module in terms of the number of columns.
 * @returns {number} - The width of the module in pixels.
 */
export const moduleW2LocalWidth = (moduleW: number): number => Math.round(moduleW) * COLUMN_WIDTH - GUTTER_SIZE;

/**
 * Converts the x-coordinate of a module from the number of columns to pixels.
 * Note: We want the module to always start after a gutter in x direction(that's why we add a gutter size).
 * @param {number} moduleX - The x-coordinate of the module in terms of the number of columns.
 * @returns {number} - The x-coordinate of the module in pixels.
 */
export const moduleX2LocalX = (moduleX: number): number => Math.round(moduleX) * COLUMN_WIDTH + GUTTER_SIZE;

/**
 * Converts the y-coordinate of a module from nominal y-coordinate.
 * Note: We want the module to always start after a gutter in y direction (that's why we add a gutter size).
 * @param {number} moduleY - The y-coordinate of the module in pixels.
 * @returns {number} - The y-coordinate of the module, moved down by the size of the gutter.
 */
export const moduleY2LocalY = (moduleY: number): number => moduleY + GUTTER_SIZE;
