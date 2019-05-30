define([],
    function() {
        'use strict';

        // Define dimensions
        var dimensions = {
            uses: "dimensions",
            min: 1,
            max: 1
        };

        // Define measures
        var measures = {
            uses: "measures",
            min: 1,
            max: 1
        };

        // Appearance section
        var appearanceSection = {
            uses:"settings",
            items:{
                KPIChatProp:{
                    ref:"KPIChannelName",
                    type:"string",
                    label:"KPI chat channel name",
                    defaultValue:"Unnamed channel"
                }
            }
        };

        // Return the properties
        return {
            type: "items",
            component: "accordion",
            items: {
                dimensions: dimensions,
                measures: measures,
                settings: appearanceSection
            }
        };
    });
