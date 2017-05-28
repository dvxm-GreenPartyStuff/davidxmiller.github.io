
function calculateBallotBoxCandidateTotalVotesByRound() 
{
    // DMFIXME: Checking undefined per iteration on loop, should only need to check once
    
    for (var box in g_resultsByBox) {
        if (g_resultsByBox.hasOwnProperty(box)) {
            var boxDetails = g_resultsByBox[box];
            var CandidateTotalVotesByRound = [];
            for (var j = 0; j < boxDetails.Results.length; j++) {
                var result = boxDetails.Results[j];
                for (var i = 0; i < result.Votes.length; i++) {
                    if (CandidateTotalVotesByRound[i] === undefined) {
                        CandidateTotalVotesByRound[i] = 0;
                    }
                    CandidateTotalVotesByRound[i] += result.Votes[i];
                }
            }
            boxDetails["CandidateTotalVotesByRound"] = CandidateTotalVotesByRound;
        }
    }
}

function calculateBallotBoxPercentageByRound() 
{
    // DMFIXME: Lots of undefined checking, find neater way
    for (var box in g_resultsByBox) {
        if (g_resultsByBox.hasOwnProperty(box)) {
            var boxDetails = g_resultsByBox[box];
            boxDetails["PartyVotesAsPercentage"] = {};
            for (var j = 0; j < boxDetails.Results.length; j++) {
                var result = boxDetails.Results[j];
                result["CandidateVotesAsPercentage"] = [];
                if (boxDetails["PartyVotesAsPercentage"][result.Party] === undefined) {
                    boxDetails["PartyVotesAsPercentage"][result.Party] = [];
                }
                for (var i = 0; i < result.Votes.length; i++) {
                    if (result.CandidateVotesAsPercentage[i] === undefined) {
                        result.CandidateVotesAsPercentage[i] = 0;
                    }
                    result.CandidateVotesAsPercentage[i] = (result.Votes[i] / boxDetails.CandidateTotalVotesByRound[i]) * 100;
                    if (boxDetails["PartyVotesAsPercentage"][result.Party][i] === undefined) {
                        boxDetails["PartyVotesAsPercentage"][result.Party][i] = 0;
                    }
                    boxDetails["PartyVotesAsPercentage"][result.Party][i] += result.CandidateVotesAsPercentage[i];
                }
            }
        }
    }
}

function heatmapMinMaxStepSize(party)
{
    // DMFIXME: Check behaviour when max-min isn't integer multiple
    var minPercentage = 10;
    var maxPercentage = 38;
    var percentageRange = maxPercentage - minPercentage;
    var heatmapPartyColors = g_heatmapAllPartyColors[party];
    var stepSizePercentage = Math.ceil(percentageRange / heatmapPartyColors.length);
    return {
        minPercentage: minPercentage,
        maxPercentage: maxPercentage,
        stepSizePercentage: stepSizePercentage
    }
}

function getColorOpacityFromPercentage(party, percentage) {
    if (percentage === undefined || percentage === null || percentage === 0) {
        return ['#ffffff', 0.0];
    }
    var heatmapPartyColors = g_heatmapAllPartyColors[party];
    var minMaxStep = heatmapMinMaxStepSize(party);
    var opacity = 0.7;
    if (percentage < minMaxStep.minPercentage) {
        return [heatmapPartyColors[0], opacity];
    }
    if (percentage > minMaxStep.maxPercentage) {
        return [heatmapPartyColors[heatmapPartyColors.length - 1], opacity];
    }
    var colorIndex = (Math.floor(
            (percentage - minMaxStep.minPercentage) /
            minMaxStep.stepSizePercentage)) + 1; // +1 as < min == color 0
    return [heatmapPartyColors[colorIndex], opacity];
}

