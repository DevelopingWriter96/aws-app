// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { SetData, ExtendedData, Barcode, Dimensions, AgeRange, DE, CA, UK, US, LEGOCom, Collections, Collection, Image } = initSchema(schema);

export {
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
  Collection,
  Image
};