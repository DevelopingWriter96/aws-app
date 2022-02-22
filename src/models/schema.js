export const schema = {
    "models": {
        "SetData": {
            "name": "SetData",
            "fields": {
                "id": {
                    "name": "id",
                    "isArray": false,
                    "type": "ID",
                    "isRequired": true,
                    "attributes": []
                },
                "Number": {
                    "name": "Number",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "NumberVariant": {
                    "name": "NumberVariant",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "Name": {
                    "name": "Name",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Year": {
                    "name": "Year",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "Theme": {
                    "name": "Theme",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ThemeGroup": {
                    "name": "ThemeGroup",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Subtheme": {
                    "name": "Subtheme",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Category": {
                    "name": "Category",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Released": {
                    "name": "Released",
                    "isArray": false,
                    "type": "Boolean",
                    "isRequired": false,
                    "attributes": []
                },
                "Pieces": {
                    "name": "Pieces",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "Minifigs": {
                    "name": "Minifigs",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "Image": {
                    "name": "Image",
                    "isArray": false,
                    "type": {
                        "nonModel": "Image"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "BricksetURL": {
                    "name": "BricksetURL",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Collection": {
                    "name": "Collection",
                    "isArray": false,
                    "type": {
                        "nonModel": "Collection"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Collections": {
                    "name": "Collections",
                    "isArray": false,
                    "type": {
                        "nonModel": "Collections"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "LEGOCom": {
                    "name": "LEGOCom",
                    "isArray": false,
                    "type": {
                        "nonModel": "LEGOCom"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Rating": {
                    "name": "Rating",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "ReviewCount": {
                    "name": "ReviewCount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "PackagingType": {
                    "name": "PackagingType",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "Availability": {
                    "name": "Availability",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "InstructionsCount": {
                    "name": "InstructionsCount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "AdditionalImageCount": {
                    "name": "AdditionalImageCount",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "AgeRange": {
                    "name": "AgeRange",
                    "isArray": false,
                    "type": {
                        "nonModel": "AgeRange"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Dimensions": {
                    "name": "Dimensions",
                    "isArray": false,
                    "type": {
                        "nonModel": "Dimensions"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "Barcode": {
                    "name": "Barcode",
                    "isArray": false,
                    "type": {
                        "nonModel": "Barcode"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "ExtendedData": {
                    "name": "ExtendedData",
                    "isArray": false,
                    "type": {
                        "nonModel": "ExtendedData"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "LastUpdated": {
                    "name": "LastUpdated",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "createdAt": {
                    "name": "createdAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                },
                "updatedAt": {
                    "name": "updatedAt",
                    "isArray": false,
                    "type": "AWSDateTime",
                    "isRequired": false,
                    "attributes": [],
                    "isReadOnly": true
                }
            },
            "syncable": true,
            "pluralName": "SetData",
            "attributes": [
                {
                    "type": "model",
                    "properties": {}
                },
                {
                    "type": "auth",
                    "properties": {
                        "rules": [
                            {
                                "allow": "public",
                                "operations": [
                                    "create",
                                    "update",
                                    "delete",
                                    "read"
                                ]
                            }
                        ]
                    }
                }
            ]
        }
    },
    "enums": {},
    "nonModels": {
        "ExtendedData": {
            "name": "ExtendedData",
            "fields": {
                "Tags": {
                    "name": "Tags",
                    "isArray": true,
                    "type": "String",
                    "isRequired": false,
                    "attributes": [],
                    "isArrayNullable": true
                },
                "Description": {
                    "name": "Description",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Barcode": {
            "name": "Barcode",
            "fields": {
                "EAN": {
                    "name": "EAN",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "UPC": {
                    "name": "UPC",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Dimensions": {
            "name": "Dimensions",
            "fields": {
                "Height": {
                    "name": "Height",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Width": {
                    "name": "Width",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Depth": {
                    "name": "Depth",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "Weight": {
                    "name": "Weight",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "AgeRange": {
            "name": "AgeRange",
            "fields": {
                "AgeRange": {
                    "name": "AgeRange",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "DE": {
            "name": "DE",
            "fields": {
                "RetailPrice": {
                    "name": "RetailPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "DateFirstAvaliable": {
                    "name": "DateFirstAvaliable",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "DateLastAvaliable": {
                    "name": "DateLastAvaliable",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "CA": {
            "name": "CA",
            "fields": {
                "RetailPrice": {
                    "name": "RetailPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "DateFirstAvaliable": {
                    "name": "DateFirstAvaliable",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "DateLastAvaliable": {
                    "name": "DateLastAvaliable",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "UK": {
            "name": "UK",
            "fields": {
                "RetailPrice": {
                    "name": "RetailPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "DateFirstAvaliable": {
                    "name": "DateFirstAvaliable",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "DateLastAvaliable": {
                    "name": "DateLastAvaliable",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "US": {
            "name": "US",
            "fields": {
                "RetailPrice": {
                    "name": "RetailPrice",
                    "isArray": false,
                    "type": "Float",
                    "isRequired": false,
                    "attributes": []
                },
                "DateFirstAvaliable": {
                    "name": "DateFirstAvaliable",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "DateLastAvaliable": {
                    "name": "DateLastAvaliable",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "LEGOCom": {
            "name": "LEGOCom",
            "fields": {
                "US": {
                    "name": "US",
                    "isArray": false,
                    "type": {
                        "nonModel": "US"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "UK": {
                    "name": "UK",
                    "isArray": false,
                    "type": {
                        "nonModel": "UK"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "CA": {
                    "name": "CA",
                    "isArray": false,
                    "type": {
                        "nonModel": "CA"
                    },
                    "isRequired": false,
                    "attributes": []
                },
                "DE": {
                    "name": "DE",
                    "isArray": false,
                    "type": {
                        "nonModel": "DE"
                    },
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Collections": {
            "name": "Collections",
            "fields": {
                "OwnedBy": {
                    "name": "OwnedBy",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                },
                "WantedBy": {
                    "name": "WantedBy",
                    "isArray": false,
                    "type": "Int",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Collection": {
            "name": "Collection",
            "fields": {
                "Collection": {
                    "name": "Collection",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        },
        "Image": {
            "name": "Image",
            "fields": {
                "ThumbnailURL": {
                    "name": "ThumbnailURL",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                },
                "ImageURL": {
                    "name": "ImageURL",
                    "isArray": false,
                    "type": "String",
                    "isRequired": false,
                    "attributes": []
                }
            }
        }
    },
    "version": "961baa005bb67298104b580054a01fab"
};