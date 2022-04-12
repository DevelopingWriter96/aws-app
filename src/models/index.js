// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Image, SetData, ExtendedData, Barcode, Dimensions, AgeRange, DE, CA, UK, US, LEGOCom, Collections, Collection } = initSchema(schema);

export {
  Image,
  SetData,
  ExtendedData,
  Barcode,
  Dimensions,
  AgeRange,
  DE,
  CA,
  UK,
  US,
  LEGOCom,
  Collections,
  Collection
};