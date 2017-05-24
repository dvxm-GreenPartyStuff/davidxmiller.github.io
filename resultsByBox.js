
// Polling Place ->(address to box mapping)-> Box Number -> Results by candidate -> (name to party mapping) -> Results by party


// DAVEM: Do this offline and upadte the geojson with ballot box number as could be some ambiguity.
// Note that geojson boxes will be an area as may have >1 box
var ballotBoxToPollingPlace = {
    "Lauriston Halls":"159",
    "Lothian Chambers":"160",
    "Waverly Court":"161",
    "Novotel Edinburgh Centre":"162",
    "Novotel Edinburgh Centre":"163",
    "Braidwood Commuinty Centre":"164",
    "The Principal Edinburgh":"165",
    "The Principal Edinburgh":"166",
    "Café Camino":"167",
    "Café Camino":"168",
    "Walpole Hall":"169",
    "Tollcross Primary School":"170",
    "Tollcross Primary School":"171",
    "Apex Haymarket Hotel":"172"
}

var resultsByBox = {
    "159": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [127, 139, 29, 17, 6, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [70, 71, 74, 37, 23, 1]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [15, 39, 78, 64, 16, 6]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [160, 69, 37, 20, 3, 8]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [41, 19, 10, 6, 11, 71]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [2, 11, 23, 24, 50, 13]
            }]
    },
    "160": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [159, 180, 51, 22, 6, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [72, 73, 117, 65, 26, 8]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [31, 56, 103, 9, 5, 24, 3]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [187, 108, 40, 22, 14, 10]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [62, 17, 18, 16, 18, 95]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [4, 10, 33, 28, 70, 27]
            }]
    },
    "161": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [58, 109, 24, 10, 6, 2]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [46, 45, 55, 26, 15, 1]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [12, 42, 58, 35, 13, 2]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [110, 30, 22, 11, 7, 14]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [64, 10, 8, 8, 13, 41]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [2, 8, 19, 24, 28, 16]
            }]
    },
    "162": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [151, 103, 35, 13, 8, 0]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [68, 73, 97, 35, 12, 2]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [23, 56, 82, 61, 15, 4]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [101, 83, 29, 28, 9, 12]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [42, 14, 15, 11, 23, 57]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [1, 8, 23, 22, 47, 26]
            }]
    },
    "163": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [134, 125, 36, 16, 5, 3]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [61, 85, 95, 25, 14, 1]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [28, 47, 76, 94, 13, 2]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [101, 65, 56, 23, 8, 6]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [51, 11, 8, 12, 16, 74]
            },
            {
                "Candidate": "",
                "Party": "Other",
                "Votes": [0, 5, 14, 28, 63, 16]
            }]
    },
    "164": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [48, 53, 23, 7, 2, 2]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [43, 31, 31, 23, 9, 2]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [2, 20, 30, 32, 14, 3]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [85, 41, 8, 5, 4, 3]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [10, 6, 10, 2, 16, 42]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [4, 4, 24, 15, 27, 12]
            }]
    },
    "165": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [69, 136, 67, 21, 13, 0]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [46, 107, 119, 46, 21, 3]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [59, 169, 103, 62, 7, 0]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [112, 41, 23, 20, 4, 29]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [321, 31, 16, 13, 18, 48]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [3, 11, 31, 28, 43, 15]
            }]
    },
    "166": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [87, 133, 59, 29, 20, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [52, 74, 115, 54, 25, 2]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [44, 149, 107, 47, 11, 0]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [127, 56, 32, 17, 10, 32]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [266, 27, 18, 4, 18, 52]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [3, 16, 21, 36, 40, 25]
            }]
    },
    "167": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [104, 148, 44, 23, 11, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [73, 78, 99, 44, 19, 5]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [41, 114, 89, 69, 7, 5]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [123, 62, 36, 19, 8, 22]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [194, 23, 17, 7, 23, 48]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [3, 6, 30, 28, 45, 19]
            }]
    },
    "168": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [116, 134, 49, 21, 5, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [59, 70, 77, 49, 22, 2]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [34, 87, 96, 49, 13, 4]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [111, 63, 39, 24, 11, 14]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [118, 15, 16, 13, 17, 50]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [0, 6, 25, 21, 40, 28]
            }]
    },
    "169": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [47, 84, 43, 29, 16, 1]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [51, 59, 83, 25, 13, 1]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [40, 114, 72, 29, 4, 0]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [66, 29, 23, 11, 11, 28]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [199, 33, 16, 10, 9, 23]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [2, 10, 16, 18, 32, 23]
            }]
    },
    "170": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [144, 116, 48, 22, 7, 2]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [80, 77, 104, 39, 19, 5]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [32, 86, 82, 72, 6, 3]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [123, 79, 38, 25, 11, 16]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [87, 26, 22, 9, 22, 59]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [1, 12, 23, 22, 53, 16]
            }]
    },
    "171": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [172, 127, 38, 17, 7, 0]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [57, 85, 104, 44, 19, 4]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [15, 68, 87, 78, 16, 2]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [138, 100, 50, 22, 13, 10]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [58, 10, 14, 16, 16, 72]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [3, 4, 29, 20, 58, 27]
            }]
    },
    "172": {
        "Results": [
            {
                "Candidate": "Claire MILLER",
                "Party": "Green",
                "Votes": [92, 160, 86, 48, 19, 3]
            },
            {
                "Candidate": "Karen DORAN",
                "Party": "Labour",
                "Votes": [78, 101, 146, 67, 26, 5]
            },
            {
                "Candidate": "David STEVENS",
                "Party": "LibDem",
                "Votes": [107, 212, 107, 61, 14, 3]
            },
            {
                "Candidate": "Alasdair RANKIN",
                "Party": "SNP",
                "Votes": [152, 54, 44, 27, 17, 44]
            },
            {
                "Candidate": "Jo MOWAT",
                "Party": "Tory",
                "Votes": [280, 54, 29, 17, 24, 65]
            },
            {
                "Candidate": "Peter SIDOR",
                "Party": "Other",
                "Votes": [3, 10, 34, 33, 74, 32]
            }]
    },
    "65": {
        "Results": [
            {
                "Candidate": "Nigel BAGSHAW",
                "Party": "Green",
                "Votes": [64, 94, 47, 20, 6, 3, 6, 1]
            },
            {
                "Candidate": "Gavin BARRIE",
                "Party": "SNP",
                "Votes": [100, 53, 19, 12, 4, 3, 3, 13]
            },
            {
                "Candidate": "James DALGLEISH",
                "Party": "Labour",
                "Votes": [69, 37, 48, 39, 12, 7, 2, 2]
            },
            {
                "Candidate": "Tom LAIRD",
                "Party": "Other",
                "Votes": [0, 3, 10, 14, 23, 25, 5, 5]
            },
            {
                "Candidate": "Max MITCHELL",
                "Party": "Tory",
                "Votes": [40, 110, 12, 10, 7, 10, 23, 8]
            },
            {
                "Candidate": "Hal OSLER",
                "Party": "LibDem",
                "Votes": [57, 47, 75, 26, 16, 4, 4, 2]
            },
            {
                "Candidate": "Iain WHYTE",
                "Party": "Tory",
                "Votes": [114, 43, 18, 12, 4, 4, 12, 24]
            },
            {
                "Candidate": "Tina WOOLNOUGH",
                "Party": "Other",
                "Votes": [8, 21, 34, 30, 29, 12, 8, 2]
            }
        ]
    },
    "66": {
        "Results": [{"Candidates": "Nigel BAGSHAW", "Party": "Green", "Votes": [34, 69, 43, 7, 7, 6, 4, 0]},
            {"Candidates": "Gavin BARRIE", "Party": "SNP", "Votes": [97, 33, 15, 4, 1, 2, 2, 7]},
            {"Candidates": "James DALGLEISH", "Party": "Labour", "Votes": [47, 34, 30, 32, 13, 6, 1, 0]},
            {"Candidates": "Tom LAIRD", "Party": "Other", "Votes": [1, 3, 5, 9, 15, 17, 5, 4]},
            {"Candidates": "Max MITCHELL", "Party": "Tory", "Votes": [24, 78, 13, 5, 7, 5, 20, 6]},
            {"Candidates": "Hal OSLER", "Party": "LibDem", "Votes": [34, 34, 56, 25, 12, 5, 1, 0]},
            {"Candidates": "Iain  WHYTE", "Party": "Tory", "Votes": [82, 34, 10, 5, 2, 0, 13, 21]},
            {"Candidates": "Tina WOOLNOUGH", "Party": "Other", "Votes": [5, 11, 34, 25, 11, 14, 2, 8]}]
    },
    "67": {
        "Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [115,140,66,26,14,12,9,2] },
            { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [95,58,37,22,7,4,7,27] },
            { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [100,59,70,60,24,13,8,1] },
            { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [0,6,14,18,32,34,11,12] },
            { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [137,51,25,12,4,16,34,14] },
            { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [98,84,100,63,27,3,1,0] },
            { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [27,124,40,16,7,5,26,29] },
            { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [9,15,66,48,39,24,2,6]}]
    },
    "68": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [114,127,57,30,5,3,5,0] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [115,60,26,21,3,3,6,11] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [78,60,84,43,15,13,1,3] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,4,15,21,27,20,11,4] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [150,53,20,7,4,10,17,19] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [79,77,117,52,19,4,1,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [32,140,29,10,5,7,26,18] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [7,13,41,39,24,23,2,7]}]},
    "69": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [81,117,58,26,10,4,6,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [122,40,34,18,7,5,4,16] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [51,53,74,46,20,16,3,2] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [6,2,21,20,19,17,7,7] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [190,61,27,10,11,7,23,8] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [86,78,90,45,20,7,1,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [42,178,35,8,7,10,10,20] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [17,26,75,48,15,9,10,4] }]},
    "70": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [106,164,51,19,7,4,8,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [121,51,38,21,4,5,5,10] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [80,59,103,42,16,9,2,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [4,5,15,12,30,32,8,4] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [136,52,23,13,5,9,39,9] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [92,63,97,59,12,6,1,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [26,125,30,14,8,7,15,41] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [4,20,31,36,39,20,3,11] }]},
    "71": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [143,160,56,22,3,3,4,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [152,77,34,19,6,7,7,11] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [80,51,110,52,22,14,2,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,4,11,20,22,28,7,10] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [106,46,18,12,11,8,31,14] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [70,77,121,66,22,3,1,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [31,105,20,12,7,7,18,33] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [6,21,40,37,26,16,8,6] }]},
    "72": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [120,153,52,20,8,0,8,2] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [125,54,47,17,11,4,2,12] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [75,68,76,45,15,17,4,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,12,23,16,21,33,7,9] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [114,47,15,11,6,9,45,11] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [94,69,95,44,25,8,1,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [25,100,31,14,9,8,13,43] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [4,12,36,48,39,18,8,2] }]},
    "73": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [92,91,27,10,6,2,3,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [85,50,19,17,1,4,0,5] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [38,40,50,38,10,13,0,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [2,0,5,13,19,14,2,6] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [52,16,9,4,8,7,27,6] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [39,49,75,40,8,3,1,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [10,47,12,6,2,8,11,22] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [1,4,30,11,29,9,5,7] }]},
    "74": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [68,73,39,14,6,2,5,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [65,36,18,12,3,4,5,10] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [31,33,39,36,14,16,0,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [2,2,10,7,12,15,10,8] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [130,45,10,6,4,4,19,8] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [55,47,73,37,13,0,3,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [34,119,24,10,6,6,7,15] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [11,14,41,28,16,11,1,4] }]},
    "75": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [94,115,67,30,8,4,5,2] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [115,59,38,15,10,7,3,12] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [92,66,70,49,17,13,2,2] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,1,9,21,19,23,11,12] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [154,70,24,5,8,14,29,10] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [106,72,128,33,17,2,2,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [46,153,31,13,11,10,16,22] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [9,18,41,46,27,16,7,8] }]},
    "76": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [91,129,59,17,7,4,5,0] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [116,45,33,24,12,2,3,15] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [98,44,72,54,11,14,2,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,7,10,22,15,26,13,8] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [161,71,18,9,6,9,35,9] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [81,85,122,39,20,3,0,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [63,152,22,8,8,16,10,31] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [3,19,59,32,30,14,7,10] }]},
    "77": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [62,100,55,22,11,2,9,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [87,43,27,13,4,5,1,14] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [39,31,72,43,24,11,5,2] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [0,3,10,15,18,20,10,7] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [32,176,44,13,4,18,19,6] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [112,81,115,39,15,3,2,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [202,77,24,12,4,5,15,17] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [40,28,63,41,20,10,5,10] }]},
    "78": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [44,99,42,24,11,2,1,2] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [98,26,28,13,4,3,7,5] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [34,36,54,33,18,8,2,1] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [0,4,13,16,9,14,3,4] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [48,169,29,8,7,4,15,2] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [99,54,94,38,9,7,1,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [187,73,20,11,3,1,3,13] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [33,39,72,27,16,10,2,3] }]},
    "79": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [5,50,33,18,6,2,3,3] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [64,14,8,5,2,2,2,8] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [30,23,28,24,14,5,5,2] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [0,4,9,3,10,11,4,4] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [23,116,23,8,1,4,10,4] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [95,44,62,16,6,2,0,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [118,40,16,5,5,3,4,9] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [7,17,43,31,10,7,4,2] }]},
    "80": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [19,69,49,32,13,5,6,0] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [64,20,13,9,4,2,3,21] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [19,23,51,43,14,12,6,1] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,2,7,13,17,15,8,8] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [54,157,60,25,13,9,17,3] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [193,63,87,31,10,4,0,0] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [150,110,43,12,4,8,9,16] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [36,59,72,48,18,6,2,1] }]},
    "81": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [18,55,37,21,7,8,20,1] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [58,22,11,8,4,3,5,26] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [16,28,37,35,19,13,3,1] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [1,1,6,16,17,21,8,6] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [50,163,50,26,6,9,11,7] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [169,54,101,22,9,4,2,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [157,104,47,10,9,2,9,12] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [35,45,60,43,17,7,6,5] }]},
    "82": {"Results" : [ { "Candidate" : "Nigel BAGSHAW","Party" : "Green","Votes" : [22,63,29,5,3,3,1,0] },
        { "Candidate" : "Gavin BARRIE","Party" : "SNP","Votes" : [143,24,10,7,0,3,1,4] },
        { "Candidate" : "James DALGLEISH","Party" : "Labour","Votes" : [103,49,31,10,10,4,0,0] },
        { "Candidate" : "Tom LAIRD","Party" : "Other","Votes" : [3,3,15,18,9,2,3,0] },
        { "Candidate" : "Max MITCHELL","Party" : "Tory","Votes" : [30,40,9,4,3,7,14,6] },
        { "Candidate" : "Hal OSLER","Party" : "LibDem","Votes" : [25,22,34,11,9,8,2,1] },
        { "Candidate" : "Iain  WHYTE","Party" : "Tory","Votes" : [37,26,7,7,4,2,9,14] },
        { "Candidate" : "Tina WOOLNOUGH","Party" : "Other","Votes" : [2,13,23,10,7,5,0,2] }]},
    "126": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [62,61,28,9,6,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [43,7,6,3,10,35] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [68,43,18,7,4,10] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [13,37,45,24,8,0] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,7,18,19,20,7] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [33,35,36,24,15,1] }]},
    "127": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [42,83,30,10,6,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [135,17,21,6,7,21] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [84,25,15,2,6,11] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [26,67,44,22,6,3] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,8,32,16,14,5] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [52,54,48,15,10,5] }]},
    "128": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [91,114,51,13,7,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [98,23,21,4,9,54] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [138,59,21,9,8,22] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [27,54,60,45,16,2] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [0,22,43,33,42,11] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [85,77,59,23,26,5] }]},
    "129": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [103,133,42,17,9,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [97,23,25,17,10,57] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [164,59,25,6,6,22] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [16,63,80,50,24,0] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,16,43,32,38,22] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [111,80,66,19,36,8] }]},
    "130": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [127,158,44,7,6,2] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [92,22,15,10,15,69] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [167,76,37,16,5,17] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [19,57,95,45,21,3] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [9,17,47,47,43,12] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [88,87,74,32,30,2] }]},
    "131": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [342,128,41,11,11,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [93,36,32,10,18,81] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [84,141,71,28,12,22] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [23,107,117,75,19,5] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,16,44,53,74,16] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [96,131,120,47,23,7] }]},
    "132": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [234,115,34,11,6,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [55,20,14,12,15,102] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [93,88,35,26,22,21] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [24,73,107,68,22,2] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [6,26,41,39,76,13] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [56,98,108,49,23,1] }]},
    "133": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [247,104,33,9,8,1] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [66,26,19,7,10,99] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [75,108,43,21,14,21] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [18,76,98,72,25,0] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [4,18,49,44,59,9] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [53,90,100,34,32,1] }]},
    "134": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [181,140,23,13,9,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [43,21,14,9,15,77] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [125,91,39,18,5,19] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [25,54,96,59,21,1] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,10,41,38,63,12] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [57,70,98,37,22,4] }]},
    "135": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [147,125,42,7,4,0] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [38,19,18,7,10,75] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [130,86,26,15,7,12] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [16,58,81,46,23,3] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [8,9,40,36,45,8] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [50,56,85,39,27,0] }]},
    "136": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [173,149,53,10,11,1] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [265,60,29,14,15,44] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [107,65,31,14,7,29] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [36,120,117,46,12,0] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [3,13,42,44,36,14] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [81,100,81,34,30,4] }]},
    "137": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [214,160,55,29,21,1] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [402,86,32,14,7,35] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [112,75,41,15,17,47] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [34,165,144,52,16,1] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [0,22,56,38,42,18] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [95,130,115,35,27,6] }]},
    "138": {"Results" : [ { "Candidate" : "Gavin CORBETT","Party" : "Green","Votes" : [79,142,67,35,27,5] },
        { "Candidate" : "Andrew JOHNSTON","Party" : "Tory","Votes" : [380,31,20,11,9,42] },
        { "Candidate" : "David KEY","Party" : "SNP","Votes" : [102,43,23,8,15,54] },
        { "Candidate" : "Jenni LANG","Party" : "LibDem","Votes" : [36,183,114,47,18,1] },
        { "Candidate" : "Rojan SUBRAMANI","Party" : "Other","Votes" : [2,18,51,56,46,17] },
        { "Candidate" : "Anne WIMBERLEY","Party" : "Labour","Votes" : [62,104,110,39,31,3] }]},
    "191": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [149,160,58,20,1] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [24,73,124,86,4] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [161,88,51,25,32] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [118,105,100,45,6] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [78,24,17,20,119] }]},
    "192": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [107,163,56,29,8] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [26,70,110,84,8] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [181,86,42,23,20] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [106,68,106,56,12] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [70,25,25,13,123] }]},
    "193": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [166,230,60,25,12] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [29,56,169,110,6] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [223,127,53,14,34] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [127,112,133,93,10] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [103,28,26,17,150] }]},
    "194": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [60,111,68,24,9] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [25,89,81,50,7] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [150,47,26,15,21] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [64,68,73,50,7] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [106,25,17,10,78] }]},
    "195": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [86,140,57,31,5] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [25,51,91,63,3] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [179,72,36,11,14] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [90,70,65,47,3] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [53,21,13,5,88] }]},
    "196": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [113,139,27,11,1] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [20,32,71,57,1] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [155,83,18,16,5] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [70,53,92,40,2] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [36,12,6,5,88] }]},
    "197": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [111,152,53,22,7] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [31,55,106,75,7] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [163,85,42,14,26] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [76,64,97,66,11] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [63,22,19,17,110] }]},
    "198": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [141,162,60,16,5] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [17,66,125,84,5] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [180,106,43,18,18] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [91,89,102,70,7] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [58,19,18,13,109] }]},
    "199": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [90,125,59,20,7] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [20,55,102,74,6] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [157,65,32,20,24] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [54,77,87,50,5] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [56,18,11,8,107] }]},
    "200": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [104,143,52,16,7] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [15,52,94,70,8] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [187,94,33,12,15] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [131,74,81,52,4] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [47,30,18,9,95] }]},
    "202": {"Results" : [ { "Candidate" : "Chas BOOTH","Party" : "Green","Votes" : [95,148,52,11,4] },
        { "Candidate" : "Sanne DIJKSTRA-DOWNIE","Party" : "LibDem","Votes" : [17,52,89,52,5] },
        { "Candidate" : "Adam MCVEY","Party" : "SNP","Votes" : [170,73,23,11,13] },
        { "Candidate" : "Gordon John MUNRO","Party" : "Labour","Votes" : [101,60,67,52,1] },
        { "Candidate" : "Paul PENMAN","Party" : "Tory","Votes" : [56,18,9,11,79] }]},
    "49": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [67,78,21,6,1,2,5,1] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [33,8,8,4,5,2,5,16] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [71,33,19,13,9,7,6,0] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [84,54,17,8,4,3,2,4] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [26,19,53,17,9,7,0,0] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [14,54,23,18,14,9,5,2] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [3,11,14,17,12,11,5,3] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [8,13,11,14,10,4,7,4] }]},
    "50": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [82,76,17,6,8,5,2,4] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [42,5,14,4,1,7,5,33] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [54,41,26,14,10,13,10,0] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [70,71,28,8,8,6,4,1] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [32,25,50,3,13,7,3,1] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [21,38,26,22,13,11,7,4] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [6,10,19,26,11,7,12,6] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [8,9,13,27,17,9,14,6] }]},
    "51": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [114,72,25,7,8,3,2,0] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [77,9,16,7,3,1,2,34] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [73,30,36,15,17,15,10,0] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [60,107,29,9,3,6,3,3] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [38,18,69,10,10,4,6,1] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [13,67,24,21,21,17,5,2] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [15,25,20,35,5,11,17,3] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [14,17,16,22,15,9,13,9] }]},
    "52": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [76,103,14,7,6,3,8,6] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [78,10,13,5,5,12,6,30] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [61,54,31,24,14,13,4,3] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [99,67,22,10,6,3,9,8] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [27,20,92,14,17,14,2,2] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [38,66,37,27,13,7,10,1] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [8,19,29,27,16,15,17,5] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [16,19,19,32,16,10,15,7] }]},
    "53": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [76,103,14,7,6,3,8,6] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [78,10,13,5,5,12,6,30] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [61,54,31,24,14,13,4,3] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [99,67,22,10,6,3,9,8] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [27,20,92,14,17,14,2,2] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [38,66,37,27,13,7,10,1] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [8,19,29,27,16,15,17,5] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [16,19,19,32,16,10,15,7] }]},
    "54": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [80,85,23,27,6,11,2,11] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [77,9,11,9,10,9,8,54] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [54,48,40,29,27,19,15,1] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [78,77,36,19,10,7,17,2] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [54,29,96,21,16,11,3,2] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [31,49,39,29,39,24,9,4] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [4,20,26,39,19,16,29,9] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [25,44,33,41,18,21,20,9] }]},
    "55": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [89,108,31,10,8,4,2,9] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [47,9,17,15,10,5,8,44] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [78,57,34,20,15,9,20,3] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [113,81,30,15,4,3,10,2] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [47,24,80,14,23,6,3,4] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [41,68,21,27,14,28,6,6] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [4,15,23,32,18,24,21,5] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [6,11,23,36,26,16,20,6] }]},
    "56": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [95,147,28,19,9,9,10,2] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [135,27,23,7,5,5,4,62] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [103,63,43,32,22,17,22,1] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [141,94,36,15,11,7,6,8] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [59,56,131,24,9,14,3,2] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [25,80,49,41,44,22,5,3] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [5,30,33,38,16,21,26,8] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [65,52,48,46,17,19,17,2] }]},
    "57": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [90,114,36,17,9,3,9,5] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [184,24,19,14,4,6,5,45] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [90,62,59,36,25,17,8,1] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [107,89,42,13,11,5,7,9] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [74,60,124,20,24,14,0,0] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [25,83,53,58,30,17,5,0] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [12,36,38,36,23,18,36,3] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [57,65,48,47,21,24,14,2] }]},
    "58": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [93,54,24,14,6,8,7,11] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [207,31,18,10,4,4,4,55] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [76,68,54,41,38,11,14,1] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [21,91,33,25,9,7,15,4] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [68,52,93,30,18,17,1,2] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [17,66,66,45,25,33,9,3] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [6,27,40,37,26,13,29,7] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [66,90,62,45,24,17,10,3] }]},
    "59": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [93,54,24,14,6,8,7,11] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [207,31,18,10,4,4,4,55] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [76,68,54,41,38,11,14,1] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [21,91,33,25,9,7,15,4] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [68,52,93,30,18,17,1,2] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [17,66,66,45,25,33,9,3] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [6,27,40,37,26,13,29,7] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [66,90,62,45,24,17,10,3] }]},
    "60": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [74,34,18,6,7,3,10,12] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [257,32,16,7,3,6,3,38] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [47,66,67,39,21,12,10,0] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [12,58,25,12,9,13,12,7] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [53,47,71,28,16,10,6,2] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [13,51,71,46,25,20,6,2] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [7,25,18,35,24,13,17,8] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [68,126,57,36,18,14,11,2] }]},
    "61": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [182,81,33,18,13,10,15,13] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [136,15,21,12,5,11,12,112] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [79,58,60,52,41,41,38,2] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [27,170,63,27,21,21,17,12] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [116,69,165,44,25,10,3,1] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [24,84,61,66,57,51,13,1] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [11,29,34,51,49,26,59,12] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [72,78,51,80,43,39,24,6] }]},
    "62": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [141,68,28,18,11,6,13,7] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [168,20,18,8,6,4,10,70] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [89,77,71,37,29,24,14,3] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [32,133,40,22,19,12,9,7] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [87,66,127,27,16,10,6,1] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [28,86,67,45,36,26,9,0] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [10,33,26,36,22,23,33,6] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [62,75,52,66,31,23,13,3] }]},
    "63": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [68,24,23,12,5,2,7,8] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [130,24,13,9,3,6,3,32] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [94,70,32,22,19,9,6,2] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [9,59,33,9,6,10,8,4] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [64,45,83,22,9,6,1,1] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [20,72,45,29,21,18,7,0] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [9,16,26,21,25,10,18,5] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [38,81,57,43,16,10,8,1] }]},
    "64": {"Results" : [ { "Candidate" : "Eleanor BIRD","Party" : "SNP","Votes" : [68,26,12,14,6,4,12,4] },
        { "Candidate" : "Jim CAMPBELL","Party" : "Tory","Votes" : [96,7,9,4,4,7,3,36] },
        { "Candidate" : "Cammy DAY","Party" : "Labour","Votes" : [58,38,28,23,14,16,5,0] },
        { "Candidate" : "George GORDON","Party" : "SNP","Votes" : [6,62,22,7,14,2,6,8] },
        { "Candidate" : "Gillian MACKAY","Party" : "Green","Votes" : [49,29,71,16,8,5,1,0] },
        { "Candidate" : "Heather PUGH","Party" : "Labour","Votes" : [4,48,45,25,16,11,8,3] },
        { "Candidate" : "Nicola ROSS","Party" : "Other","Votes" : [3,12,21,17,15,11,18,4] },
        { "Candidate" : "Tim  WIGHT","Party" : "LibDem","Votes" : [27,57,26,36,12,14,8,0] }]},
    "98": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [37,56,58,36,6,3,3,2,2] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [50,82,53,14,8,4,3,3,2] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [55,14,17,8,2,5,3,5,37] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [62,45,62,20,5,6,4,4,2] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [80,23,34,42,6,6,2,1,1] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [18,21,21,16,22,11,15,9,2] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [41,39,23,10,22,20,11,8,0] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [0,7,3,2,16,5,10,26,7] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [33,46,21,16,8,22,19,7,7] }]},
    "99": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [114,84,37,27,10,7,6,5,2] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [58,117,71,14,11,9,9,3,2] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [88,14,12,12,8,5,2,12,60] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [10,25,123,62,15,13,7,7,2] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [136,45,46,74,17,3,2,1,3] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [29,49,37,38,38,17,30,9,0] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [48,81,41,22,36,29,20,6,2] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [2,10,6,6,20,13,11,40,13] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [42,58,58,19,16,38,25,15,6] }]},
    "100": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [123,69,32,26,8,5,8,3,8] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [39,120,60,15,17,7,4,10,1] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [61,9,13,10,8,5,4,12,45] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [7,18,113,52,15,16,16,3,2] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [163,47,45,58,9,6,4,2,1] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [28,37,31,33,35,16,20,3,2] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [66,90,53,11,20,21,20,7,0] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [0,8,7,10,19,15,4,28,11] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [39,73,52,33,17,26,18,13,5] }]},
    "101": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [90,62,37,36,7,7,4,3,2] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [39,114,54,19,17,7,3,3,0] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [54,6,12,8,3,2,1,6,46] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [4,17,100,49,14,18,13,2,1] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [158,39,35,64,3,2,2,1,1] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [19,38,25,26,31,8,25,10,0] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [42,74,38,16,29,20,10,4,0] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [0,4,5,7,12,6,7,32,7] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [33,49,49,16,13,32,17,5,1] }]},
    "102": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [117,51,54,21,15,4,6,3,4] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [38,141,59,20,9,7,5,7,0] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [53,16,12,5,4,3,1,9,59] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [12,25,117,53,11,12,12,4,3] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [162,33,35,69,7,4,4,0,1] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [14,40,24,28,27,22,22,15,2] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [37,60,34,17,37,23,20,5,0] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [7,9,5,5,23,8,15,28,14] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [31,50,43,18,19,40,17,16,1] }]},
    "103": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [119,58,48,26,17,10,8,1,2] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [45,142,55,23,17,12,6,3,1] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [56,12,16,10,6,1,2,20,61] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [4,24,114,55,21,14,14,6,1] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [170,40,45,90,9,5,1,2,1] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [20,39,32,36,41,13,32,7,1] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [46,72,56,15,24,33,27,7,1] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [2,6,4,8,17,20,6,43,21] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [45,68,55,17,20,32,27,16,4] }]},
    "104": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [51,65,35,6,7,0,1,1,6] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [107,56,17,5,0,0,3,4,1] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [40,5,9,5,1,1,3,4,14] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [6,32,93,9,6,4,4,3,0] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [16,13,16,32,6,11,2,2,1] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [6,12,10,6,9,4,8,7,1] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [28,33,21,13,11,8,4,1,0] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [0,1,5,4,5,8,7,6,9] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [26,37,21,10,10,7,4,7,1] }]},
    "105": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [38,63,46,10,7,1,2,1,0] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [114,35,19,9,1,0,1,1,0] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [56,7,10,5,2,3,2,3,22] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [8,35,82,12,11,1,0,0,1] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [13,14,20,23,3,14,4,3,0] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [8,13,13,7,8,9,7,7,2] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [31,43,16,12,8,4,14,3,0] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [0,4,5,6,10,8,4,11,6] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [32,45,14,11,8,7,6,9,6] }]},
    "106": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [53,74,72,14,5,2,7,4,9] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [40,108,70,10,2,5,4,12,1] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [115,11,26,3,8,2,1,5,34] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [121,22,65,9,4,5,11,4,5] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [24,22,37,55,6,15,6,3,1] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [15,43,25,29,17,15,12,7,0] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [51,83,31,20,13,12,6,5,0] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [1,3,9,9,25,5,9,15,7] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [59,61,34,19,16,10,8,6,3] }]},
    "107": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [35,82,67,14,4,2,5,3,4] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [37,82,81,13,5,2,2,8,1] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [85,10,17,6,3,2,1,4,34] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [133,30,39,17,4,7,6,0,4] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [16,18,18,59,17,9,5,1,0] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [15,20,21,16,15,16,9,10,0] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [54,48,24,11,16,9,18,2,0] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [4,4,8,3,18,11,6,13,7] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [44,55,19,13,12,17,8,15,3] }]},
    "108": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [20,44,33,8,4,2,3,0,1] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [82,33,12,7,2,3,1,1,1] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [66,6,7,6,2,5,0,3,15] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [4,25,60,10,2,1,4,2,0] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [18,10,15,26,3,3,2,2,1] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [9,14,20,9,8,3,5,4,1] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [23,56,16,11,5,4,4,4,0] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [1,7,3,4,11,8,1,7,3] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [55,32,22,8,9,5,6,3,1] }]},
    "109": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [71,107,69,17,12,4,10,4,7] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [76,98,80,17,7,4,3,15,1] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [178,17,26,12,1,7,3,3,48] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [103,28,96,22,16,8,8,1,6] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [31,33,31,83,11,9,7,5,4] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [20,47,33,25,31,21,11,14,1] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [88,73,31,21,20,16,25,6,1] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [4,6,10,9,22,19,9,22,10] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [42,104,40,22,23,19,18,18,4] }]},
    "110": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [47,93,54,9,5,7,1,4,0] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [153,62,23,8,2,1,6,0,0] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [69,8,7,7,3,2,4,3,24] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [14,43,120,15,7,5,1,3,0] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [23,21,21,51,6,5,3,5,2] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [13,29,27,8,13,9,11,6,3] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [49,50,14,9,13,10,6,3,0] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [0,6,11,8,9,1,8,13,9] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [48,45,31,5,8,12,6,7,3] }]},
    "111": {"Results" : [ { "Candidate" : "Denis DIXON","Party" : "SNP","Votes" : [49,114,73,11,8,2,4,1,7] },
        { "Candidate" : "Catherine FULLERTON","Party" : "SNP","Votes" : [186,66,24,8,4,4,3,8,0] },
        { "Candidate" : "Ashley GRACZYK","Party" : "Tory","Votes" : [69,9,16,11,2,4,4,1,42] },
        { "Candidate" : "Simon HAYTER","Party" : "SNP","Votes" : [7,57,136,23,7,3,7,2,4] },
        { "Candidate" : "Dan HEAP","Party" : "Green","Votes" : [37,26,22,67,17,11,6,6,2] },
        { "Candidate" : "Devin Scott SCOBIE","Party" : "LibDem","Votes" : [29,30,26,27,24,22,9,9,2] },
        { "Candidate" : "Carmel SMITH","Party" : "Labour","Votes" : [43,59,24,18,17,19,19,7,1] },
        { "Candidate" : "Calum STRANGE","Party" : "Other","Votes" : [0,4,10,9,20,11,9,22,6] },
        { "Candidate" : "Donald WILSON","Party" : "Labour","Votes" : [50,53,36,16,13,15,16,16,5] }]},
    "253": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [67,136,114,52,36,16,16] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [136,172,81,35,14,25,8] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [272,94,171,24,20,3,1] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [194,142,72,94,39,13,2] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [60,25,22,20,12,7,132] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [15,32,53,98,38,100,6] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [10,95,79,64,105,60,8] }]},
    "254": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [76,137,91,56,35,22,19] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [133,149,69,48,27,27,13] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [206,93,156,30,25,7,2] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [181,114,74,81,37,19,1] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [57,25,18,11,13,15,174] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [14,33,59,95,44,102,9] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [10,79,70,60,107,65,11] }]},
    "255": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [76,137,91,56,35,22,19] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [133,149,69,48,27,27,13] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [206,93,156,30,25,7,2] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [181,114,74,81,37,19,1] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [57,25,18,11,13,15,174] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [14,33,59,95,44,102,9] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [10,79,70,60,107,65,11] }]},
    "256": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [43,93,48,20,18,11,20] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [100,83,31,16,9,30,6] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [88,50,114,30,20,3,1] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [123,77,54,46,26,14,1] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [198,25,19,9,13,4,68] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [19,69,56,77,25,31,2] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [11,88,62,47,39,32,7] }]},
    "257": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [35,76,51,22,15,19,20] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [72,67,41,26,12,22,11] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [109,77,96,25,28,3,0] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [156,98,42,54,18,7,0] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [103,16,21,10,11,5,70] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [15,40,53,63,36,42,5] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [27,88,63,30,39,35,4] }]},
    "258": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [47,65,66,27,19,12,12] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [61,106,58,24,10,15,2] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [136,75,84,19,14,3,1] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [155,98,45,55,22,4,1] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [96,24,8,7,7,3,87] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [19,43,63,57,16,65,3] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [21,56,59,47,61,30,3] }]},
    "259": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [61,91,42,20,24,13,14] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [86,105,47,14,10,26,7] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [116,50,111,36,13,3,2] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [147,71,57,55,23,11,1] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [70,26,23,13,9,3,85] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [12,50,48,68,24,47,2] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [28,70,59,36,55,32,7] }]},
    "260": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [185,86,22,16,7,9,12] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [78,164,28,12,7,15,8] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [31,25,120,19,26,5,8] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [121,71,61,40,20,14,0] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [134,11,20,11,3,8,51] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [10,54,36,51,20,37,5] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [43,102,43,38,40,14,7] }]},
    "261": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [52,113,41,24,9,8,15] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [126,79,34,16,11,20,3] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [71,52,111,23,21,3,5] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [87,118,61,37,25,8,4] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [145,18,14,13,7,11,61] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [14,47,48,64,28,21,7] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [77,72,56,35,31,35,3] }]},
    "262": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [60,71,17,8,4,5,8] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [74,64,20,7,2,9,5] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [23,16,74,12,15,3,1] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [64,44,21,26,18,7,1] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [41,10,14,5,5,5,39] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [4,10,20,32,9,28,4] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [38,51,20,17,23,11,6] }]},
    "268": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [60,72,18,8,5,6,8] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [74,64,20,8,3,10,5] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [24,17,75,12,15,3,2] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [64,44,22,27,18,8,1] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [41,10,14,6,5,6,39] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [5,11,21,33,9,29,4] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [38,51,20,18,24,12,6] }]},
    "263": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [119,42,21,5,3,5,3] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [44,106,34,6,1,2,2] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [39,23,68,10,12,2,3] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [33,43,25,39,19,7,2] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [29,6,10,5,11,7,32] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [6,10,16,36,10,23,7] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [32,32,20,17,23,19,8] }]},
    "264": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [139,70,23,7,5,3,6] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [59,137,25,11,7,10,1] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [34,17,97,17,14,2,7] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [58,41,37,32,21,13,0] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [23,7,10,6,8,10,47] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [8,13,21,38,19,26,6] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [36,43,25,21,27,22,10] }]},
    "265": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [125,37,27,4,5,6,8] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [33,114,20,20,4,8,2] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [24,9,85,12,25,8,7] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [44,47,27,30,25,9,2] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [21,6,11,9,14,13,55] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [2,15,19,39,9,42,10] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [38,33,19,16,25,17,14] }]},
    "266": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [53,77,23,9,7,11,7] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [79,64,20,13,4,7,3] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [23,21,74,11,11,9,4] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [49,51,29,30,17,6,1] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [28,1,10,2,11,5,42] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [6,11,13,31,7,25,6] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [52,42,25,18,27,11,5] }]},
    "267": {"Results" : [ { "Candidate" : "Mike BRIDGMAN","Party" : "SNP","Votes" : [78,56,17,5,3,1,4] },
        { "Candidate" : "KATE CAMPBELL","Party" : "SNP","Votes" : [55,63,22,7,2,4,1] },
        { "Candidate" : "MARY CAMPBELL","Party" : "Green","Votes" : [15,20,45,12,10,2,2] },
        { "Candidate" : "Maureen CHILD","Party" : "Labour","Votes" : [46,49,14,19,11,5,3] },
        { "Candidate" : "Callum LAIDLAW","Party" : "Tory","Votes" : [16,5,7,2,4,1,23] },
        { "Candidate" : "Callum LESLIE","Party" : "LibDem","Votes" : [4,7,12,11,4,19,0] },
        { "Candidate" : "David WALKER","Party" : "Labour","Votes" : [55,27,17,9,9,9,3] }]}
}