function styleForPollingDistrictFeature(feature) {
    // DMFIXME: Better way than needing global?
    var party = g_selectedParty;
    var round = g_selectedRound;
    var averagePercentageForPartyForRoundAcrossBallotBoxes = 0;
    if (feature.properties["BALLOT_BOXES"] !== undefined) {
        // There can be multiple boxes per polling district.
        // If this is the case then sum the votes across the ballot boxes
        var summedPercentageVotesForPartyForRoundAcrossBallotBoxes = 0;
        for (var i = 0; i < feature.properties["BALLOT_BOXES"].length; i++) {
            var ballotBoxNumber = feature.properties["BALLOT_BOXES"][i];
            if (g_resultsByBox[ballotBoxNumber] === undefined) {
                summedPercentageVotesForPartyForRoundAcrossBallotBoxes = null;
                break;
            }
            summedPercentageVotesForPartyForRoundAcrossBallotBoxes +=
                g_resultsByBox[ballotBoxNumber].PartyVotesAsPercentage[party.toString()][round];
        }
        if (summedPercentageVotesForPartyForRoundAcrossBallotBoxes != null) {
            averagePercentageForPartyForRoundAcrossBallotBoxes =
                (summedPercentageVotesForPartyForRoundAcrossBallotBoxes / feature.properties["BALLOT_BOXES"].length);
        }
    }

    var colOp = getColorOpacityFromPercentage(party, averagePercentageForPartyForRoundAcrossBallotBoxes);
    if (colOp[0] === ['#ffffff', 0.0]) { // DMFIXME: Ugly way to check but legend uses the above also, fix this
        return null;
    }
    return {
        fillColor: colOp[0],
        weight: 1,
        opacity: 1,
        color: 'white',
        dashArray: '3',
        fillOpacity: colOp[1]
    };
}

function styleForWardBoundaryFeature(feature)
{
    // DMFIXME: Find out how to style boundary using css
    return {
        weight: 1,
        opacity: 0.5,
        color: 'black',
        fill:false,
        dashArray: ''
    };
}

function onEachPollingDistrictFeature(feature, layer) {
    layer.on({
        mouseover: highlightPollingDistrict,
        mouseout: resetPollingDistrictHighlight,
        click: zoomToPollingDistrictFeature
    });
}

function highlightPollingDistrict(e) {
    // DMFIXME: Find out how to style boundary using css
    var layer = e.target;
    layer.setStyle({
        weight: 3,
        opacity: 1,
        color: 'silver',
        dashArray: ''
    });
    if (!L.Browser.ie && !L.Browser.opera && !L.Browser.edge) {
        layer.bringToFront();
    }
}

function resetPollingDistrictHighlight(e) {
    // DMFIXME: Better way than needing global?
    g_pollingGeoJsonLayer.resetStyle(e.target);
    g_pollingGeoJsonLayer.bringToBack();
}

function zoomToPollingDistrictFeature(e) {
    // DMFIXME: Better way than needing global?
    // DMFIXME: Better way than dynamic HTML
    var party = g_selectedParty;
    var round = g_selectedRound;
    var popupString = "";
    if (e.target.feature.properties["BALLOT_BOXES"] === undefined ||
        e.target.feature.properties["BALLOT_BOXES"] === null) {
        return;
    }
    var ballotBoxesLength = e.target.feature.properties["BALLOT_BOXES"].length;
    for (var i = 0; i < ballotBoxesLength; i++) {
        var box = e.target.feature.properties["BALLOT_BOXES"][i];
        var boxPercentageAtRound = Math.floor(g_resultsByBox[box].PartyVotesAsPercentage[party][round]);
        popupString +=  '<p>' + 'Box: ' + box + ', ' + boxPercentageAtRound.toString() + '%' + '</p>';
    }

    var popup = L.popup()
        .setLatLng(e.latlng)
        .setContent('<p>' + popupString.toString() + '</p>')
        .openOn(g_map);

    g_map.openPopup(popup);
}

function makeLegend(map)
{
    // DMFIXME: Better way than needing global?
    // DMFIXME: Better way that HTML on the fly?
    var party = g_selectedParty;
    var minMaxStep = heatmapMinMaxStepSize(party);

    var div = L.DomUtil.create('div', 'info legend');
    var grades = [];
    grades[0] = 0;
    for (var j=1; j < (g_heatmapAllPartyColors[party].length - 1); j++) {
        grades[j] = minMaxStep.minPercentage + ((j - 1) * minMaxStep.stepSizePercentage);
    }
    grades[g_heatmapAllPartyColors[party].length - 1] = minMaxStep.maxPercentage;
    var labels = [];
    var from, to;

    for (var i = 0; i < grades.length; i++) {
        from = grades[i];
        to = grades[i + 1];

        labels.push(
            '<i style="background:' + getColorOpacityFromPercentage(party, from)[0] + '"></i> ' +
            from + (to ? '&ndash;' + to : '+'));
    }

    div.innerHTML = labels.join('<br>');
    return div;
}

function redrawLayerAndLegend() {
    // DMFIXME: Better way than needing global?
    // DMFIXME: Find a better way to get redrawing on change, this has duplicate logic
    g_pollingGeoJsonLayer.eachLayer(function(layer) {
        layer.setStyle(styleForPollingDistrictFeature(layer.feature));
    });

    g_map.removeControl(legend);
    legend = L.control({position: 'bottomright'});
    legend.onAdd = function (map) {
        return makeLegend(map);
    };
    legend.addTo(g_map);
}
