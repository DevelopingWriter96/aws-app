/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createImage = /* GraphQL */ `
  mutation CreateImage(
    $input: CreateImageInput!
    $condition: ModelImageConditionInput
  ) {
    createImage(input: $input, condition: $condition) {
      ThumbnailURL
      ImageURL
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateImage = /* GraphQL */ `
  mutation UpdateImage(
    $input: UpdateImageInput!
    $condition: ModelImageConditionInput
  ) {
    updateImage(input: $input, condition: $condition) {
      ThumbnailURL
      ImageURL
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteImage = /* GraphQL */ `
  mutation DeleteImage(
    $input: DeleteImageInput!
    $condition: ModelImageConditionInput
  ) {
    deleteImage(input: $input, condition: $condition) {
      ThumbnailURL
      ImageURL
      id
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const createSetData = /* GraphQL */ `
  mutation CreateSetData(
    $input: CreateSetDataInput!
    $condition: ModelSetDataConditionInput
  ) {
    createSetData(input: $input, condition: $condition) {
      id
      Number
      NumberVariant
      Name
      Year
      Theme
      ThemeGroup
      Subtheme
      Category
      Released
      Pieces
      Minifigs
      Image {
        ThumbnailURL
        ImageURL
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      BricksetURL
      Collection {
        Collection
      }
      Collections {
        OwnedBy
        WantedBy
      }
      LEGOCom {
        US {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        UK {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        CA {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        DE {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
      }
      Rating
      ReviewCount
      PackagingType
      Availability
      InstructionsCount
      AdditionalImageCount
      AgeRange {
        AgeRange
      }
      Dimensions {
        Height
        Width
        Depth
        Weight
      }
      Barcode {
        EAN
        UPC
      }
      ExtendedData {
        Tags
        Description
      }
      LastUpdated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const updateSetData = /* GraphQL */ `
  mutation UpdateSetData(
    $input: UpdateSetDataInput!
    $condition: ModelSetDataConditionInput
  ) {
    updateSetData(input: $input, condition: $condition) {
      id
      Number
      NumberVariant
      Name
      Year
      Theme
      ThemeGroup
      Subtheme
      Category
      Released
      Pieces
      Minifigs
      Image {
        ThumbnailURL
        ImageURL
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      BricksetURL
      Collection {
        Collection
      }
      Collections {
        OwnedBy
        WantedBy
      }
      LEGOCom {
        US {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        UK {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        CA {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        DE {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
      }
      Rating
      ReviewCount
      PackagingType
      Availability
      InstructionsCount
      AdditionalImageCount
      AgeRange {
        AgeRange
      }
      Dimensions {
        Height
        Width
        Depth
        Weight
      }
      Barcode {
        EAN
        UPC
      }
      ExtendedData {
        Tags
        Description
      }
      LastUpdated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const deleteSetData = /* GraphQL */ `
  mutation DeleteSetData(
    $input: DeleteSetDataInput!
    $condition: ModelSetDataConditionInput
  ) {
    deleteSetData(input: $input, condition: $condition) {
      id
      Number
      NumberVariant
      Name
      Year
      Theme
      ThemeGroup
      Subtheme
      Category
      Released
      Pieces
      Minifigs
      Image {
        ThumbnailURL
        ImageURL
        id
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      BricksetURL
      Collection {
        Collection
      }
      Collections {
        OwnedBy
        WantedBy
      }
      LEGOCom {
        US {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        UK {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        CA {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
        DE {
          RetailPrice
          DateFirstAvaliable
          DateLastAvaliable
        }
      }
      Rating
      ReviewCount
      PackagingType
      Availability
      InstructionsCount
      AdditionalImageCount
      AgeRange {
        AgeRange
      }
      Dimensions {
        Height
        Width
        Depth
        Weight
      }
      Barcode {
        EAN
        UPC
      }
      ExtendedData {
        Tags
        Description
      }
      LastUpdated
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