// For each of the ballot boxes calculate the total number of votes for each round and attach the totals to the object
function calculateBallotBoxCandidateTotalVotesByRound() {
    for (var box in resultsByBox) {
        if (resultsByBox.hasOwnProperty(box)) {
            var boxDetails = resultsByBox[box.toString()];
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
calculateBallotBoxCandidateTotalVotesByRound();

function calculateBallotBoxPercentageByRound() {

    for (var box in resultsByBox) {
        if (resultsByBox.hasOwnProperty(box)) {
            var boxDetails = resultsByBox[box.toString()];
            boxDetails["PartyVotesAsPercentage"] = {};
            for (var j = 0; j < boxDetails.Results.length; j++) {
                var result = boxDetails.Results[j];
                result["CandidateVotesAsPercentage"] = [];
                if (boxDetails["PartyVotesAsPercentage"][result.Party.toString()] === undefined) {
                    boxDetails["PartyVotesAsPercentage"][result.Party.toString()] = [];
                }
                for (var i = 0; i < result.Votes.length; i++) {
                    if (result.CandidateVotesAsPercentage[i] === undefined) {
                        result.CandidateVotesAsPercentage[i] = 0;
                    }
                    result.CandidateVotesAsPercentage[i] = (result.Votes[i] / boxDetails.CandidateTotalVotesByRound[i]) * 100;
                    if (boxDetails["PartyVotesAsPercentage"][result.Party.toString()][i] === undefined) {
                        boxDetails["PartyVotesAsPercentage"][result.Party.toString()][i] = 0;
                    }
                    boxDetails["PartyVotesAsPercentage"][result.Party.toString()][i] += result.CandidateVotesAsPercentage[i];
                }
            }
        }
    }
}
calculateBallotBoxPercentageByRound();
