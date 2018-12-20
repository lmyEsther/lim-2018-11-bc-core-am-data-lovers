/* eslint-disable camelcase */
require('../src/data.js');

const input = [{Year: '1992-01-04'}, {Year: '1993-01-04'}, {Year: '1994-01-04'}, {Year: '1995-01-04'}, {Year: '1996-01-04'}];
const output = [1992, 1993, 1994, 1995, 1996];

const input2 = [{Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2009-01-04'},
  {Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2010-01-04'},
  {Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2011-01-04'},
  {Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2012-01-04'},
  {Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2013-01-04'},
  {Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2014-01-04'},
  {Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2015-01-04'},
  {Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2016-01-04'}];
const output2 = [{Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2010-01-04'}, 
  {Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2011-01-04'},
  {Total_Injured_Persons: 2237367, Total_Injured_Persons_Air: 301, Year: '2012-01-04'}];


describe('injuries', () => {
  it('debería ser un objeto', () => {
    expect(typeof injuries).toBe('object');
  });
  describe('injuries.obtenerAñosUnicos', () => {
    it('debería ser una función', () => {
      expect(typeof injuries.obtenerAñosUnicos).toBe('function');
    });
    it('debería retornar un array con los años únicos que presente la data', () => {
      expect(injuries.obtenerAñosUnicos(input)).toEqual(output);
    });
  });
  describe('injuries.recentYear', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof injuries.recentYears).toBe('function');
    });
    it('Deberia retornar un array con los ultimos años de la data', () => {
      expect(injuries.recentYears(input2)).toEqual(output2);
    });
  });
  describe('injuries.filtrarRango', () => {
    it('Deberia ser una funcion', () => {
      expect(typeof injuries.filtrarRango).toBe('function');
    });
    it('Deberia retornar un array de la data en un rango de años', () => {
      expect(injuries.filtrarRango(input2)).toEqual(output2);
    });
  });
});

/*
describe('example', () => {
  it('is a function', () => {
    expect(typeof example).toBe('function');
  });

  it('returns `example`', () => {
    expect(example()).toBe('example');
  });
});*/
